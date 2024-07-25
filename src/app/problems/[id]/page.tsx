'use client';
import React, { useState , Suspense } from 'react'
import Header from '@/components/header'
import '@/styles/global.css'
import '@/styles/problems.css'
import ProblemMenu from './ProblemMenu'

const Problems = ({ params } : { params: {id: string }}) => {
  const problem_id = params.id

  return (
    <div className='width_small'>
      <Header selected = "Problems" username = "PakinDioxide"/>
      <p className='topic'>Problems Name <span className='small_topic'>({problem_id})</span></p>
      <Suspense><ProblemMenu problem_id={problem_id} selected=''/></Suspense>
    </div>
  )
}

export default Problems
