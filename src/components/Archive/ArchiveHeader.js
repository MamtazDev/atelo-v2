import React from "react";
import ArchiveTab from "./ArchiveTab";
import ArchiveSection from "./ArchiveSection";
import ArchiveItem from "./ArchiveItem";

const ArchiveHeader = () => {
  return (
    <div>
      <div class="flex-1 bg-white py-11 px-10">
        {/* <!-- MAIN HEADING --> */}
        <div class="mb-5">
          <div class="flex justify-between">
            <div class="heading">
              <h2 class="text-2xl font-bold text-text_color flex items-center gap-10">
                <span>
                  <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.61599 0.255101C9.92521 0.564313 9.95332 1.04818 9.70032 1.38915L9.61599 1.48683L2.10322 9L9.61599 16.5132C9.92521 16.8224 9.95332 17.3062 9.70032 17.6472L9.61599 17.7449C9.30678 18.0541 8.82291 18.0822 8.48194 17.8292L8.38426 17.7449L0.255228 9.61587C-0.0539846 9.30665 -0.0820951 8.82279 0.170897 8.48182L0.255228 8.38413L8.38426 0.255101C8.72439 -0.0850335 9.27586 -0.0850335 9.61599 0.255101Z"
                      fill="#747985"
                    />
                  </svg>
                </span>
                Archive
              </h2>
            </div>
          </div>
        </div>
        {/* <!-- MAIN HEADING /-END --> */}

  
      </div>
    </div>
  );
};

export default ArchiveHeader;
