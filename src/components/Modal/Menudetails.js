import AddBtn from "@/utils/AddBtn";
import React, { useState } from "react";

const Menudetails = ({ showModal, setShowModal }) => {
  const [showPrice, setShowPrice] = useState(false);
  return (
    <div>
      <input defaultChecked={showModal} type="checkbox" className="modal-toggle" />
      <div id="my_modal_2" class="modal  bg-white">
        <div class="modal-box bg-white">
          <div class="modal_header text-center mb-[45px]">
            <h3 class="font-bold text-c_33 text-2xl">Menu Details</h3>
          </div>
          <div class="modal-content">
            <div class="modal-menu-name mb-5">
              <input
                class="w-full outline-none"
                id="menuname"
                type="text"
                placeholder="Menu Name"
              />
            </div>

            <div class="modal-menu-name mb-[30px]">
              <textarea
                class="w-full outline-none hover:border-zinc-300"
                placeholder="Describe the menu"
                id="menudescription"
                cols="30"
                rows="4"
              ></textarea>
            </div>
            {showPrice && (
              <div class="setprice flex items-center justify-between gap-5 mt-[43px] mb-5">
                <div class="price-des w-full">
                  <input
                    type="text"
                    class="outline-none hover:border-zinc-300 w-full"
                    id="pricedes"
                    placeholder="Description"
                  />
                </div>

                <div class="price-delete flex items-center justify-between gap-5">
                  <div class="price w-full">
                    <input
                      type="text"
                      class="outline-none hover:border-zinc-300"
                      id="price"
                      placeholder="Price"
                    />
                  </div>

                  <div class="button">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <g opacity="0.8">
                          <path
                            d="M28.5 10.5C28.1022 10.5 27.7206 10.658 27.4393 10.9393C27.158 11.2206 27 11.6022 27 12V28.7865C26.957 29.545 26.616 30.2558 26.0512 30.7641C25.4865 31.2723 24.7439 31.5368 23.985 31.5H12.015C11.2561 31.5368 10.5135 31.2723 9.94876 30.7641C9.38404 30.2558 9.04303 29.545 9 28.7865V12C9 11.6022 8.84196 11.2206 8.56066 10.9393C8.27936 10.658 7.89782 10.5 7.5 10.5C7.10218 10.5 6.72064 10.658 6.43934 10.9393C6.15804 11.2206 6 11.6022 6 12V28.7865C6.04282 30.3408 6.69987 31.8149 7.82727 32.8858C8.95467 33.9566 10.4605 34.5371 12.015 34.5H23.985C25.5395 34.5371 27.0453 33.9566 28.1727 32.8858C29.3001 31.8149 29.9572 30.3408 30 28.7865V12C30 11.6022 29.842 11.2206 29.5607 10.9393C29.2794 10.658 28.8978 10.5 28.5 10.5ZM30 6H24V3C24 2.60218 23.842 2.22064 23.5607 1.93934C23.2794 1.65804 22.8978 1.5 22.5 1.5H13.5C13.1022 1.5 12.7206 1.65804 12.4393 1.93934C12.158 2.22064 12 2.60218 12 3V6H6C5.60218 6 5.22064 6.15804 4.93934 6.43934C4.65804 6.72064 4.5 7.10218 4.5 7.5C4.5 7.89783 4.65804 8.27936 4.93934 8.56066C5.22064 8.84197 5.60218 9 6 9H30C30.3978 9 30.7794 8.84197 31.0607 8.56066C31.342 8.27936 31.5 7.89783 31.5 7.5C31.5 7.10218 31.342 6.72064 31.0607 6.43934C30.7794 6.15804 30.3978 6 30 6ZM15 6V4.5H21V6H15Z"
                            fill="#747985"
                          />
                          <path
                            d="M16.5 25.5V15C16.5 14.6022 16.342 14.2206 16.0607 13.9393C15.7794 13.658 15.3978 13.5 15 13.5C14.6022 13.5 14.2206 13.658 13.9393 13.9393C13.658 14.2206 13.5 14.6022 13.5 15V25.5C13.5 25.8978 13.658 26.2794 13.9393 26.5607C14.2206 26.842 14.6022 27 15 27C15.3978 27 15.7794 26.842 16.0607 26.5607C16.342 26.2794 16.5 25.8978 16.5 25.5ZM22.5 25.5V15C22.5 14.6022 22.342 14.2206 22.0607 13.9393C21.7794 13.658 21.3978 13.5 21 13.5C20.6022 13.5 20.2206 13.658 19.9393 13.9393C19.658 14.2206 19.5 14.6022 19.5 15V25.5C19.5 25.8978 19.658 26.2794 19.9393 26.5607C20.2206 26.842 20.6022 27 21 27C21.3978 27 21.7794 26.842 22.0607 26.5607C22.342 26.2794 22.5 25.8978 22.5 25.5Z"
                            fill="#747985"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div onClick={() => setShowPrice(true)} className="mb-8">
              <AddBtn>Add Price</AddBtn>
            </div>

            <div class="toggle-btn flex items-center gap-4 mb-8">
              <p class="text-fs_18 text-c_85">Publish</p>
              <label htmlFor="togglePublish" class="cursor-pointer">
                {/* <!-- toggle --> */}
                <div class="relative toggleBtn">
                  {/* <!-- input --> */}
                  <input
                    type="checkbox"
                    id="togglePublish"
                    class="sr-only"
                    defaultChecked
                  />
                  {/* <!-- line --> */}
                  <div class="block bg-c_54 w-14 h-8 rounded-full"></div>
                  {/* <!-- dot --> */}
                  <div class="dot absolute left-1 top-1  bg-white w-6 h-6 rounded-full transition"></div>
                </div>
              </label>
            </div>

            <div class=" final-button text-center flex gap-5 items-center justify-center">
              <button
                onClick={() => setShowModal(false)}
                class="py-[17px] px-[60px] text-fs_18 font-semibold text-c_54 bg-c_f5 rounded-md"
              >
                Cancel
              </button>

              <button class="py-[17px] px-[60px] text-lg font-semibold text-white bg-c_54 rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menudetails;
