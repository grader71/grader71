'use client';
import React, { useState , Suspense } from 'react'
import Header from '@/components/header'
import '@/styles/global.css'
import '@/styles/problems.css'
import Menu from './menu'

const Problems = () => {
  return (
    <div className='width_small'>
      <Header selected = "Problems" username = "PakinDioxide"/>
      <p className='topic'>Problems</p>
      <div className='problems_box'>
        <Suspense><Menu /></Suspense>
      </div>
    </div>
  )
}

export default Problems
