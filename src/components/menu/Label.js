import AddBtn from "@/utils/AddBtn";
import FeatureBtn from "@/utils/FeatureBtn";
import FeatureTitle from "@/utils/FeatureTitle";
import React, { useState } from "react";
import CommonAllergens from "./CommonAllergens";
import Diets from "./Diets";
import AdditionalLabel from "./AdditionalLabel";

const Label = ({ activeTab }) => {
  const [labelShow, setLabelShow] = useState(false);
  return (
    <div>
      {activeTab === 1 && (
        <div id="second" class="p-4">
          {/* <!-- COMMON ALLERGENS --> */}
          <CommonAllergens diffName="common Allergens" />
          {/* <!-- COMMON ALLERGENS /-END --> */}

          {/* <!-- DIETS --> */}
          <Diets />
          {/* <!-- DIETS /-END --> */}

          {/* <!-- Add More Information --> */}
          <AdditionalLabel />
          {/* <!-- Add More Information /-END --> */}

          {/* <!-- ADD LAVEL --> */}
          {labelShow && (
            <div class="add-lavel mb-10">
              <div class="grid grid-cols-12 gap-4 items-center">
                <div class="col-span-12 lg:col-span-3">
                  <form class="w-full">
                    <fieldset>
                      <div class="relative border border-c_ED text-fs_18 font-medium text-c_85 rounded-xl">
                        <select
                          class="appearance-none w-full border-none bg-white py-[19px] px-[20px] rounded-xl block truncate"
                          name="whatever"
                          id="frm-whatever"
                        >
                          <option defaultValue="">Icon</option>
                          <option defaultValue="1">Item 1</option>
                          <option defaultValue="2">Item 2</option>
                        </select>
                        <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg
                            class="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div class="col-span-12 lg:col-span-7">
                  <input
                    type="text"
                    placeholder="Label Name"
                    class="w-full h-16 p-4 border border-gray-300 rounded-xl"
                  />
                </div>
                <div class="col-span-12 lg:col-span-2">
                  <div class="flex lg:justify-end">
                    <button>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <g opacity="0.8">
                            <path
                              d="M28.5 10.501C28.1022 10.501 27.7206 10.659 27.4393 10.9403C27.158 11.2216 27 11.6032 27 12.001V28.7875C26.957 29.546 26.616 30.2568 26.0512 30.7651C25.4865 31.2733 24.7439 31.5378 23.985 31.501H12.015C11.2561 31.5378 10.5135 31.2733 9.94876 30.7651C9.38404 30.2568 9.04303 29.546 9 28.7875V12.001C9 11.6032 8.84196 11.2216 8.56066 10.9403C8.27936 10.659 7.89782 10.501 7.5 10.501C7.10218 10.501 6.72064 10.659 6.43934 10.9403C6.15804 11.2216 6 11.6032 6 12.001V28.7875C6.04282 30.3418 6.69987 31.8159 7.82727 32.8867C8.95467 33.9576 10.4605 34.5381 12.015 34.501H23.985C25.5395 34.5381 27.0453 33.9576 28.1727 32.8867C29.3001 31.8159 29.9572 30.3418 30 28.7875V12.001C30 11.6032 29.842 11.2216 29.5607 10.9403C29.2794 10.659 28.8978 10.501 28.5 10.501ZM30 6.00098H24V3.00098C24 2.60315 23.842 2.22162 23.5607 1.94032C23.2794 1.65901 22.8978 1.50098 22.5 1.50098H13.5C13.1022 1.50098 12.7206 1.65901 12.4393 1.94032C12.158 2.22162 12 2.60315 12 3.00098V6.00098H6C5.60218 6.00098 5.22064 6.15901 4.93934 6.44032C4.65804 6.72162 4.5 7.10315 4.5 7.50098C4.5 7.8988 4.65804 8.28033 4.93934 8.56164C5.22064 8.84294 5.60218 9.00098 6 9.00098H30C30.3978 9.00098 30.7794 8.84294 31.0607 8.56164C31.342 8.28033 31.5 7.8988 31.5 7.50098C31.5 7.10315 31.342 6.72162 31.0607 6.44032C30.7794 6.15901 30.3978 6.00098 30 6.00098ZM15 6.00098V4.50098H21V6.00098H15Z"
                              fill="#747985"
                            />
                            <path
                              d="M16.5 25.501V15.001C16.5 14.6032 16.342 14.2216 16.0607 13.9403C15.7794 13.659 15.3978 13.501 15 13.501C14.6022 13.501 14.2206 13.659 13.9393 13.9403C13.658 14.2216 13.5 14.6032 13.5 15.001V25.501C13.5 25.8988 13.658 26.2803 13.9393 26.5616C14.2206 26.8429 14.6022 27.001 15 27.001C15.3978 27.001 15.7794 26.8429 16.0607 26.5616C16.342 26.2803 16.5 25.8988 16.5 25.501ZM22.5 25.501V15.001C22.5 14.6032 22.342 14.2216 22.0607 13.9403C21.7794 13.659 21.3978 13.501 21 13.501C20.6022 13.501 20.2206 13.659 19.9393 13.9403C19.658 14.2216 19.5 14.6032 19.5 15.001V25.501C19.5 25.8988 19.658 26.2803 19.9393 26.5616C20.2206 26.8429 20.6022 27.001 21 27.001C21.3978 27.001 21.7794 26.8429 22.0607 26.5616C22.342 26.2803 22.5 25.8988 22.5 25.501Z"
                              fill="#747985"
                            />
                          </g>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* <!-- ADD LAVEL /-END --> */}
          <div onClick={() => setLabelShow(true)}>
            <AddBtn>Add Label</AddBtn>
          </div>
        </div>
      )}
    </div>
  );
};

export default Label;
