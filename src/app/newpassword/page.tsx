'use client'
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
} from '@mantine/core';
import Link from 'next/link';
import signup from '../signup/page';
import classes from './AuthenticationTitle.module.css';
import useforgotPassword from '@/hooks/auth/useforgot';

import React from 'react'
import useNewPassword from '@/hooks/auth/usenewpassword';

const newpassword = () => {
    const {
        register,
        passwordMutation,
        formState: { errors },
        handleSubmit,
        onSubmit

    } = useNewPassword()

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
                    <form action="" onSubmit={handleSubmit(onSubmit)}> <TextInput
                        {...register("rToken")}
                        label="Recovery Token"
                        disabled={passwordMutation?.isPending}
                        placeholder="Enter recovery token"
                        required
                        mt="md"
                    />{errors.rToken && (
                        <span className="text-red-500 text-xs">
                            {errors.rToken.message}
                        </span>
                    )}
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
                        <Button type='submit' fullWidth mt="xl">
                            Continue
                        </Button></form>


                </Paper>
            </Container>
        </>
    )
}

export default newpassword
