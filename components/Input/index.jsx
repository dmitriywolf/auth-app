import { useState } from 'react';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
// import { IoAlertCircle } from 'react-icons/io5';

export default function Input({ name, label, type, icon, placeholder, register, error, disabled }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='relative w-full pb-4'>
      <label htmlFor={name} className='inline-block pb-2 text-sm text-zinc-400'>
        {label}
      </label>

      <div className='relative rounded-md'>
        <span className='absolute inset-y-0 left-0 top-0.5 flex items-center pl-3'>{icon}</span>

        <input
          {...register(name)}
          id={name}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full rounded-md border ${
            error ? 'border-error' : 'border-zinc-400'
          } pl-8 pr-7 leading-10  outline-offset-2 outline-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-700`}
        />

        {/* Show / hide password */}
        {(name == 'password' || name == 'confirmPassword') && (
          <button
            type='button'
            className='text-gray absolute right-2 top-2.5 cursor-pointer text-xl'
            onClick={toggleShowPassword}
          >
            {showPassword ? <ImEye /> : <ImEyeBlocked />}
          </button>
        )}
      </div>
      {error && <p className='absolute bottom-0 text-xs text-error'>{error}</p>}
    </div>
  );
}
