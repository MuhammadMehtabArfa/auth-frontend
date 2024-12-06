import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { verifyotpUser } from "@/services/verifyotp";


const useVerifyOtp = () => {
    const [verifyotpMutationError, setverifyotpMutationError] = useState<string | null>(null);


    const verifyotpSchema = yup.object().shape({
        otp: yup
            .string()
            .matches(/^\d{4}$/, 'OTP must be a 4-digit number')
            .required('OTP is required'),
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
        verifyotpMutation.mutate(data);
        console.log(data)
    };

    const verifyotpMutation = useMutation({
        mutationFn: verifyotpUser.verifyOtp,
        onSuccess: (data: any) => {
            console.log(data)

        },
        onError: (error: any) => {
            console.log({ error })
            setverifyotpMutationError(error?.data?.error?.detail);

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
        formState
    };
};
export default useVerifyOtp;