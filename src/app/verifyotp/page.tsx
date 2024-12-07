"use client";
import { Button, Container, Paper, Title } from "@mantine/core";
import OtpInput from "react-otp-input";
import React, { useState } from "react";
import Link from "next/link";
import useVerifyOtp from "@/hooks/auth/useverifyotp";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
// mui

const verifyOtp = () => {
  const [otp, setOtp] = useState("");
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
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
        <Title ta="center" className="text-lg">
          Put 4 digit otp sent to your email below
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <OtpInput
            inputStyle={{
              width: "50px",
              height: "50px",
              margin: "0 10px",
              fontSize: "18px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              textAlign: "center",
              outline: "none",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            value={otp}
            onChange={(otp) => {
              setOtp(otp);
              register("otp").onChange({ target: { name: "otp", value: otp } });
            }}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
          {errors.otp && (
            <span className="text-red-500 text-xs">{errors.otp.message}</span>
          )}
          <br />

          <Button
            type="submit"
            fullWidth
            mt="xl"
            onClick={handleSubmit((data) => {
              if (email) {
                onSubmit({ ...data, otp, email });
              } else {
                toast.error("Email is Required");
              }
            })}
            disabled={verifyotpMutation?.isPending}
          >
            {verifyotpMutation?.isPending ? "...Loading" : "continue"}
          </Button>
          <Button fullWidth mt="md">
            <Link href={"/sendOtp"} className="">
              {" "}
              Resent OTP
            </Link>
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default verifyOtp;
