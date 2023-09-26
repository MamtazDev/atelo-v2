import AddBtn from "@/utils/AddBtn";
import React, { useState } from "react";

const Hours = () => {
  const days = [
    {
      short: "M",
      full: "Monday",
    },
    {
      short: "T",
      full: "Tuesday",
    },
    {
      short: "W",
      full: "Wednesday",
    },
    {
      short: "T",
      full: "Thursday",
    },
    {
      short: "F",
      full: "Friday",
    },
    {
      short: "S",
      full: "Saturday",
    },
    {
      short: "S",
      full: "Sunday",
    },
  ];

  // Maintain a separate state for selected days for each row
  const [selectedDaysArray, setSelectedDaysArray] = useState([]);

  const toggleDaySelection = (rowIndex, dayIndex) => {
    const updatedSelectedDaysArray = [...selectedDaysArray];

    // Toggle the selected day for the specific row
    if (updatedSelectedDaysArray[rowIndex]) {
      if (updatedSelectedDaysArray[rowIndex].includes(dayIndex)) {
        updatedSelectedDaysArray[rowIndex] = updatedSelectedDaysArray[
          rowIndex
        ].filter((d) => d !== dayIndex);
      } else {
        updatedSelectedDaysArray[rowIndex].push(dayIndex);
      }
    } else {
      updatedSelectedDaysArray[rowIndex] = [dayIndex];
    }

    setSelectedDaysArray(updatedSelectedDaysArray);
  };

  const [inputSets, setInputSets] = useState(1);
  const handleAddMoreClick = (e) => {
    e.preventDefault();
    setInputSets((prevSets) => prevSets + 1);
  };
  const handleDeleteRow = (rowIndex) => {
    const updatedSelectedDaysArray = [...selectedDaysArray];
    updatedSelectedDaysArray.splice(rowIndex, 1);
    setSelectedDaysArray(updatedSelectedDaysArray);

    setInputSets((prevSets) => prevSets - 1);
  };

  return (
    <div className="profileInner p-2 md:p-10">
      <div>
        <p className="text-fs_14 text-c_85 mb-2 uppercase">OPENING HOURS</p>
        <hr className="mb-6" />
      </div>
      <div className="mx-auto bg-white p-2 md:p-10 rounded-2xl">
        <div className="fixDate mb-16 overflow-x-scroll">
          {Array.from({ length: inputSets }).map((_, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-11 gap-3 pt-11 mb-6">
              {/* Rest of your code ... */}
              <div className="col-span-5">
                <div className="flex flex-wrap gap-4">
                  {days.map((day, dayIndex) => (
                    <button
                      key={dayIndex}
                      onClick={() => toggleDaySelection(rowIndex, dayIndex)}
                      className={`${
                        selectedDaysArray[rowIndex] &&
                        selectedDaysArray[rowIndex].includes(dayIndex) &&
                        "dayBtnActive"
                      }   dayBtn  relative text-c_85 font-semibold text-xl px-3.5 py-2.5 border border-c_ED bg-white rounded-lg`}
                    >
                      {day.short}
                      <p className="absolute top-[-44px] left-[0px] text-c_85 font-medium text-xs px-3.5 py-2.5 border border-c_ED bg-stone-50 rounded-lg  duration-100 ease-in-out">
                        {day.full}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
              <div class="col-span-4">
                <div class="flex flex-col md:flex-row  gap-2  md:gap-6 items-center">
                  <div class="">
                    <select
                      name="from"
                      id="from"
                      class="text-c_85 font-semibold text-base px-3.5 py-2.5 border border-c_ED hover:border-zinc-300  bg-white rounded-lg"
                    >
                      <option selected>From</option>
                      <option>8.00</option>
                      <option>7.00</option>
                      <option>6.00</option>
                    </select>
                  </div>
                  <p class="text-sm text-c_85 font-medium">-</p>
                  <div>
                    <select
                      name="to"
                      id="to"
                      class="text-c_85 font-semibold text-base px-3.5 py-2.5 border border-c_ED hover:border-zinc-300  bg-white rounded-lg"
                    >
                      <option selected>To</option>
                      <option>8.00</option>
                      <option>7.00</option>
                      <option>6.00</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-span-2">
                <button
                  onClick={() => handleDeleteRow(rowIndex)}
                  class="deleteBtn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.625 17.8125C14.8239 17.8125 15.0147 17.7335 15.1553 17.5928C15.296 17.4522 15.375 17.2614 15.375 17.0625V9.5625C15.375 9.36359 15.296 9.17282 15.1553 9.03217C15.0147 8.89152 14.8239 8.8125 14.625 8.8125C14.4261 8.8125 14.2353 8.89152 14.0947 9.03217C13.954 9.17282 13.875 9.36359 13.875 9.5625V17.0625C13.875 17.2614 13.954 17.4522 14.0947 17.5928C14.2353 17.7335 14.4261 17.8125 14.625 17.8125ZM9.375 17.8125C9.57391 17.8125 9.76468 17.7335 9.90533 17.5928C10.046 17.4522 10.125 17.2614 10.125 17.0625V9.5625C10.125 9.36359 10.046 9.17282 9.90533 9.03217C9.76468 8.89152 9.57391 8.8125 9.375 8.8125C9.17609 8.8125 8.98532 8.89152 8.84467 9.03217C8.70402 9.17282 8.625 9.36359 8.625 9.5625V17.0625C8.625 17.2614 8.70402 17.4522 8.84467 17.5928C8.98532 17.7335 9.17609 17.8125 9.375 17.8125ZM15 3.1875C15.1989 3.1875 15.3897 3.10848 15.5303 2.96783C15.671 2.82718 15.75 2.63641 15.75 2.4375C15.75 2.23859 15.671 2.04782 15.5303 1.90717C15.3897 1.76652 15.1989 1.6875 15 1.6875H9C8.80109 1.6875 8.61032 1.76652 8.46967 1.90717C8.32902 2.04782 8.25 2.23859 8.25 2.4375C8.25 2.63641 8.32902 2.82718 8.46967 2.96783C8.61032 3.10848 8.80109 3.1875 9 3.1875H15Z"
                      fill="#747985"
                    />
                    <path
                      d="M3.75 3.9375C3.55109 3.9375 3.36032 4.01652 3.21967 4.15717C3.07902 4.29782 3 4.48859 3 4.6875C3 4.88641 3.07902 5.07718 3.21967 5.21783C3.36032 5.35848 3.55109 5.4375 3.75 5.4375H4.5V19.2375C4.5 20.9325 5.88 22.3125 7.575 22.3125H16.425C18.12 22.3125 19.5 20.9325 19.5 19.2375V5.4375H20.25C20.4489 5.4375 20.6397 5.35848 20.7803 5.21783C20.921 5.07718 21 4.88641 21 4.6875C21 4.48859 20.921 4.29782 20.7803 4.15717C20.6397 4.01652 20.4489 3.9375 20.25 3.9375H5.25H3.75ZM18 5.4375V19.2375C18 19.6552 17.8341 20.0558 17.5387 20.3512C17.2433 20.6466 16.8427 20.8125 16.425 20.8125H7.575C7.15728 20.8125 6.75668 20.6466 6.46131 20.3512C6.16594 20.0558 6 19.6552 6 19.2375V5.4375H18Z"
                      fill="#747985"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div onClick={handleAddMoreClick}>
          <AddBtn>Add Hours</AddBtn>
        </div>
      </div>
    </div>
  );
};

export default Hours;

// const schedule = [
//   {
//     start: sartyer

//   },{
// start
// }
// ]

// recurson
