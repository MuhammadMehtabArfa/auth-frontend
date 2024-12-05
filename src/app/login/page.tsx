"use client";
import React, { useState } from "react";

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
import Link from "next/link";
import classes from "./AuthenticationTitle.module.css";
import uselogin from "@/hooks/auth/uselogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    loginMutation,
    formState: { errors },
  } = uselogin();

  return (
    <div>
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{" "}
          <Link href="/signup" passHref>
            <Anchor size="sm" component="button">
              Create account
            </Anchor>
          </Link>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              type="email"
              label="Email"
              placeholder="abc@gmail.com"
              disabled={loginMutation?.isPending}
              {...register("email")}
              required
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
            <PasswordInput
              label="Password"
              placeholder="Your password"
              disabled={loginMutation?.isPending}
              {...register("password")}
              required
              mt="md"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
            <Group align="center" mt="lg">
              <Checkbox label="Remember me" />
              <Link href="/forgotpassword" passHref>
                <Anchor component="button" size="sm">
                  Forgot password?
                </Anchor>
              </Link>
            </Group>
            <Button type="submit" fullWidth mt="xl">
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
