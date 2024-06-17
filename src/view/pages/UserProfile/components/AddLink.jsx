import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const AddLink = ({ onSave }) => {
  const validationSchema = z.object({
    type: z.string().min(1, { message: "Link Type is required" }),
    url: z.string().min(1, { message: "Link URL is required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data) => {
    onSave(data);
    reset({ type: "", url: "" }); // Reset form fields after submission
  };

  return (
    <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="type"
        >
          Link Type
        </label>
        <input
          className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
            errors.type && "border-red-500"
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id="type"
          type="text"
          placeholder="Link Type"
          {...register("type")}
        />
        {errors.type && (
          <p className="text-xs italic text-red-500 mt-2">{errors.type.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="url"
        >
          Link URL
        </label>
        <input
          className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
            errors.url && "border-red-500"
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id="url"
          type="text"
          placeholder="Link URL"
          {...register("url")}
        />
        {errors.url && (
          <p className="text-xs italic text-red-500 mt-2">{errors.url.message}</p>
        )}
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Link
        </button>
      </div>
    </form>
  );
};
