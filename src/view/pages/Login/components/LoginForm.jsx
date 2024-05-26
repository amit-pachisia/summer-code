import { Link } from "react-router-dom";
import { Input } from "./Input";
import { LoginFormHeader } from "./LoginFormHeader";
import { useState } from "react";
import { loginSchema } from "../../../../schema";

export const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    email: { value: "", error: false, message: "" },
    password: { value: "", error: false, message: "" },
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formValues;

    if (!email.value || !password.value) return;

    try {
      loginSchema.parse({ email: email.value });

      setFormValues((prev) => ({
        ...prev,
        email: { ...prev.email, error: false, message: "" },
      }));

      setFormValues({
        email: { value: "", error: false, message: "" },
        password: { value: "", error: false, message: "" },
      });
    } catch (error) {
      const errorMessage = JSON.parse(error.message);

      setFormValues((prev) => ({
        ...prev,
        email: {
          ...prev.email,
          error: true,
          message: errorMessage[0].message,
        },
      }));
    }
  };

  return (
    <div className="w-[330px] space-y-5 rounded-xl border p-5 shadow-xl lg:w-[400px]">
      <div className="space-y-7">
        <LoginFormHeader
          title="Sign in to Referral"
          subTitle="Welcome back! Please sign in to continue"
        />
        <button className="flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm font-medium text-zinc-500 transition-all hover:bg-zinc-300/15 active:scale-95">
          <img
            src="https://api.iconify.design/logos:google-icon.svg"
            alt="google icon"
          />
          <span>Continue with Google</span>
        </button>
      </div>

      <p className="relative flex items-center justify-center text-zinc-500 before:absolute before:left-0 before:h-[1px] before:w-5/12 before:bg-zinc-200/70 before:content-[''] after:absolute after:right-0 after:h-[1px] after:w-5/12 after:bg-zinc-200/70 after:content-['']">
        or
      </p>

      <form onSubmit={handleOnSubmit}>
        <main className="w-full space-y-5">
          <div className="space-y-3">
            <Input
              label="Email address"
              inputType="email"
              error={formValues.email.error}
              message={formValues.email.message}
              data={formValues.email.value}
              setData={setFormValues}
            />
            <Input
              label="Password"
              inputType="password"
              error={formValues.password.error}
              message={formValues.password.message}
              data={formValues.password.value}
              setData={setFormValues}
            />
          </div>
          <button
            type="submit"
            className="h-10 w-full rounded-md border bg-zinc-800 text-sm font-medium text-white transition-all hover:bg-zinc-800/95 active:scale-95"
          >
            Continue
          </button>
        </main>
      </form>
      <footer className="text-center font-medium text-zinc-500">
        Don&apos;t have an account?{" "}
        <Link to="/sign-up">
          <span className="text-black">Sign up</span>
        </Link>
      </footer>
    </div>
  );
};
