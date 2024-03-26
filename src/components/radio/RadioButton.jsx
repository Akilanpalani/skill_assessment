import React from 'react';

export const RadioButton = () => {
  return (
    <div className='flex items-center justify-end mt-5'>
      <div className='relative ml-10 flex items-center'>
        <div className='radio-circle bg-green-500 border-2 border-white absolute top-1 right-24 w-4 h-4 rounded-full'></div>
        <label htmlFor='userTraits' className='radio-label ml-3'>
          User Traits
        </label>
      </div>
      <div className='relative ml-10 flex items-center'>
        <div className='radio-circle bg-red-500 border-2 border-white absolute top-1 -left-6 w-4 h-4 rounded-full'></div>
        <label htmlFor='userEvents' className='radio-label'>
          Group Traits
        </label>
      </div>
    </div>
  );
};
