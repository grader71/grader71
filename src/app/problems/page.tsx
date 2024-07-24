'use client';
import React, { useState , Suspense} from 'react'
import Header from '@/components/header'
import '@/styles/global.css'
import '@/styles/problems.css'
import Menu from './menu'

const Problems = () => {
  const [selected, setSelected] = useState("Camp 1")

  return (
    <div className='width_small'>
      <Header selected = "Problems" username = "PakinDioxide"/>
      <p className='topic'>Problems</p>
      <Suspense><Menu /></Suspense>
    </div>
  )
}

export default Problems
