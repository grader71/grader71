import { NextResponse, NextRequest } from "next/server";
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { time } from "console";

type Result = {
    msg: string;
    runtime: string;
    memory: string;
    passed: boolean;
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
        exec(`g++ -std=c++17 -O2 -pipe -static -s ${file} -o ${progoutf}`, (cerror, cstdout, cstderr) => {
            if (cerror) {
                resolve(NextResponse.json({
                    msg: "Compilation Error",
                    runtime: "0",
                    memory: "0",
                    passed: false,
                }));
                return;
            }

            const cmd = `/usr/bin/time -v ${progoutf} < ${inpf}`;
            exec(`/usr/bin/time -v ${progoutf} < ${inpf}`, (rerror, rstdout, rstderr) => {
                if (rerror) {
                    resolve(NextResponse.json({
                        msg: "Runtime Error",
                        runtime: "0",
                        memory: "0",
                        passed: false,
                    }));
                    return;
                }
                
                const timeMatch = rstderr.match(/User time \(seconds\):\s*([0-9.]+)/);
                const memoryMatch = rstderr.match(/Maximum resident set size \(kbytes\):\s*(\d+)/);
                const time = timeMatch ? parseFloat(timeMatch[1]) * 1000 : Infinity;
                const mem = memoryMatch ? parseFloat(memoryMatch[1]) / 1024 : Infinity;
                const passed = (time <= mxr) && (mem <= mxm) && (rstdout.trim() === outf);

                resolve(
                    NextResponse.json({
                        msg: passed ? "Passed" : mem > mxm ? "Memory Limit Exceeded" : time > mxr ? "Time Limit Exceeded" : "Wrong Answer",
                        runtime: `${time}`,
                        memory: `${mem}`,
                        passed: passed,
                    })
                )
            })
        })
    })
}