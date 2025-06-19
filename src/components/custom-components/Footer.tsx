import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react'
import SocialMedias from './SocialMedias';

const Footer = () => {
    return (
        <footer className='mt-10 flex flex-col items-center justify-center text-[#172048] bg-[#d5e9f4]'>
            <div className="flex items-center justify-center gap-20 w-full py-20">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                        <Image
                            src='/favicon.png'
                            alt='MindMates Logo'
                            width={70}
                            height={70}
                        />
                        <h3 className="font-medium text-3xl">MindMates</h3>
                    </div>
                    <p className="text-[#999AA1] w-[250px] ml-[15px]">
                        You&apos;ve reached the end, but it&apos;s not the end! <br />
                        Remember, you&apos;re not alone. Reach out, seek support, and prioritize your mental well-being.
                    </p>
                </div>
                <div className='flex items-baseline gap-10'>
                    <div className='flex flex-col gap-5 '>
                        <h3 className='text-2xl font-medium'>Services</h3>
                        <a href="#">Psychotherapy</a>
                        <a href="#">Mental Counseling</a>
                        <a href="#">Support Groups</a>
                        <a href="#">Case Management</a>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-2xl font-medium'>Contact</h3>
                        <span className='flex gap-2'><Phone className='w-5 h-5 text-black' /> +14 5464 8272</span>
                        <span className='flex gap-2'><Mail className='w-5 h-5 text-black' /> perepeckinvlad@gmail.com</span>
                        <span className='flex gap-2'><MapPin className='w-5 h-5 text-black' /> Lazzy Tower 192, Burn Swiss</span>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-2xl font-medium'>Links</h3>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Term Of Use</a>
                    </div>
                </div>
            </div>
            <div className='w-225 border-1 border-black'></div>
            <p className='mt-10 mb-5'>copyright 2025 @mindmates all right reserved</p>
            <SocialMedias />
        </footer>
    );
};

export default Footer;