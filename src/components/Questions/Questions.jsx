import React from 'react';

 

const Questions = ({quiz,Wronganswer,seeanswer,correctanswer}) => {
    const {question,options,correctAnswer} =quiz

// console.log(options);
// const notify = () => toast("Wow so easy!");

    
    const quizHandle = (option)=>{
        if(option === correctAnswer){
            correctanswer()
            // notify()
        }
        else{
            Wronganswer()
        }
    }
    return (
        
        <div>
            <div>
            <h1 className='text-3xl font-semibold mt-6 mb-6'> {question}</h1>
            <button onClick={()=>seeanswer(correctAnswer)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"       fill="currentColor" className="w-6 h-6">
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                        </svg>

            </button>
            <div className='grid lg:grid-cols-2 gap-6 '> 
                {
                    options.map((option,index) =><div key={index}  className='border border-violet-600 text-xl py-6 px-2 flex gap-4 justify-center items-center'>
                    <label ><input onClick={()=>quizHandle(option)} type="radio"  name='option' /> {option}</label>
                </div>)
                }
            </div>
            </div>
                
        </div>
    );
};

export default Questions;