"use client";
import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./AuthenticationTitle.module.css";
import React from "react";
import useSignUp from "@/hooks/auth/usesignup";
import { useRouter } from "next/navigation";
const signup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    onSubmit,
    signupMutation,
    formState: { errors },
  } = useSignUp();
  //just imported the errors messga eand display it if it is not submitting it will show yoy the reason
  // and on signup button add type submit it starts working
  const handleSignup = async (data: any) => {
    try {
      await onSubmit(data); // Call your existing onSubmit logic
      await router.push("/verifyotp"); // Navigate to Verify OTP page on success
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };


  return (
    <div>
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Create your Account
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={handleSubmit(handleSignup)}>
            {" "}
            <TextInput
              label="Email"
              placeholder="abc@gmail.com"
              required
              disabled={signupMutation?.isPending}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
            <TextInput
              label="username"
              placeholder="Repeat Password"
              required
              mt="md"
              {...register("username")}
            />
            {errors.username && (
              <span className="text-red-500 text-xs">
                {errors.username.message}
              </span>
            )}
            <PasswordInput
              label="Password"
              placeholder=" password"
              required
              mt="md"
              disabled={signupMutation?.isPending}
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
            <Button type="submit" fullWidth mt="xl">
              Sign up
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default signup;
