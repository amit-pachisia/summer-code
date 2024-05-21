export const Header = ({ title, subTitle }) => {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl text-center font-bold">{title}</h1>
      <p className="text-base text-center text-zinc-500">{subTitle}</p>
    </div>
  );
};
