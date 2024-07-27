import React from 'react'
import Header from '@/components/header'
import '@/styles/global.css'

const About = () => {
  return (
    <div className="width_normal">
      <Header selected = "About" username = "PakinDioxide"/>
      <p className="topic">About</p>
      <p style={{fontSize: "1.5em"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor hic incidunt veniam doloremque voluptate, pariatur recusandae necessitatibus ipsam sapiente commodi molestias dicta modi! Reprehenderit voluptates eveniet odio cupiditate? Molestias, non!</p>
      <p style={{fontSize: "1.5em"}}>โดยที่ประชาชนแห่งสหประชาชาติได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษยชนขั้นพื้นฐาน</p>    </div>
  )
}

export default About
