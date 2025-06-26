
import Image from "next/image";
import backgroundImage from "@/public/images/sec5/backgroundImage2.png"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FirstMission = () => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const bgImageRef = useRef<HTMLDivElement>(null);
    const mainContentDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.set(bgImageRef.current , { opacity: 0, width : "130%" , height : "130%" , borderRadius : "10px" });
            gsap.set(mainContentDivRef.current , { opacity: 0, width : "20%" , height : "20%" , borderRadius : "50px"  });

            const tl1 = gsap.timeline({
                scrollTrigger : {
                    trigger : sectionRef.current,
                    start : "top top",
                    end : "100%",
                    scrub : true,
                    pin : true ,
                }
            })

            const tl2 = gsap.timeline({
                scrollTrigger : {
                    trigger : sectionRef.current,
                    start : "top top",
                    end : "100%",
                    scrub : true,
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
            
            tl2.to(mainContentDivRef.current , {
                width: "80%",
                height: "80%",
                borderRadius : "12px",
                opacity: 1,
                duration: 1,
                ease: "power2.out"  
            })

        } , sectionRef)

        return () => ctx.revert() ;
        
    } , [])

    return (
        <div ref={sectionRef} className="h-screen bg-black relative flex  flex-col items-center justify-center">
            
            <div ref={bgImageRef} className="absolute w-full h-">
                <Image src={backgroundImage} width={100} height={100} alt="Section 5 background image !" unoptimized className="w-full h-"/>
            </div>

            <div ref={mainContentDivRef} className="backdrop-blur-xs gro text-[17px] text-center bg-white/10 border border-white/30 rounded-xl p-8 shadow-lg w-[80%] h-[80%] overflow-y-hidden space-y-4 text-white leading-relaxed">

                <h2 className="text-white text-2xl font-semibold mb-4">The First Mission: Danger Beyond the Leaf</h2>

                <p>
                    Team 7’s first mission outside the Hidden Leaf Village was to escort Tazuna, a bridge builder from the Land of Waves. It was supposed to be a simple C-rank assignment, but the truth behind the mission changed everything.
                </p>

                <p>
                    Along the way, they were attacked by the Demon Brothers, rogue ninjas sent by the crime lord Gato to stop Tazuna. This marked the team’s first real experience with life-threatening danger.
                </p>

                <p>
                    Naruto, scared and shaken, froze during the initial ambush, but later stabbed his own hand to overcome fear and reassert his resolve. This moment was his first true step toward becoming a shinobi.
                </p>

                <p>
                    Soon after, they encountered Zabuza Momochi — a former member of the Seven Ninja Swordsmen of the Mist. The battle that followed was intense, forcing Kakashi to use his Sharingan eye to protect the team.
                </p>

                <p>
                    Zabuza was saved by a mysterious masked ninja named Haku, who pretended to be a Hunter-nin. Later, Team 7 discovered that Haku was actually Zabuza’s loyal companion — a powerful and tragic ninja raised as a tool of war.
                </p>

                <p>
                    The final fight at the bridge tested the team’s limits. Sasuke nearly died protecting Naruto, and Haku sacrificed himself to protect Zabuza. Naruto’s rage and sorrow awakened a deep empathy for those who suffer in silence.
                </p>

                <p>
                    After Haku’s death, Zabuza revealed his own humanity. In a heartbreaking moment, he broke down and acknowledged Haku’s loyalty. Mortally wounded, Zabuza used the last of his strength to take down Gato and his men.
                </p>

                <p>
                    The mission ended with Naruto burying both Haku and Zabuza side by side in the snow — a symbolic moment that left a deep impression on him and his team.
                </p>

                <p>
                    This first mission didn’t just test Team 7’s physical abilities — it shattered their naive view of the world. It was the beginning of Naruto’s understanding of what it truly means to be a ninja.
                </p>

                <div className="mt-1 space-y-4 text-center">

                    <p className="italic text-white text-lg px-5 py-1 border-y border-white rounded-xl w-fit mx-auto">
                        “When someone dies, they disappear. Their voice, their smile, their warmth… it all disappears.” — Naruto Uzumaki
                    </p>

                    <button className="group relative inline-flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition border border-white/30 shadow-sm hover:shadow-md">
                        Watch the Episode
                    </button>

                </div>


            </div>


        </div>
    );
};

export default FirstMission;
