import React from 'react';

import Header from '@/components/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col bg-zinc-100 pt-20'>{children}</main>
    </>
  );
}
