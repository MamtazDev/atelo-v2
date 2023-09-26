import MainLayout from "@/Layout/MainLayout";
import ArchiveHeader from "@/components/Archive/ArchiveHeader";
import ArchiveTab from "@/components/Archive/ArchiveTab";
import React from "react";

const Archive = () => {
  return (
    <div>
      <MainLayout>
        <section class="w-full">
          <div class="container">
            <ArchiveHeader />
            {/* <!-- MENU ITEMS WRAPPER --> */}
            <div class="menu-items-wrapper bg-input_bg px-0 md:px-[10px] py-8 rounded-2xl mb-5">
              <div class="mt-4">
                <ArchiveTab />

             
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default Archive;
