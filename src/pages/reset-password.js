import AuthenticationLayout from "@/Layout/AuthenticationLayout";
import ResetPasswordHeader from "@/utils/ResetPasswordHeader";
import React, { useState } from "react";
import passwordChange from "../assets/passwordChange.png";
import ResetPasswordStep1 from "@/components/passwordChange/ResetPasswordStep1";
import ResetPasswordStep2 from "@/components/passwordChange/ResetPasswordStep2";
import ResetPasswordStep3 from "@/components/passwordChange/ResetPasswordStep3";

const ResetPassword = () => {
  const [step, setStep] = useState(0);
  return (
    <AuthenticationLayout>
      <div className="mx-auto max-w-[420px] p-2.5 mt-5 md:mt-32" id="bgPosition">
        {step === 0 && (
          <>
            <ResetPasswordHeader
              title="Reset Password"
              subtitle=" To reset password, type in your email address and click the reset button"
            />
            <ResetPasswordStep1 setStep={setStep} />
          </>
        )}

        {step === 1 && (
          <>
            <ResetPasswordHeader
              title="Reset Password"
              subtitle="An email with a verification code was just sent to <span className='font-semibold'> yourname@gmail.com</span>"
            />

            <ResetPasswordStep2 setStep={setStep} />
          </>
        )}

        {step === 2 && (
          <>
            <ResetPasswordHeader
              title="New Password"
              subtitle="Please set a new password"
            />
            <ResetPasswordStep3 setStep={setStep} />
          </>
        )}
        {step === 3 && (
          <>
            <div className="flex justify-center items-center mb-[30px]">
              <img src={passwordChange.src} alt="Password Change" />
            </div>
            <ResetPasswordHeader
              title="Password Changed!"
              subtitle="Your password has been changed <br/> successfully."
            />
          </>
        )}
      </div>
    </AuthenticationLayout>
  );
};

export default ResetPassword;
