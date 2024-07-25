'use client';
import React, { useState } from 'react';
import '@/styles/global.css';
import '@/styles/problems.css';
import Link from 'next/link';

const menues = [
    {
        label: 'Problem',
        value: ''
    },
    {
        label: 'Submit',
        value: 'submit'
    },
    {
        label: 'Submissions',
        value: 'submissions'
    },
    {
        label: 'My Submissions',
        value: 'mysubmissions'
    }
];

const ProblemMenu = ({ problem_id , selected} : { problem_id : string, selected : string } ) => {
    return (
        <div className='problems_menu_box'>
            {
                menues.map(menu => {
                    const href = `/problems/${problem_id}/${menu.value}`;
                    return (
                        <Link
                            key={menu.value}
                            href={href}
                            className={selected === menu.value ? 'problems_menu_selected' : 'problems_menu'}
                        >{menu.label}</Link>
                    );
                })
            }
        </div>
    );
};

export default ProblemMenu;
