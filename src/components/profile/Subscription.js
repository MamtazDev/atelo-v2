import React from "react";

const Subscription = () => {
  const options = [
    {
      title: "Modern Digital Menu",
    },
    {
      title: "Easy Menu Management",
    },
    {
      title: "Multi-Language",
    },
    {
      title: "Allergen-Friendly",
    },
    {
      title: "Photos & Videos",
    },
  ];
  return (
    <div class="profileInner p-10">
      <div class="bg-white px-8 py-10 ">
        <p class="text-fs_14 text-c_85 mb-4 uppercase">CURRENT PLAN</p>
        <hr class="mb-10" />
        <div class="mx-auto border border-c_EB rounded-lg max-w-[384px]">
          <div class="border-b-1 border-c_EB bg-white rounded-t-lg flex justify-between items-center p-8">
            <p class="text-xl text-c_27 font-black">Premium Plan</p>
            <p class="text-xl text-c_27 font-black">
              €0<span class="text-[#6B7280] font-medium">/ mo</span>
            </p>
          </div>
          <div class="p-8 bg-c_f5 flex flex-col gap-4">
            {options.map((option, index) => (
              <div key={index} class="flex justify-start items-center gap-2">
                <span class="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16602 10.0002L8.33268 14.1668L16.666 5.8335"
                      stroke="#12B740"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="text-c_85 text-sm font-medium">
                  {option.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
