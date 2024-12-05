import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { signupUser } from "@/services/signup";


const useSignUp = () => {
    const [signupMutationError, setsignupMutationError] = useState<string | null>(null);
    // const { setLoggedIn } = useAccount();

    const signupSchema = yup.object().shape({
        email: yup.string()
            .email('Invalid email address')
            .required('Email is required')
            .test('valid-domain', 'Email must contain a domain', (value) => {
                return /@.+\./.test(value);
            }),
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
            username: yup.string().required("Username is required"),

    });

    const {
        register,
        handleSubmit,
        setValue,
        formState,
        formState: { errors, touchedFields },
    } = useForm({
        resolver: yupResolver(signupSchema),
        mode: "onBlur",
    });

    const onSubmit = (data: any) => {
        signupMutation.mutate(data);
        console.log(data)
    };

    const signupMutation = useMutation({
        mutationFn: signupUser.signUp,
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
            setsignupMutationError(error?.data?.error?.detail);

        },
    });

    return {
        signupMutationError,
        signupMutation,
        register,
        handleSubmit,
        errors,
        onSubmit,
        setValue,
        touchedFields,
        formState
    };
};
export default useSignUp;