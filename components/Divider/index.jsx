import React from 'react';

export default function Divider() {
  return (
    <div className='flex w-full items-center justify-between px-12'>
      <div className='h-[1px] w-full bg-gray-300'></div>
      <span className='mx-6 text-sm uppercase text-gray-400'>Or</span>
      <div className='h-[1px] w-full bg-gray-300'></div>
    </div>
  );
}
