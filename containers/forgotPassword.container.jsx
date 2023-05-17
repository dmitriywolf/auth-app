import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { API_BREAKPOINTS } from '@/common/constants';
import ForgotPasswordForm from '@/components/forms/ForgotPasswordForm';
import { FORGOT_PASSWORD_SCHEMA } from '@/schemas';

export default function ForgotPasswordContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(FORGOT_PASSWORD_SCHEMA),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values) => {
    const { email } = values;
    try {
      const { data } = await axios.post(API_BREAKPOINTS.forgotPassword, {
        email,
      });
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <ForgotPasswordForm
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      submitForm={handleSubmit(onSubmit)}
    />
  );
}
