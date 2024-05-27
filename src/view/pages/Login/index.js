import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm";

function Login() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex h-screen flex-col items-center justify-center space-y-5">
        <Header
          title="Welcome Back!"
          subTitle="Log in or Create account to get back to your dashboard!"
        />
        <LoginForm />
      </div>
      <div className="hidden h-full items-center justify-center bg-violet-500 lg:flex">
        <div className="flex size-16 items-center justify-center rounded-full border border-zinc-300/25 bg-white">
          Logo
        </div>
      </div>
    </div>
  );
}

export default Login;
