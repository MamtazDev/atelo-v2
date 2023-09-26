import React from "react";

const Delete = ({ showDelete, setShowDelete }) => {
  return (
    <div>
      <input checked={showDelete} type="checkbox" className="modal-toggle" />
      <div class="modal">
        <div class="modal-box bg-white">
          <div class="modal_header mb-[45px] gap-5 text-center">
            <h3 class="font-bold text-text_color text-2xl">
              Are you sure that you want to delete <br /> this permanently?
            </h3>
          </div>

          <div class="modal-content">
            <div class="final-button text-center flex gap-5 items-center justify-center">
              <button
                onClick={() => setShowDelete(false)}
                class="py-[17px] px-[60px] text-fs_18 font-semibold text-c_54 bg-[#F1F6F5] rounded-md hover:bg-[#e7f7f3] ease-in-out duration-300"
              >
                Cancel
              </button>

              <button class="py-[17px] px-[60px] text-fs_18 font-semibold text-white bg-c_54 hover:bg-green-900 ease-in-out duration-300 rounded-md">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
