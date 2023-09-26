import React, { useRef, useState } from "react";
import cam from "../../assets/cam.png";
import profile from "../../assets/Profile2.png";

const InfoBanner = () => {
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [logo, setLogo] = useState(null);
  const coverRef = useRef();
  const logoRef = useRef();
  const handleFileChange = (e) => {
    const cover = e.target.files[0];
    setCoverPhoto(URL.createObjectURL(cover));
  };
  const handleLogoChange = (e) => {
    const logofile = e.target.files[0];
    setLogo(URL.createObjectURL(logofile));
  };
  return (
    <div className="bg-c_ea rounded-2xl h-[273px]  mb-[28px] relative">
      {coverPhoto ? (
        <img
          onClick={() => coverRef.current.click()}
          className="w-full max-h-[273px] rounded-2xl"
          src={coverPhoto}
          alt=""
        />
      ) : (
        <div
          onClick={() => coverRef.current.click()}
          className="cursor-pointer h-full flex items-center  gap-[8px] justify-center"
        >
          <input
            ref={coverRef}
            onChange={handleFileChange}
            type="file"
            className="hidden"
            accept="image/*"
          />

          <img className="hover:opacity-90" src={cam.src} alt="Cam" />
          <p className="text-C_34 text-fs_18">Add Cover Photo</p>
        </div>
      )}
      <div className="absolute bottom-[20px] flex flex-wrap justify-start gap-2 items-center pl-4">
        <div className="overflow-hidden  rounded-full">
          <input
            type="file"
            ref={logoRef}
            onChange={handleLogoChange}
            accept="image/*"
            hidden
          />
          <img
            className="relative overflow-hidden rounded-full hover:scale-105 transition ease-in-out  w-[50px] h-[50px] md:h-[90px] md:w-[90px]"
            src={logo ? logo : profile.src}
            alt="Profile"
          />
          <div
            onClick={() => logoRef.current.click()}
            className="absolute bottom-0 left-20 bg-[#F9F9F9] p-2 rounded-full"
          >
            <img src={cam.src} alt="" />
          </div>
        </div>
        <p className="text-c_22 text-lg font-semibold">Restaurant Name</p>
      </div>
    </div>
  );
};

export default InfoBanner;
