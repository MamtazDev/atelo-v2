import React from "react";
import logo from "../assets/loginlogo.png";
import logo1 from "../assets/loginlogo1.png";
import profile from "../assets/profileinfo.png";
import border from "../assets/border-line.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="hidden md:block">
        {/* <!--Nav--> */}
        <nav aria-label="menu nav" className="sticky bg-white shadow-menuItems pt-2 md:pt-1 pb-1 px-1 mt-0  w-full z-20 top-0">
          <div className="flex flex-wrap items-center h-[100px]">
            <div className="flex flex-shrink nav-brand">
              <Link href="/" className=" ml-6">
                <img src={logo.src} alt="nav-logo" />
              </Link>
            </div>

            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start px-2">
              <Link
                href="/"
                className="flex flex-wrap rounded-full items-center gap-4 text-c_33 text-lg font-semibold"
              >
                <img
                  className="rounded-full h-[50px] w-[50px]"
                  src={profile.src}
                  alt="logo"
                />
                Restaurant Name
              </Link>
            </div>

            <div className="flex w-full md:w-1/3 md:justify-end mr-10">
              <button className="bg-c_54 px-14 py-4 hover:opacity-90 text-lg font-semibold text-white rounded-xl">
                Log Out
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* <!-- Mobile Nav bar Start --> */}
      <div className="block md:hidden">
        <div className="drawer px-[10px] py-[15px]">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex justify-between gap-2 items-center">
            <div>
              {/* <!-- Page content here --> */}
              <label htmlFor="my-drawer" className="drawer-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div>
              <Link href="/">
                <img src={logo.src} alt="LOGO" />
              </Link>
            </div>
            <div></div>
          </div>
          <div className="drawer-side z-30">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu side-nav p-4 w-80 bg-input_bg  min-h-screen">
              <li className="py-3">
                <Link
                  className="text-center flex justify-center"
                  href="/"
                >
                  <img src={logo1.src} alt="LOGO" />
                </Link>
              </li>
              <li className="text-center py-3">
                <Link
                  href="information.html"
                  className="flex justify-start px-2 items-center gap-4 text-c_33 text-lg font-semibold"
                >
                  <img
                    className="rounded-full h-[50px] w-[50px]"
                    src={profile.src}
                    alt="logo"
                  />
                  Restaurant Name
                </Link>
              </li>
              <li className="text-center py-3 bg-input_bg hover:bg-c_f5 relative">
                <Link
                  href="profile"
                  className="py-1 md:py-3 text-center flex flex-col"
                >
                  <span className="nav-icon inline-block mb-[12px]">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Frame" clipPath="url(#clip0_586_949)">
                        <g id="Group">
                          <path
                            id="Vector"
                            d="M42.6777 7.32227C37.9559 2.60059 31.6776 0 25 0C18.3224 0 12.0441 2.60049 7.32227 7.32227C2.60059 12.0441 0 18.3224 0 25C0 31.6776 2.60049 37.9559 7.32227 42.6777C12.0441 47.3994 18.3224 50 25 50C31.6776 50 37.9559 47.3995 42.6777 42.6777C47.3994 37.9559 50 31.6776 50 25C50 18.3224 47.3995 12.0441 42.6777 7.32227ZM10.8501 41.9235C11.6757 34.8205 17.7826 29.3366 25 29.3366C28.8047 29.3366 32.3826 30.8189 35.0738 33.5099C37.3474 35.7838 38.7813 38.7527 39.1502 41.9231C35.3165 45.134 30.3803 47.0703 25 47.0703C19.6197 47.0703 14.6839 45.1344 10.8501 41.9235ZM25 26.319C20.8134 26.319 17.4068 22.9126 17.4068 18.726C17.4068 14.539 20.8135 11.1328 25 11.1328C29.1865 11.1328 32.5932 14.539 32.5932 18.726C32.5932 22.9126 29.1866 26.3191 25 26.3191V26.319ZM41.6718 39.4467C40.919 36.4154 39.3541 33.6467 37.1452 31.4385C35.3447 29.6379 33.2146 28.2871 30.8914 27.4406C33.6842 25.5467 35.5229 22.3469 35.5229 18.726C35.5229 12.9238 30.8021 8.20312 25 8.20312C19.1979 8.20312 14.4771 12.9238 14.4771 18.726C14.4771 22.3488 16.3174 25.5497 19.1124 27.4434C16.975 28.2223 14.9972 29.4266 13.2954 31.0119C10.8311 33.3068 9.11982 36.2331 8.32637 39.4443C4.96602 35.5705 2.92969 30.5187 2.92969 25C2.92969 12.8304 12.8304 2.92969 25 2.92969C37.1696 2.92969 47.0703 12.8304 47.0703 25C47.0703 30.5198 45.0332 35.5728 41.6718 39.4467Z"
                            fill="#747985"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_586_949">
                          <rect width="50" height="50" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span className="nav-title pb-1 md:pb-0 block text-fs_18 font-semibold text-text_light">
                    Profile
                  </span>
                </Link>
                <img
                  className="border-line absolute left-1/2 -translate-x-1/2 bottom-0"
                  src={border.src}
                  alt="logo"
                />
              </li>

              <li className="text-center py-3 bg-input_bg hover:bg-c_f5 relative">
                <Link
                  href="/menus"
                  className="py-1 md:py-3 text-center flex flex-col"
                >
                  <span className="nav-icon inline-block mb-[12px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_719_96)">
                        <path
                          d="M40.0215 9.27784H37.5801V3.4171C37.5801 2.32365 37.0511 1.28829 36.165 0.647571C35.279 0.00684786 34.13 -0.171375 33.0915 0.171203L9.16563 8.06241C8.48213 8.28693 7.88709 8.72174 7.46553 9.30471C7.04397 9.88768 6.81746 10.589 6.81836 11.3084V46.582C6.81836 48.4667 8.35166 50 10.2363 50H40.0215C41.9062 50 43.4395 48.4667 43.4395 46.582V12.6958C43.4395 10.8112 41.9062 9.27784 40.0215 9.27784ZM40.5098 46.582C40.5098 46.8513 40.2907 47.0703 40.0215 47.0703H10.2363C9.96709 47.0703 9.74805 46.8513 9.74805 46.582V12.6958C9.74805 12.4266 9.96709 12.2075 10.2363 12.2075H40.0215C40.2907 12.2075 40.5098 12.4266 40.5098 12.6958V46.582ZM34.0092 2.95343C34.2154 2.88546 34.3728 2.96691 34.4483 3.0215C34.5238 3.07609 34.6505 3.20001 34.6505 3.4171V9.27794H14.8338L34.0092 2.95343Z"
                          fill="#747985"
                        />
                        <path
                          d="M15.3633 29.1485H34.8945C35.7035 29.1485 36.3594 28.4927 36.3594 27.6837C36.3594 26.8747 35.7035 26.2188 34.8945 26.2188H34.4702C33.8388 22.1761 30.6365 18.9738 26.5938 18.3424V17.6084C26.5938 16.7994 25.9379 16.1436 25.1289 16.1436C24.3199 16.1436 23.6641 16.7994 23.6641 17.6084V18.3424C19.6213 18.9738 16.419 22.1761 15.7876 26.2188H15.3633C14.5543 26.2188 13.8984 26.8747 13.8984 27.6837C13.8984 28.4927 14.5543 29.1485 15.3633 29.1485ZM25.1289 21.1585C28.2234 21.1585 30.8217 23.3239 31.4884 26.2188H18.7694C19.4361 23.3239 22.0345 21.1585 25.1289 21.1585ZM15.9313 33.106C15.1224 33.106 14.4665 33.7618 14.4665 34.5708C14.4665 35.3798 15.1224 36.0356 15.9313 36.0356H22.9626C23.7716 36.0356 24.4274 35.3798 24.4274 34.5708C24.4274 33.7618 23.7716 33.106 22.9626 33.106H15.9313ZM34.5283 38.9653H15.7295C14.9205 38.9653 14.2646 39.6212 14.2646 40.4302C14.2646 41.2392 14.9205 41.895 15.7295 41.895H34.5283C35.3373 41.895 35.9932 41.2392 35.9932 40.4302C35.9932 39.6212 35.3373 38.9653 34.5283 38.9653Z"
                          fill="#747985"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_719_96">
                          <rect width="50" height="50" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span className="nav-title pb-1 md:pb-0 block text-fs_18 font-semibold text-text_light">
                    Menus
                  </span>
                </Link>
                <img
                  className="border-line absolute left-1/2 -translate-x-1/2 bottom-0"
                  src={border.src}
                  alt="logo"
                />
              </li>

              <li className="text-center py-3 bg-input_bg hover:bg-c_f5 relative">
                <Link href="/analytics" className="py-1 md:py-3 text-center flex flex-col">
                  <span className="nav-icon inline-block mb-[12px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                    >
                      <path
                        d="M41.8 4.60012C43.792 4.60012 45.4 6.20812 45.4 8.20012V41.8001C45.4 43.7921 43.792 45.4001 41.8 45.4001H8.2C6.208 45.4001 4.6 43.7921 4.6 41.8001V8.20012C4.6 6.20812 6.208 4.60012 8.2 4.60012H41.8ZM41.8 1.00012H8.2C4.216 1.00012 1 4.21612 1 8.20012V41.8001C1 45.7841 4.216 49.0001 8.2 49.0001H41.8C45.784 49.0001 49 45.7841 49 41.8001V8.20012C49 4.21612 45.784 1.00012 41.8 1.00012Z"
                        fill="#747985"
                      />
                      <path
                        d="M24.9996 38.7997C24.0156 38.7997 23.1996 37.9837 23.1996 36.9997V15.3997C23.1996 14.4157 24.0156 13.5997 24.9996 13.5997C25.9836 13.5997 26.7996 14.4157 26.7996 15.3997V36.9997C26.7996 37.9837 25.9836 38.7997 24.9996 38.7997ZM15.3996 38.7997C14.4156 38.7997 13.5996 37.9837 13.5996 36.9997V27.3997C13.5996 26.4157 14.4156 25.5997 15.3996 25.5997C16.3836 25.5997 17.1996 26.4157 17.1996 27.3997V36.9997C17.1996 37.9837 16.3836 38.7997 15.3996 38.7997ZM34.5996 38.7997C33.6156 38.7997 32.7996 37.9837 32.7996 36.9997V22.5997C32.7996 21.6157 33.6156 20.7997 34.5996 20.7997C35.5836 20.7997 36.3996 21.6157 36.3996 22.5997V36.9997C36.3996 37.9837 35.5836 38.7997 34.5996 38.7997Z"
                        fill="#747985"
                      />
                    </svg>
                  </span>
                  <span className="nav-title pb-1 md:pb-0 block text-fs_18 font-semibold text-text_light">
                    Analytics
                  </span>
                </Link>
                <img
                  className="border-line absolute left-1/2 -translate-x-1/2 bottom-0"
                  src={border.src}
                  alt="logo"
                />
              </li>
              <li>
                <div className="flex justify-center items-center">
                  <button className="bg-c_54 px-14 py-4 hover:opacity-90 text-lg font-semibold text-white rounded-lg">
                    Log Out
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Mobile Nav bar End --> */}
    </div>
  );
};

export default Header;
