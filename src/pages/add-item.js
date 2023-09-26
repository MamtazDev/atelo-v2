import MainLayout from "@/Layout/MainLayout";
import AdditionalLabel from "@/components/menu/AdditionalLabel";
import CommonAllergens from "@/components/menu/CommonAllergens";
import Diets from "@/components/menu/Diets";
import React, { useState } from "react";

import FeatureTitle from "@/utils/FeatureTitle";
import AddBtn from "@/utils/AddBtn";
import SubPageHeading from "@/utils/SubPageHeading";
import DetailsMedia from "@/components/addItem/DetailsMedia";
import ChooseOption from "@/components/addItem/ChooseOption";

const AddItem = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <MainLayout>
      <section class="w-full">
        <div class="container">

          <div class="flex-1 bg-white py-11 px-10">

            <SubPageHeading>

              Foods &gt; Italian Dishes &gt; Pastas
            </SubPageHeading>
            {/* <!-- MAIN HEADING /-END --> */}

            {/* <!-- MENU ITEMS WRAPPER --> */}
            <div class="menu-items-wrapper bg-input_bg px-[47px] py-8 rounded-2xl mb-5">
              <div class="mt-4">
                <div class="detailsmedia">
                  <FeatureTitle title="DETAILS AND MEDIA " />
                  <DetailsMedia />
                </div>
                {/* <!-- CHOOSE A SIZE --> */}
                <div class="p-5 rounded-xl border border-[#EDEDED] bg-white mb-10">
                  <p class="text-base font-medium text-c_33 mb-2">
                    Choose a size:
                  </p>
                  <div class="size flex flex-wrap gap-5">
                    <button class="text-base font-medium text-c_85 hover:text-c_54 transition-all ease-in-out duration-300">
                      Small (10€),
                    </button>

                    <button class="text-base font-medium text-c_85 hover:text-c_54 transition-all ease-in-out duration-300">
                      Medium (12€),
                    </button>

                    <button class="text-base font-medium text-c_85 hover:text-c_54 transition-all ease-in-out duration-300">
                      Large (14€)
                    </button>
                  </div>
                </div>
                {/* <!-- CHOOSE A SIZE /-END --> */}
                {/* <!-- OPTIONS --> */}
                <ChooseOption />

                {/* <!-- COMMON ALLERGENS --> */}
                <CommonAllergens diffName="common Allergens" />
                {/* <!-- COMMON ALLERGENS /-END --> */}

                {/* <!-- DIETS --> */}
                <Diets />
                {/* <!-- DIETS /-END --> */}

                {/* <!-- Add More Information --> */}
                <AdditionalLabel />
                {/* <!-- Add More Information /-END --> */}
                {showMore ? (
                  <div>
                    {/* <!-- ADD MORE --> */}
                    <p class="text-fs_18 font-semibold text-c_33 mb-5">
                      Add More Information
                    </p>

                    <div class="add-more-info flex items-center gap-4 border p-3 rounded-xl mb-10">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1000_2134)">
                            <path
                              d="M10 0C4.486 0 0 4.48606 0 10.0001C0 15.5141 4.486 20 10 20C15.514 20 20 15.5141 20 10.0001C20 4.48606 15.514 0 10 0ZM10 18.1818C5.48848 18.1818 1.81818 14.5115 1.81818 10.0001C1.81818 5.48861 5.48848 1.81818 10 1.81818C14.5115 1.81818 18.1818 5.48861 18.1818 10.0001C18.1818 14.5115 14.5115 18.1818 10 18.1818Z"
                              fill="#747985"
                            />
                            <path
                              d="M9.99899 4.24219C9.33075 4.24219 8.78711 4.78619 8.78711 5.45485C8.78711 6.12291 9.33075 6.66643 9.99899 6.66643C10.6672 6.66643 11.2109 6.12291 11.2109 5.45485C11.2109 4.78619 10.6672 4.24219 9.99899 4.24219ZM9.99911 8.48461C9.49705 8.48461 9.09002 8.89164 9.09002 9.3937V14.8482C9.09002 15.3503 9.49705 15.7573 9.99911 15.7573C10.5012 15.7573 10.9082 15.3503 10.9082 14.8482V9.3937C10.9082 8.89164 10.5012 8.48461 9.99911 8.48461Z"
                              fill="#747985"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1000_2134">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p class="text-fs_18 font-medium text-c_85">
                        Additional Allergen Information
                      </p>
                    </div>
                    {/* <!-- ADD MORE ADITIONAL --> */}

                    {/* <!-- Traces --> */}
                    <CommonAllergens diffName="Traces " />
                    {/* <!-- Traces /-END --> */}

                    {/* <!-- Ingredients --> */}
                    <div class="add-more-info flex items-center gap-4 border p-3 rounded-xl mb-10">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.0202 18.332C19.0202 19.0003 18.7543 19.6419 18.2823 20.1149C17.8091 20.5872 17.1679 20.8526 16.4994 20.8529H5.49935C4.8311 20.8529 4.18943 20.587 3.71643 20.1149C3.24416 19.6417 2.9788 19.0006 2.97852 18.332V3.66536C2.97852 2.99711 3.24435 2.35545 3.71643 1.88245C4.18964 1.41018 4.8308 1.14481 5.49935 1.14453H13.3699C13.7952 1.14453 14.2031 1.3132 14.5038 1.61478L18.5499 5.66095C18.8515 5.96161 19.0202 6.36953 19.0202 6.79486V18.332ZM17.6452 18.332V6.79486C17.6452 6.76475 17.6394 6.73492 17.6279 6.70708C17.6164 6.67924 17.5995 6.65394 17.5783 6.63261L13.5321 2.58645C13.5108 2.56518 13.4855 2.54832 13.4576 2.53684C13.4298 2.52536 13.4 2.51948 13.3699 2.51953H5.49935C5.1956 2.52002 4.90444 2.64089 4.68966 2.85567C4.47488 3.07045 4.354 3.36162 4.35352 3.66536V18.332C4.354 18.6358 4.47488 18.9269 4.68966 19.1417C4.90444 19.3565 5.1956 19.4774 5.49935 19.4779H16.4994C16.8031 19.4774 17.0943 19.3565 17.309 19.1417C17.5238 18.9269 17.6447 18.6358 17.6452 18.332Z"
                            fill="#747985"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.0612 2.28906C13.0612 2.10673 13.1336 1.93186 13.2626 1.80293C13.3915 1.674 13.5664 1.60156 13.7487 1.60156C13.931 1.60156 14.1059 1.674 14.2348 1.80293C14.3638 1.93186 14.4362 2.10673 14.4362 2.28906V5.4974C14.4362 5.6239 14.5389 5.72656 14.6654 5.72656H17.8737C18.056 5.72656 18.2309 5.799 18.3598 5.92793C18.4888 6.05686 18.5612 6.23173 18.5612 6.41406C18.5612 6.5964 18.4888 6.77127 18.3598 6.9002C18.2309 7.02913 18.056 7.10156 17.8737 7.10156H14.6654C14.2399 7.10156 13.8319 6.93255 13.531 6.63171C13.2302 6.33087 13.0612 5.92285 13.0612 5.4974V2.28906ZM7.33203 10.3099C7.14969 10.3099 6.97483 10.2375 6.8459 10.1085C6.71696 9.9796 6.64453 9.80473 6.64453 9.6224C6.64453 9.44006 6.71696 9.26519 6.8459 9.13626C6.97483 9.00733 7.14969 8.9349 7.33203 8.9349H14.6654C14.8477 8.9349 15.0226 9.00733 15.1515 9.13626C15.2804 9.26519 15.3529 9.44006 15.3529 9.6224C15.3529 9.80473 15.2804 9.9796 15.1515 10.1085C15.0226 10.2375 14.8477 10.3099 14.6654 10.3099H7.33203ZM7.33203 13.5182C7.14969 13.5182 6.97483 13.4458 6.8459 13.3169C6.71696 13.1879 6.64453 13.0131 6.64453 12.8307C6.64453 12.6484 6.71696 12.4735 6.8459 12.3446C6.97483 12.2157 7.14969 12.1432 7.33203 12.1432H14.6654C14.8477 12.1432 15.0226 12.2157 15.1515 12.3446C15.2804 12.4735 15.3529 12.6484 15.3529 12.8307C15.3529 13.0131 15.2804 13.1879 15.1515 13.3169C15.0226 13.4458 14.8477 13.5182 14.6654 13.5182H7.33203ZM7.33203 16.7266C7.14969 16.7266 6.97483 16.6541 6.8459 16.5252C6.71696 16.3963 6.64453 16.2214 6.64453 16.0391C6.64453 15.8567 6.71696 15.6819 6.8459 15.5529C6.97483 15.424 7.14969 15.3516 7.33203 15.3516H11.457C11.6394 15.3516 11.8142 15.424 11.9432 15.5529C12.0721 15.6819 12.1445 15.8567 12.1445 16.0391C12.1445 16.2214 12.0721 16.3963 11.9432 16.5252C11.8142 16.6541 11.6394 16.7266 11.457 16.7266H7.33203Z"
                            fill="#747985"
                          />
                        </svg>
                      </span>
                      <p class="text-fs_18 font-medium text-c_85">
                        Ingredients
                      </p>
                    </div>
                    {/* <!-- Ingredients /-END --> */}

                    {/* <!-- Nutritional Values  --> */}
                    <div class="max-w-[523px] w-full mb-10">
                      <ul class="border rounded-xl">
                        <li class="text-c_85 font-semibold text-fs_18 border-b p-5">
                          Calories
                        </li>

                        <li class="text-c_85 font-semibold text-fs_18 border-b p-5">
                          Carbohydrates (g)
                        </li>

                        <li class="text-c_85 font-semibold text-fs_18 border-b p-5">
                          Proteins (g)
                        </li>

                        <li class="text-c_85 font-semibold text-fs_18 p-5">
                          Fats (g)
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Nutritional Values /-END --> */}
                  </div>
                ) : (
                  <div onClick={() => setShowMore(true)} className="mb-[70px]">
                    <AddBtn>Add More Information</AddBtn>
                  </div>
                )}

                {/* <!-- TOOGLE BTN --> */}
                <div class="flex items-center gap-4 mb-[123PX]">
                  <h5 class="font-popins font-normal text-fs_18 text-c_85">
                    Publish
                  </h5>

                  <div class="btn-toggle">
                    <label htmlFor="toggleB" class="cursor-pointer">
                      {/* <!-- toggle --> */}
                      <div class="relative toggleBtn">
                        {/* <!-- input --> */}
                        <input
                          type="checkbox"
                          id="toggleB"
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
                </div>
                {/* <!-- TOOGLE BTN /-END --> */}

                {/* <!-- FINAL BUTTON --> */}
                <div class="final-button text-center flex flex-wrap gap-20 items-center justify-center">
                  <button class="py-[17px] px-[60px] text-fs_18 font-semibold text-c_54 bg-[#F1F6F5] rounded-md hover:bg-[#e7f7f3] ease-in-out duration-300">
                    Cancel
                  </button>

                  <button class="py-[17px] px-[60px] text-fs_18 font-semibold text-white bg-c_54 hover:bg-green-900 ease-in-out duration-300 rounded-md">
                    Save
                  </button>
                </div>
                {/* <!-- FINAL BUTTON /-END --> */}
              </div>
            </div>
            {/* <!-- MENU ITEMS WRAPPER --> */}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AddItem;
