import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { API_BREAKPOINTS } from '@/common/constants';
import SignUpForm from '@/components/SignUpForm';
import { SIGN_UP_SCHEMA } from '@/schemas';

const DEFAULT_VALUES = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  accept: false,
};

export default function SignUpContainer() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(SIGN_UP_SCHEMA),
    defaultValues: DEFAULT_VALUES,
  });

  const watchPassword = watch('password');

  const onSubmit = async (values) => {
    try {
      const { data } = await axios.post(API_BREAKPOINTS.signUp, {
        ...values,
      });
      reset();
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <SignUpForm
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      submitForm={handleSubmit(onSubmit)}
      watchPassword={watchPassword}
    />
  );
}
