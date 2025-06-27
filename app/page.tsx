
"use client" ;
import { useEffect } from "react";
import Banner from "./components/sections/home/Banner";
import Childhood from "./components/sections/home/Childhood";
import Lenis from "lenis";
import GeninExam from "./components/sections/home/GeninExam";
import Team7Start from "./components/sections/home/Team7Start";
import FirstMission from "./components/sections/home/FirstMission";
import NarutosDialogue from "./components/sections/home/NarutosDialogue";
// import CustomCursor from "./components/cursor/CustomCursor";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis({duration : 1.5}) ;
    const raf = (time : any) => {
      lenis.raf(time) ;
      requestAnimationFrame(raf) ;
    }
    requestAnimationFrame(raf) ;
  } , [])

  return (
    <div className="min-h-screen cursor- overflow-x-clip font-[family-name:var(--font-geist-sans)]">
      {/* <CustomCursor /> */}
      <Banner />
      <Childhood />
      <GeninExam />
      <Team7Start />
      <FirstMission />
      <NarutosDialogue />
      <div className="h-screen"></div>
    </div>
  );
}
