"use client";
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./AuthenticationTitle.module.css";
import React from "react";
import Link from "next/link";
import useforgotPassword from "@/hooks/auth/useforgot";

const forgotpassword = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    forgotPasswordMutation,
    formState: { errors },
  } = useforgotPassword();
  return (
    <div>
      <Container size={420} my={40}>
        <Title ta="center" className="text-lg">
          Enter your valid email address
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              disabled={forgotPasswordMutation?.isPending}
              {...register("email")}
              label="Email"
              placeholder="abc@gmail.com"
              required
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}

            <Button
              type="submit"
              fullWidth
              mt="xl"
              disabled={forgotPasswordMutation?.isPending}
            >
              {forgotPasswordMutation?.isPending ? "...Loading" : "Send OTP"}
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default forgotpassword;
