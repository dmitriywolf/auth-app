import Link from 'next/link';
import { FiLock } from 'react-icons/fi';

import { PATHS } from '@/common/constants';
import FormBtn from '@/components/FormBtn';
import Input from '@/components/Input';
import PasswordScore from '@/components/PasswordScore';

export default function ResetPasswordForm({ register, errors, isSubmitting, submitForm, watchPassword }) {
  return (
    <div className='w-full px-12 py-4'>
      <h2 className='text-center text-2xl font-bold tracking-wide text-gray-800'>Reset password</h2>
      <p className='mt-2 text-center text-sm text-gray-600'>
        Log in instead ? &nbsp;
        <Link href={PATHS.logIn} className='cursor-pointer text-blue-600 hover:text-blue-700 hover:underline'>
          Log in
        </Link>
      </p>
      <form className='my-8 text-sm' onSubmit={submitForm}>
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
        <PasswordScore password={watchPassword} />
        <Input
          name='confirmPassword'
          label='Confirm password'
          type='password'
          icon={<FiLock />}
          placeholder='***********'
          register={register}
          error={errors?.confirmPassword?.message}
          disabled={isSubmitting}
        />
        <FormBtn title='Change password' submitting={isSubmitting} />
      </form>
    </div>
  );
}
