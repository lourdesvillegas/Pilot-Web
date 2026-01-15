import React from "react";
import bgImage from "../../../assets/images/strategic-bg.jpg"; 

const SocialMediaSection = () => {
  return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

                {/* Left content - Social Media */}
                <div className="bg-[#f7f7f7] flex items-center">
                <div className="max-w-7xl px-8 py-16 md:px-32 text-left w-full">

                    <h4 className="text-sm font-semibold text-[#0234B4] uppercase mb-4">
                    Connect with us
                    </h4>

                    <h2 className="text-3xl md:text-4xl  text-gray-900 mb-10 leading-tight">
                    Follow us on our social networks
                    </h2>

                    {/* Social links */}
                    <div className="flex items-center gap-6">

                        {/* Facebook */}
                        <a href="#" className="transition hover:scale-110">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0234B4] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
                            </svg>
                            </div>
                        </a>

                        {/* Instagram */}
                        <a href="#" className="transition hover:scale-110">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0234B4] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9zm4.8-7.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z"/>
                            </svg>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a href="#" className="transition hover:scale-110">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0234B4] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h4v1.7c.6-1 1.6-2 3.5-2 3.7 0 4.5 2.4 4.5 5.6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/>
                            </svg>
                            </div>
                        </a>

                </div>
                </div>
                </div>

                {/* Right image */}
                <div
                className="bg-cover bg-center flex items-center justify-center min-h-[400px]"
                style={{ backgroundImage: `url(${bgImage})` }}
                />
            </div>
        </section>


      );
};

export default SocialMediaSection;