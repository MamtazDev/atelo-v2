import React from "react";
import bg from "../assets/loginBg.png";
import logo from "../assets/loginlogo.png";
import Link from "next/link";

const AuthenticationLayout = ({ children }) => {
  return (
    <section>
      <div className="h-[100vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-3.5 h-full">
          <div className="h-full">
            <div className="flex justify-center md:justify-start items-center">
              <Link href="/">
                <img className="md:pt-10 md:pl-16" src={logo.src} alt="Logo" />
              </Link>
            </div>
            {children}
          </div>
          <div className="h-full  m-auto flex items-center">
            <img
              className=" h-auto max-w-full rounded-3xl"
              src={bg.src}
              alt="Log In"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticationLayout;
