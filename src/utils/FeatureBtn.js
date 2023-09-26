import React, { useState } from "react";
import { features } from "./featuresAssets";
import { allergens } from "./svgCollection";

const FeatureBtn = ({ featureType }) => {
  const [active, setActive] = useState();
  return (
    <div class="flex flex-wrap items-center gap-5 mb-11">
      {(featureType === "common" ||
      featureType === "diets" ||
      featureType === "additional"
        ? allergens
        : features
      )?.map(
        (data, index) =>
          data.type === featureType && (
            <button
              onClick={() => setActive(index)}
              key={index}
              class={`${
                active === index && "featureBtnActive"
              } featureBtn border border-c_ED bg-input_bg rounded-3xl px-5 py-2.5 flex justify-center gap-2 items-center`}
            >
              <span class="inline-block">
                {featureType === "common" ||
                featureType === "diets" ||
                featureType === "additional" ? (
                  <span
                    dangerouslySetInnerHTML={{ __html: data.pic }}
                    className="inline-block infoIcon"
                  />
                ) : (
                  <img
                    class="rounded-full"
                    src={
                      active === index
                        ? data.activePic
                          ? data.activePic?.src
                          : data.pic.src
                        : data.pic.src
                    }
                    alt=""
                  />
                )}
              </span>
              <span class="text-base font-medium text-c_85">{data.name}</span>
            </button>
          )
      )}
    </div>
  );
};

export default FeatureBtn;
