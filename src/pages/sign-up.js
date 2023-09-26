import AuthenticationLayout from "@/Layout/AuthenticationLayout";
import React from "react";
import business from "../assets/business.png";
import name from "../assets/nameICon.png";
import email from "../assets/email.png";
import lock from "../assets/lock.png";
import Link from "next/link";

const SignUp = () => {
  return (
    <AuthenticationLayout>
      <div className="mx-auto mt-4 max-w-[420px] p-2.5" id="bgPosition">
        <form action="">
          <p className="text-fs_18 text-c_54 font-[400]  mb-3.5"> Welcome to Menufy! </p>

          <h2 className="text-fs_34 text-c_33  mb-7">Sign Up</h2>
          
          <input type="text" className="w-full bg-input_bg border border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_60 mb-6" placeholder="Business Name" style={{ backgroundImage: `url(${business.src})` }} />

          <input type="text" className="w-full bg-input_bg border border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_60 mb-6" placeholder="Username" style={{ backgroundImage: `url(${name.src})` }} />

          <input type="email" className="w-full bg-input_bg border border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_60 mb-6" placeholder="Email Address" style={{ backgroundImage: `url(${email.src})` }} />

          <input type="password" className="w-full bg-input_bg border border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_60 mb-6" placeholder="Password" style={{ backgroundImage: `url(${lock.src})` }} />

          <input type="password" className="w-full bg-input_bg border border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_60 mb-6" placeholder="Repeat Password" style={{ backgroundImage: `url(${lock.src})` }} />

          <Link href="/verify-email">
            <button type="submit" className="w-full py-[16px] whitespace-nowrap"> Sign Up </button>
          </Link>
        </form>

        <p className="text-c_85 text-fs_18 mt-8 font-medium  text-center"> Already have an account?{" "}
          <Link href="/" className="text-c_54 font-bold"> Log In </Link>
        </p>
      </div>
    </AuthenticationLayout>
  );
};

export default SignUp;
