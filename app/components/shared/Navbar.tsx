
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {

    return (
        <div  className="w-full px-10 py-2 flex items-center justify-between sticky top-0 z-50 bg-[#00000034] backdrop-blur-2xl">
            <motion.h1 transition={{duration: 0.3, delay : 0.2}} initial={{y : -100 , opacity : 0}} animate={{y : 0 , opacity : 1}} className={`text-2xl font-medium cursor-pointer`}>
                <Link href={'/'}>Naruto</Link>
            </motion.h1>

            <ul className="flex items-center gap-5">
                <motion.li transition={{duration: 0.3, delay : 0.3}} initial={{y : -100 , opacity : 0}} animate={{y : 0 , opacity : 1}} className="gro hover:underline duration-300">
                    <Link href={'/'}>Home</Link>
                </motion.li>

                <motion.li transition={{duration: 0.3, delay : 0.4}} initial={{y : -100 , opacity : 0}} animate={{y : 0 , opacity : 1}} className="gro hover:underline duration-300">
                    <Link href={'/'}>Contact</Link>
                </motion.li>

                <motion.li transition={{duration: 0.3, delay : 0.5}} initial={{y : -100 , opacity : 0}} animate={{y : 0 , opacity : 1}} className="gro hover:underline duration-300">
                    <Link href={'/'}>About</Link>
                </motion.li>

                <motion.li transition={{duration: 0.3, delay : 0.6}} initial={{y : -100 , opacity : 0}} animate={{y : 0 , opacity : 1}} className="gro hover:underline duration-300">
                    <Link href={'/'}>Details</Link>
                </motion.li>
            </ul>

        </div>
    );
};

export default Navbar;
