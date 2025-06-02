import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../Button';

const SignupForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
    }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <label>
            Email:
            <input {...register("email", { required: "Email is required" })} type="email"/>
            {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label>
            Password:
            <input {...register("password", { required: "Password is requied" })} type="password"/>
            {errors.password && <span>{errors.password.message}</span>}
        </label>
        <Button type="submit">Login</Button>
    </form>
  )
}

export default SignupForm