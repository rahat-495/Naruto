
"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bannerImage1 from "@/public/images/firstImage.png";
import bannerImage2 from "@/public/images/middleImage.png";
import bannerImage3 from "@/public/images/rightImage.png";

gsap.registerPlugin(ScrollTrigger);

const Childhood = () => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef1 = useRef<HTMLDivElement>(null);
    const middleRef = useRef<HTMLDivElement>(null);
    const imageRef2 = useRef<HTMLDivElement>(null);

    const pRef1 = useRef<HTMLParagraphElement>(null);
    const pRef2 = useRef<HTMLParagraphElement>(null);
    const pRef3 = useRef<HTMLParagraphElement>(null);
    const pRef4 = useRef<HTMLParagraphElement>(null);
    const pRef5 = useRef<HTMLParagraphElement>(null);
    const pRef6 = useRef<HTMLParagraphElement>(null);
    const pRef7 = useRef<HTMLParagraphElement>(null);
    const pRef8 = useRef<HTMLParagraphElement>(null);
   
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([imageRef1.current, middleRef.current, imageRef2.current , ], { opacity: 0 , y: -800 });
            gsap.set([pRef1.current , pRef2.current , pRef3.current , pRef4.current , pRef5.current , pRef6.current , pRef7.current , pRef8.current], { opacity: 0 , y: 600 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "350%",
                    scrub: true,
                    pin: true,
                },
            });

            tl.to(imageRef1.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(imageRef2.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(middleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(pRef1.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(pRef2.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(pRef3.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(pRef4.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(pRef5.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(pRef6.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(pRef7.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            })
            .to(pRef8.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            })

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} id="childhood" className="h-[100vh] w-full grid grid-cols-3 bg-black">

            <div ref={imageRef1} className="col-span-1 relative z-10">
                <Image
                src={bannerImage1}
                alt="Naruto Childhood"
                className="w-full h-screen object-cover"
                unoptimized
                />
            </div>

            <div
            ref={middleRef}
            className="col-span-1 relative z-10 w-full h-full px-5 flex flex-col gap-3 items-center justify-center text-center"
            >
                <Image
                    src={bannerImage2}
                    alt="Banner Image"
                    className="w-full h-screen object-cover absolute top-0 left-0 -z-10"
                    unoptimized
                />

                <h1 ref={pRef1} className="text-4xl font-semibold mt-16 gro drop-shadow-lg text-white">A alone boy</h1>

                <p ref={pRef2} className="text-lg leading-relaxed drop-shadow-lg text-white max-w-2xl">
                    Naruto Uzumaki grew up in silence — not by choice, but by the weight of fear and rejection.
                    The villagers saw the Nine-Tails, not the boy. He was treated like an outcast, punished for something he never asked for.
                </p>

                <p ref={pRef3} className="text-lg leading-relaxed drop-shadow-lg text-white max-w-2xl">
                    Yet, each day he woke up with hope. He smiled through loneliness. He played alone.
                    Deep inside, he held one unshaken belief — that one day, he would be seen… and respected by all.
                </p>

                <p ref={pRef4} className="text-lg leading-relaxed drop-shadow-lg text-white max-w-2xl">
                    What they ignored was the strength inside him: a heart full of courage, dreams that reached the sky,
                    and the will of fire that burned brighter than anyone else’s.
                </p>

                <p ref={pRef5} className="text-lg leading-relaxed drop-shadow-lg text-white max-w-2xl">
                    His childhood was filled with silence — but his resolve made the world listen. From isolation to inspiration,
                    Naruto’s story reminds us that no dream is too big when the heart refuses to give up.
                </p>

                <p ref={pRef6} className="text-lg leading-relaxed drop-shadow-lg text-white max-w-2xl">
                    He wasn’t born strong. He stumbled, fell, and failed countless times. But every scar became a badge,
                    every tear became strength — and he stood up, again and again, for his dream.
                </p>

                <p ref={pRef7} className="text-lg leading-relaxed drop-shadow-lg text-white max-w-2xl">
                    Naruto taught us that true power isn’t in jutsu or chakra — it’s in never backing down,
                    even when the world turns its back on you. That’s what makes him a hero.
                </p>

                <p ref={pRef8} className="font-semibold border-y border-[#f5f3bc] bg-[#000b212d] backdrop-blur-3xl rounded-lg px-16 p-2"> The Story begin </p>

            </div>

            <div ref={imageRef2} className="col-span-1 relative z-10">
                <Image
                src={bannerImage3}
                alt="Banner Image"
                className="w-full h-screen object-cover"
                unoptimized
                />
            </div>

        </div>
    );
};

export default Childhood;
