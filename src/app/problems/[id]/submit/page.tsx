'use client';
import React, { useState, Suspense } from 'react';
import Header from '@/components/header';
import '@/styles/global.css';
import '@/styles/problems.css';
import ProblemMenu from '../ProblemMenu';
import CodeMirror from '@uiw/react-codemirror';
import { langs, loadLanguage } from '@uiw/codemirror-extensions-langs';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';

const Problems = ({ params }: { params: { id: string } }) => {
  const [contents, setContents] = useState<string>(`#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main() {\n  \n}`);

  const problem_id = params.id;

  const getContents = () => {
    if (!contents.trim()) {
      alert('No code submitted');
      return;
    }
    const send = async () => {
      const res = await fetch('https://grader-delta.vercel.app/api/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ problem_id: problem_id, code: contents}),

      });
      const result = await res.json();
      console.log(result);
    };
  };

  loadLanguage('cpp');

  return (
    <div className='width_small'>
      <Header selected="Problems" username="PakinDioxide" />
      <p className='topic'>Problems Name <span className='small_topic'>({problem_id})</span></p>
      <div className='problems_box' style={{ height: "600px" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProblemMenu problem_id={problem_id} selected='submit' />
        </Suspense>
        <CodeMirror
          className='submit_code_editor'
          value={contents}
          theme={tokyoNight}
          extensions={[langs.cpp()]}
          onChange={(value) => setContents(value)}
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
};

export default Problems;
