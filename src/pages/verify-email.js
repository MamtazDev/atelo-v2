import AuthenticationLayout from "@/Layout/AuthenticationLayout";
import React from "react";
import verify from "../assets/verify.png";
import Link from "next/link";

const VerifyEmail = () => {
  return (
    <AuthenticationLayout>
      <div className="mx-auto max-w-[420px] p-[10px] mt-5 md:mt-32">
        <div className="flex justify-center items-center mb-7">
          <img src={verify.src} alt="verify Email" />
        </div>

        <div className="text-center mb-[60px]">
          <h2 className="text-fs_34 text-c_33  mb-4">Verify Your Email</h2>
          <p className="text-c_85 text-fs_18 font-medium text-center">
            Check your email & click the link to activate your account
          </p>
        </div>

        <div
          className="flex flex-col md:flex-row justify-center  gap-3 md:gap-6 items-center"
          id="bgPosition"
        >
          <button
            type="submit"
            className="w-full py-[16px] mb-[30px] whitespace-nowrap"
          >
            Resend Email
          </button>
          <Link href="/sign-up" className="w-full">
            <button
              className="w-full py-[16px] mb-[30px] whitespace-nowrap "
              style={{ color: "#747985", background: "#EDEDED" }}
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </AuthenticationLayout>
  );
};

export default VerifyEmail;
