import React, { FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import "./ContactForm.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    alert("Message sent successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name?.message && (
          <span className="error">{errors.name.message.toString()}</span>
        )}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
        ></textarea>
        {errors.message && (
          <span className="error">{errors.message.message}</span>
        )}
      </div>

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;