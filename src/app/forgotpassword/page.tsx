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
import Link from 'next/link';

const forgotpassword = () => {
  return (
    <div>
      <Container size={420} my={40}>
        <Title ta="center" className='text-lg'>
          Enter your valid email address
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="abc@gmail.com" required />


          <Link href={'/verifyotp'}> <Button fullWidth mt="xl">
            Send OTP

          </Button></Link>
        </Paper>
      </Container>
    </div>
  )
}

export default forgotpassword
