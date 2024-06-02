import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";

export const AddEducation = ({ experience, onClose }) => {
  const validationSchema = z
  .object({
    degree: z.string().min(1, { message: "Degree is required" }),
    filedOfStudy: z.string().min(1, { message: "Field Of Study is required" }),
    collgeName: z.string(),
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
          htmlFor="degree"
        >
          Degree
        </label>
        <input
          className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
            errors.degree && "border-red-500"
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id="degree"
          type="text"
          placeholder="Degree"
          {...register("degree")}
        />
        {errors.degree && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.degree?.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="fieldOfStudy"
        >
          Field Of Study
        </label>
        <input
          className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
            errors.fieldOfStudy && "border-red-500"
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id="fieldOfStudy"
          type="text"
          placeholder="Field Of Study"
          {...register("fieldOfStudy")}
        />
        {errors.fieldOfStudy && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.fieldOfStudy?.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="collegeName"
        >
          College Name
        </label>
        <input
          className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
            errors.description && "border-red-500"
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id="collegeName"
          type="text"
          placeholder="College Name"
          {...register("collegeName")}
        />
        {errors.collegeName && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.collegeName?.message}
          </p>
        )}
      </div>
     
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Education
        </button>
      </div>
    </form>
  );
};