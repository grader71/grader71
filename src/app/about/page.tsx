import React from 'react'
import Header from '@/components/header'
import '@/styles/global.css'

const About = () => {
  return (
    <div>
      <Header selected = "About" username = "PakinDioxide"/>
      <p className="topic">About</p>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nemo quam cupiditate officiis ipsam expedita accusantium at veniam. Tempora labore deserunt voluptatum nulla culpa est at aliquid eligendi aspernatur similique!</h2>
    </div>
  )
}

export default About
