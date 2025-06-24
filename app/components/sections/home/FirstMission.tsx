
import Image from "next/image";
import backgroundImage from "@/public/images/sec5/backgroundImage.png"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FirstMission = () => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const bgImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.set(bgImageRef.current , { opacity: 0, width : "130%" , height : "130%" , borderRadius : "10px" });

            const tl1 = gsap.timeline({
                scrollTrigger : {
                    trigger : sectionRef.current,
                    start : "top top",
                    end : "100%",
                    scrub : true,
                    pin : true ,
                }
            })

            tl1.to(bgImageRef.current , {
                y: 0,
                width: "100%",
                height: "100%",
                borderRadius : "0%",
                opacity: 1,
                duration: 1,
                ease: "power2.out"  
            })

        } , sectionRef)

        return () => ctx.revert() ;
        
    } , [])

    return (
        <div ref={sectionRef} className="h-screen bg-black relative flex flex-col items-center justify-center">
            
            <div ref={bgImageRef} className="absolute w-full h-full">
                <Image src={backgroundImage} width={100} height={100} alt="Section 5 background image !" unoptimized className="w-full h-full"/>
            </div>

            <div className="backdrop-blur-xs bg-white/10 border border-white/30 rounded-xl p-8 shadow-lg w-[80%] h-[80%]">
                <h2 className="text-white text-2xl font-semibold mb-4">The First Mission: Danger Beyond the Leaf</h2>
                <p className="text-white/80 leading-relaxed">
                    This was Team 7's first mission outside the village, and it challenged them both physically and emotionally...
                </p>
            </div>

        </div>
    );
};

export default FirstMission;
