
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
        { name: "About", href: "/about" },
        { name: "Details", href: "/details" },
    ];

    return (
        <motion.div
            transition={{ duration: 0.2, delay: 0.1 }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full px-10 py-2 flex items-center justify-between sticky top-0 z-50 bg-[#00000017] backdrop-blur-2xl -mb-12 cursor-"
        >
            <motion.h1
                transition={{ duration: 0.3, delay: 0.2 }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`text-2xl font-medium cursor-none text-[#FFFEE7]`}
            >
                <Link href="/">Naruto</Link>
            </motion.h1>

            <ul className="flex items-center gap-5">
                {navItems.map((item, index) => (
                    <motion.li
                        key={item.name}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className={`gro duration-300 ${
                            pathname === item.href
                                ? "text-[#FFFEE7] font-semibold underline underline-offset-4"
                                : "hover:underline underline-offset-4"
                        }`}
                    >
                        <Link href={item.href} className="cursor-">{item.name}</Link>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export default Navbar;
