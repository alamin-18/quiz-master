import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import img from '../../images/bg.jpg'


const Topics = () => {
    const topicsLoad = useLoaderData()
    const topics = topicsLoad.data
    // console.log(topics);
    return (
        <div >
            {/* carosel */}
            <div className="carousel carousel-center flex justify-center mt-4 mb-4">
        <div className="carousel-item">
         <img className='' src={img} alt="Pizza" />
        </div>
        <h1 className='absolute text-3xl '>Show your programming talent</h1> 
        </div>
            {/* carosel */}

       
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 lg:px-40'>
            
            {
                topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
        </div>
    );
};

export default Topics;