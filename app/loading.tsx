
"use client"
import Image from "next/image";
import uzumakiLogo from "@/public/images/uzumakiLogo.png";

const loading = () => {
    return (
        <div className="w-full h-screen flex items-centerjustify-center bg-gray-900">
            <Image src={uzumakiLogo} width={100} height={100} alt="Logo" className="rounded-full  animate-spin "/>
        </div>
    );
};

export default loading;
