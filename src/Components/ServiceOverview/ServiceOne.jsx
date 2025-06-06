import React from 'react';
import hands from "../../assets/hands.png";
import Frame from "../../assets/Frame 261.png";
import { Parallax } from 'react-scroll-parallax';
// import './ServiceOne.css'; // We'll create this CSS file for media queries

function ServiceOne() {
    return (
        <>
            {/* Desktop Version */}
            <div className="desktop-service-one hidden md:block overflow-hidden">
                <div className="relative w-full bg-white overflow-hidden mt-16 ml-[-5%]">
                    {/* Main content container */}
                    <div className="max-w-7xl mx-auto px-4 py-10">
                        {/* Text section */}
                        <div className="w-full mb-12">
                            <h1 className="font-['Playfair_Display'] text-[#023437] text-[108.247px] font-[800] leading-normal w-[1440px] h-auto flex-shrink-0 mb-6 border-b border-gray-300 pb-4">
                                Fighting For What Matters
                            </h1>

                            <h2 className="text-[24px] font-open-sans font-bold not-italic leading-normal uppercase text-[#C09F53] tracking-wide mt-8">
                                TOGETHER, WE MAKE A DIFFERENCE.
                            </h2>

                            <p className="text-[#023437] font-open-sans text-xl md:text-2xl font-normal leading-normal w-[435px] mt-2 max-w-lg">
                                Join forces with us to seek justice and drive meaningful change.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative w-[1900px] h-[1000px] flex-shrink-0  mb-[35%]">
                    {/* Frame image - position it properly ( now comes first) */}
                    <Parallax speed={-20}>
                        <img
                            src={hands}
                            alt="hands"
                            className="relative z-20 h-auto w-full object-cover ml-[-5%]"
                        />
                    </Parallax>
                    <div className="w-full h-auto bottom-0 mt-[-25%]">
                        <img
                            src={Frame}
                            alt="frame"
                            className="h-auto w-[1630px] object-cover"
                        />
                    </div>

                    {/* Hands image with parallax effect (will appear above frame) */}


                </div>
            </div>

            {/* Mobile Version */}
            <div className="mobile-service-one block md:hidden overflow-hidden">
                <div className="relative w-full bg-white overflow-hidden mt-32 px-4">
                    {/* Text section */}
                    <div className="w-full mb-8">
                        <h1 className="font-['Playfair_Display'] text-[#023437] text-[48px] font-[800] leading-tight mb-4 border-b border-gray-300 pb-4">
                            Fighting For What Matters
                        </h1>

                        <h2 className="text-[18px] font-open-sans font-bold not-italic leading-normal uppercase text-[#C09F53] tracking-wide mt-6">
                            TOGETHER, WE MAKE A DIFFERENCE.
                        </h2>

                        <p className="text-[#023437] font-open-sans text-lg font-normal leading-normal mt-2">
                            Join forces with us to seek justice and drive meaningful change.
                        </p>
                    </div>
                </div>
                <div className="relative w-[110%] bg-white overflow-hidden mt-0 -ml-5 mb-[10%]">
                    {/* Images section */}
                    <Parallax speed={-10}>
                        <img
                            src={hands}
                            alt="hands"
                            className="relative z-20 h-[100%]"
                        />
                    </Parallax>
                    <div className="w-full h-auto bottom-0 mt-[-20%] ">
                        <img
                            src={Frame}
                            alt="frame"
                            className="h-auto w-[1530px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceOne;