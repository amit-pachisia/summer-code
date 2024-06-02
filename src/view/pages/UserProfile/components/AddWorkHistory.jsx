import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";

export const AddWorkHistory = ({ experience, onClose }) => {
  const validationSchema = z
  .object({
    jobTitle: z.string().min(1, { message: "Job Title is required" }),
    companyName: z.string().min(1, { message: "Company Name is required" }),
    description: z.string(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data) => {
    onClose(true);
    console.log(data)
  };

  return (
    <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="jobTitle"
        >
          Job Title
        </label>
        <input
          className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
            errors.jobTitle && "border-red-500"
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id="jobTitle"
          type="text"
          placeholder="Job Title"
          {...register("jobTitle")}
        />
        {errors.jobTitle && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.jobTitle?.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="companyName"
        >
          Company Name
        </label>
        <input
          className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
            errors.companyName && "border-red-500"
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id="companyName"
          type="text"
          placeholder="Company Name"
          {...register("companyName")}
        />
        {errors.companyName && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.companyName?.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="description"
        >
          Description
        </label>
        <input
          className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
            errors.description && "border-red-500"
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id="description"
          type="text"
          placeholder="Description"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.description?.message}
          </p>
        )}
      </div>
     
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Experience
        </button>
      </div>
    </form>
  );
};