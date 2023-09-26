import React, { Children } from "react";

const SubPageHeading = ({ children }) => {
  return (
    <div class="mb-5">
      <div class="flex justify-between">
        <div class="heading">
          <h2
            dangerouslySetInnerHTML={{ __html: children }}
            className="text-[#333] text-[24px] font-[700]"
          />
        </div>
      </div>
    </div>
  );
};

export default SubPageHeading;
