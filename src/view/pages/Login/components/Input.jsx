import { twMerge } from "tailwind-merge";

export const Input = ({ label, inputType, error, message, data, setData }) => {
  const handleOnChange = (e) => {
    const newValue = e.target.value;
    if (inputType === "email") {
      setData((prevValues) => ({
        ...prevValues,
        email: { ...prevValues.email, value: newValue },
      }));
    } else if (inputType === "password") {
      setData((prevValues) => ({
        ...prevValues,
        password: { ...prevValues.password, value: newValue },
      }));
    }
  };

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor="password" className="text-sm font-medium">
        {label}
      </label>
      <input
        onChange={handleOnChange}
        type={inputType}
        value={data}
        autoFocus={inputType === "email"}
        className={twMerge(
          "h-10 w-full rounded-md border px-2",
          error ? "border-red-500" : "",
        )}
      />
      {error && (
        <span className="w-full rounded-md bg-red-500/15 p-2 text-sm text-red-500">
          {message}
        </span>
      )}
    </div>
  );
};
