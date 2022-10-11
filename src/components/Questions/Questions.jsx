import React from 'react';
import Options from '../Options/Options';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const Questions = ({quiz}) => {
    const {question,options,correctAnswer} =quiz

// console.log(options);
const correctanswer = () => {
    toast.success('🦄 Wow your is correct!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
const Wronganswer = () =>{
    toast.warn('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
    
    const quizHandle = (option)=>{
        if(option === correctAnswer){
            correctanswer()
        }
        else{
            Wronganswer()
            console.log("hoynai");
        }
    }
    return (
        <div className=''>
            <h1 className='text-3xl font-semibold mt-6 mb-6'> {question}</h1>
            <div className='grid lg:grid-cols-2 gap-6 '> 
                {
                    options.map((option,index) =><div onClick={()=>quizHandle(option)} className='border border-violet-600 text-xl py-6 px-2 flex gap-4 justify-center items-center'>
                    <input type="radio"  name='option' />
                    <label >{option}</label>
                </div>)
                }
            </div>
            <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        
        </div>
    );
};

export default Questions;