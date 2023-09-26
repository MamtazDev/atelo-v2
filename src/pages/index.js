import Head from "next/head";
import styles from "@/styles/Home.module.css";
import AuthenticationLayout from "@/Layout/AuthenticationLayout";
import username from "../assets/nameICon.png";
import lock from "../assets/lock.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>menufy</title>
        <meta name="description" content="menufy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AuthenticationLayout>
          <div
            className="mx-auto mt-[30px] md:mt-[126px] max-w-[420px] p-2.5"
            id="bgPosition"
          >
            <div className="text-center md:text-start mb-7 md:mb-[30px]">
              <h2 className="text-fs_34 text-c_33">Log In</h2>
            </div>

            <form>
              <input
                type="text"
                className="w-full bg-input_bg border  border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_60 mb-6"
                placeholder="Username"
                style={{ backgroundImage: `url(${username.src})` }}
              />

              <input
                type="password"
                className="w-full bg-input_bg border border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_60 mb-7"
                placeholder="Password"
                style={{ backgroundImage: `url(${lock.src})` }}
              />

              <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-[60px]">
                <div className="flex justify-center items-center gap-1">
                  <input
                    id="remeberMe"
                    type="checkbox"
                    defaultChecked="checked"
                    className="h-[14px] w-[14px] accent-c_54"
                  />
                  <label htmlFor="remeberMe" className="text-fs_16 text-c_85">
                    Remember me
                  </label>
                </div>
                <div>
                  <Link href="/reset-password" className="text-fs_16 text-c_54">
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <Link href="/profile" className="text-center">
                <button
                  type="submit"
                  className="w-full py-[16px] mb-7 whitespace-nowrap"
                >
                  Log In
                </button>
              </Link>
            </form>

            <p className="text-c_85 text-fs_18 text-center">
              New to Menufy?{" "}
              <Link href="/sign-up" className="text-c_54 font-bold">
                Sign Up!
              </Link>
            </p>
          </div>
        </AuthenticationLayout>
      </main>
    </>
  );
}
