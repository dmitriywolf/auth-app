import Link from 'next/link';
import { FiMail } from 'react-icons/fi';

import { PATHS } from '@/common/constants';
import FormBtn from '@/components/FormBtn';
import Input from '@/components/Input';

export default function ForgotPasswordForm({ register, errors, isSubmitting, submitForm }) {
  return (
    <div className='w-full px-12 py-4'>
      <h2 className='text-center text-2xl font-bold tracking-wide text-gray-800'>Forgot password</h2>
      <p className='mt-2 text-center text-sm text-gray-600'>
        Log in instead &nbsp;
        <Link href={PATHS.logIn} className='cursor-pointer text-blue-600 hover:text-blue-700 hover:underline'>
          Log in
        </Link>
      </p>
      <form className='my-8 text-sm' onSubmit={submitForm}>
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
        <FormBtn title='Send email' submitting={isSubmitting} />
      </form>
    </div>
  );
}
