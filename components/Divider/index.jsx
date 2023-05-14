import React from 'react';

export default function Divider() {
  return (
    <div className='flex w-full items-center justify-between py-4'>
      <div className='h-px w-full bg-slate-300'></div>
      <span className='mx-6 uppercase text-gray-400'>Or</span>
      <div className='h-px w-full bg-slate-300'></div>
    </div>
  );
}
