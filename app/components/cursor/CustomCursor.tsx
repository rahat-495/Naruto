"use client";
import { useEffect, useState } from "react";
import kunai from "@/public/images/cursors/kunaiIamge.png";
import Image from "next/image";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true); // ensure it's visible again
    };

    const checkFocus = () => {
      if (!document.hasFocus()) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      requestAnimationFrame(checkFocus); // continuously check
    };

    window.addEventListener("mousemove", moveCursor);

    requestAnimationFrame(checkFocus); // start loop

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  if (!isVisible){
    return ;
  };

  return (
    <Image
      src={kunai}
      width={40}
      height={40}
      alt="Custom Kunai Cursor"
      unoptimized
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 rotate-6"
      style={{
        top: position.y,
        left: position.x,
        transform: "translate(-0%, -0%)",
      }}
    />
  );
};

export default CustomCursor;
