
"use client"
import Image from "next/image";
import {motion} from "framer-motion";
import image from "@/public/images/bannerImage.jpg"
import uzumakiLogo from "@/public/images/uzumakiLogo.png"

const Banner = () => {
    return (
        <div className="w-full flex items-center justify-between gap-5 -mt-12 px-0 relative">
            
            <motion.div transition={{duration: 0.3, delay : 0.2 , ease : "linear"}} initial={{opacity : 0}} animate={{opacity : 1}}  className="w-full h-screen absolute top-0 left-0 z-[-1]">
                <Image src={image} width={678} height={100} alt="Banner image" unoptimized className="w-full h-screen"/>
            </motion.div>

            <motion.div className="grid grid-cols-3 text-white pt-12 z-20 w-full h-screen">

                <div className="col-span-1 flex flex-col justify-center px-10 mt-40">
                    
                    <motion.div transition={{delay : 0.3 , duration : 0.3}} initial={{x:-500}} animate={{x:0}} className="flex items-center gap-1 -m-3">

                        <Image src={uzumakiLogo} width={100} height={100} alt="Uzumaki Logo" className="w-14 h-14 object-contain rounded-full" />
                        <span className="text-lg text-yellow-400 font-semibold tracking-wide uppercase pb-1.5">
                            The Legend Begins
                        </span>

                    </motion.div>

                    
                    <motion.h2 transition={{delay : 0.4 , duration : 0.3}} initial={{x:-550}} animate={{x:0}} className="text-4xl font-bold leading-snug">
                        A Ninja Who <span className="text-yellow-400">Never Gave Up</span>
                    </motion.h2>

                    
                    <motion.p transition={{delay : 0.5 , duration : 0.3}} initial={{x:-550}} animate={{x:0}} className="text-gray-300 text-base max-w-[400px] italic border-l-4 border-yellow-400 pl-4 my-6">
                        “When you give up, your dreams and everything else are gone.”
                    </motion.p>

                    
                    <motion.p transition={{delay : 0.6 , duration : 0.3}} initial={{x:-550}} animate={{x:0}} className="text-gray-400 text-base max-w-[460px] leading-relaxed mb-6">
                        Naruto started alone, feared, and rejected. But with courage, determination, and heart, he became the hero the world didn’t expect. This isn’t just a story — it’s a journey of purpose.
                    </motion.p>

                    
                    <div className="flex items-center gap-10">
                        <motion.div transition={{delay : 0.8 , duration : 0.3}} initial={{x:-550}} animate={{x:0}}>
                            <p className="text-4xl font-bold text-yellow-400">720+</p>
                            <p className="text-sm text-gray-400">Episodes</p>
                        </motion.div>
                        <motion.div transition={{delay : 0.7 , duration : 0.3}} initial={{x:-550}} animate={{x:0}}>
                            <p className="text-4xl font-bold text-yellow-400">2002–2017</p>
                            <p className="text-sm text-gray-400">Airing Years</p>
                        </motion.div>
                    </div>

                    
                    <motion.button transition={{delay : 0.9 , duration : 0.3}} initial={{x:-550}} animate={{x:0}} className="mt-6 px-6 py-3 w-fit cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-semibold shadow-lg hover:shadow-yellow-500/50 transition duration-200">
                        Start the Journey
                    </motion.button>

                </div>

                <div className="col-span-1"></div>

                <div className="col-span-1 flex flex-col items-end px-10">

                    <motion.h1 transition={{delay : 0.3 , duration : 0.3}} initial={{x:550}} animate={{x:0}} className="text-5xl font-extrabold leading-tight mt-52 text-right">
                        Naruto Uzumaki
                    </motion.h1>

                    <motion.p transition={{delay : 0.4 , duration : 0.3}} initial={{x:550}} animate={{x:0}} className="text-xl text-gray-300 max-w-[480px] mb-3 text-right">
                        I'm not gonna run away, I never go back on my word ! That's my ninja way !
                    </motion.p>

                    <motion.p transition={{delay : 0.5 , duration : 0.3}} initial={{x:600}} animate={{x:0}} className="text-base text-gray-400 max-w-[650px] leading-relaxed text-right">
                        Naruto Uzumaki isn’t just another ninja — he’s a symbol of hope, perseverance, and transformation. Born in the Hidden Leaf Village, Naruto spent most of his childhood isolated, feared by villagers due to the Nine-Tailed Fox sealed within him. Yet, despite loneliness and rejection, he never gave up on his dream to be acknowledged by everyone — by becoming Hokage, the strongest ninja and the true protector of his village.
                    </motion.p>

                    <motion.p transition={{delay : 0.6 , duration : 0.3}} initial={{x:600}} animate={{x:0}} className="text-base text-gray-400 max-w-4xl leading-relaxed mt-4 text-right">
                        More than a tale of battles, Naruto’s story is about inner strength, forgiveness, and breaking the cycle of hatred. With over 720 episodes spanning from 2002 to 2017, this epic saga continues to inspire generations with the message: “Even the weakest can become the strongest, as long as they never give up.”
                    </motion.p>

                    <motion.p transition={{delay : 0.7 , duration : 0.3}} initial={{x:600}} animate={{x:0}} className="text-base text-gray-400 max-w-4xl leading-relaxed mt-4 text-right">
                        This website is dedicated to the legendary story of Naruto Uzumaki — a journey of resilience, friendship, and becoming the strongest ninja. Here, you’ll discover character stories, episode timelines, impactful quotes, and key battles that shaped the shinobi world. Whether you're a new fan or a seasoned ninja, this site is your guide to everything Naruto.
                    </motion.p>

                </div>

            </motion.div>

        </div>
    );
};

export default Banner;
