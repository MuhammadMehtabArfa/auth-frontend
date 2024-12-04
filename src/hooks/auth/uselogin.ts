import { useState } from "react";
import { loginUser } from "@/services/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import useAccount from "./useAccount";


const uselogin = () => {
    const [loginMutationError, setLoginMutationError] = useState<any>(null);
    // const { setLoggedIn } = useAccount();

    const loginSchema = yup.object().shape({
        email: yup.string()
            .email('Invalid email address')
            .required('Email is required')
            .test('valid-domain', 'Email must contain a domain', (value) => {
                return /@.+\./.test(value);
            }),
        password: yup
            .string()
            .required("Password is required")
        // .typeError("")
        // .min(8, "Password must be at least 8 characters")
        // .max(20, "Password must be at most 20 characters")
        // .matches(/[a-z]+/, "Password must contain at least one lowercase letter")
        // .matches(/[A-Z]+/, "Password must contain at least one uppercase letter")
        // .matches(/[@$!%*#?&]+/, "Password must contain at least one special character")
        // .matches(/\d+/, "Password must contain at least one number"),

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
        console.log(data)
    };

    const loginMutation = useMutation({
        mutationFn: loginUser.login,
        onSuccess: (data: any) => {
            console.log(data)
            // if (data?.isVerified === false) {
            //     const email = getValues('email');
            //     const verify = format({
            //         pathname: ("/otp"),
            //         query: { email }
            //     });
            //     router.push(verify);
            // setLoggedIn({
            //              userDetails: data?.user,
            //              accessToken: data?.accessToken, });
            // }
            // else {

            //     setLoggedIn({
            //         userDetails: data?.user,
            //         accessToken: data?.accessToken,
            //     });
            // }

        },
        onError: (error: any) => {
            console.log({ error })
            setLoginMutationError(error?.data?.error?.detail);

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
        formState
    };
};
export default uselogin;