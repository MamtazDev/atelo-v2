import React, { useState } from "react";
import ChooseSize from "../Modal/ChooseSize";
import ChooseBetween from "../Modal/ChooseBetween";
import ChooseExtras from "../Modal/ChooseExtras";

const ChooseOption = () => {
  const [showSize, setShowSize] = useState(false);
  const [showBetween, setShowBetween] = useState(false);
  const [showExtras, setShowExtras] = useState(false);
  return (
    <div class="options mb-10">
      <div class="grid grid-cols-12 gap-4">
        <div
          onClick={() => setShowSize(true)}
          class="col-span-12 lg:col-span-4"
        >
          <button class="add-item flex items-center gap-4 text-fs_18 text-c_54 font-semibold justify-center w-full border border-c_54 border-dashed bg-c_f5 rounded-md py-4">
            Choose Size
          </button>
        </div>

        <div
          onClick={() => setShowBetween(true)}
          class="col-span-12 lg:col-span-4"
        >
          <button class="add-item flex items-center gap-4 text-fs_18 text-c_54 font-semibold justify-center w-full border border-c_54 border-dashed bg-c_f5 rounded-md py-4">
            Choose between
          </button>
        </div>

        <div
          onClick={() => setShowExtras(true)}
          class="col-span-12 lg:col-span-4"
        >
          <button class="add-item flex items-center gap-4 text-fs_18 text-c_54 font-semibold justify-center w-full border border-c_54 border-dashed bg-c_f5 rounded-md py-4">
            Choose Extras
          </button>
        </div>
      </div>
      <ChooseSize showSize={showSize} setShowSize={setShowSize} />
      <ChooseBetween
        showBetween={showBetween}
        setShowBetween={setShowBetween}
      />
      <ChooseExtras showExtras={showExtras} setShowExtras={setShowExtras} />
    </div>
  );
};

export default ChooseOption;
