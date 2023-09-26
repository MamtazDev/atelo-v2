import MainLayout from "@/Layout/MainLayout";
import ExistingItem from "@/components/Modal/ExistingItem";
import Menudetails from "@/components/Modal/Menudetails";
import AddBtn from "@/utils/AddBtn";
import Link from "next/link";
import React, { useState } from "react";

const NewMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const [showExistingItem, setShowExistingItem] = useState(false);
  return (
    <MainLayout>
      <section class="w-full">
        <div class="container">
          <div class="flex-1 bg-white py-11 px-10">
            {/* <!-- MAIN HEADING --> */}
            <div class="mb-5">
              <div class="flex justify-between">
                <div class="heading">
                  <h2 class="text-2xl font-bold text-text_color">
                    My New Menu
                  </h2>

                  <p class="text-base font-normal text-c_85 flex items-center align-middle gap-5">
                    Lorem ipsum dolor sit amet
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_719_60)">
                          <path
                            d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
                            fill="#EDEDED"
                          />
                          <path
                            d="M22.9204 15.7743L22.9111 15.765L18.2254 11.076C18.2254 11.076 12.5145 16.787 9.76264 19.5959C9.41998 19.9452 9.16033 20.4313 9.00627 20.9015C8.55471 22.2821 8.18084 23.6906 7.76514 25.0851C7.65357 25.459 7.67615 25.7883 7.969 26.0672C8.24525 26.3329 8.55603 26.3422 8.91463 26.2346C10.2428 25.8361 11.5795 25.457 12.9136 25.0751C13.5996 24.8763 14.2215 24.501 14.7172 23.9867C17.3389 21.3491 22.9204 15.7743 22.9204 15.7743ZM25.6556 9.94843L24.0533 8.34605C23.6423 7.93547 23.0852 7.70483 22.5043 7.70483C21.9234 7.70483 21.3663 7.93547 20.9554 8.34605L19.1392 10.1603L23.8401 14.8625L25.6563 13.0463C26.0668 12.6353 26.2973 12.0781 26.2972 11.4972C26.2971 10.9163 26.0663 10.3593 25.6556 9.94843Z"
                            fill="#747985"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_719_60">
                            <rect width="34" height="34" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </p>
                </div>

                <div onClick={() => setShowExistingItem(true)} class="setting">
                  <button class="text-xl font-semibold text-c_85 flex gap-5 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_719_69)">
                          <path
                            d="M18.2143 8.21429H12.1429C12.0481 8.21429 11.9573 8.17666 11.8903 8.10968C11.8233 8.0427 11.7857 7.95186 11.7857 7.85714V1.78571C11.7857 0.799554 10.9862 0 10 0C9.01384 0 8.21429 0.799554 8.21429 1.78571V7.85714C8.21429 7.95186 8.17666 8.0427 8.10968 8.10968C8.0427 8.17666 7.95186 8.21429 7.85714 8.21429H1.78571C0.799554 8.21429 0 9.01384 0 10C0 10.9862 0.799554 11.7857 1.78571 11.7857H7.85714C7.95186 11.7857 8.0427 11.8233 8.10968 11.8903C8.17666 11.9573 8.21429 12.0481 8.21429 12.1429V18.2143C8.21429 19.2004 9.01384 20 10 20C10.9862 20 11.7857 19.2004 11.7857 18.2143V12.1429C11.7857 12.0481 11.8233 11.9573 11.8903 11.8903C11.9573 11.8233 12.0481 11.7857 12.1429 11.7857H18.2143C19.2004 11.7857 20 10.9862 20 10C20 9.01384 19.2004 8.21429 18.2143 8.21429Z"
                            fill="#747985"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_719_69">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Add Existing Item
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- MAIN HEADING /-END --> */}

            {/* <!-- MENU ITEMS WRAPPER --> */}
            <div class="menu-items-wrapper bg-input_bg px-[47px] py-8 rounded-2xl mb-5">
              <div class="items-wrapper lg:flex items-center gap-5 justify-center">
                <Link href="/add-item" className="w-full">
                  <AddBtn>Add Item</AddBtn>
                </Link>
                <div onClick={() => setShowModal(true)} className="w-full">
                  <AddBtn>Add Section</AddBtn>
                </div>
              </div>
            </div>
            {/* <!-- MENU ITEMS WRAPPER --> */}

            {/* <!-- archive --> */}
            <Link href="/archive" class="archive flex justify-end">
              <button class="flex gap-2 items-center">
                <span>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.875 3H4.625C3.92881 3 3.26113 3.27656 2.76884 3.76884C2.27656 4.26113 2 4.92881 2 5.625V8.25C2.00152 8.79158 2.17052 9.31943 2.48382 9.76118C2.79712 10.2029 3.23939 10.537 3.75 10.7175V23.125C3.75 23.8212 4.02656 24.4889 4.51884 24.9812C5.01113 25.4734 5.67881 25.75 6.375 25.75H22.125C22.8212 25.75 23.4889 25.4734 23.9812 24.9812C24.4734 24.4889 24.75 23.8212 24.75 23.125V10.7175C25.2606 10.537 25.7029 10.2029 26.0162 9.76118C26.3295 9.31943 26.4985 8.79158 26.5 8.25V5.625C26.5 4.92881 26.2234 4.26113 25.7312 3.76884C25.2389 3.27656 24.5712 3 23.875 3ZM23 23.125C23 23.3571 22.9078 23.5796 22.7437 23.7437C22.5796 23.9078 22.3571 24 22.125 24H6.375C6.14294 24 5.92038 23.9078 5.75628 23.7437C5.59219 23.5796 5.5 23.3571 5.5 23.125V10.875H23V23.125ZM24.75 8.25C24.75 8.48206 24.6578 8.70462 24.4937 8.86872C24.3296 9.03281 24.1071 9.125 23.875 9.125H4.625C4.39294 9.125 4.17038 9.03281 4.00628 8.86872C3.84219 8.70462 3.75 8.48206 3.75 8.25V5.625C3.75 5.39294 3.84219 5.17038 4.00628 5.00628C4.17038 4.84219 4.39294 4.75 4.625 4.75H23.875C24.1071 4.75 24.3296 4.84219 24.4937 5.00628C24.6578 5.17038 24.75 5.39294 24.75 5.625V8.25Z"
                      fill="#747985"
                    />
                    <path
                      d="M11.625 15.25H16.875C17.1071 15.25 17.3296 15.1578 17.4937 14.9937C17.6578 14.8296 17.75 14.6071 17.75 14.375C17.75 14.1429 17.6578 13.9204 17.4937 13.7563C17.3296 13.5922 17.1071 13.5 16.875 13.5H11.625C11.3929 13.5 11.1704 13.5922 11.0063 13.7563C10.8422 13.9204 10.75 14.1429 10.75 14.375C10.75 14.6071 10.8422 14.8296 11.0063 14.9937C11.1704 15.1578 11.3929 15.25 11.625 15.25Z"
                      fill="#747985"
                    />
                  </svg>
                </span>

                <span class="text-xl font-semibold text-c_85">Archive</span>
              </button>
            </Link>

            {/* <!--Add Menu Modal --> */}
            <ExistingItem
              showExistingItem={showExistingItem}
              setShowExistingItem={setShowExistingItem}
            />
            {/* <!-- Modal End --> */}
          </div>
        </div>
      </section>
      <Menudetails showModal={showModal} setShowModal={setShowModal} />
    </MainLayout>
  );
};

export default NewMenu;
