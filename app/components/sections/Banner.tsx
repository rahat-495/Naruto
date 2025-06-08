
"use client"
import Image from "next/image";
import image from "@/public/images/Naruto_Uzumaki_1_flipped.webp"

const Banner = () => {
    return (
        <div className="w-full flex items-center justify-between mt-0 px-0">
            <Image src={image} width={650} height={100} alt="Banner image" className=""/>
        </div>
    );
};

export default Banner;
