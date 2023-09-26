import FeatureBtn from '@/utils/FeatureBtn';
import FeatureTitle from '@/utils/FeatureTitle';
import React from 'react';

const CommonAllergens = ({diffName}) => {
    return (
        <div class="common-allergens pb-10">
        <FeatureTitle title={diffName} />
        <FeatureBtn featureType="common" />
      </div>
    );
};

export default CommonAllergens;