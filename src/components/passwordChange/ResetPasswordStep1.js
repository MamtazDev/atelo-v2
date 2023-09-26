import React from 'react';
import email from "../../assets/email.png";

const ResetPasswordStep1 = ({setStep}) => {
    return (
        <form action="">
        <input
          type="email"
          className="w-full bg-input_bg block border border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_60 mb-[60px]"
          placeholder="Email Address"
          style={{ backgroundImage: `url(${email.src})` }}
        />

        <div className="text-center">
          <button
            onClick={() => setStep(1)}
            type="submit"
            className="w-[200px] py-[16px] whitespace-nowrap"
          >
            Reset
          </button>
        </div>
      </form>
    );
};

export default ResetPasswordStep1;