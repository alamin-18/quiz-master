import React from 'react';
import Options from '../Options/Options';

const Questions = ({quiz}) => {
    const {question,options,id} =quiz


    console.log(quiz);
    const quizHandle = ()=>{
        console.log("kaj kortichi");
    }
    return (
        <div className=''>
            <h1 className='text-3xl font-semibold mt-6 mb-6'> {question}</h1>
            <div className='grid lg:grid-cols-2 gap-6 '> 
                {
                    quiz.map(option =><Options quizHandle={quizHandle} option={option}></Options>)
                }
                {/* <div className='border border-violet-600 text-xl py-6 px-2 flex gap-4 justify-center items-center'>
            <input type="radio" />
            <label htmlFor="">{options}</label>
        </div> */}
            </div>
        </div>
    );
};

export default Questions;