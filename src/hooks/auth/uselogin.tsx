import React, { useState } from "react";

import { loginUser } from "@/services/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/Slices/AuthSlice";
// import useAccount from "./useAccount";

const uselogin = () => {
  const [loginMutationError, setLoginMutationError] = useState<any>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  // const { setLoggedIn } = useAccount();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required")
      .test("valid-domain", "Email must contain a domain", (value) => {
        return /@.+\./.test(value);
      }),
    password: yup.string().required("Password is required").typeError(""),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState,
    getValues,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    loginMutation.mutate(data);
    console.log(data);
  };

  const loginMutation = useMutation({
    mutationFn: loginUser.login,
    onSuccess: (data: any) => {
      console.log(data);
      toast.success(data?.data?.message);
      if (data?.data?.user?.isVerified === false) {
        router.push(`/verifyotp?email=${data?.data?.user?.email}`);
      } else { 
        dispatch(
          setAuth({
            user: data?.data?.user,
            accessToken: data?.data?.access_token,
          }),
        );

        router.push("/main-page");
      }
    },
    onError: (error: any) => {
      console.log({ error });
      setLoginMutationError(error?.data?.error?.detail);
      toast.error(
        error?.response?.data?.message || error?.response?.data?.errors,
      );
    },
  });

  return {
    loginMutationError,
    // setLoggedIn,
    loginMutation,
    register,
    handleSubmit,
    errors,
    onSubmit,
    setValue,
    touchedFields,
    formState,
  };
};
export default uselogin;
