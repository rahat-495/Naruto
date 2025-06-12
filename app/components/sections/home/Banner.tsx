
"use client"
import Image from "next/image";
import {motion} from "framer-motion";
import image from "@/public/images/bannerImage.jpg"
import uzumakiLogo from "@/public/images/uzumakiLogo.png"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsapAnimate from "@/app/utils/home/gsapAnimate";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Banner = () => {

    const leftRef1 = useRef<HTMLDivElement>(null) ;
    const leftRef2 = useRef<HTMLDivElement>(null) ;
    const leftRef3 = useRef<HTMLDivElement>(null) ;
    const leftRef4 = useRef<HTMLDivElement>(null) ;
    const leftRef5 = useRef<HTMLDivElement>(null) ;
    const leftRef6 = useRef<HTMLButtonElement>(null) ;

    const rightRef1 = useRef<HTMLDivElement>(null) ;
    const rightRef2 = useRef<HTMLDivElement>(null) ;
    const rightRef3 = useRef<HTMLDivElement>(null) ;
    const rightRef4 = useRef<HTMLDivElement>(null) ;
    const rightRef5 = useRef<HTMLDivElement>(null) ;

    useEffect(() => {

        gsapAnimate({ elementOrRef : leftRef1.current , start : 40 , end : 12, duration : 0.3 , delay : 0.3 }) ;
        gsapAnimate({ elementOrRef : leftRef2.current , start : 45 , end : 11 , duration : 0.3 , delay : 0.4 }) ;
        gsapAnimate({ elementOrRef : leftRef3.current , start : 60 , end : 14 , duration : 0.3 , delay : 0.5 }) ;
        gsapAnimate({ elementOrRef : leftRef4.current , start : 60 , end : 15 , duration : 0.3 , delay : 0.6 }) ;
        gsapAnimate({ elementOrRef : leftRef5.current , start : 75 , end : 15 , duration : 0.3 , delay : 0.6 }) ;
        gsapAnimate({ elementOrRef : leftRef6.current , start : 85 , end : 15 , duration : 0.3 , delay : 0.6 }) ;

        gsapAnimate({ elementOrRef : rightRef1.current , start : 30 , end : 14 , duration : 0.3 , delay : 0.3, Ix : 100 , Ax : 0 }) ;
        gsapAnimate({ elementOrRef : rightRef2.current , start : 35 , end : 15 , duration : 0.3 , delay : 0.3, Ix : 100 , Ax : 0 }) ;
        gsapAnimate({ elementOrRef : rightRef3.current , start : 41 , end : 20 , duration : 0.3 , delay : 0.3, Ix : 100 , Ax : 0 }) ;
        gsapAnimate({ elementOrRef : rightRef4.current , start : 60 , end : 17 , duration : 0.3 , delay : 0.3, Ix : 100 , Ax : 0 }) ;
        gsapAnimate({ elementOrRef : rightRef5.current , start : 80 , end : 17 , duration : 0.3 , delay : 0.3, Ix : 100 , Ax : 0 }) ;
        
    } , [])

    const handleScroll = () => {
        const targetSection = document.querySelector("#childhood") as HTMLElement;
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="w-full flex items-center justify-between gap-5 -mt-0 px-0 relative">
            
            <motion.div transition={{duration: 0.3, delay : 0.2 , ease : "linear"}} initial={{opacity : 0}} animate={{opacity : 1}}  className="w-full h-screen absolute top-0 left-0 z-[-1]">
                <Image src={image} width={678} height={100} alt="Banner image" unoptimized className="w-full h-screen"/>
            </motion.div>

            <motion.div className="grid grid-cols-3 text-white pt-12 z-20 w-full h-screen relative">

                <div className="col-span-1 flex flex-col justify-center px-10 mt-40">
                    
                    <motion.div ref={leftRef1} transition={{delay : 0.3 , duration : 0.3}} initial={{x:-500}} animate={{x:0}} className="flex items-center gap-1 -m-3">

                        <Image src={uzumakiLogo} width={100} height={100} alt="Uzumaki Logo" className="w-14 h-14 object-contain rounded-full" />
                        <span className="text-lg text-yellow-400 font-semibold tracking-wide uppercase pb-1.5">
                            The Legend Begins
                        </span>

                    </motion.div>

                    
                    <motion.h2 ref={leftRef2} transition={{delay : 0.4 , duration : 0.3}} initial={{x:-550}} animate={{x:0}} className="text-4xl font-bold leading-snug">
                        A Ninja Who <span className="text-yellow-400">Never Gave Up</span>
                    </motion.h2>

                    
                    <motion.p ref={leftRef3} transition={{delay : 0.5 , duration : 0.3}} initial={{x:-550}} animate={{x:0}} className="text-gray-300 text-base max-w-[400px] italic border-l-4 border-yellow-400 pl-4 my-6">
                        “When you give up, your dreams and everything else are gone.”
                    </motion.p>

                    
                    <motion.p ref={leftRef4} transition={{delay : 0.6 , duration : 0.3}} initial={{x:-550}} animate={{x:0}} className="text-gray-400 text-base max-w-[460px] leading-relaxed mb-6">
                        Naruto started alone, feared, and rejected. But with courage, determination, and heart, he became the hero the world didn’t expect. This isn’t just a story — it’s a journey of purpose.
                    </motion.p>

                    
                    <div ref={leftRef5} className="flex items-center gap-10">
                        <motion.div transition={{delay : 0.8 , duration : 0.3}} initial={{x:-550}} animate={{x:0}}>
                            <p className="text-4xl font-bold text-yellow-400">720+</p>
                            <p className="text-sm text-gray-400">Episodes</p>
                        </motion.div>
                        <motion.div transition={{delay : 0.7 , duration : 0.3}} initial={{x:-550}} animate={{x:0}}>
                            <p className="text-4xl font-bold text-yellow-400">2002–2017</p>
                            <p className="text-sm text-gray-400">Airing Years</p>
                        </motion.div>
                    </div>

                    
                    <motion.button  onClick={handleScroll} ref={leftRef6} transition={{delay : 0.9 , duration : 0.3}} initial={{x:-550}} animate={{x:0}} className="mt-6 px-6 py-3 w-fit cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-semibold shadow-lg hover:shadow-yellow-500/50 transition duration-200">
                        Start the Journey
                    </motion.button>

                </div>

                <div className="col-span-1"></div>

                <div className="col-span-1 flex flex-col items-end px-10">

                    <motion.h1 ref={rightRef1} transition={{delay : 0.3 , duration : 0.3}} initial={{x:550}} animate={{x:0}} className="text-5xl font-extrabold leading-tight mt-32 text-right">
                        Naruto Uzumaki
                    </motion.h1>

                    <motion.p ref={rightRef2} transition={{delay : 0.4 , duration : 0.3}} initial={{x:550}} animate={{x:0}} className="text-xl text-gray-300 max-w-[480px] mb-3 text-right">
                        I'm not gonna run away, I never go back on my word ! That's my ninja way !
                    </motion.p>

                    <motion.p ref={rightRef3} transition={{delay : 0.5 , duration : 0.3}} initial={{x:600}} animate={{x:0}} className="text-base text-gray-400 max-w-[650px] leading-relaxed text-right">
                        Naruto Uzumaki isn’t just another ninja — he’s a symbol of hope, perseverance, and transformation. Born in the Hidden Leaf Village, Naruto spent most of his childhood isolated, feared by villagers due to the Nine-Tailed Fox sealed within him. Yet, despite loneliness and rejection, he never gave up on his dream to be acknowledged by everyone — by becoming Hokage, the strongest ninja and the true protector of his village.
                    </motion.p>

                    <motion.p ref={rightRef4} transition={{delay : 0.6 , duration : 0.3}} initial={{x:600}} animate={{x:0}} className="text-base text-gray-400 max-w-4xl leading-relaxed mt-4 text-right">
                        More than a tale of battles, Naruto’s story is about inner strength, forgiveness, and breaking the cycle of hatred. With over 720 episodes spanning from 2002 to 2017, this epic saga continues to inspire generations with the message: “Even the weakest can become the strongest, as long as they never give up.”
                    </motion.p>

                    <motion.p ref={rightRef5} transition={{delay : 0.7 , duration : 0.3}} initial={{x:600}} animate={{x:0}} className="text-base text-gray-400 max-w-4xl leading-relaxed mt-4 text-right">
                        This website is dedicated to the legendary story of Naruto Uzumaki — a journey of resilience, friendship, and becoming the strongest ninja. Here, you’ll discover character stories, episode timelines, impactful quotes, and key battles that shaped the shinobi world. Whether you're a new fan or a seasoned ninja, this site is your guide to everything Naruto.
                    </motion.p>

                </div>

            </motion.div>

        </div>
    );
};

export default Banner;
