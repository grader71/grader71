'use client';
import React, { useState , Suspense } from 'react'
import Header from '@/components/header'
import '@/styles/global.css'
import '@/styles/problems.css'
import ProblemMenu from './ProblemMenu'
import { sql } from "@vercel/postgres"

const Problems = ({ params } : { params: {id: string }}) => {
  const problem_id = params.id

  return (
    <div className='width_small'>
      <Header selected = "Problems" username = "PakinDioxide"/>
      <p className='topic'>Problems Name <span className='small_topic'>({problem_id})</span></p>
      <div className='problems_box' style={{height: "932px"}}>
        <Suspense fallback={<div>Loading...</div>}><ProblemMenu problem_id={problem_id} selected=''/></Suspense>
        <iframe
          className='statement_pdf'
          src={`https://docs.google.com/gview?url=https://github.com/grader71/tasks/raw/main/${problem_id}.pdf&embedded=true`}>
        </iframe>
      </div>
    </div>
  )
}

export default Problems
