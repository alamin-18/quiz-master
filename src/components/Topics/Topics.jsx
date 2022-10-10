import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topicsLoad = useLoaderData()
    const topics = topicsLoad.data
    console.log(topics);
    return (
        <div className='grid lg:grid-cols-4 gap-5 px-4 lg:px-40'>
            {
                topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;