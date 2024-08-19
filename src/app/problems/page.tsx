'use client';
import React, { useState , Suspense } from 'react'
import Header from '@/components/header'
import '@/styles/global.css'
import '@/styles/problems.css'
import Menu from './menu'

const ProblemList = [
  {
    name: "ชี้(ปิ)ชี้(ปิ)กัน (Pointing)",
    id: "pointing",
    level: 1,
    score: 0
  },
  {
    name: "พ่อค้าคนกลาง (Stonks)",
    id: "stonks",
    level: 1,
    score: 0
  },
  {
    name: "Polygon",
    id: "polygon",
    level: 1,
    score: 0
  },
  {
    name: "Drinks",
    id: "drinks",
    level: 1,
    score: 0
  },
  {
    name: "Medulla",
    id: "medulla",
    level: 2,
    score: 0
  },
  {
    name: "Kidney Stones",
    id: "kidney_stones",
    level: 1,
    score: 0
  },
  {
    name: "Election",
    id: "election",
    level: 1,
    score: 0
  },
  {
    name: "Parentheses Key",
    id: "parentheses_key",
    level: 1,
    score: 0
  },
  {
    name: "Gaussian Primes",
    id: "gaussian_primes",
    level: 1,
    score: 0
  },
  {
    name: "Suckanigadik",
    id: "toi69_suckanigadik",
    level: 3,
    score: 69
  }
]

const Problems = () => {
  return (
    <div className='width_small'>
      <Header selected = "Problems" username = "PakinDioxide"/>
      <p className='topic'>Problems</p>
      <div className='problems_box' style={{paddingTop: "60px"}}>
        <Suspense><Menu /></Suspense>
        <div className='problems_container'>
          {
            ProblemList.map(item => {
              const href = `/problems/${item.id}`
              return (
                <a className='problem_display' href={href}>
                  <div className="problem_frame">
                    <p style={{fontSize: "20px", marginRight: "20px"}}>{item.name}</p>
                    <p style={{fontSize: "12px"}}>[{item.id}]</p>
                    <p style={{fontSize: "20px", textAlign: "right", flex: 1}}>{item.score}/100</p>
                  </div>
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Problems
