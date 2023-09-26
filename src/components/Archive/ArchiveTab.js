import React, { useState } from "react";
import ArchiveSection from "./ArchiveSection";
import ArchiveItem from "./ArchiveItem";

const ArchiveTab = () => {
  const [tab, setTab] = useState(0);

  return (
    <div>
      {/* <!-- TAB --> */}
      <ul id="tabs" class="w-full flex text-center">
        <li
          onClick={() => setTab(0)}
          className={
            tab === 0
              ? "bg-c_54 px-4 text-white font-semibold py-5 w-1/2 stroke-gray-400 rtl cursor-pointer"
              : "px-4 text-c_85 font-semibold py-5 w-1/2 stroke-gray-400 rtr cursor-pointer"
          }
        >
          <p class="flex gap-5 items-center justify-center">Sections (4)</p>
        </li>

        <li
          onClick={() => setTab(1)}
          className={
            tab === 1
              ? "bg-c_54 px-4 text-white font-semibold py-5 w-1/2 stroke-gray-400 rtr cursor-pointer"
              : "px-4 text-c_85 font-semibold py-5 w-1/2 stroke-gray-400 rtr cursor-pointer"
          }
        >
          <p class="flex gap-5 items-center justify-center">Items (20)</p>
        </li>
      </ul>
      {/* <!-- TAB CONTENTS --> */}
      <div id="tab-contents">
        {tab === 0 && <ArchiveSection />}
        {tab === 1 && <ArchiveItem />}
      </div>
    </div>
  );
};

export default ArchiveTab;
