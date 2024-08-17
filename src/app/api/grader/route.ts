import { NextResponse, NextRequest } from "next/server";
import { exec } from "child_process";
import fs from "fs";
import path from "path";

type Result = {
    msg: string;
}

export async function POST(req: NextRequest): Promise<NextResponse<Result>> {
    const { code, input, output, mxr, mxm } = await req.json();

    const inpf = path.join(process.cwd(), 'input.txt');
    const outf = path.join(process.cwd(), 'output.txt');
    const progoutf = path.join(process.cwd(), 'prog_output');
    const file = path.join(process.cwd(), 'prog.cpp');
    
    fs.writeFileSync(file, code);
    fs.writeFileSync(inpf, input);
    fs.writeFileSync(outf, output);

    return new Promise((resolve) => {
        exec(`g++ -std=c++17 -O2 -pipe -static -s ${file} -o ${progoutf}`, (cerror) => {
            if (cerror) {
                resolve(NextResponse.json({
                    msg: "Compilation Error"
                }));
                return;
            }

            const timeout = mxr + 100;

            const cmd = `/usr/bin/time -v ${progoutf} < ${inpf}`;
            exec(cmd, { timeout }, (rerror, rstdout, rstderr) => {
                if (rerror) {
                    if (rerror.signal === 'SIGTERM') {
                        resolve(NextResponse.json({
                            msg: "T"
                        }));
                        return;
                    }
                    resolve(NextResponse.json({
                        msg: "E"
                    }));
                    return;
                }

                const timeMatch = rstderr?.match(/User time \(seconds\):\s*([0-9.]+)/);
                const memoryMatch = rstderr?.match(/Maximum resident set size \(kbytes\):\s*(\d+)/);
                let time = timeMatch ? parseFloat(timeMatch[1]) * 1000 : Infinity;
                let mem = memoryMatch ? parseFloat(memoryMatch[1]) : Infinity;
                time = time === Infinity ? Infinity : parseFloat(time.toFixed(2));
                mem = mem === Infinity ? Infinity : parseFloat(mem.toFixed(0));

                const expectedOutput = fs.readFileSync(outf, 'utf-8').trim();
                const passed = (time <= mxr) && (mem <= mxm) && (rstdout.trim() === expectedOutput);

                resolve(
                    NextResponse.json({
                        msg: passed ? "P" : mem > mxm ? "M" : time > mxr ? "T" : "-"
                    })
                )
            });
        });
    });
}