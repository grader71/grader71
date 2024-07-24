'use client';
import React, { useState } from 'react';
import '@/styles/global.css';
import '@/styles/problems.css';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const levels = [
    {
        label: 'All',
        value: ''
    },
    {
        label: 'Camp 1',
        value: 'camp1'
    },
    {
        label: 'Camp 2',
        value: 'camp2'
    },
    {
        label: 'TOI',
        value: 'toi'
    }
];

const Menu = () => {
    const searchParams = useSearchParams();
    const level = searchParams.get('level') || '';

    return (
        <div className='problems_box'>
            <div className='problems_menu_box'>
                {
                    levels.map(levelItem => {
                        const href = levelItem.value === '' ? '/problems' : `/problems?level=${levelItem.value}`;
                        return (
                            <Link
                                key={levelItem.value}
                                href={href}
                                className={level === levelItem.value ? 'problems_menu_selected' : 'problems_menu'}
                            >{levelItem.label}</Link>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Menu;
