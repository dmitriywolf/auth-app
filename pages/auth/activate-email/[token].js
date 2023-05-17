import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';

import { API_BREAKPOINTS } from '@/common/constants';
import { Plate, Section } from '@/components/UI';

export default function ActivateEmailPage({ token }) {
  const [loading, setloading] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const activateAccount = useCallback(async () => {
    try {
      setloading(true);
      const { data } = await axios.put(API_BREAKPOINTS.activateEmail, { token });
      setSuccess(data.message);
    } catch (error) {
      setError((error?.response?.data).message);
    } finally {
      setloading(false);
    }
  }, [token]);

  useEffect(() => {
    activateAccount();
  }, [token, activateAccount]);

  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <Section>
        <Plate>
          <div className='flex flex-col items-center'>
            {loading ? (
              <>
                <CircleLoader size={150} color='#06b6d4' />
                <p className='pt-6 text-xl font-bold'>Loading...</p>
              </>
            ) : (
              <>
                <Image src={`/img/${error ? 'error' : 'success'}.png`} width={150} height={150} alt='result' />
                <p className='pt-6 text-xl font-bold'>{error ? 'Something went wrong' : success}!</p>
              </>
            )}
          </div>
        </Plate>
      </Section>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { token } = query;
  return {
    props: { token },
  };
}
