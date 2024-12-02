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

import React from 'react'

const newpassword = () => {
    return (
        <div>
            <Container size={420} my={40}>
                <Title ta="center" className={classes.title}>
                    Welcome back!
                </Title>
                <Text c="dimmed" size="sm" ta="center" mt={5}>
                    Please enter your new password

                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">

                    <PasswordInput label="Password" placeholder=" password" required mt="md" />
                    <PasswordInput label="Confirm Password" placeholder="Repeat Password" required mt="md" />
                    <Button fullWidth mt="xl">
                        Continue
                    </Button>
                </Paper>
            </Container>
        </div>
    )
}

export default newpassword
