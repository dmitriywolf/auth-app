import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { PATHS } from '@/common/constants';
import LogInForm from '@/components/LoginForm';
import { LOG_IN_SCHEMA } from '@/schemas';

export default function LogInContainer() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(LOG_IN_SCHEMA),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values) => {
    const { email, password } = values;

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: process.env.NEXTAUTH_URL,
    });

    if (res.error) {
      return toast.error(res.error);
    } else {
      return router.push(PATHS.home);
    }
  };

  return (
    <LogInForm register={register} errors={errors} isSubmitting={isSubmitting} submitForm={handleSubmit(onSubmit)} />
  );
}
