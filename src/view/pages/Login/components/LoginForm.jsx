import { LoginFormHeader } from "./LoginFormHeader";

export const LoginForm = () => {
  return (
    <form>
      <div className="p-5 space-y-3 border w-[400px] rounded-xl">
        <LoginFormHeader
          title="Sign in to Referral"
          subTitle="Welcome back! Please sign in to continue"
        />
      </div>
    </form>
  );
};
