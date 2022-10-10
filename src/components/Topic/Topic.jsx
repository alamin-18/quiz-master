import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {logo,name,id} =topic
    return (
        <div className='drop-shadow-2xl bg-slate-100  rounded-lg p-4'>
            <img className='w-full bg-slate-600 rounded-lg' src={logo} alt="" />
            <div className='flex text-blue-400 items-center justify-between mt-2'>
            <h1 className='text-2xl'>{name}</h1>
            <Link to={`../quiz/${id}`}>
            <button className='btn btn-accent'>Start Quiz <span className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            </span></button>
            </Link>
            </div>
        </div>
    );
};

export default Topic;