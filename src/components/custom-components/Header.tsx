'use client';
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-[#f4feff] shadow font-semibold text-lg">
            <div className="flex items-center justify-between px-30 py-4">

                <Link href='/' className="flex items-center hover:text-gray-500 duration-200 transition-colors">
                    <Image
                        src='/favicon.png'
                        alt="MindMates logo"
                        width={40}
                        height={40}
                    />
                    MindMates
                </Link>

                <nav>
                    <ul className="flex gap-8">
                        <li className="text-[#707176] hover:text-gray-400 duration-200 transition-colors"><Link href='/functionality'>Functionality</Link></li>
                        <li className="text-[#707176] hover:text-gray-400 duration-200 transition-colors"><Link href='/about'>About Us</Link></li>
                        <li className="text-[#707176] hover:text-gray-400 duration-200 transition-colors"><Link href='/support'>Support</Link></li>
                    </ul>
                </nav>

                <Link href='/register' className="py-1.5 px-8 font-medium rounded-3xl bg-gradient-to-r from-cyan-400 to-cyan-700 hover:from-cyan-500 hover:to-cyan-800 text-white text-lg shadow-md shadow-cyan-500/40 hover:bg-blue-500 transition-colors duration-200">
                    Register
                </Link>

            </div>
        </header>
    );
};

export default Header;