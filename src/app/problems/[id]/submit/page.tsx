'use client';
import React, { useState , Suspense } from 'react'
import Header from '@/components/header'
import '@/styles/global.css'
import '@/styles/problems.css'
import ProblemMenu from '../ProblemMenu'
import CodeMirror from '@uiw/react-codemirror'
import { langs, loadLanguage } from '@uiw/codemirror-extensions-langs'
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';

const Problems = ({ params } : { params: {id: string }}) => {
  const problem_id = params.id

  var contents: string = `#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main() {\n  \n}`;

  const getContents = () => {
    if (!contents) {
      alert('No code submitted')
    }
    console.log(contents)
  }

  loadLanguage('cpp')

  return (
    <div className='width_small'>
      <Header selected = "Problems" username = "PakinDioxide"/>
      <p className='topic'>Problems Name <span className='small_topic'>({problem_id})</span></p>
      <div className='problems_box' style={{height:"600px"}}>
        <Suspense><ProblemMenu problem_id={problem_id} selected='submit'/></Suspense>
        <CodeMirror
          className='submit_code_editor'
          value={contents}
          theme={tokyoNight}
          extensions={[langs.cpp()]}
          onChange={(value) => {
            contents = value
            }
          }
        />
        <button
          className='submit_button'
          onClick={getContents}
          >Submit</button>
      </div>
    </div>
  )
}

export default Problems