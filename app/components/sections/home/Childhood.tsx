
"use client" ;
import narutoChildHoodImage from "@/public/images/narutoChildhoodImage3.jpg"
import bannerImage from "@/public/images/sec2bannerimage.jpg"
import gsap from "gsap";
import {motion} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Childhood = () => {

    const imageRef = useRef<HTMLDivElement>(null) ;

    useEffect(() => {
        gsap.fromTo(
            imageRef.current, 
            { opacity: 0, y: -600 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 30%", 
                    end: "bottom 30%",
                    toggleActions: "play reverse play reverse",
                    scrub : true ,
                },
                duration: 0.6,
                ease: "power2.inOut",
            }
        );
    } , [])

    return (
        <div id="childhood" className="min-h-screen w-full grid grid-cols-3">

            <motion.div transition={{duration : 0.5 , delay : 0.5}} initial={{opacity : 0}} animate={{opacity:1}} ref={imageRef} className="-z-50">
                <Image src={narutoChildHoodImage} unselectable="on" unoptimized width={200} height={500} alt="Naruto childhood image" className="w-full h-screen col-span-1"/>
            </motion.div>

            <div className="col-span-1 w-full relative">

                <Image src={bannerImage} width={100} height={100} alt="Childhood section banner image" unoptimized className="w-full h-screen"/>

            </div>

            <div className="">

            </div>

        </div>
    );
};

export default Childhood;
