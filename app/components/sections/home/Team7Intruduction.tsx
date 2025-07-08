
import Image from "next/image";
import sasukeImage from "@/public/images/sec6/sasukeImage.webp"
import narutoImage from "@/public/images/sec6/narutoImage.png"
import kakashiImage from "@/public/images/sec6/kakashiImage.png"
import sakuraImage from "@/public/images/sec6/sakuraImage.png"
import backgroundImage from "@/public/images/sec6/backgroundImage.png"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team7Intruduction = () => {

    const backgroundImageRef = useRef<HTMLDivElement>(null) ;
    const sectionRef = useRef<HTMLDivElement>(null) ;

    const divRef1 = useRef<HTMLDivElement>(null) ;
    const divRef2 = useRef<HTMLDivElement>(null) ;
    const divRef3 = useRef<HTMLDivElement>(null) ;
    const divRef4 = useRef<HTMLDivElement>(null) ;

    const headRef1 = useRef<HTMLParagraphElement>(null) ;
    const headRef2 = useRef<HTMLParagraphElement>(null) ;
    const headRef3 = useRef<HTMLParagraphElement>(null) ;
    const headRef4 = useRef<HTMLParagraphElement>(null) ;

    const paragraphRef1 = useRef<HTMLParagraphElement>(null) ;
    const paragraphRef2 = useRef<HTMLParagraphElement>(null) ;
    const paragraphRef3 = useRef<HTMLParagraphElement>(null) ;
    const paragraphRef4 = useRef<HTMLParagraphElement>(null) ;

    const imageRef1 = useRef<HTMLDivElement>(null) ;
    const imageRef2 = useRef<HTMLImageElement>(null) ;
    const imageRef3 = useRef<HTMLImageElement>(null) ;
    const imageRef4 = useRef<HTMLImageElement>(null) ;

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.set(backgroundImageRef.current , {opacity : 0 , width: "105%",}); ;
            gsap.set([divRef1.current , divRef2.current , divRef3.current , divRef4.current] , {y : 1000}) ;
            gsap.set([headRef1.current , headRef2.current , headRef3.current , headRef4.current] , {y : 150 , opacity : 0}) ;
            gsap.set([paragraphRef1.current , paragraphRef2.current , paragraphRef3.current , paragraphRef4.current] , {y : 50 , opacity : 0}) ;
            // gsap.set([imageRef1.current] , {y : 1000 , opacity : 0}) ;

            const tl = gsap.timeline({
                scrollTrigger : {
                    trigger : sectionRef.current,
                    start : "top top",
                    end : "100%",
                    scrub : true,
                    pin : true,
                }
            })

            tl.to(backgroundImageRef.current , {
                width : "100%",
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            })
            .to(divRef1.current , {
                y : 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(headRef1.current , {
                y : 0,
                opacity: 1,
                duration: 1,
                delay : 0.5 ,
                ease: "power2.out",
            })
            .to(paragraphRef1.current , {
                y : 0,
                opacity: 1,
                duration: 1,
                delay : 0.5 ,
                ease: "power2.out",
            })
            .to(divRef2.current , {
                y : 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(headRef2.current , {
                y : 0,
                opacity: 1,
                duration: 1,
                delay : 0.5 ,
                ease: "power2.out",
            })
            .to(paragraphRef2.current , {
                y : 0,
                opacity: 1,
                duration: 1,
                delay : 0.5 ,
                ease: "power2.out",
            })
            .to(divRef3.current , {
                y : 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(headRef3.current , {
                y : 0,
                opacity: 1,
                delay : 0.5 ,
                duration: 1,
                ease: "power2.out",
            })
            .to(paragraphRef3.current , {
                y : 0,
                opacity: 1,
                duration: 1,
                delay : 0.5 ,
                ease: "power2.out",
            })
            .to(divRef4.current , {
                y : 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(headRef4.current , {
                y : 0,
                opacity: 1,
                delay : 0.5 ,
                duration: 1,
                ease: "power2.out",
            })
            .to(paragraphRef4.current , {
                y : 0,
                opacity: 1,
                duration: 1,
                delay : 0.5 ,
                ease: "power2.out",
            })

        } , sectionRef)

        return () => ctx.revert() ;

    } , [])

    return (
        <div ref={sectionRef} className="h-screen bg-black w-full grid grid-cols-4 gap-0 pl-10 relative">
            
            <div ref={backgroundImageRef} className="absolute w-full h-full overflow-hidden flex flex-col items-center justify-center">
                <Image src={backgroundImage} width={100} height={100} alt="Background image !" unoptimized className="w-full"/>
            </div>

            <div className="duration-300 col-span-1 ml-0 relative flex w-full">
                
                <div ref={imageRef1} className="">
                    <Image src={narutoImage} width={100} height={100} alt="Naruto Image" unoptimized className="w-fit h-[93%] absolute top-12" />
                </div>
                
                <div ref={divRef1} className="w-[90%] h-[94%] rounded-lg bg-white/ border border-white/20 backdrop-blur-xs z-10 duration-300 hover:border-yellow-400 hover:blur-none hover:backdrop-blur-none mt-12 flex flex-col items-center justify-end py-10 px-3">
                    <h2 ref={headRef1} className="text-xl font-bold text-yellow-400/100 text-center bg-gray-500/50 border-y rounded-md px-10">Naruto Uzumaki</h2>
                    <p ref={paragraphRef1} className="text-sm text-white/100 mt-2 text-center">
                    The spirited ninja of the Hidden Leaf Village, Naruto dreams of becoming the Hokage. With the power of the Nine-Tailed Fox within him and the unbreakable will of fire, he's the symbol of never giving up.
                    </p>
                </div>

            </div>

            <div className="duration-300 col-span-1 relative flex w-full">
                
                <div ref={imageRef2} className="">
                    <Image src={sasukeImage} width={100} height={100} alt="Sasuke Image" unoptimized className="w-fit h-[93%] absolute left-16 top-12" />
                </div>
                
                <div ref={divRef2} className="w-[90%] h-[94%] rounded-lg bg-white/ border border-white/20 backdrop-blur-xs z-10 duration-300 hover:border-blue-400 hover:blur-none hover:backdrop-blur-none mt-12 flex flex-col items-center justify-end py-10 px-3">
                    <h2 ref={headRef2} className="text-xl font-bold text-blue-400/100 text-center bg-gray-500/50 border-y rounded-md px-10">Sasuke Uchiha</h2>
                    <p ref={paragraphRef2} className="text-sm text-white/100 mt-2 text-center">
                    A prodigy of the Uchiha clan, Sasuke is driven by vengeance. Cold and calculating, his Sharingan and lightning-based techniques make him one of the strongest shinobi of his time.
                    </p>
                </div>
                
            </div>

            <div className="duration-300 col-span-1 relative flex w-full">

                <div ref={imageRef3} className="">
                    <Image src={sakuraImage} width={100} height={100} alt="Sakura Image" unoptimized className="w-fit h-[90%] absolute top-14" />
                </div>
                
                <div ref={divRef3} className="w-[90%] h-[94%] rounded-lg bg-white/ border border-white/20 backdrop-blur-xs z-10 duration-300 hover:border-pink-400 hover:blur-none hover:backdrop-blur-none mt-12 flex flex-col items-center justify-end py-10 px-3">
                    <h2 ref={headRef3} className="text-xl font-bold text-pink-400/100 text-center bg-gray-500/50 border-y rounded-md px-10">Sakura Haruno</h2>
                    <p ref={paragraphRef3} className="text-sm text-white/100 mt-2 text-center">
                    Once underestimated, Sakura has grown into a formidable medical ninja and a powerful combatant. Her strength, intelligence, and heart make her an essential member of Team 7.
                    </p>
                </div>
                
            </div>

            <div className="duration-300 col-span-1 relative flex w-full">
                
                <div ref={imageRef4} className="">
                    <Image src={kakashiImage} width={100} height={100} alt="Kakashi Image" unoptimized className="w-fit h-[92%] absolute left-10 top-14" />
                </div>
                
                <div ref={divRef4} className="w-[90%] h-[94%] rounded-lg bg-white/ border border-white/20 backdrop-blur-xs z-10 duration-300 hover:border-gray-300 hover:blur-none hover:backdrop-blur-none mt-12 flex flex-col items-center justify-end py-10 px-3">
                    <h2 ref={headRef4} className="text-xl font-bold text-gray-300/100 text-center bg-gray-500/50 border-y rounded-md px-10">Kakashi Hatake</h2>
                    <p ref={paragraphRef4} className="text-sm text-white/100 mt-2 text-center">
                    Known as the Copy Ninja, Kakashi is the calm, mysterious mentor of Team 7. His Sharingan eye and vast jutsu knowledge make him one of the most respected shinobi in Konoha.
                    </p>
                </div>
                
            </div>

        </div>
    );
};

export default Team7Intruduction;
