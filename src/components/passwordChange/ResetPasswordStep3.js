import React from "react";
import lock from "../../assets/lock.png";
const ResetPasswordStep3 = ({ setStep }) => {
  return (
    <form action="">
      <input
        type="password"
        className="w-full bg-input_bg border border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_60 mb-5"
        placeholder="Password"
        style={{ backgroundImage: `url(${lock.src})` }}
      />

      <input
        type="password"
        className="w-full bg-input_bg border border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_60 mb-[60px]"
        placeholder="Re-type Password"
        style={{ backgroundImage: `url(${lock.src})` }}
      />

      <div className="text-center">
        <button
          onClick={() => setStep(3)}
          type="submit"
          className="w-[200px] py-[16px] whitespace-nowrap"
        >
          Set Password
        </button>
      </div>
    </form>
  );
};

export default ResetPasswordStep3;
