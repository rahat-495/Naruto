
"use client"
import Image from "next/image";
import uzumakiLogo from "@/public/images/sec1/uzumakiLogo.png";

const loading = () => {
    return (
        <div className="w-full h-screen flex items-centerjustify-center bg-gray-900">
            <Image src={uzumakiLogo} width={100} height={100} alt="Logo" className="rounded-full w-[100px] h-[100px] animate-spin "/>
        </div>
    );
};

export default loading;
