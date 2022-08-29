import React, { useState } from "react";
import Sidebar from "../components/SideBar/index";
import Navbar from "../components/Navbar/index";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/data";

function Home() {
  const { isOpen, setIsOpen } = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
    </>
  );
}

export default Home;
