import MainLayout from "@/Layout/MainLayout";
import React from "react";
import MenuList from "@/components/menu/MenuList";

const menus = () => {
  return (
    <MainLayout>
      <section class="w-full">
        <div class="container">
          <MenuList />
        </div>
      </section>
    </MainLayout>
  );
};

export default menus;
