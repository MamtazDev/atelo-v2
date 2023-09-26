import React from "react";
import euro from "../../assets/euro.png";
import globe from "../../assets/globe.png";
import BusinessDetailsInput from "@/utils/BusinessDetailsInput";

const AdditionalSetting = () => {
  return (
    <div className="profileForm  bg-white rounded-2xl p-p_23">
      <p className="text-fs_14 text-c_85 mb-2 uppercase">Additional Settings</p>
      <hr className="mb-6" />
      <form action="">
        <div className="flex flex-col gap-4">
          <BusinessDetailsInput
            pic={euro}
            title="Currency"
            type="text"
            levelId="currency"
            placeholder="Euro"
          />
          <BusinessDetailsInput
            pic={globe}
            title=" Default Language"
            type="text"
            levelId="ln"
            placeholder="Spanish"
          />
        </div>
      </form>
      {/* <!-- Additional Settings End --> */}
    </div>
  );
};

export default AdditionalSetting;
