'use client'
import { Input as BaseInput } from '@mui/base/Input';
import { Box, styled } from '@mui/system';
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
import OTPInput from '@/components/Otp';
import React from 'react'
import Link from 'next/link';


// mui


const verifyOtp = () => {
    return (
        <div>
            <Container size={420} my={40}>
                <Title ta="center" className='text-lg'>
                    Put 4 digit otp sent to your email below
                </Title>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <OTPInput/>
                    <br />
                    

                    <Button fullWidth mt="xl">
                        continue
                    </Button>
                    <Button fullWidth mt="md">
                    <Link href={'/sendOtp'} className=''> Resent OTP</Link>
                    </Button>

                </Paper>
            </Container>
        </div>
    )
}

export default verifyOtp
