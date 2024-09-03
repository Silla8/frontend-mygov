import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeFooter from "../components/HomeFooter";
import HomeMain from "../components/HomeMain";



export default function Home({setIsActive }) {

  return (
    <div className="home d-flex flex-column">
      <HomeHeader setIsActive={setIsActive} />
      <HomeMain />
      <HomeFooter />
    </div>
  );
}

