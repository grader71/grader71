import React from 'react'
import Header from '@/components/header'
import '@/styles/global.css'
import '@/styles/submissions.css'

const Submissions = () => {
    return (
        <div className='width_normal'>
            <Header selected = "Submissions" username = "PakinDioxide"/>
            <p className='topic'>Submissions</p>
            <div className='submissions_box'>
                <div className='submissions_table_head'>
                    <p style={{flex:'1'}}>#</p>
                    <p style={{flex:'1.75'}}>Name</p>
                    <p style={{flex:'1.75'}}>Problem</p>
                    <p style={{flex:'1.75'}}>Score</p>
                    <p style={{flex:'0.25'}}>Time</p>
                </div>
                <div className='submissions_container'>
                </div>
            </div>
        </div>
    )
}

export default Submissions