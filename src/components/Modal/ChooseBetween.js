import AddBtn from "@/utils/AddBtn";
import React from "react";

const ChooseBetween = ({ showBetween, setShowBetween }) => {
  return (
    <div>
      <input defaultChecked={showBetween} type="checkbox" className="modal-toggle" />
      <div class="modal">
        <div class="modal-box bg-white">
          <div class="modal_header mb-[45px] flex gap-5">
            <h3 class="font-bold text-text_color text-2xl">Choose between</h3>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <g clip-path="url(#clip0_845_1709)">
                  <path
                    d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
                    fill="#EDEDED"
                  />
                  <path
                    d="M22.9204 15.7745L22.9111 15.7652L18.2254 11.0763C18.2254 11.0763 12.5145 16.7872 9.76264 19.5962C9.41998 19.9455 9.16033 20.4316 9.00627 20.9017C8.55471 22.2823 8.18084 23.6908 7.76514 25.0853C7.65357 25.4592 7.67615 25.7886 7.969 26.0675C8.24525 26.3331 8.55603 26.3424 8.91463 26.2348C10.2428 25.8364 11.5795 25.4572 12.9136 25.0754C13.5996 24.8765 14.2215 24.5012 14.7172 23.987C17.3389 21.3493 22.9204 15.7745 22.9204 15.7745ZM25.6556 9.94868L24.0533 8.34629C23.6423 7.93571 23.0852 7.70508 22.5043 7.70508C21.9234 7.70508 21.3663 7.93571 20.9554 8.34629L19.1392 10.1605L23.8401 14.8627L25.6563 13.0465C26.0668 12.6355 26.2973 12.0784 26.2972 11.4975C26.2971 10.9166 26.0663 10.3595 25.6556 9.94868Z"
                    fill="#747985"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_845_1709">
                    <rect width="34" height="34" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>

          <div class="modal-content">
            <div class="setprice flex items-center justify-between gap-5 mt-[70px] mb-5">
              <div class="price-des w-full">
                <input
                  type="text"
                  class="outline-none w-full"
                  id="alternative"
                  placeholder="Alternative"
                />
              </div>

              <div class="price-delete flex items-center justify-between gap-5">
                <div class="price w-full">
                  <input
                    type="text"
                    class="outline-none"
                    id="price"
                    placeholder="Price"
                  />
                </div>

                <div class="button flex items-center gap-10">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M32.9866 16.1463L32.2886 7.06786C32.1496 5.26099 30.7374 3.84884 28.9306 3.70992L19.8522 3.01182C18.7576 2.92774 17.7689 3.29352 16.9928 4.06973L4.02744 17.035C3.3649 17.6976 3 18.5811 3 19.523C3 20.4649 3.3649 21.3485 4.02744 22.011L13.9875 31.971C14.6734 32.6571 15.5743 33 16.4755 33C17.3763 33 18.2776 32.657 18.9634 31.971L31.9288 19.0057C32.705 18.2295 33.0708 17.2407 32.9866 16.1463ZM30.603 17.68L17.6377 30.6453C16.9968 31.2862 15.9541 31.2861 15.3133 30.6453L5.35323 20.6853C5.04475 20.3768 4.87489 19.964 4.87489 19.523C4.87489 19.082 5.04475 18.6692 5.35317 18.3608L18.3185 5.39545C18.6679 5.04608 19.0712 4.87494 19.5474 4.87494C19.6011 4.87495 19.6549 4.87705 19.7085 4.88121L28.7869 5.57931C29.6652 5.64675 30.3517 6.33325 30.4192 7.21152L31.1173 16.29C31.1593 16.8372 30.9911 17.2919 30.603 17.68ZM24.9564 7.4801C22.9924 7.4801 21.3945 9.07798 21.3945 11.0421C21.3945 13.0061 22.9924 14.604 24.9564 14.6041C26.9205 14.604 28.5184 13.0061 28.5184 11.0421C28.5184 9.07798 26.9205 7.4801 24.9564 7.4801ZM24.9564 12.7292C24.0262 12.7291 23.2694 11.9723 23.2694 11.0421C23.2694 10.1118 24.0262 9.355 24.9564 9.355C25.8867 9.355 26.6435 10.1118 26.6435 11.0421C26.6435 11.9723 25.8867 12.7291 24.9564 12.7292Z"
                        fill="#747985"
                      />
                    </svg>
                  </button>
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

            <div class="setprice flex items-center justify-between gap-5 mb-5">
              <div class="price-des w-full">
                <input
                  type="text"
                  class="outline-none w-full"
                  id="alternative"
                  placeholder="Alternative"
                />
              </div>

              <div class="price-delete flex items-center justify-between gap-5">
                <div class="price w-full">
                  <input
                    type="text"
                    class="outline-none"
                    id="price"
                    placeholder="Price"
                  />
                </div>

                <div class="button flex items-center gap-10">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M32.9866 16.1463L32.2886 7.06786C32.1496 5.26099 30.7374 3.84884 28.9306 3.70992L19.8522 3.01182C18.7576 2.92774 17.7689 3.29352 16.9928 4.06973L4.02744 17.035C3.3649 17.6976 3 18.5811 3 19.523C3 20.4649 3.3649 21.3485 4.02744 22.011L13.9875 31.971C14.6734 32.6571 15.5743 33 16.4755 33C17.3763 33 18.2776 32.657 18.9634 31.971L31.9288 19.0057C32.705 18.2295 33.0708 17.2407 32.9866 16.1463ZM30.603 17.68L17.6377 30.6453C16.9968 31.2862 15.9541 31.2861 15.3133 30.6453L5.35323 20.6853C5.04475 20.3768 4.87489 19.964 4.87489 19.523C4.87489 19.082 5.04475 18.6692 5.35317 18.3608L18.3185 5.39545C18.6679 5.04608 19.0712 4.87494 19.5474 4.87494C19.6011 4.87495 19.6549 4.87705 19.7085 4.88121L28.7869 5.57931C29.6652 5.64675 30.3517 6.33325 30.4192 7.21152L31.1173 16.29C31.1593 16.8372 30.9911 17.2919 30.603 17.68ZM24.9564 7.4801C22.9924 7.4801 21.3945 9.07798 21.3945 11.0421C21.3945 13.0061 22.9924 14.604 24.9564 14.6041C26.9205 14.604 28.5184 13.0061 28.5184 11.0421C28.5184 9.07798 26.9205 7.4801 24.9564 7.4801ZM24.9564 12.7292C24.0262 12.7291 23.2694 11.9723 23.2694 11.0421C23.2694 10.1118 24.0262 9.355 24.9564 9.355C25.8867 9.355 26.6435 10.1118 26.6435 11.0421C26.6435 11.9723 25.8867 12.7291 24.9564 12.7292Z"
                        fill="#747985"
                      />
                    </svg>
                  </button>
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
            <div className="mb-8">
              <AddBtn>Add Alternative</AddBtn>
            </div>

            <div class="final-button text-center flex gap-5 items-center justify-center">
              <button
                onClick={() => setShowBetween(false)}
                class="py-[17px] px-[60px] text-fs_18 font-semibold text-c_54 bg-[#F1F6F5] rounded-md"
              >
                Cancel
              </button>

              <button class="py-[17px] px-[60px] text-fs_18 font-semibold text-white bg-c_54 rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseBetween;
