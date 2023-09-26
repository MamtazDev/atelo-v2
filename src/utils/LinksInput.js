import React from "react";

const LinksInput = () => {
  return (
    <div class="flex flex-col gap-5">
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 rounded hover:bg-c_f5 px-4 py-2">
        <label htmlFor="fb" class="flex justify-start gap-5 items-center">
          <span class="inline-block h-[44px] w-[44px] rounded-full">{}</span>
          <span class="text-c_85 font-semibold text-lg">{}</span>
        </label>
        <input
          id="fb"
          type="link"
          class="w-full px-5 py-2 text-c_85 text-sm h-[40px] border border-c_ED hover:border-zinc-300 rounded-lg bg-input_bg"
        />
      </div>
    </div>
  );
};

export default LinksInput;
