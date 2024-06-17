import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";

export const AddSkills = ({ onClose }) => {
  const validationSchema = z.object({
    skills: z.string().min(1, { message: "Skills are required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data) => {
    onClose(true);
    console.log(data);
  };

  return (
    <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="skills"
        >
          Skills
        </label>
        <input
          className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
            errors.skills && "border-red-500"
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id="skills"
          type="text"
          placeholder="Skills"
          {...register("skills")}
        />
        {errors.skills && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.skills?.message}
          </p>
        )}
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Skills
        </button>
      </div>
    </form>
  );
};
