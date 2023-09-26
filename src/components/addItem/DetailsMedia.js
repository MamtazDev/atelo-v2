import React from "react";
import add from "../../assets/add-photo.svg";
import add1 from "../../assets/add-photo-1.svg";

const DetailsMedia = () => {
  return (
    <div class="grid grid-cols-12 gap-5 mb-[60px]">
      <div class="col-span-12 mb-32 lg:mb-0 lg:col-span-7">
        <div class="grid grid-cols-12 gap-5 mb-5">
          <div class="col-span-12 lg:col-span-8">
            <input
              class="w-full"
              id="menuname"
              type="text"
              placeholder="Name"
            />
          </div>
          <div class="col-span-12 lg:col-span-4">
            <input class="w-full" id="price" type="text" placeholder="Price" />
          </div>
        </div>

        <textarea
          class="w-full h-[88%] outline-none"
          name=""
          id="menudescription"
          cols="30"
          // rows="10"
          placeholder="Add a description"
        ></textarea>

        {/* <!-- OPTIONS /-END --> */}
      </div>

      <div class="col-span-12 mb-10 lg:mb-0 lg:col-span-5">
        <div class="thumbanil">
          <img class="w-full mb-[17px]" src={add.src} alt="thumbnail" />
        </div>
        <div className="flex gap-4">
          <img className="w-full" src={add1.src} alt="" />
          <img className="w-full" src={add1.src} alt="" />
          <img className="w-full" src={add1.src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailsMedia;
