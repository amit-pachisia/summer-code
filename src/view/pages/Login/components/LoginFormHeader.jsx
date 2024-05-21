export const LoginFormHeader = ({ title, subTitle }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl text-center font-bold">{title}</h1>
      <p className="text-sm text-center text-zinc-500">{subTitle}</p>
    </div>
  );
};
