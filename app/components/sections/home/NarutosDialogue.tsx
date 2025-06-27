
"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const NarutosDialogue = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                { x: "0%" },
                {
                    x: "-80%", 
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=6000",
                        scrub: 1.5,
                        pin: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
            <div
                ref={sectionRef}
                className="h-screen relative bg-black flex items-center overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 via-black/30 to-blue-900/50 opacity-60 z-0" />

                <p
                    ref={textRef}
                    className="text-[400px] whitespace-nowrap text-white/20 font-extrabold px-10 tracking-tight drop-shadow-[0_10px_10px_rgba(255,255,255,0.3)] z-10"
                >
                    Naruto Uzumaki — I never go back on my word!
                </p>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce z-10 flex items-center justify-center gap-3">
                    SCROLL TO FEEL THE POWER <FaArrowRightLong className="" />
                </div>

            </div>

    );
};

export default NarutosDialogue;
