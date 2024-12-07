import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { verifyotpUser } from "@/services/verifyotp";
import { toast } from "react-toastify";

const useVerifyOtp = () => {
  const [verifyotpMutationError, setverifyotpMutationError] = useState<
    string | null
  >(null);

  const verifyotpSchema = yup.object().shape({
    otp: yup
      .string()
      .matches(/^\d{4}$/, "OTP must be a 4-digit number")
      .required("OTP is required"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(verifyotpSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log(data);
    verifyotpMutation.mutate(data);
  };

  const verifyotpMutation = useMutation({
    mutationFn: verifyotpUser.verifyOtp,
    onSuccess: (data: any) => {
      console.log(data);
      //do something after verifying move it to the main page save access token and user details
      toast.success(data?.data?.message);
    },
    onError: (error: any) => {
      console.log({ error });
      setverifyotpMutationError(error?.data?.error?.detail);
      toast.error(
        error?.response?.data?.message || error?.response?.data?.errors,
      );
    },
  });

  return {
    verifyotpMutationError,
    verifyotpMutation,
    register,
    handleSubmit,
    errors,
    onSubmit,
    setValue,
    touchedFields,
    formState,
  };
};
export default useVerifyOtp;
