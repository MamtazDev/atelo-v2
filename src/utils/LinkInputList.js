import React from "react";
import { linksAssets } from "./LinksAssets";

const LinkInputList = ({ featureType }) => {
  return (
    <div class="flex flex-col gap-5">
      {linksAssets.map(
        (data, index) =>
          data.type === featureType && (
            <div
              key={index}
              class="grid gap-4 grid-cols-1 md:grid-cols-2 rounded hover:bg-c_f5 px-4 py-2"
            >
              <label
                htmlFor={data.levelId}
                class="flex justify-start gap-5 items-center"
              >
                <span class="inline-block">
                  <img src={data.pic.src} alt="" />
                </span>
                <span class="text-c_85 font-semibold text-lg">{data.name}</span>
              </label>
              <input
                id={data.levelId}
                type={data.inputType}
                class="w-full px-5 py-2 text-c_85 text-sm h-[40px] border border-c_ED hover:border-zinc-300 rounded-lg bg-input_bg"
              />
            </div>
          )
      )}
    </div>
  );
};

export default LinkInputList;
