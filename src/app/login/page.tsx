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

const login = () => {
    return (
        <div>
            <Container size={420} my={40}>
                <Title ta="center" className={classes.title}>
                    Welcome back!
                </Title>
                <Text c="dimmed" size="sm" ta="center" mt={5}>
                    Do not have an account yet?{' '}
                   <Link href={"/signup"}><Anchor size="sm" component="button">
                        Create account
                    </Anchor></Link> 
                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Email" placeholder="abc@gmail.com" required />
                    <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                    <Group justify="space-between" mt="lg">
                        <Checkbox label="Remember me" />
                       <Link href={'/forgotpassword'}><Anchor component="button" size="sm">
                            Forgot password?
                        </Anchor></Link> 
                    </Group>
                    <Button fullWidth mt="xl">
                        Sign in
                    </Button>
                </Paper>
            </Container>
        </div>
    )
}

export default login
