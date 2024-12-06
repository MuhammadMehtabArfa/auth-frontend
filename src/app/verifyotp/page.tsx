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
import OtpInput from 'react-otp-input';
import React, { useState } from 'react'
import Link from 'next/link';
import useVerifyOtp from '@/hooks/auth/useverifyotp';
// mui


const verifyOtp = () => {
    const [otp, setOtp] = useState('');
    const {
        register,
        handleSubmit,
        onSubmit,
        verifyotpMutation,
        formState: { errors },
    } = useVerifyOtp();


    return (
        <div>
            <Container size={420} my={40}>
                <Title ta="center" className='text-lg'>
                    Put 4 digit otp sent to your email below
                </Title>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <form onSubmit={handleSubmit(onSubmit)}><OtpInput
                        inputStyle={{
                            width: "50px",       // Width of each input box
                            height: "50px",      // Height of each input box
                            margin: "0 10px",    // Spacing between input boxes
                            fontSize: "18px",    // Font size of the input text
                            borderRadius: "8px", // Rounded corners
                            border: "1px solid #ccc", // Border styling
                            textAlign: "center", // Center align text inside the box
                            outline: "none",     // Remove default outline on focus
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for each box
                        }}
                        value={otp}

                        onChange={(otp) => setOtp(otp)}
                        numInputs={4}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...register("otp")} />}
                    />
                        {errors.otp && (
                            <span className="text-red-500 text-xs">
                                {errors.otp.message}
                            </span>
                        )}
                        <br />


                        <Button type='submit' fullWidth mt="xl">
                            continue
                        </Button>
                        <Button fullWidth mt="md">
                            <Link href={'/sendOtp'} className=''> Resent OTP</Link>
                        </Button></form>


                </Paper>
            </Container>
        </div>
    )
}

export default verifyOtp
