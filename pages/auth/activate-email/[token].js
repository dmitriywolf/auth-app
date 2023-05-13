import axios from 'axios';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { API_BREAKPOINTS } from '@/common/constants';

export default function ActivateEmailPage({ token }) {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const activateAccount = useCallback(async () => {
    try {
      const { data } = await axios.put(API_BREAKPOINTS.activateEmail, { token });
      setSuccess(data.message);
    } catch (error) {
      setError((error?.response?.data).message);
    }
  }, [token]);

  useEffect(() => {
    activateAccount();
  }, [token, activateAccount]);

  return (
    <div className='flex h-screen items-center justify-center bg-black text-center'>
      {error && (
        <div>
          <p className='text-xl font-bold text-red-500'>{error}</p>
          <Link
            className='text-md mb-1 mt-4 rounded-md bg-blue-500 px-8 py-2 font-bold uppercase text-white transition-all duration-150 ease-linear hover:bg-blue-700 sm:mr-2'
            href={PATHS.logIn}
          >
            log in instead
          </Link>
        </div>
      )}
      {success && (
        <div>
          <p className='text-xl font-bold text-green-500'>{success}</p>
          <Link
            className='text-md mb-1 mt-4 rounded-md bg-blue-500 px-8 py-2 font-bold uppercase text-white transition-all duration-150 ease-linear hover:bg-blue-700 sm:mr-2'
            href={PATHS.logIn}
          >
            Log in
          </Link>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { token } = query;
  return {
    props: { token },
  };
}
