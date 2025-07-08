
import backgroundImageForSec4 from "@/public/images/sec4/backgroundImageForSec4.png";
import team7allMemberImage from "@/public/images/sec4/team7allMemberImage.png";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Team7Start = () => {

    const backgroundImageRef = useRef<HTMLDivElement>(null);

    const sectionRef = useRef<HTMLDivElement>(null);

    const leftImageRef = useRef<HTMLDivElement>(null);

    const rightDivRef = useRef<HTMLDivElement>(null);
    const textRef1 = useRef<HTMLParagraphElement>(null);
    const textRef2 = useRef<HTMLParagraphElement>(null);
    const textRef3 = useRef<HTMLParagraphElement>(null);
    const textRef4 = useRef<HTMLParagraphElement>(null);
    const textRef5 = useRef<HTMLParagraphElement>(null);
    const textRef6 = useRef<HTMLParagraphElement>(null);
    const textRef7 = useRef<HTMLParagraphElement>(null);
    const textRef8 = useRef<HTMLParagraphElement>(null);
    const textRef9 = useRef<HTMLParagraphElement>(null);
    const textRef10 = useRef<HTMLParagraphElement>(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.set(leftImageRef.current , {opacity : 0 , x : -600}) ;
            gsap.set(backgroundImageRef.current , {opacity : 0 , y : -1000 , filter : "blur(10px)"}) ;
            gsap.set([rightDivRef.current , textRef1.current , textRef2.current , textRef3.current , textRef4.current , textRef5.current , textRef6.current , textRef7.current , textRef7.current , textRef8.current , textRef9.current] , {opacity : 0 , x : 600}) ;

            const tl1 = gsap.timeline({
                scrollTrigger : {
                    trigger : sectionRef.current ,
                    start : "top top",
                    end : "100%",
                    scrub : true,
                    pin : true,
                }
            })

            const tl2 = gsap.timeline({
                scrollTrigger : {
                    trigger : rightDivRef.current ,
                    start : "top top" ,
                    end : "100%" ,
                    scrub : true ,
                }
            })

            tl1.to(backgroundImageRef.current , {
                y : 0 ,
                opacity : 1 ,
                duration : 0.3 ,
                filter : "blur(5px)" ,
                ease : "power2.out" ,
            })
            
            tl1.to(leftImageRef.current , {
                x : 0 ,
                opacity : 1 ,
                delay : 0.3 ,
                duration : 0.5 ,
                ease : "power2.out" ,
            } , "<")

            tl2.to(rightDivRef.current , {
                x : 0 ,
                opacity : 1 ,
                delay : 1.8 ,
                duration : 0.5 ,
                ease : "power2.out" ,
            })
            .to(textRef1.current , {
                x : 0 ,
                opacity : 1 ,
                duration : 0.5 ,
                ease : "power2.out" ,
            })
            .to(textRef2.current , {
                x : 0 ,
                opacity : 1 ,
                duration : 0.5 ,
                ease : "power2.out" ,
            })
            .to(textRef3.current , {
                x : 0 ,
                opacity : 1 ,
                duration : 0.5 ,
                ease : "power2.out" ,
            })
            .to(textRef4.current , {
                x : 0 ,
                opacity : 1 ,
                duration : 0.5 ,
                ease : "power2.out" ,
            })
            .to(textRef5.current , {
                x : 0 ,
                opacity : 1 ,
                duration : 0.5 ,
                ease : "power2.out" ,
            })
            .to(textRef6.current , {
                x : 0 ,
                opacity : 1 ,
                duration : 0.5 ,
                ease : "power2.out" ,
            })
            .to(textRef7.current , {
                x : 0 ,
                opacity : 1 ,
                duration : 0.5 ,
                ease : "power2.out" ,
            })
            .to(textRef8.current , {
                x : 0 ,
                opacity : 1 ,
                duration : 0.5 ,
                ease : "power2.out" ,
            })
            .to(textRef9.current , {
                x : 0 ,
                opacity : 1 ,
                duration : 0.5 ,
                ease : "power2.out" ,
            })
            .to(textRef10.current , {
                x : 0 ,
                opacity : 1 ,
                duration : 0.5 ,
                ease : "power2.out" ,
            })

        })

        return () => ctx.revert() ;

    } , [])

    return (
        <div ref={sectionRef} className='h-screen w-full overflow-hidden bg-black relative grid grid-cols-2'>
            
            <div ref={backgroundImageRef} className="absolute w-full bottom-0 left-0 z-[-1]">
                <Image src={backgroundImageForSec4} width={100} height={100} alt="Section 4 back ground image !" unoptimized className="w-full h-full -z-0"/>
            </div>

            <div ref={leftImageRef} className="">
                <Image src={team7allMemberImage} width={100} height={100} alt="team 7 members image." unoptimized className="w-[85%] mt-12 ml-8"/>
            </div>

            <div ref={rightDivRef} className="text-white px-10 py-20 space-y-6 leading-relaxed font-light text-right">
                <h2 ref={textRef1} className="text-4xl font-semibold text-white mb-6">Team 7's Formation: Bonds, Tests & Growth</h2>

                <p ref={textRef2}>
                    After years of rigorous training and lessons at the Ninja Academy, three newly graduated Genin—<span className="font-medium text-[#fffdc0]">Naruto Uzumaki</span>, an energetic boy with a dream to become Hokage; <span className="font-medium text-[#fffdc0]">Sasuke Uchiha</span>, the last survivor of the powerful Uchiha clan; and <span className="font-medium text-[#fffdc0]">Sakura Haruno</span>, known for her intelligence and focus—were grouped together to form what would be known as <span className="font-medium text-[#fffdc0]">Team 7</span>. Their personalities clashed at first, but destiny had its plans.
                </p>

                <p ref={textRef3}>
                    The three were introduced to their Jonin instructor, <span className="font-medium text-[#fffdc0]">Kakashi Hatake</span>—a shinobi known for his mysterious demeanor, one visible eye, and deep combat experience. Rather than starting any training immediately, Kakashi chose to observe his students, giving off a distant vibe. But beneath that laid a deep understanding of what made a team truly strong.
                </p>

                <p ref={textRef4}>
                    During their introduction, Kakashi gave very little away about himself. He emphasized the importance of unity in a subtle way, leaving the three to wonder what lay ahead. He then told them that a test awaited them the next day, a test which would determine whether they were even qualified to be Genin.
                </p>

                <p ref={textRef5}>
                    The next morning, they assembled early, ready for what seemed like a regular exercise. Instead, Kakashi revealed the infamous <span className="font-medium text-[#fffdc0]">Bell Test</span>. He held up two small bells and told them to take one by any means necessary. But there was a catch—there were only two bells for three people. The one left without a bell would be sent back to the Academy.
                </p>

                <p ref={textRef6}>
                    As the test began, each of them attacked individually—Sasuke with his precision, Naruto with unpredictable energy, and Sakura trying to keep up. But Kakashi, unfazed and highly experienced, countered every move. One by one, he exposed their lack of coordination and punished their impulsiveness.
                </p>

                <p ref={textRef7}>
                    At the end of the test, Naruto was tied up and left hungry. Sasuke and Sakura were told to eat, but forbidden from sharing with Naruto. Despite this, they decided to break the rule and gave Naruto some food, believing it was unfair to let a teammate suffer alone.
                </p>

                <p ref={textRef8}>
                    Just then, Kakashi appeared—and instead of scolding them, he passed them. He told them that the true purpose of the test was to see whether they would prioritize each other. His lesson was clear and unforgettable: <span className="font-medium text-[#fffdc0]">“In the ninja world, those who break the rules are scum... but those who abandon their friends are worse than scum.”</span>
                </p>

                {/* <p>
                    It was in that moment they weren’t just a team on paper—they became a unit built on trust and mutual respect. Kakashi, though tough, had planted the first seeds of camaraderie that would shape their future missions and challenges.
                </p>

                <p ref={textRef8}>
                    That evening, as they walked back together under the slowly setting sun, a quiet bond had begun to form. Team 7 wasn’t perfect, but it had potential. Their journey had only just begun.
                </p> */}

                <p ref={textRef9} className="text-center border-y border-[#f5f3bc] rounded-md text- font-medium text-[#fffdc0] mt-6">
                    This was more than a test. It was the first step of three young ninjas becoming something greater—<span className="italic">a true team.</span>
                </p>

                <p ref={textRef10}>  </p>
            </div>

        </div>
    );
};

export default Team7Start;
