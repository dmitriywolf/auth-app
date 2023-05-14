import Link from 'next/link';
import { BsTelephone } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
import { FiLock, FiMail } from 'react-icons/fi';

import { PATHS } from '@/common/constants';
import FormBtn from '@/components/FormBtn';
import Input from '@/components/Input';
import PasswordScore from '@/components/PasswordScore';

export default function SignUpForm({ register, errors, isSubmitting, submitForm, watchPassword }) {
  return (
    <div className='w-full px-12 py-4'>
      <h2 className='text-center text-2xl font-bold tracking-wide text-gray-800'>Sign up</h2>
      <p className='mt-2 text-center text-sm text-gray-600'>
        You already have an account ? &nbsp;
        <Link href={PATHS.logIn} className='cursor-pointer text-blue-600 hover:text-blue-700 hover:underline'>
          Log in
        </Link>
      </p>
      <form className='my-8 text-sm' onSubmit={submitForm}>
        <div className='gap-2 md:flex'>
          <Input
            name='first_name'
            label='First name'
            type='text'
            icon={<CiUser />}
            placeholder='example'
            register={register}
            error={errors?.first_name?.message}
            disabled={isSubmitting}
          />
          <Input
            name='last_name'
            label='Last name'
            type='text'
            icon={<CiUser />}
            placeholder='example'
            register={register}
            error={errors?.last_name?.message}
            disabled={isSubmitting}
          />
        </div>
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
          name='phone'
          label='Phone number'
          type='text'
          icon={<BsTelephone />}
          placeholder='+(xxx) xxx-xx-xx'
          register={register}
          error={errors?.phone?.message}
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
        <div className='mt-3 flex items-center'>
          <input type='checkbox' id='accept' className='mr-2 rounded focus:ring-0' {...register('accept')} />
          <label htmlFor='accept' className='text-gray-700'>
            I accept the&nbsp; <button className='text-blue-600 hover:text-blue-700 hover:underline'>terms</button>
            &nbsp;and&nbsp;
            <button className='text-blue-600 hover:text-blue-700 hover:underline'>privacy policy</button>
          </label>
        </div>
        <div>{errors?.accept && <p className='mt-1 text-sm text-red-600'>{errors?.accept?.message}</p>}</div>
        <FormBtn title='Sign up' submitting={isSubmitting} />
      </form>
    </div>
  );
}
