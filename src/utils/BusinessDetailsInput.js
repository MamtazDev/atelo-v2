import React from "react";

const BusinessDetailsInput = ({
  handleShowPassword,
  pic,
  title,
  type,
  levelId,
  placeholder,
}) => {
  return (
    <div className="pformBg w-full bg-no-repeat bg-input_bg border border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_input overflow-hidden">
      <div className="flex justify-start gap-2">
        <img className="w-[20px] h-[20px]" src={pic.src} alt={levelId} />
        <div className="w-full">
          <label htmlFor={levelId} className="text-c_85 block mb-2">
            {title}
          </label>
          <input
            id={levelId}
            className="w-full bg-transparent"
            type={type}
            placeholder={placeholder}
          />
        </div>
        {handleShowPassword && (
          <div>
            <div onClick={handleShowPassword} className="hover:stroke-c_54">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.9455 11.5969L18.9474 11.5938C19.2339 11.1115 19.3852 10.561 19.3853 10.0001C19.3854 9.43917 19.2344 8.88859 18.948 8.40625L18.9462 8.40312C17.7768 6.46062 15.028 3.125 9.99928 3.125C4.97053 3.125 2.22178 6.46062 1.05303 8.40312L1.05116 8.40625C0.764654 8.88848 0.613391 9.439 0.613281 9.99991C0.613171 10.5608 0.764218 11.1114 1.05053 11.5938L1.05241 11.5969C2.22178 13.5394 4.97053 16.875 9.99928 16.875C15.028 16.875 17.7768 13.5394 18.9455 11.5969ZM17.8737 10.9537C16.843 12.6669 14.4312 15.625 9.99928 15.625C5.56741 15.625 3.15616 12.6669 2.12491 10.9544C1.95368 10.6656 1.86332 10.336 1.86332 10.0003C1.86332 9.66458 1.95368 9.33503 2.12491 9.04625C3.15553 7.33313 5.56741 4.375 9.99928 4.375C14.4312 4.375 16.8424 7.33312 17.8737 9.04562C18.0449 9.33441 18.1352 9.66395 18.1352 9.99969C18.1352 10.3354 18.0449 10.665 17.8737 10.9537Z"
                  fill="#747985"
                  fillOpacity="0.7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 6.875C8.275 6.875 6.875 8.275 6.875 10C6.875 11.725 8.275 13.125 10 13.125C11.725 13.125 13.125 11.725 13.125 10C13.125 8.275 11.725 6.875 10 6.875ZM10 8.125C10.4889 8.13762 10.9535 8.34071 11.2949 8.69096C11.6362 9.04122 11.8272 9.51094 11.8272 10C11.8272 10.4891 11.6362 10.9588 11.2949 11.309C10.9535 11.6593 10.4889 11.8624 10 11.875C9.5111 11.8624 9.04647 11.6593 8.70514 11.309C8.36381 10.9588 8.17279 10.4891 8.17279 10C8.17279 9.51094 8.36381 9.04122 8.70514 8.69096C9.04647 8.34071 9.5111 8.13762 10 8.125Z"
                  fill="#747985"
                  fillOpacity="0.7"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessDetailsInput;
