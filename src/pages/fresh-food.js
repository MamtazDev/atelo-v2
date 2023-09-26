import MainLayout from "@/Layout/MainLayout";
import Menudetails from "@/components/Modal/Menudetails";
import FreshFoodMenu from "@/components/menu/FreshFoodMenu";
import React from "react";

const FreshFood = () => {
  return (
    <MainLayout>
      <section class="w-full">
        <div class="container">
          <FreshFoodMenu />
        </div>
      </section>
    </MainLayout>
  );
};

export default FreshFood;
