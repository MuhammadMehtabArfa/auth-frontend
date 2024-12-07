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

  return (
    <div>
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Create your Account
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={handleSubmit(onSubmit)}>
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
              disabled={signupMutation?.isPending}
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
            <Button
              type="submit"
              fullWidth
              mt="xl"
              disabled={signupMutation?.isPending}
            >
              {signupMutation?.isPending ? "...Loading" : "Sign up"}
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default signup;
