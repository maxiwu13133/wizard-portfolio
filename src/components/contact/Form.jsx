"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          },
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Max",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center gap-y-4"
    >
      <input
        type="text"
        placeholder="name"
        {...register("name", {
          required: "This field is required",
          minLength: {
            value: 2,
            message: "Name should be at least 2 characters long",
          },
          maxLength: 50,
        })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.name && (
        <span className="inline-block self-start text-accent">
          {errors.name.message}
        </span>
      )}
      <input
        type="email"
        placeholder="email"
        {...register("email", {
          required: "This field is required",
          maxLength: 100,
        })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.email && (
        <span className="inline-block self-start text-accent">
          {errors.email.message}
        </span>
      )}
      <textarea
        placeholder="message"
        {...register("message", {
          required: "This field is required",
          maxLength: {
            value: 512,
            message: "Message should be less than 512 characters.",
          },
          minLength: {
            value: 15,
            message: "Message should be more than 15 characters.",
          },
        })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />
      {errors.message && (
        <span className="inline-block self-start text-accent">
          {errors.message.message}
        </span>
      )}
      <input
        value="Cast your message!"
        type="submit"
        className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer"
      />
    </form>
  );
}
