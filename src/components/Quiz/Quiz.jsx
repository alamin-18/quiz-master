import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizsload = useLoaderData()
    const quizs = quizsload.data.questions
    
    return (
        <div className='mt-5'>
            <h1 className='text-3xl font-semibold text-center'>{quizsload.data.name}</h1>
            <h1 className='text-3xl font-semibold text-center'>Total: {quizs.length} quiz</h1>
            
            <div className='md:w-3/4 lg:w-1/3 mx-auto drop-shadow-2xl'>
            {
                quizs.map(quiz =>
                    <Questions key={quiz.id} quiz={quiz}></Questions>
                )
            }
            </div>
        </div>
    );
};

export default Quiz;