
import narutoImage from "@/public/images/sec3/geninSuparImg.png" ;
import bannerImage from "@/public/images/sec3/bannerImage.png" ;
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger) ;
const GeninExam = () => {

    const backgroundImageRef = useRef<HTMLDivElement>(null);

    const leftDivRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const rightImageRef = useRef<HTMLDivElement>(null);

    const leftRef1 = useRef<HTMLParagraphElement>(null);
    const leftRef2 = useRef<HTMLParagraphElement>(null);
    const leftRef3 = useRef<HTMLParagraphElement>(null);
    const leftRef4 = useRef<HTMLParagraphElement>(null);
    const leftRef5 = useRef<HTMLParagraphElement>(null);
    const leftRef6 = useRef<HTMLParagraphElement>(null);
    const leftRef7 = useRef<HTMLParagraphElement>(null);
    const leftRef8 = useRef<HTMLParagraphElement>(null);
    const leftRef9 = useRef<HTMLParagraphElement>(null);
    const leftRef10 = useRef<HTMLParagraphElement>(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.set([rightImageRef.current] , {opacity : 0 , y : -600 , x : 650 , width : "80%" , height : "100%"}) ;
            gsap.set([ leftRef1.current , leftRef2.current , leftRef3.current , leftRef4.current , leftRef5.current , leftRef6.current , leftRef7.current , leftRef8.current , leftRef9.current , leftRef10.current ] , {opacity : 0 , x : -600}) ;
            gsap.set([backgroundImageRef.current] , {opacity : 0.5 , y : -1000}) ;

            const tl1 = gsap.timeline({
                scrollTrigger : {
                    trigger : sectionRef.current ,
                    start : "top top" ,
                    end : "100%" ,
                    scrub : true ,
                    pin : true ,
                }
            })

            const tl2 = gsap.timeline({
                scrollTrigger : {
                    trigger : leftDivRef.current ,
                    start : "top top" ,
                    end : "100%" ,
                    scrub : true ,
                }
            })

            tl1.to(backgroundImageRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
            });

            tl1.to(rightImageRef.current , {
                opacity : 1 ,
                delay : 0.07 ,
                y : 0 ,
                x : 0 ,
                width : "80%" ,
                height : "100%" , 
                duration : 1 ,
                ease : "power2.out" ,
            } , "<")

            tl2.to(leftRef1.current , {
                opacity : 1 ,
                x : 0 ,
                duration : 1 ,
                delay : 0.3 ,
                ease : "power2.out" ,
            })
            .to(leftRef2.current , {
                opacity : 1 ,
                x : 0 ,
                duration : 1 ,
                ease : "power2.out" ,
            }).to(leftRef3.current , {
                opacity : 1 ,
                x : 0 ,
                duration : 1 ,
                ease : "power2.out" ,
            }).to(leftRef4.current , {
                opacity : 1 ,
                x : 0 ,
                duration : 1 ,
                ease : "power2.out" ,
            }).to(leftRef5.current , {
                opacity : 1 ,
                x : 0 ,
                duration : 1 ,
                ease : "power2.out" ,
            }).to(leftRef6.current , {
                opacity : 1 ,
                x : 0 ,
                duration : 1 ,
                ease : "power2.out" ,
            }).to(leftRef7.current , {
                opacity : 1 ,
                x : 0 ,
                duration : 1 ,
                ease : "power2.out" ,
            }).to(leftRef8.current , {
                opacity : 1 ,
                x : 0 ,
                duration : 1 ,
                ease : "power2.out" ,
            }).to(leftRef9.current , {
                opacity : 1 ,
                x : 0 ,
                duration : 1 ,
                ease : "power2.out" ,
            }).to(leftRef10.current , {
                opacity : 1 ,
                x : 0 ,
                duration : 1 ,
                ease : "power2.out" ,
            })

        },sectionRef)

        return () => ctx.revert() ;

    } , [])

    return (
        <div ref={sectionRef} className="h-screen grid grid-cols-2 overflow-hidden relative bg-black">

            <div ref={backgroundImageRef} className="absolute w-full h-full">
                <Image src={bannerImage} width={100} height={100} alt="Background image !" unoptimized className="absolute w-full h-full"/>
            </div>
            
            <div ref={leftDivRef} className="text-white px-10 py-20 space-y-6 leading-relaxed font-light">
                <h2 ref={leftRef1} className="text-4xl font-semibold text-white">The Genin Exam: Trials, Betrayal & Growth</h2>

                <p  ref={leftRef2}>
                    Naruto stepped onto the Genin Exam grounds with trembling determination. Twice, he faced failure—defeated not by lack of effort, but by his inability to fully harness his innate power. His dedication was sincere, but without control, he staggered both times.
                </p>

                <p  ref={leftRef3}>
                    On the third attempt, fate struck again. Mizuki, a hidden traitor, manipulated Naruto into stealing a forbidden scroll containing powerful jutsu. Mizuki convinced Naruto that the scroll would help him pass—but it was all a lie.
                </p>

                <p  ref={leftRef4}>
                    The Third Hokage dispatched all instructors to find Naruto. Iruka, Naruto’s teacher, tracked him down and confronted Mizuki, realizing Naruto was being used. But Naruto, hiding nearby, overheard the truth: Iruka truly cared for him—he always had.
                </p>

                <p  ref={leftRef5}>
                    Fueled by emotion and clarity, Naruto faced Mizuki head-on. He unleashed the <span className="font-semibold text-[#fffdc0]">Multi Shadow Clone Jutsu</span>—a forbidden technique he had just learned from the scroll. It was a power no one expected from him.
                </p>

                <p  ref={leftRef6}>
                    With his clones, Naruto overwhelmed Mizuki and protected Iruka. Witnessing this, Iruka was moved. He declared Naruto had passed the exam—not just for learning the technique, but for showing courage, loyalty, and heart.
                </p>

                <p  ref={leftRef7}>
                    Iruka took off his own forehead protector and tied it on Naruto’s head. For the first time, Naruto was no longer just the Nine-Tails' host—he was a true ninja.
                </p>

                <p  ref={leftRef8}>
                    That night, Naruto walked home under the stars, forehead protector shining proudly. He remembered Iruka’s smile, the words of trust, and the feeling of finally being seen. For someone who had lived in the shadows, this moment was everything.
                </p>

                <p  ref={leftRef9}>
                    Though his journey had just begun, the Genin Exam became a turning point — the first time he proved to the world, and to himself, that he was more than a burden of the past. He was a boy with dreams, strength, and a will that would never be broken.
                </p>

                <p  ref={leftRef10} className="text-center border-y border-[#f5f3bc] rounded-md text-lg font-medium text-[#fffdc0]">This is where his real story begins.</p>
            </div>

            <div ref={rightImageRef} className="w-full h-full overflow-hidden pl-0 ml-80 col-span-1">
                <Image src={narutoImage} width={100} height={100} alt="Naruto jumped image !" unoptimized className="w-4/5 mt-12 object- ml-0"/>
            </div>

        </div>
    );
};

export default GeninExam;
