import React from "react";
import address from "../../assets/adres.png";
import profile from "../../assets/phoneprofile.png";
import whatsapp from "../../assets/whatsapp.png";
import email from "../../assets/emailprofile.png";
import delivery from "../../assets/delivery.png";
import takeway from "../../assets/takeaway.png";
import globe from "../../assets/globe.png";
import justEat from "../../assets/justeats.png";
import labici from "../../assets/labici.png";
import google from "../../assets/google.png";
import trip from "../../assets/trip.png";
import FeatureTitle from "@/utils/FeatureTitle";
import LinkInputList from "@/utils/LinkInputList";

const Links = () => {
  return (
    <div class="profileInner p-2 md:p-10 flex flex-col gap-10">
      <div class="bg-white p-8 rounded-2xl">
        <FeatureTitle title="Social Media" />

        <LinkInputList featureType="SocialMedia" />
      </div>
      {/* <!-- Social Media End --> */}

      {/* <!-- Business Links --> */}
      <div class="bg-white p-8 rounded-2xl">
        <FeatureTitle title="BUSINESS LINKS " />
        <LinkInputList featureType="business" />
      </div>
      {/* <!-- Business Links End --> */}

      {/* <!-- Contact Links --> */}
      <div class="bg-white p-8 rounded-2xl">
        <FeatureTitle title="Contact Links " />
        <LinkInputList featureType="contact" />
      </div>

      {/* <!-- Deliveries / Pick Up --> */}
      <div class="bg-white p-8 rounded-2xl">
        <FeatureTitle title="Deliveries / Pick Up " />
        <LinkInputList featureType="deliveryPickup" />
      </div>

      {/* <!-- REVIEWS --> */}
      <div class="bg-white p-8 rounded-2xl">
        <FeatureTitle title="REVIEWS" />
        <LinkInputList featureType="review" />
      </div>
    </div>
  );
};

export default Links;
