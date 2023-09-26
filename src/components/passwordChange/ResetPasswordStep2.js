import React from "react";
import enter from "../../assets/enter.png";

const ResetPasswordStep2 = ({setStep}) => {
  return (
    <form action="">
      <input
        type="text"
        className="w-full bg-input_bg border border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_60 mb-[60px]"
        placeholder="Enter Code"
        style={{ backgroundImage: `url(${enter.src})` }}
      />

      <div className="text-center">
        <button
          onClick={() => setStep(2)}
          type="submit"
          className="w-[200px] py-[16px] whitespace-nowrap"
        >
          Verify
        </button>
      </div>
    </form>
  );
};

export default ResetPasswordStep2;
