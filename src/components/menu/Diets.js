import FeatureBtn from '@/utils/FeatureBtn';
import FeatureTitle from '@/utils/FeatureTitle';
import React from 'react';

const Diets = () => {
    return (
        <div class="pb-[50px]">
        <FeatureTitle title="Diets" />
        <FeatureBtn featureType="diets" />

        <p class="text-fs_14 text-c_85 font-medium mb-8">
          Vegetarian - Does not contain any type of animal (including
          chicken, fish and fats or sauces that come from animals)
        </p>

        <p class="text-fs_14 text-c_85 font-medium">
          Vegan - Vegetarian, but also does not contain any products that
          come from animals (including milk products, eggs and honey. )
        </p>
      </div>
    );
};

export default Diets;