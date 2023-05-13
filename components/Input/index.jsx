import { useState } from 'react';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { IoAlertCircle } from 'react-icons/io5';

export default function Input(props) {
  const { name, label, type, icon, placeholder, register, error, disabled } = props;

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='mt-3 w-[100%]'>
      <label htmlFor={name} className='text-grey'>
        {label}
      </label>

      <div className='relative mt-1 rounded-md'>
        <div className='absolute inset-y-0 left-0 top-0.5 flex items-center pl-3'>
          <span className='text-gray text-sm'>{icon}</span>
        </div>

        <input
          {...register(name)}
          id={name}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          disabled={disabled}
          className={`border-${
            error ? 'error' : 'gray'
          } block w-full rounded-md border py-2 pl-8 pr-7 text-sm outline-offset-2 outline-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-700`}
        />

        {/* Show / hide password */}
        {(name == 'password' || name == 'confirmPassword') && (
          <button className='text-gray absolute right-2 top-2.5 cursor-pointer text-xl' onClick={toggleShowPassword}>
            {showPassword ? <ImEye /> : <ImEyeBlocked />}
          </button>
        )}

        {error && (
          <div className='absolute right-2 top-2.5 text-xl'>
            <IoAlertCircle fill='#ED4337' />
          </div>
        )}

        {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
      </div>
    </div>
  );
}
