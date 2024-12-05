'use client'
import {
    Button,
    Container,
    Paper,
    PasswordInput,
    TextInput,
    Title,
} from '@mantine/core';
import classes from './AuthenticationTitle.module.css';
import React from 'react'
import useSignUp from '@/hooks/auth/usesignup';



const signup = () => {
    const { register,
        handleSubmit,
        onSubmit,
        signupMutation } = useSignUp();
    return (
        <div>
            <Container size={420} my={40}>
                <Title ta="center" className={classes.title}>
                    Create your Account
                </Title>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <form onSubmit={handleSubmit(onSubmit)}> <TextInput label="Email" placeholder="abc@gmail.com" required
                        disabled={signupMutation?.isPending}
                        {...register("email")}
                    />
                        <TextInput label="username" placeholder="Repeat Password" required mt="md"
                
                            {...register("username")}
                        />
                        <PasswordInput label="Password" placeholder=" password" required mt="md"
                            disabled={signupMutation?.isPending}
                            {...register("password")}
                        />

                        <Button fullWidth  mt="xl">
                            Sign up
                        </Button></form>

                </Paper>
            </Container>
        </div>
    )
}

export default signup
