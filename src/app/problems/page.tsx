'use client';
import React, { useState , Suspense } from 'react'
import Header from '@/components/header'
import '@/styles/global.css'
import '@/styles/problems.css'
import Menu from './menu'
import { ProblemList } from './ProblemList'
import { useSearchParams } from 'next/navigation';

const problems = ProblemList();

const Problems = () => {
  return (
    <div className='width_small'>
      <Header selected = "Problems" username = "PakinDioxide"/>
      <p className='topic'>Problems</p>
      <div className='problems_box' style={{paddingTop: "60px"}}>
        <Suspense><Menu /></Suspense>
        <div className='problems_container'>
          {
            problems.map(item => {
              const searchParams = useSearchParams();
              const level = searchParams.get('level') || '';

              const href = `/problems/${item.id}`
              if (level === '' || item.level == level) {
                return (
                <a className='problem_display' href={href} key={item.id}>
                  <div className="problem_frame">
                    <p style={{fontSize: "20px", marginRight: "20px"}}>{item.name}</p>
                    <p style={{fontSize: "12px"}}>[{item.id}]</p>
                    <p style={{fontSize: "20px", textAlign: "right", flex: 1}}>{item.score}/100</p>
                  </div>
                </a>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Problems