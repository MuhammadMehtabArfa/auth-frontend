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
import useNewPassword from "@/hooks/auth/usenewpassword";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const newpassword = () => {
  const searchParams = useSearchParams();
  const rToken = searchParams.get("token");
  const {
    register,
    passwordMutation,
    formState: { errors },
    handleSubmit,
    onSubmit,
  } = useNewPassword();

  const handleFormSubmit = (data: any) => {
    if (!rToken) {
      toast.error("No token found in the URL.");
      return;
    }
    onSubmit({ ...data, rToken });
  };

  return (
    <>
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Please enter your new password
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
            <PasswordInput
              {...register("password")}
              disabled={passwordMutation?.isPending}
              label="New Password"
              placeholder="Enter new password"
              required
              mt="md"
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
              disabled={passwordMutation?.isPending}
            >
              {passwordMutation?.isPending ? "...Loading" : "Continue"}
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default newpassword;
