import axios from 'axios';
import Image from 'next/image';
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
    <section className='flex justify-center xl:pt-12'>
      {error && (
        <div>
          <Image src='/img/error.png' width={256} height={256} alt='result' />
          <p className='text-xl font-bold text-red-500'>ERROR: {error}</p>
        </div>
      )}
      {success && (
        <div>
          <Image src='/img/success.png' width={256} height={256} alt='result' />
          <p className='text-xl font-bold text-green-500'>SUCCESS: {success}</p>
        </div>
      )}
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const { token } = query;
  return {
    props: { token },
  };
}
