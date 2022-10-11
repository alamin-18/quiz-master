import React from 'react';
import { Link } from 'react-router-dom';

const EroowPage = () => {
    return (
        <div className='w-1/3 mx-auto mt-14 text-center'>
            <div>
                <h1 className='text-7xl font-bold'>404</h1>
                <h2 className='text-4xl'>OPPS! PAGE NOT FOUND </h2>
            </div>
            <div>
                <p>sorry,the page you're looking for dosen't exist.if you think something is broken,report a problem</p>
            </div>
            <Link className='border border-b-green-400 rounded-full px-10 text-lg' to='/'>Back to home</Link>
        </div>
    );
};

export default EroowPage;