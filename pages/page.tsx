
"use client";
import React, { useState, useEffect } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [otpSent, setOtpSent] = useState(false);

  const router = useRouter();

  useEffect(() => {
    (window as any).recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "normal",
        callback: (response: any) => {},
        "expired-callback": () => {},
      }
    );
  }, []);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = async () => {
    try {
      const formattedPhoneNumber = `+91${phoneNumber}`;
      const confirmation = await signInWithPhoneNumber(
        auth,
        formattedPhoneNumber,
        (window as any).recaptchaVerifier
      );
      setConfirmationResult(confirmation);
      setOtpSent(true);
      alert("OTP sent successfully");
    } catch (error) {
      console.error("Error sending OTP", error);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      await confirmationResult.confirm(otp);
      setOtp("");
      alert("OTP verified successfully");
      router.push("/test");
    } catch (error) {
      console.error("Error verifying OTP", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-500  text-white">
      <h1 className=" text-4xl text-white font-Sevillana">Deon's To-do List</h1>
      <div className="border-gray-800 p-5 mr-8 ml-8 rounded-xl shadow-xl w-[90%] bg-zinc-500 max-w-md">
        {!otpSent && <div id="recaptcha-container" className="mb-4"></div>}
        <input
          type="tel"
          placeholder="Enter Phone Number (without +91)"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          readOnly={otpSent} // Make input read-only when OTP is sent
          className={`w-full px-4 py-2 mb-4 rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${otpSent ? "bg-gray-800" : ""}`} // Adjust background color when read-only
        />
        {otpSent && (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOtpChange}
            className="w-full px-4 py-2 mb-4 rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-red-500"
          />
        )}
        <Button
          onClick={otpSent ? handleOtpSubmit : handleSendOtp}
          className="w-full text-black font-bold"
          style={{  
            background: otpSent
              ? "linear-gradient(to right, #C8CFA0, #C8CFA0)" // Green to Blue gradient for "Verify OTP"
              : "linear-gradient(to right, #C8CFA0, #C8CFA0)", // Pink to Yellow gradient for "Send OTP"
          }}
        >
          {otpSent ? "Verify OTP" : "Send OTP"}
        </Button>
      </div>
      <footer className="mt-8">
        <p className="text-blue-500">Made by Deon Menezes</p>
      </footer>
    </div>
  );
}


