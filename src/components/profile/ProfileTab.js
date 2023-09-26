import React, { useState } from "react";
import BusinessDetails from "./BusinessDetails";
import { svgCollection } from "@/utils/svgCollection";
import Hours from "./Hours";
import Features from "./Features";
import Links from "./Links";
import QrCode from "./QrCode";
import Subscription from "./Subscription";
import Information from "./Information";

const ProfileTab = () => {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <div className="infoBar rounded-2xl bg-c_f5 flex items-center overflow-x-scroll">
        {svgCollection.map((data, index) => (
          <button
            onClick={() => setTab(index)}
            key={index}
            className={`${tab === index ? "active " : ""}infoTab p-pxy_28 flex justify-center gap-2 items-center 
          ${index === 0 ? "rounded-tl-2xl" : ""} 
          ${index === svgCollection.length - 1 ? "rounded-tr-2xl" : ""}`}
          >
            <span
              className="inline-block infoIcon text-c_54 text-lg"
            >
              {data.icon}
            </span>

            <span className="text-c_54 text-fs_18 text-semibold">
              {data.name}
            </span>
          </button>
        ))}
      </div>

      {tab === 0 && <Information />}
      {tab === 1 && <Hours />}
      {tab === 2 && <Features />}
      {tab === 3 && <Links />}
      {tab === 4 && <QrCode />}
      {tab === 5 && <Subscription />}
    </div>
  );
};

export default ProfileTab;
