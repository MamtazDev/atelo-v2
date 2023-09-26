import MainLayout from "@/Layout/MainLayout";
import ProfileTab from "@/components/profile/ProfileTab";
import React from "react";

const profile = () => {
  return (
    <MainLayout>
      <div className="w-full">
        <div className="container mb-32 ">
          <div className="innerBox  rounded-2xl">
            <ProfileTab />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};




export default profile;
