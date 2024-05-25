import { Link } from "react-router-dom";
import { Input } from "./Input";
import { LoginFormHeader } from "./LoginFormHeader";
import { useState } from "react";

export const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    email: { value: "", error: false, message: "" },
    password: { value: "", error: false, message: "" },
  });

  const validateEmail = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formValues;

    if (!validateEmail(email.value)) {
      setFormValues((prev) => ({
        ...prev,
        email: {
          ...prev.email,
          error: true,
          message: "Please provide a valid email address",
        },
      }));
    }

    if (!validatePassword(password.value)) {
      setFormValues((prev) => ({
        ...prev,
        password: {
          ...prev.password,
          error: true,
          message: "Password must contain uppercase, lowercase, and a symbol",
        },
      }));
    }

    if (validateEmail(email.value)) {
      setFormValues((prev) => ({
        ...prev,
        email: { ...prev.email, error: false, message: "" },
      }));
    }

    if (validatePassword(password.value)) {
      setFormValues((prev) => ({
        ...prev,
        password: { ...prev.password, error: false, message: "" },
      }));
    }

    if (validateEmail(email.value) && validatePassword(password.value)) {
      setFormValues({
        email: { value: "", error: false, message: "" },
        password: { value: "", error: false, message: "" },
      });
    }
  };

  return (
    <div className="w-[330px] space-y-5 rounded-xl border p-5 shadow-xl lg:w-[400px]">
      <div className="space-y-3">
        <LoginFormHeader
          title="Sign in to Referral"
          subTitle="Welcome back! Please sign in to continue"
        />
      </div>
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
            className="h-10 w-full rounded-md border bg-zinc-800 text-white"
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
