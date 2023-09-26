import React from "react";
import qr from "../../assets/qrimg.png";

const QrCode = () => {
  return (
    <div class="profileInner p-10">
      <div class="bg-white px-8 py-10 ">
        <p class="text-fs_14 text-c_85 mb-4 uppercase">
          This is the QR code of the menu
        </p>
        <hr class="mb-10" />
        <div class="flex flex-col items-center gap-14">
          <div class="mx-auto border border-dashed border-c_85 px-5 py-4 max-w-[236px]">
            <img src={qr.src} alt="QR" />
          </div>
          <button class="bg-c_54 px-9 py-4 text-center rounded-lg flex justify-center gap-2 items-center hover:opacity-90">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_343_214)">
                  <path
                    d="M18 16.875C18 17.4963 17.4963 18 16.875 18H1.125C0.503684 18 0 17.4963 0 16.875C0 16.2537 0.503684 15.75 1.125 15.75H16.875C17.4963 15.75 18 16.2537 18 16.875ZM8.20452 13.3111C8.42421 13.5308 8.71207 13.6407 9 13.6407C9.28786 13.6407 9.57586 13.5308 9.79548 13.3111L13.7814 9.32523C14.2208 8.88588 14.2208 8.17358 13.7814 7.73423C13.3421 7.29489 12.6298 7.29489 12.1904 7.73423L10.125 9.79966V1.125C10.125 0.503684 9.62132 0 9 0C8.37868 0 7.875 0.503684 7.875 1.125V9.79966L5.80957 7.73423C5.37022 7.29489 4.65792 7.29489 4.21857 7.73423C3.77923 8.17358 3.77923 8.88588 4.21857 9.32523L8.20452 13.3111Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_343_214">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span class="text-white font-popins text-lg font-semibold">
              Download
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
