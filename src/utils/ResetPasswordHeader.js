import React from "react";

const ResetPasswordHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-[30px]">
      <h2 className="text-fs_34 text-c_33 mb-4">{title}</h2>
      <p
        dangerouslySetInnerHTML={{ __html: subtitle }}
        className="text-c_85 text-fs_18 font-medium mb-4"
      />
    </div>
  );
};

export default ResetPasswordHeader;
