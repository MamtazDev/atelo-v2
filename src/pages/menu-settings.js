import MainLayout from "@/Layout/MainLayout";
import Settings from "@/components/menu/Settings";
import React from "react";

const MenuSettings = () => {
  return (
    <MainLayout>
      <section class="w-full">
        <div class="container">
          <Settings />
        </div>
      </section>
    </MainLayout>
  );
};

export default MenuSettings;
