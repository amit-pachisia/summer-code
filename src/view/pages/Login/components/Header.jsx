export const Header = ({ title, subTitle }) => {
  return (
    <header className="space-y-3">
      <h1 className="text-center text-3xl font-bold">{title}</h1>
      <p className="text-center text-base text-zinc-500">{subTitle}</p>
    </header>
  );
};
