import React from "react";
import HeroSettings from "./hero/HeroSettings";
import FeaturesSettings from "./features/FeaturesSettings";
import NewsletterSettings from "@/app/components/newsletter/NewsletterSettings";

const BodyOptionsSelection = () => {
  return (
    <>
      <div className="space-y-5">
        {/* Hero Settings */}
        <HeroSettings />

        {/* Features Settings */}
        <FeaturesSettings />

        {/* Newsletter Settings */}
        <NewsletterSettings />
      </div>
    </>
  );
};

export default BodyOptionsSelection;
