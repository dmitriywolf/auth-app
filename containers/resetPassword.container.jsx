import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { API_BREAKPOINTS } from '@/common/constants';
import ResetPasswordForm from '@/components/ResetPasswordForm';
import { RESET_PASSWORD_SCHEMA } from '@/schemas';

export default function ResetPasswordContainer({ token }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(RESET_PASSWORD_SCHEMA),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const watchPassword = watch('password');

  const onSubmit = async (values) => {
    try {
      const { data } = await axios.post(API_BREAKPOINTS.resetPassword, {
        password: values.password,
        token,
      });
      reset();
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <ResetPasswordForm
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      submitForm={handleSubmit(onSubmit)}
      watchPassword={watchPassword}
    />
  );
}
