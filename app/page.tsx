
"use client" ;
import { useEffect } from "react";
import Banner from "./components/sections/home/Banner";
import Childhood from "./components/sections/home/Childhood";
import Lenis from "lenis";
import GeninExam from "./components/sections/home/GeninExam";

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
    <div className="min-h-screen overflow-x-clip font-[family-name:var(--font-geist-sans)]">
      <Banner />
      <Childhood />
      <GeninExam />
      <div className="h-screen"></div>
    </div>
  );
}
