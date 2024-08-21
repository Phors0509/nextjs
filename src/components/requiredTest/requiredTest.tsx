"use client";
import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object().shape({
//     email: yup
//         .string()
//         .email("Invalid email format")
//         .required("Email is required"),
//     password: yup
//         .string()
//         .min(6, "Password must be at least 6 characters")
//         .required("Password is required"),
// });

const RequiredTest = () => {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm({
    //     resolver: yupResolver(schema),
    // });

    // const onSubmit = (data: any) => {
    //     console.log(data);
    // };

    return (
        <>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("email")} placeholder="email" />
                <p>{errors.email?.message}</p>
            </div>
            <div>
                <input
                    type="password"
                    {...register("password")}
                    placeholder="password"
                    />
                <p>{errors.password?.message}</p>
            </div>
            <button type="submit">Submit</button>
        </form> */}
        </>
    );
};

export default RequiredTest;
