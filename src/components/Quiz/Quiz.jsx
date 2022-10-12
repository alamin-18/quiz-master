import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';

const Quiz = () => {
    const quizsload = useLoaderData()
    const quizs = quizsload.data.questions


    // toast
    const correctanswer = () => {
        toast.success('Wow your is correct!', {
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
    const seeanswer = (correctAnswer) => {
        toast.success(correctAnswer, {
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
        toast.warn('Your answer is wrong!', {
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
    // toast

    
    return (
        <div className='mt-5'>
            <h1 className='text-3xl font-semibold text-center'>{quizsload.data.name}</h1>
            <h1 className='text-3xl font-semibold text-center'>Total: {quizs.length} quiz</h1>
            
            <div className='md:w-3/4 lg:w-1/3 mx-auto drop-shadow-2xl'>
            {
                quizs.map(quiz =>
                    <Questions
                     key={quiz.id} quiz={quiz}
                     Wronganswer={Wronganswer}
                     seeanswer={seeanswer}
                     correctanswer={correctanswer}
                     ></Questions>
                )
            }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Quiz;