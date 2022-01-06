import { Link } from 'react-router-dom'

import { LockClosedIcon } from '@heroicons/react/solid'

const Register = () => {
  return (
    <div className="pb-32">
      <form
        className="max-w-[290px] flex flex-col items-center border-2 
    border-gray-500 rounded-xl mx-auto mt-24 p-8 gap-4 shadow-md"
        autoComplete="off"
      >
        <LockClosedIcon className="h-7 text-indigo-400" />

        <h4 className="text-3xl font-light text-gray-100 mb-4">Sign up</h4>

        <div className="flex gap-4">
          <div className="relative mt-2 w-full">
            <input
              id="firstName"
              name="firstName"
              className="peer w-full h-11 border-b-2 bg-transparent border-gray-400
          focus:outline-none focus:border-indigo-600 placeholder-transparent"
              type="text"
              placeholder="First name"
            />
            <label
              htmlFor="firstName"
              className="absolute left-0 -top-3.5 text-gray-400 transition-all 
           peer-placeholder-shown:text-base
           peer-placeholder-shown:text-gray-200
           peer-placeholder-shown:top-2
           peer-focus:-top-3.5
           peer-focus:text-gray-400
           peer-focus:text-sm
           "
            >
              First name
            </label>
          </div>

          <div className="relative mt-2 w-full">
            <input
              id="lastName"
              name="lastName"
              className="peer w-full h-11 border-b-2 bg-transparent border-gray-400
          focus:outline-none focus:border-indigo-600 placeholder-transparent"
              type="text"
              placeholder="Last name"
            />
            <label
              htmlFor="lastName"
              className="absolute left-0 -top-3.5 text-gray-400 transition-all 
           peer-placeholder-shown:text-base
           peer-placeholder-shown:text-gray-200
           peer-placeholder-shown:top-2
           peer-focus:-top-3.5
           peer-focus:text-gray-400
           peer-focus:text-sm
           "
            >
              Last name
            </label>
          </div>
        </div>

        <div className="relative mt-2 w-full">
          <input
            id="email"
            name="email"
            className="peer w-full h-11 border-b-2 bg-transparent border-gray-400
          focus:outline-none focus:border-indigo-600 placeholder-transparent"
            type="text"
            placeholder="Email address"
          />
          <label
            htmlFor="email"
            className="absolute left-0 -top-3.5 text-gray-400 transition-all 
           peer-placeholder-shown:text-base
           peer-placeholder-shown:text-gray-200
           peer-placeholder-shown:top-2
           peer-focus:-top-3.5
           peer-focus:text-gray-400
           peer-focus:text-sm
           "
          >
            Email address
          </label>
        </div>

        <div className="relative mt-2 w-full">
          <input
            id="password"
            name="password"
            className="peer w-full h-11 border-b-2 bg-transparent border-gray-400
          focus:outline-none focus:border-indigo-600 placeholder-transparent"
            type="password"
            placeholder="Password"
          />
          <label
            htmlFor="password"
            className="absolute left-0 -top-3.5 text-gray-400 transition-all 
           peer-placeholder-shown:text-base
           peer-placeholder-shown:text-gray-200
           peer-placeholder-shown:top-2
           peer-focus:-top-3.5
           peer-focus:text-gray-400
           peer-focus:text-sm
           "
          >
            Password
          </label>
        </div>

        <div className="relative mt-2 w-full">
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            className="peer w-full h-11 border-b-2 bg-transparent border-gray-400
          focus:outline-none focus:border-indigo-600 placeholder-transparent"
            type="password"
            placeholder="Confirm password"
          />
          <label
            htmlFor="passwordConfirm"
            className="absolute left-0 -top-3.5 text-gray-400 transition-all 
           peer-placeholder-shown:text-base
           peer-placeholder-shown:text-gray-200
           peer-placeholder-shown:top-2
           peer-focus:-top-3.5
           peer-focus:text-gray-400
           peer-focus:text-sm
           "
          >
            Confirm password
          </label>
        </div>

        <button className="btn-primary--filled mt-6 px-12">Register</button>

        <div className="flex gap-2 items-center">
          <span className="flex-1 text-gray-500 text-sm">
            Already registered?{' '}
          </span>
          <Link to="/login">
            <span className="text-indigo-600 cursor-pointer">Sign in</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Register
