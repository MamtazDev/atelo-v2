import React from "react";
import dinein from "../../assets/dinein.png";
import takeawayg from "../../assets/takeaway_fgray.png";
import deliveryg from "../../assets/delivery_fGray.png";
import edenred from "../../assets/edenred.png";
import cheque from "../../assets/cheque.png";
import sedexo from "../../assets/sedexo.png";
import amreexpress from "../../assets/ameican.png";
import dFriendly from "../../assets/dFriendly.png";
import lgb from "../../assets/lgb.png";
import wheelchair from "../../assets/wheelchair.png";
import kid from "../../assets/kid.png";
import celiac from "../../assets/celiac.png";
import vegan from "../../assets/vegan.png";
import terrace from "../../assets/terrace.png";
import workspace from "../../assets/workspace.png";
import wifi from "../../assets/wifi.png";
import organicBin from "../../assets/organicBin.png";
import km from "../../assets/km.png";
import avoidg from "../../assets/avoidfoodWaste.png";
import michelin from "../../assets/michelin.png";
import repsol from "../../assets/repsol.png";
import tripadvisor from "../../assets/tripadvisor.png";
import FeatureTitle from "@/utils/FeatureTitle";
import FeatureBtn from "@/utils/FeatureBtn";

const Features = () => {
  return (
    <div class="profileInner p-2 md:p-10">
      <div class="bg-white p-2 md:p-8 rounded-2xl">
        <div>
          <FeatureTitle title="Service Options" />
          <FeatureBtn featureType="service" />
        </div>

        {/* <!-- Payment Methods --> */}
        <div>
          <FeatureTitle title="Payment Methods" />

          <FeatureBtn featureType="payment" />
        </div>

        {/* <!-- Accommodating --> */}
        <div>
          <FeatureTitle title="Accommodating" />
          <FeatureBtn featureType="accommodating" />
        </div>

        {/* <!-- Amenities --> */}
        <div>
          <FeatureTitle title="Amenities" />
          <FeatureBtn featureType="amenities" />
        </div>

        {/* <!-- Environmental and Social Causes --> */}
        <div>
          <FeatureTitle title=" Environmental and Social Causes " />
          <FeatureBtn featureType="enviromentandsocial" />
        </div>

        {/* <!-- AWARDS AND CERTIFICATES --> */}
        <div>
          <FeatureTitle title="   AWARDS AND CERTIFICATES " />
          <FeatureBtn featureType="awards" />
        </div>
      </div>
    </div>
  );
};

export default Features;
