import React from "react";
import Banner from "../components/Banner";
import OurCourses from "../components/OurCourses";
import Features from "../components/Features";
import Success from "../components/Success";
import Mission from "../components/Mission";
import CallToAction from "../components/CallToAction";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <OurCourses ></OurCourses>
      <Features></Features>
      <Success></Success>
      <Mission></Mission>
      <CallToAction></CallToAction>
    </div>
  );
};

export default HomePage;
