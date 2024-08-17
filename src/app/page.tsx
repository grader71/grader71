import React from 'react'
import Header from '@/components/header'
import '@/styles/global.css'

const Home = () => {
    return (
        <div className='width_normal'>
            <Header selected = "Home" username = "PakinDioxide"/>
            <p className="topic">Grader 71</p>
            <p style={{fontSize: "1.5em"}}> Lorem ipsum <span className="text_highlight">dolor sit amet </span>consectetur adipisicing elit. <span className="text_highlight">Perferendis nemo </span>quam cupiditate officiis ipsam expedita <span className="text_highlight">accusantium at veniam.</span></p>
            <p style={{fontSize: "1.5em"}}>โดยที่ประชาชนแห่งสหประชาชาติได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษยชนขั้นพื้นฐาน</p>
        </div>
    )
}

export default Home
