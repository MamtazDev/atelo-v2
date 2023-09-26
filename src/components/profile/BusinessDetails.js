import React, { useState } from "react";
import business from "../../assets/business.png";
import name from "../../assets/nameICon.png";
import email from "../../assets/email.png";
import lock from "../../assets/lock.png";
import about from "../../assets/about.png";
import location from "../../assets/about.png";
import es from "../../assets/es.png";
import arrow from "../../assets/downarrow.png";
import phoneIcon from "../../assets/phone.png";
import BusinessDetailsInput from "@/utils/BusinessDetailsInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { MuiTelInput } from "mui-tel-input";
import countryCodes from "@/utils/CountryCode";

const BusinessDetails = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState();

  const [phone, setPhone] = React.useState("");

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  console.log(countryCodes);

  return (
    <div className="profileForm  bg-white rounded-2xl h-full p-p_23">
      <p className="text-fs_14 text-c_85 mb-2 uppercase">BUSINESS Details</p>
      <hr className="mb-6" />

      <form action="">
        <div className="flex flex-col gap-4">
          <BusinessDetailsInput
            pic={business}
            title="Business Name"
            type="text"
            levelId="businessName"
            placeholder="Business Name"
          />
          <BusinessDetailsInput
            pic={name}
            title="Username "
            type="text"
            levelId="userName"
            placeholder="user0122"
          />
          <BusinessDetailsInput
            pic={email}
            title="Email Address "
            type="email"
            levelId="email"
            placeholder="user0122@gmail.com"
          />
          <BusinessDetailsInput
            pic={lock}
            title="Password "
            type={showPassword ? "text" : "password"}
            levelId="password"
            placeholder="*************"
            handleShowPassword={handleShowPassword}
          />

          <div className="pformBg w-full bg-no-repeat bg-input_bg border border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_input">
            <div className="flex justify-start gap-2">
              <img className="w-[20px] h-[20px]" src={about.src} alt="about" />
              <div className="w-full">
                <label htmlFor="about" className="text-c_85 block mb-2">
                  About{" "}
                </label>
                <textarea
                  id="about"
                  className="block w-full bg-transparent min-h-[150px] lg:min-h-[308px]"
                  placeholder="Describe your business..."
                ></textarea>
              </div>
            </div>
          </div>
          <BusinessDetailsInput
            pic={location}
            title="Address "
            type="text"
            levelId="address"
            placeholder="Enter your business address"
          />

          <div className="flex flex-col md:flex-row  justify-start gap-3 items-start">
            <div
              onClick={() => setShowDropDown(!showDropdown)}
              className="cursor pointer w-full  md:w-auto pformBg bg-no-repeat bg-input_bg border border-c_ED hover:border-zinc-300 border-solid rounded-r_11 p-p_input"
            >
              <div className="w-full flex justify-start gap-2">
                <div className="w-full">
                  <div className="w-full flex justify-start items-start gap-2 mb-1">
                    {country ? (
                      <div dangerouslySetInnerHTML={{ __html: country.flag }} />
                    ) : (
                      <img className="w-[22px] h-[17px]" src={es.src} alt="" />
                    )}

                    <span className="text-c_85 block mb-2">
                      {country ? country.code : "BN"}{" "}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="flex items-center text-[#747985] gap-[5px] text-[18px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M5.11338 7.11338C5.25081 6.97595 5.46586 6.96346 5.6174 7.0759L5.66082 7.11338L9 10.4524L12.3392 7.11338C12.4766 6.97595 12.6917 6.96346 12.8432 7.0759L12.8866 7.11338C13.024 7.25081 13.0365 7.46586 12.9241 7.6174L12.8866 7.66082L9.27372 11.2737C9.13629 11.4111 8.92124 11.4236 8.7697 11.3112L8.72628 11.2737L5.11338 7.66082C4.96221 7.50964 4.96221 7.26455 5.11338 7.11338Z"
                          fill="#B5B5B5"
                        />
                      </svg>
                      {country ? country.dial_code : "+34"}
                    </div>
                    {showDropdown && (
                      <div className="absolute left-0 overflow-hidden w-[300px] top-12 z-20 bg-white shadow p-5 max-h-[200px] overflow-y-scroll">
                        {countryCodes.map((data, index) => (
                          <div
                            onClick={() => setCountry(data)}
                            className="flex justify-between mb-3 cursor-pointer"
                            key={index}
                          >
                            {data.dial_code} {data.name}
                            <div
                              dangerouslySetInnerHTML={{ __html: data.flag }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <BusinessDetailsInput
              pic={phoneIcon}
              title="Phone Number "
              type="tel"
              levelId="phone"
              placeholder="122324354355"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessDetails;
