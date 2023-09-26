import ColorTemplate from "@/utils/ColorTemplate";
import React, { useRef, useState } from "react";
import { SketchPicker } from "react-color";
import { MdExpandMore } from "react-icons/md";

const Design = ({ activeTab }) => {
  const [primaryColor, setPrimaryColor] = useState("#000000"); // Initial color is black
  const [secondaryColor, setSecondaryColor] = useState("#FFF"); // Initial color is black
  const [showPicker, setShowPicker] = useState(false);
  const [showPickerSecond, setShowPickerSecond] = useState(false);
  const [colorTemplate, setColorTemplate] = useState(false);
  const [fontChange, setFontChange] = useState(null);

  const handleColorChange = (newColor) => {
    setPrimaryColor(newColor.hex);
  };

  const handleColorChangeSecond = (newColor) => {
    setSecondaryColor(newColor.hex);
  };

  const fontsName = [
    {
      fontName: "Montserrat",
    },
    {
      fontName: "Poppins",
    },
    {
      fontName: "Roboto",
    },
    {
      fontName: "Lato",
    },
    {
      fontName: "Moulpali",
    },
  ];

  return (
    <div>
      {activeTab === 0 && (
        <div id="first" className="p-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              {/* <!-- tab heading --> */}
              <h2 className="text-c_33 text-fs_18 font-semibold mb-3">Font</h2>
              {/* <!-- tab heading /-end --> */}

              <div className="font_select w-full">
                <details className="dropdown mb-32 w-full ">
                  <summary className="border-c_ED text-fs_18 font-medium text-c_85 rounded-xl btn w-full flex justify-start capitalize">
                    Montserrat
                  </summary>
                  <ul className=" p-10 bg-white shadow-menuItems menu dropdown-content z-[1] mt-4 rounded-xl w-full">
                    {fontsName.map((fontItem, index) => (
                      <li className="border-b mb-4" key={index}>
                        <p className="text-c_27 text-lg font-medium">
                          {fontItem.fontName}
                        </p>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>

              {/* <form className="w-full">

                <fieldset>
                  <div className="relative border border-c_ED text-fs_18 font-medium text-c_85 rounded-xl">
                    <select
                      className="appearance-none w-full border-none bg-white py-[19px] px-[20px] rounded-xl block truncate"
                      name="whatever"
                      id="frm-whatever"
                    >
                      <option defaultValue="">Montserrat</option>
                      <option defaultValue="1">Poppins</option>
                      <option defaultValue="2">Roboto</option>
                      <option defaultValue="2">Lato</option>
                      <option defaultValue="2">Moulpali</option>
                    </select>
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </fieldset>
              </form> */}
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="color_settings_wrapper p-[20px]">
                <div className="color-template">
                  {/* <!-- tab heading --> */}
                  <div className="dropdown z-10 w-full mb-16">
                    <label
                      tabIndex={0}
                      className="btn justify-between w-full border-0 text-lg font-semibold text-c_33 p-0"
                    >
                      <span className="flex items-center gap-4">
                        <input
                          type="radio"
                          class="w-5 h-5 border-gray-300 accent-c_54"
                        />
                        <div>Choose Template</div>
                      </span>

                      <MdExpandMore />
                    </label>

                    {colorTemplate === 0 && (
                      <ColorTemplate
                        colors={[
                          "#006B54",
                          "#b6e7dd",
                          "#747985",
                          "#EDEDED",
                          "#FDFDFD",
                        ]}
                      />
                    )}
                    {colorTemplate === 1 && (
                      <ColorTemplate
                        colors={[
                          "#7D1F8C",
                          "#D0B4D5",
                          "#747985",
                          "#EDEDED",
                          "#FDFDFD",
                        ]}
                      />
                    )}
                    {colorTemplate === 2 && (
                      <ColorTemplate
                        colors={[
                          "#BD5114",
                          "#BD511452",
                          "#747985",
                          "#EDEDED",
                          "#FDFDFD",
                        ]}
                      />
                    )}

                    <ul
                      tabIndex={0}
                      className="color_group_wrapper dropdown-content z-[1] menu p-2 shadow bg-white w-full"
                    >
                      <li onClick={() => setColorTemplate(0)}>
                        <ColorTemplate
                          colors={[
                            "#006B54",
                            "#b6e7dd",
                            "#747985",
                            "#EDEDED",
                            "#FDFDFD",
                          ]}
                        />
                      </li>

                      <li onClick={() => setColorTemplate(1)}>
                        <ColorTemplate
                          colors={[
                            "#7D1F8C",
                            "#D0B4D5",
                            "#747985",
                            "#EDEDED",
                            "#FDFDFD",
                          ]}
                        />
                      </li>

                      <li onClick={() => setColorTemplate(2)}>
                        <ColorTemplate
                          colors={[
                            "#BD5114",
                            "#BD511452",
                            "#747985",
                            "#EDEDED",
                            "#FDFDFD",
                          ]}
                        />
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Choose Color  --> */}
                <div className="choose_color">
                  <label
                    tabIndex={0}
                    className="btn justify-between w-full border-0 text-lg font-semibold text-c_33 p-0"
                  >
                    <span className="flex items-center gap-4">
                      <input
                        type="radio"
                        class="w-5 h-5 border-gray-300 accent-c_54"
                      />
                      Choose Colors
                    </span>
                  </label>

                  <div className="flex items-center justify-between p-[20px] border rounded-xl mb-10">
                    <div className="flex items-center">
                      <p className="text-fs_18 font-medium text-c_85">
                        Primary Color
                      </p>
                    </div>
                    <div className="relative inline-block">
                      <button
                        onClick={() => setShowPicker(!showPicker)}
                        className="w-[40px] h-[40px] rounded-full "
                        style={{ backgroundColor: primaryColor }}
                      ></button>
                      {showPicker && (
                        <div className="absolute z-10 top-12 right-0 mt-2">
                          <SketchPicker
                            color={primaryColor}
                            onChange={handleColorChange}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-[20px] border rounded-xl mb-10">
                    <div className="flex items-center">
                      <p className="text-fs_18 font-medium text-c_85">
                        Secondary Color
                      </p>
                    </div>
                    <div className="relative inline-block">
                      <button
                        onClick={() => setShowPickerSecond(!showPickerSecond)}
                        className="w-[40px] h-[40px] rounded-full "
                        style={{ backgroundColor: secondaryColor }} // Set background color dynamically
                      ></button>
                      {showPickerSecond && (
                        <div className="absolute z-10 top-12 right-0 mt-2">
                          <SketchPicker
                            color={secondaryColor}
                            onChange={handleColorChangeSecond}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* <!-- Choose Color /-END  --> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Design;
