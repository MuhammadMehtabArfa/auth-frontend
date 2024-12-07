"use client";
import React, { useState } from "react";
import { forgotpasswordUser } from "@/services/forgotpassword";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
// Forgot Password Hook
const useforgotPassword = () => {
  const [forgotPasswordMutationError, setForgotPasswordMutationError] =
    useState<any>(null);

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
      toast.success(data?.data?.message);
      router.push("/");
      console.log(data);
    },
    onError: (error: any) => {
      console.log({ error });
      setForgotPasswordMutationError(error?.data?.error?.detail);
      toast.error(
        error?.response?.data?.message || error?.response?.data?.errors,
      );
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
