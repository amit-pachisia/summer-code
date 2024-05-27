export const LoginFormHeader = ({ title, subTitle }) => {
  return (
    <header className="space-y-2">
      <h1 className="text-center text-xl font-bold">{title}</h1>
      <p className="text-center text-sm text-zinc-500">{subTitle}</p>
    </header>
  );
};
