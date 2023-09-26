import React from "react";

import InfoBanner from "./InfoBanner";
import BusinessDetails from "./BusinessDetails";
import Media from "./Media";
import AdditionalSetting from "./AdditionalSetting";

const Information = () => {
  return (
    <div className="profileInner p-7">
      <InfoBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* <!-- BUSINESS Details Start --> */}
        <BusinessDetails />

        {/* <!-- BUSINESS Details End --> */}

        <div>
          {/* <!-- Media --> */}
          <Media />

          {/* <!-- Media End --> */}

          {/* <!-- Additional Settings Start --> */}
          <AdditionalSetting />
        </div>
      </div>
    </div>
  );
};

export default Information;
