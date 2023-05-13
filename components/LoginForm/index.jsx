import Link from 'next/link';
import { FiLock, FiMail } from 'react-icons/fi';

import { PATHS } from '@/common/constants';
import Input from '@/components/Input';
import SlideBtn from '@/components/SlideBtn';

export default function LogInForm({ register, errors, isSubmitting, submitForm }) {
  return (
    <div className='w-full px-12 py-4'>
      <h2 className='text-center text-2xl font-bold tracking-wide text-gray-800'>Log in</h2>
      <p className='mt-2 text-center text-sm text-gray-600'>
        You do not have an account ? &nbsp;
        <Link className='cursor-pointer text-blue-600 hover:text-blue-700 hover:underline' href={PATHS.signUp}>
          Sign up
        </Link>
      </p>
      <form onSubmit={submitForm} className='my-8 text-sm'>
        <Input
          name='email'
          label='Email address'
          type='text'
          icon={<FiMail />}
          placeholder='example@emaple.com'
          register={register}
          error={errors?.email?.message}
          disabled={isSubmitting}
        />
        <Input
          name='password'
          label='Password'
          type='password'
          icon={<FiLock />}
          placeholder='***********'
          register={register}
          error={errors?.password?.message}
          disabled={isSubmitting}
        />
        <div className='mt-2 w-fit hover:underline'>
          <Link href={PATHS.forgotPassword} className=' text-blue-600'>
            Forgot password ?
          </Link>
        </div>
        <SlideBtn type='submit' text='Log in' slide_text='Secure log in' icon={<FiLock />} disabled={isSubmitting} />
      </form>
    </div>
  );
}
