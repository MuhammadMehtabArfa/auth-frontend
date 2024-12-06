'use client'

import React, { useState } from "react";
import { resetPasswordUser } from "@/services/newpassword"; // Update with actual service
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useNewPassword = () => {
    const [passwordMutationError, setPasswordMutationError] = useState<any>(null);

    const newPasswordSchema = yup.object().shape({
        rToken: yup.string()
            .required("Recovery token is required")
            .matches(/^[a-zA-Z0-9]+$/, "Invalid recovery token format. It should contain only letters and numbers.")
            .min(10, "Recovery token must be at least 10 characters long") // Adjust based on your token length
            .max(500, "Recovery token must not exceed 500 characters long"),
        password: yup
            .string()
            .required("Password is required")
            .typeError("")
            .min(8, "Password must be at least 8 characters")
            .max(20, "Password must be at most 20 characters")
            .matches(/[a-z]+/, "Password must contain at least one lowercase letter")
            .matches(/[A-Z]+/, "Password must contain at least one uppercase letter")
            .matches(/[@$!%*#?&]+/, "Password must contain at least one special character")
            .matches(/\d+/, "Password must contain at least one number"),

    });

    const {
        register,
        handleSubmit,
        setValue,
        formState,
        formState: { errors, touchedFields },
    } = useForm({
        resolver: yupResolver(newPasswordSchema),
        mode: "onBlur",
    });

    const onSubmit = (data: any) => {
        passwordMutation.mutate(data);
        console.log(data);
    };

    const passwordMutation = useMutation({
        mutationFn: resetPasswordUser.resetPassword, // Update with the actual mutation function
        onSuccess: (data: any) => {
            console.log(data);
        },
        onError: (error: any) => {
            console.log({ error });
            setPasswordMutationError(error?.data?.error?.detail);
        },
    });

    return {
        passwordMutationError,
        passwordMutation,
        register,
        handleSubmit,
        errors,
        onSubmit,
        setValue,
        touchedFields,
        formState,
    };
};

export default useNewPassword;
