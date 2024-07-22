import React from 'react'
import Header from '@/components/header'
import '@/styles/global.css'

const home = () => {
  return (
    <div>
      <Header selected = "About" username = "PakinDioxide"/>
      <h1>HELLO ABOUT </h1>
    </div>
  )
}

export default home
