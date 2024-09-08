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

    const send = async () => {
      const res = await fetch('https://grader-delta.vercel.app/api/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ problem_id: "sample", code: contents}),

      });
      const result = await res.json();
      console.log(result);
      console.log("HI");
    };

    const getContents = async () => {
      if (!contents.trim()) {
        alert('No code submitted');
        return;
      }
      send();
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