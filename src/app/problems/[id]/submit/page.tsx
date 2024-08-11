'use client';
import React, { useState , Suspense } from 'react'
import Header from '@/components/header'
import '@/styles/global.css'
import '@/styles/problems.css'
import ProblemMenu from '../ProblemMenu'
import CodeMirror from '@uiw/react-codemirror'
import { langs, loadLanguage } from '@uiw/codemirror-extensions-langs'
import { tokyoNight } from '@uiw/codemirror-themes-all';

const Problems = ({ params } : { params: {id: string }}) => {
  const problem_id = params.id

  loadLanguage('cpp')

  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    console.log("value:", value);
  }, []);

  return (
    <div className='width_small'>
      <Header selected = "Problems" username = "PakinDioxide"/>
      <p className='topic'>Problems Name <span className='small_topic'>({problem_id})</span></p>
      <div className='problems_box' style={{height:"450px"}}>
        <Suspense><ProblemMenu problem_id={problem_id} selected='submit'/></Suspense>
        <CodeMirror
          className='submit_code_editor'
          value={`#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main() {\n\n}`}
          theme={tokyoNight}
          extensions={[langs.cpp()]}
          onChange={(value, viewUpdate) => {
            console.log(value)
          }}
        />
      </div>
    </div>
  )
}

export default Problems