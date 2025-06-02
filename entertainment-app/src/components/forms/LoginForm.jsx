import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
        localStorage.setItem('authToken', 'fake-token');
    }

    const password = watch("password");


      const navigate = useNavigate();
      
          const homeRedirect = () => {
              navigate("/")
          }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <label>
            Username:
            <input {...register("Username", { required: "Username is required" })} type="text"/>
            {errors.username && <span>{errors.username.message}</span>}
        </label>
        <label>
            Email:
            <input {...register("email", { required: "Email is required" })} type="email"/>
            {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label>
            Password:
            <input {...register("password", { required: "Password is required" })} type="password"/>
            {errors.password && <span>{errors.password.message}</span>}
        </label>
        <label>
            Confirm Password:
            <input {...register("confimPassword", { required: "Please confirm your password",
                validate: value => value === password || "Passwords do no match"
             })} type="password"/>
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </label>
        <Button type="submit" onClick={homeRedirect}>Login</Button>
    </form>
  )
}

export default LoginForm