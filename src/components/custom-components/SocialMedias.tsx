import Image from "next/image";
import Link from "next/link";

const SocialMedias = () => {
    return (
        <>
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
                    </clipPath>
                </defs>
            </svg>

            <div className="relative mb-5">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-700 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
                ></div>

                <div className="relative flex items-end gap-x-2 p-2">
                    <div className="relative">
                        <Link
                            style={{ clipPath: 'url(#squircleClip)}' }}
                            className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                            href='https://github.com/xtrphy'
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-8 w-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                ></path>
                            </svg>
                        </Link>
                    </div>

                    <div className="relative">
                        <Link
                            style={{ clipPath: 'url(#squircleClip)' }}
                            className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                            href='https://www.linkedin.com/in/xtrphy-%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%B5%D1%87%D0%BA%D0%B8%D0%BD-150434367/'
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-8 w-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                ></path>
                            </svg>
                        </Link>
                    </div>

                    <div className="relative">
                        <Link
                            style={{ clipPath: 'url(#squircleClip)' }}
                            className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg border border-red-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                            href='https://www.youtube.com/@xtrphy'
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-8 w-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                ></path>
                            </svg>
                        </Link>
                    </div>

                    <div className="relative">
                        <Link
                            style={{ clipPath: 'url(#squircleClip)' }}
                            className="w-14 h-14 bg-gradient-to-br from-pink-300 to-red-600 rounded-xl flex items-center justify-center shadow-lg border border-red-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                            href='https://www.instagram.com/xtrphy_/'
                        >
                            <Image
                                src='https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg'
                                alt="Instagram"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SocialMedias;