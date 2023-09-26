import React from 'react';

const AddBtn = ({children}) => {
    return (
        <button
        class="w-full rounded flex justify-center gap-3 bg-c_f5 border border-dashed border-c_54 items-center py-6 hover:opacity-90"
      >
        <span class="transform group-hover:rotate-180 transition duration-500 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_586_906)">
              <path
                d="M18.9999 8.99999H11.0001V0.999937C11.0001 0.448078 10.552 0 9.99993 0C9.44807 0 8.99999 0.448078 8.99999 0.999937V8.99999H0.999937C0.448078 8.99999 0 9.44807 0 9.99993C0 10.552 0.448078 11.0001 0.999937 11.0001H8.99999V18.9999C8.99999 19.552 9.44807 20 9.99993 20C10.552 20 11.0001 19.552 11.0001 18.9999V11.0001H18.9999C19.552 11.0001 20 10.552 20 9.99993C20 9.44807 19.552 8.99999 18.9999 8.99999Z"
                fill="#006B54"
              />
            </g>
            <defs>
              <clipPath id="clip0_586_906">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span class="text-c_54 font-fs_18 font-semibold">{children}</span>
      </button>
    );
};

export default AddBtn;