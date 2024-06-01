import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { signupSchema } from "../../../schema";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signupSchema.parse(data);

    axios
      .post("https://api/signup", data)
      .then((response) => {
        // update on successful sign up
        console.log("Form submitted successfully:", response.data);
      })
      .catch((error) => {
        // update on error in sign up
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden h-full items-center justify-center bg-violet-500 lg:flex">
        <div className="flex size-16 items-center justify-center rounded-full border border-zinc-300/25 bg-white">
          Logo
        </div>
      </div>
      <div className="flex h-screen flex-col items-center justify-center space-y-5">
        <header className="space-y-3">
          <h1 className="text-center text-3xl font-bold">Welcome</h1>
          <p className="text-center text-base text-zinc-500">
            Log in or Create account to get back to your dashboard!
          </p>
        </header>
        <div className="mx-auto mt-10 max-w-md">
          <div className="w-[330px] space-y-5 rounded-xl border p-5 shadow-xl lg:w-[400px]">
            <div className="space-y-7">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">Sign up</h2>
                <p className="text-sm text-gray-600">
                  Please sign up to continue
                </p>
              </div>
              <button className="flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm font-medium text-zinc-500 transition-all hover:bg-zinc-300/15 active:scale-95">
                <img
                  src="https://api.iconify.design/logos:google-icon.svg"
                  alt="google icon"
                />
                <span>Continue with Google</span>
              </button>
            </div>

            <p className="text-center text-gray-500">or</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-3">
                <div className="flex">
                  <div className="mr-2 w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="mt-1 block w-full rounded-md border p-2 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
                      placeholder="First Name"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="ml-2 w-1/2">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="mt-1 block w-full rounded-md border p-2 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border p-2 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
                    placeholder="Enter your email address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1  block w-full rounded-md border p-2 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 flex h-10 w-full items-center justify-center space-x-3 rounded-md border bg-zinc-800 text-sm font-medium text-white transition-all hover:bg-zinc-800/95 active:scale-95"
              >
                <span>Sign Up</span>
              </button>
            </form>
            <footer className="text-center font-medium text-zinc-500">
              Already have an account?{" "}
              <Link to="/sign-in">
                <span className="text-black">Sign in</span>
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
