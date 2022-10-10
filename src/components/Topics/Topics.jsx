import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const topics = useLoaderData()
    console.log(topics.data)
    return (
        <div>
            <h1 className='text-3xl font-semibold'>This is topics page</h1>
        </div>
    );
};

export default Topics;