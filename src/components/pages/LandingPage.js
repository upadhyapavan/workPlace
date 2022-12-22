import React from "react";
import LandingPageNav from "../landingPageSections/LandingPageNav";
import RightJob from "../landingPageSections/RightJob";
import FeatureJobs from "../landingPageSections/FeatureJobs";
import Footer from "../landingPageSections/Footer";
import CvUpload from "../landingPageSections/CvUpload";
import OnePlatform from "../landingPageSections/OnePlatform";

function LandingPage() {
  return (
    <div>
    <LandingPageNav/>
    <RightJob/>
    <OnePlatform/>
    <FeatureJobs/>
    <CvUpload/>
    <Footer/>
    </div>
  );
}

export default LandingPage;
