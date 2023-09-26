import FeatureBtn from "@/utils/FeatureBtn";
import FeatureTitle from "@/utils/FeatureTitle";
import { allergens } from "@/utils/svgCollection";
import React, { useState } from "react";
import SettingHeader from "../settings/SettingHeader";
import SettingsTab from "../settings/SettingsTab";
import Design from "./Design";
import Label from "./Label";

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div class="flex-1 bg-white py-11 px-10">
      {/* <!-- MAIN HEADING --> */}
      <SettingHeader />
      {/* <!-- MAIN HEADING /-END --> */}

      {/* <!-- MENU ITEMS WRAPPER --> */}
      <div class="menu-items-wrapper bg-input_bg px-[47px] py-8 rounded-2xl mb-5">
        <div class="mt-4">
          {/* <!-- Tabs --> */}
          <SettingsTab activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* <!-- Tab Contents --> */}
          <div id="tab-contents">
            <Design activeTab={activeTab} />

            <Label activeTab={activeTab} />
          </div>
        </div>
      </div>
      {/* <!-- MENU ITEMS WRAPPER --> */}
    </div>
  );
};

export default Settings;
