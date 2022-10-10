import React from 'react';
import Options from '../Options/Options';

const Questions = ({quiz}) => {
    const {question,options,id,correctAnswer} =quiz

// console.log(options);
    // console.log(quiz);
    const quizHandle = (option)=>{
        if(option === correctAnswer){
            console.log("tik hoyche re");
        }
        else{
            console.log("vul hoyche re")
        }
    }
    return (
        <div className=''>
            <h1 className='text-3xl font-semibold mt-6 mb-6'> {question}</h1>
            <div className='grid lg:grid-cols-2 gap-6 '> 
                {
                    options.map((option,index) =><div onClick={()=>quizHandle(option)} className='border border-violet-600 text-xl py-6 px-2 flex gap-4 justify-center items-center'>
                    <input type="radio" id={id} name='option' />
                    <label htmlFor={id}>{option}</label>
                </div>)
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