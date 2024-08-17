'use client';
import React, { useState, Suspense } from 'react';
import Header from '@/components/header';
import '@/styles/global.css';
import '@/styles/problems.css';
import CodeMirror from '@uiw/react-codemirror';
import { langs, loadLanguage } from '@uiw/codemirror-extensions-langs';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';

const Run = () => {
    const [contents, setContents] = useState<string>(`#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main() {\n  \n}`);
    const [input, setInput] = useState<string>(`input`);
    const [output, setOutput] = useState<string>(`output`);

    const getContents = async () => {
        if (!contents.trim() || !input.trim() || !output.trim) {
            alert('No code submitted');
            return;
        }
        try {
            const response = await fetch('/api/grader', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code: contents,
                    input: input,
                    output: output,
                    mxr: 1000,
                    mxm: 1024 * 32,
                }),
            });

            const data = await response.json();
            console.log(data.msg);
        } catch (error) {
          console.error('ERROR:', error);
        }
    };

    loadLanguage('cpp');
    return (
      <div className='width_normal'>
        <Header selected="Run" username="PakinDioxide" />
        <p className='topic'>Code Runner</p>
        <div className='problems_box' style={{ height: "1150px" }}>
          <CodeMirror
            className='submit_code_editor'
            value={contents}
            theme={tokyoNight}
            extensions={[langs.cpp()]}
            onChange={(value) => setContents(value)}
          />
          <CodeMirror
            className='submit_input_editor'
            value={input}
            theme={tokyoNight}
            extensions={[langs.cpp()]}
            onChange={(value) => setInput(value)}
          />
          <CodeMirror
            className='submit_output_editor'
            value={output}
            theme={tokyoNight}
            extensions={[langs.cpp()]}
            onChange={(value) => setOutput(value)}
          />
          <button
            className='submit_button'
            onClick={getContents}
          >
            Submit
          </button>
        </div>
      </div>
    );
}

export default Run