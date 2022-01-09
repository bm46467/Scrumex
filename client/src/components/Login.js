import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { LockClosedIcon } from '@heroicons/react/solid'

const schema = object({
  email: string()
    .required('Email address is required')
    .email('Please provide a valid email address'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters'),
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (values) => {
    console.log(values)

    reset()
  }

  return (
    <form
      className="max-w-[290px] flex flex-col items-center border-2 
    border-gray-500 rounded-xl mx-auto mt-24 mb-12 p-8 gap-4 shadow-md"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <LockClosedIcon className="h-7 text-indigo-400" />

      <h4 className="text-3xl font-light text-gray-100 mb-4">Sign in</h4>

      <div className="relative mt-2 w-full">
        <input
          id="email"
          name="email"
          className={`peer w-full h-11 border-b-2 bg-transparent border-gray-400
          focus:outline-none focus:border-indigo-600 placeholder-transparent transition 
          ${errors?.email?.message && 'focus:border-red-800'}`}
          type="text"
          placeholder="Email address"
          {...register('email')}
        />
        <label htmlFor="email" className="form-label">
          Email address
        </label>

        <span className="text-red-800 inline-block pt-2">
          {errors?.email?.message}
        </span>
      </div>

      <div className="relative mt-2 w-full">
        <input
          id="password"
          name="password"
          className={`peer w-full h-11 border-b-2 bg-transparent border-gray-400
          focus:outline-none focus:border-indigo-600 transition ${
            errors?.password?.message && 'focus:border-red-800'
          }
          placeholder-transparent`}
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>

        <span className="text-red-800 inline-block pt-2">
          {errors?.password?.message}
        </span>
      </div>

      <button className="btn-primary--filled mt-6 px-12">Login</button>

      <div className="flex gap-2 items-center">
        <span className="flex-1 text-gray-500 text-sm">
          Don't have an account?{' '}
        </span>
        <Link to="/register">
          <span className="text-indigo-600 cursor-pointer">Sign up</span>
        </Link>
      </div>
    </form>
  )
}

export default Login
