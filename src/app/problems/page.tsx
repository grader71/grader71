'use client';
import React, { useState } from 'react'
import Header from '@/components/header'
import '@/styles/global.css'
import '@/styles/problems.css'

const Problems = () => {
  const [selected, setSelected] = useState("Camp 1")

  return (
    <div className='width_small'>
      <Header selected = "Problems" username = "PakinDioxide"/>
      <p className='topic'>Problems</p>
      <div className='problems_box'>
        <div className='problems_menu_box'>
          <button className={"Camp 1" === selected ? "problems_menu_selected" : "problems_menu"} onClick={ () => setSelected("Camp 1")}>Camp 1</button >
          <button className={"Camp 2" === selected ? "problems_menu_selected" : "problems_menu"} onClick={ () => setSelected("Camp 2")}>Camp 2</button >
          <button className={"TOI" === selected ? "problems_menu_selected" : "problems_menu"} onClick={ () => setSelected("TOI")}>TOI</button>
        </div>
      </div>
    </div>
  )
}

export default Problems
