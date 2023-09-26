import React from "react";
import biryani from "../../assets/existing-item-img.png";
import Link from "next/link";

const ExistingItem = ({ showExistingItem, setShowExistingItem }) => {
  return (
    <div>
      <input
        defaultChecked={showExistingItem}
        type="checkbox"
        className="modal-toggle"
      />
      <div class="modal">
        <div class="modal-box bg-white">
          <div class="modal_header text-center mb-[45px]">
            <h3 class="font-bold text-c_33 text-2xl">Add Existing Item</h3>
          </div>

          <div class="modal-content">
            <div class="modal-menu-name mb-5">
              <input
                class="w-full hover: outline-none focus:outline-slate-300 ease-in-out duration-300"
                id="existingitem"
                type="text"
                placeholder="Search"
                autofocus
              />
            </div>

            {/* <!-- MODAL MAIN CONTENT GOES TO HERE --> */}
            <ul>
              <li class="mb-10">
                <label class="cursor-pointer flex items-center gap-8">
                  <input
                    type="checkbox"
                    class="w-5 h-5 rounded border-gray-300 accent-c_54"
                  />
                  <div class="existingitem_wrapper w-full flex items-center justify-between gap-32 p-4 rounded-lg shadow-sm hover:shadow-menuItems duration-300">
                    <div class="existingitem_thumnail flex items-center justify-between gap-8">
                      <div class="existingitem-img">
                        <img src={biryani.src} alt="items-img" />
                      </div>
                      <div class="existingitem-heading">
                        <h2 class="text-c_85 font-semibold text-2xl">
                          Bombay biryani
                        </h2>
                        <p class="text-c_85 text-sm">
                          Lorem ipsum dolor sit amet
                        </p>
                      </div>
                    </div>
                    <div class="existingitem-price">
                      <p class="text-[28px] text-c_54 font-bold">30 €</p>
                    </div>
                  </div>
                </label>
              </li>

              <li class="mb-10">
                <label class="cursor-pointer flex items-center gap-8">
                  <input
                    type="checkbox"
                    class="w-5 h-5 rounded border-gray-300 accent-c_54"
                  />
                  <div class="existingitem_wrapper w-full flex items-center justify-between gap-32 p-4 rounded-lg shadow-sm hover:shadow-menuItems duration-300">
                    <div class="existingitem_thumnail flex items-center justify-between gap-8">
                      <div class="existingitem-img">
                        <img src={biryani.src} alt="items-img" />
                      </div>
                      <div class="existingitem-heading">
                        <h2 class="text-c_85 font-semibold text-2xl">
                          Bombay biryani
                        </h2>
                        <p class="text-c_85 text-sm">
                          Lorem ipsum dolor sit amet
                        </p>
                      </div>
                    </div>
                    <div class="existingitem-price">
                      <p class="text-[28px] text-c_54 font-bold">30 €</p>
                    </div>
                  </div>
                </label>
              </li>
            </ul>

            <div class="flex justify-start items-center gap-5">
              <span class="bg-c_54 h-[34px] w-[34px] text-center flex justify-center items-center text-white text-lg font-medium rounded-full">
                02
              </span>
              <span class="text-c_85 text-lg font-normal">Items Selected</span>
            </div>

            {/* <!-- MODAL MAIN CONTENT GOES TO HERE --> */}
          </div>
          {/* <!-- SUBMIT BUTTON --> */}
          <div class="text-center flex gap-5 items-center justify-center">
            <button
              onClick={() => setShowExistingItem(false)}
              class="py-[17px] px-[60px] text-fs_18 font-semibold text-c_54 bg-[#F1F6F5] rounded-md hover:bg-[#e7f7f3] ease-in-out duration-300"
            >
              Cancel
            </button>

            <Link
              href="/add-item"
              class="py-[17px] px-[60px] text-fs_18 font-semibold text-white bg-c_54 hover:bg-green-900 ease-in-out duration-300 rounded-md"
            >
              Add
            </Link>
          </div>
          {/* <!-- SUBMIT BUTTON /-END --> */}
        </div>
        {/* <!-- close btn --> */}
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
        {/* <!-- close btn /-end --> */}
      </div>
    </div>
  );
};

export default ExistingItem;
