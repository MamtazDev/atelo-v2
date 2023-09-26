import React from "react";

const ColorTemplate = ({ colors }) => {
  return (
    <div className="color_group flex gap-0">
      {colors.map((color, index) => (
        <button
          key={index}
          style={{ backgroundColor: color }}
          className="w-[74px] h-[74px]"
        ></button>
      ))}
      {/* <button className="bg-[#7D1F8C] w-[74px] h-[74px]"></button>
      <button className="bg-[#D0B4D5] w-[74px] h-[74px]"></button>
      <button className="bg-[#747985] w-[74px] h-[74px]"></button>
      <button className="bg-[#EDEDED] w-[74px] h-[74px]"></button>
      <button className="bg-[#FDFDFD] w-[74px] h-[74px]"></button> */}
    </div>
  );
};

export default ColorTemplate;
