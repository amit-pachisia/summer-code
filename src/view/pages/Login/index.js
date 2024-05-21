import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm";

function Login() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="space-y-5 grid place-content-center">
        <Header
          title="Welcome Back!"
          subTitle="Log in or Create account to get back to your dashboard!"
        />
        <div className="w-full flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
      <div className="hidden lg:flex bg-violet-500 h-full">
        <span>Logo</span>
      </div>
    </div>
  );
}

export default Login;
