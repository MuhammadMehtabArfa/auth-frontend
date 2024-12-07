"use client";

import React, { useState } from "react";
import { resetPasswordUser } from "@/services/newpassword"; // Update with actual service
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const useNewPassword = () => {
  const [passwordMutationError, setPasswordMutationError] = useState<any>(null);
  const router = useRouter();
  const newPasswordSchema = yup.object().shape({
    password: yup
      .string()
      .required("Password is required")
      .typeError("")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .matches(/[a-z]+/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]+/, "Password must contain at least one uppercase letter")
      .matches(
        /[@$!%*#?&]+/,
        "Password must contain at least one special character",
      )
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
    mutationFn: resetPasswordUser.resetPassword,
    onSuccess: (data: any) => {
      toast.success(data?.data?.message);
      router.push("/login");

      console.log(data);
    },
    onError: (error: any) => {
      console.log({ error });
      setPasswordMutationError(error?.data?.error?.detail);
      toast.error(
        error?.response?.data?.message || error?.response?.data?.errors,
      );
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
