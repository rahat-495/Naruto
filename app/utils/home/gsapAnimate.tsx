
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const gsapAnimate = ( { elementOrRef , start , end , duration , delay  , Ix , Ax} : 
        { elementOrRef : HTMLDivElement | HTMLButtonElement | null , start : number , end : number , duration : number , delay : number , Ix ?: number , Ax ?: number }
    ) => {
    
    gsap.fromTo(
        elementOrRef , 
        {opacity : 0 , x : Ix || -100} ,
        {
            opacity : 1 ,
            x : Ax || 0 ,
            scrollTrigger : {
                trigger : elementOrRef ,
                start : `top ${start}%` ,
                end : `bottom ${end}%` ,
                toggleActions: "play reverse play reverse",
                // markers : true ,
            } ,
            duration : duration || 0.3 ,
            delay : delay || 0.3 ,
            ease : "power2.inOut" ,
        }
    )
};

export default gsapAnimate;
