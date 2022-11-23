import React from "react";
import ClassicBg from "../components/ClassicBg";
import FeatureDetailsItem from "../components/FeatureDetailsItem";
import PricingItem from "../components/PricingItem";
import ScheduleItem from "../components/ScheduleItem";

const FeatureDetails = () => {
  return (
    <div>
      <ClassicBg headline="Billiards & Snooker" bgClass="bg-feature" />

      <div className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-8 md:py-16">
        <FeatureDetailsItem heading="Feature">
          <p className="text-sm md:text-base text-center md:text-start">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident. At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident.
          </p>
        </FeatureDetailsItem>

        <FeatureDetailsItem heading="Pricing">
          <PricingItem
            title="Pricing Title"
            price="BDT 200"
            details="I would like to convey my sincerest thanks and heartfelt gratitude for electing me as President of the Banani Club. "
          />
          <PricingItem
            title="Pricing Title"
            price="BDT 200"
            details="I would like to convey my sincerest thanks and heartfelt gratitude for electing me as President of the Banani Club. "
          />
        </FeatureDetailsItem>

        <FeatureDetailsItem heading="Timing">
          <PricingItem
            title="Timing Title"
            price={
              <ScheduleItem
                startDate="Monday"
                endDate="Friday"
                startTime="10.00"
                endTime="18.30"
              />
            }
            details="I would like to convey my sincerest thanks and heartfelt gratitude for electing me as President of the Banani Club. "
          />
        </FeatureDetailsItem>
        <FeatureDetailsItem heading="Rules" class="!border-0">
          <p className="text-sm md:text-base text-center md:text-start">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident. At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident.
          </p>
        </FeatureDetailsItem>
      </div>
    </div>
  );
};

export default FeatureDetails;
