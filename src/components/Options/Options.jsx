import React from 'react';

const Options = ({option}) => {
    console.log(option.options)
    return (
        <div className='border border-violet-600 text-xl py-6 px-2 flex gap-4 justify-center items-center'>
            <input type="radio" />
            <label htmlFor="">kisu</label>
        </div>
    );
};

export default Options;