"use client"
import React, { useState } from "react";
import { forgotpasswordUser } from "@/services/forgotpassword";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useRouter } from "next/navigation";
// Forgot Password Hook
const useforgotPassword = () => {
    const [forgotPasswordMutationError, setForgotPasswordMutationError] = useState<any>(null);

    const forgotPasswordSchema = yup.object().shape({
        email: yup
            .string()
            .email("Invalid email address")
            .required("Email is required")
            .test("valid-domain", "Email must contain a domain", (value) => {
                return /@.+\./.test(value);
            }),
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState,
        formState: { errors, touchedFields },
    } = useForm({
        resolver: yupResolver(forgotPasswordSchema),
        mode: "onBlur",
    });

    const onSubmit = (data: any) => {
        forgotPasswordMutation.mutate(data);
        console.log(data);
    };
    const router = useRouter();
    const forgotPasswordMutation = useMutation({
        mutationFn: forgotpasswordUser.forgotpassword,
        onSuccess: (data: any) => {
            router.push('/newpassword')
            console.log(data);
        },
        onError: (error: any) => {
            console.log({ error });
            setForgotPasswordMutationError(error?.data?.error?.detail);
        },
    });

    return {
        forgotPasswordMutationError,
        forgotPasswordMutation,
        register,
        handleSubmit,
        errors,
        onSubmit,
        setValue,
        touchedFields,
        formState,
    };
};

export default useforgotPassword;
