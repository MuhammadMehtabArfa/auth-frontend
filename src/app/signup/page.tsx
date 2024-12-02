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
import classes from './AuthenticationTitle.module.css';

import React from 'react'

const signup = () => {
    return (
        <div>
            <Container size={420} my={40}>
                <Title ta="center" className={classes.title}>
                    Create your Account
                </Title>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Email" placeholder="abc@gmail.com" required />
                    <PasswordInput label="Password" placeholder=" password" required mt="md" />
                    <PasswordInput label="Confirm Password" placeholder="Repeat Password" required mt="md" />

                    <Button fullWidth mt="xl">
                        Sign up
                    </Button>
                </Paper>
            </Container>
        </div>
    )
}

export default signup
