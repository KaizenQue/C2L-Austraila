import React, { useRef } from 'react';
import Frame176 from "../../assets/Frame 176 (2).png";
import Framem176 from "../../assets/ACTIVE LAWSUIT.png";
import bg from "../../assets/xray.png";


function HomeThree() {
    const targetRef = useRef(null);
    
    const handleConsultationClick = () => {
        window.scrollTo({
            top: 2900,
            left: 0,
            behavior: 'smooth'
        });
    };

    const handleLearnMoreClick = () => {
        console.log('Learn More clicked');
    };

    const expertiseTags = [
        { text: 'Mass Tort', active: true },
        { text: 'Class Action', active: false },
        { text: 'Personal Injury', active: false }
    ];

    const steps = [
        {
            number: "Step 1",
            title: "Submit your claim",
            description: "Get a free case review from experienced professionals."
        },
        {
            number: "Step 2", 
            title: "We take action",
            description: "We will begin a detailed review of your case as soon as your claim is received."
        },
        {
            number: "Step 3",
            title: "Justice drives us", 
            description: "If we represent you, our team works tirelessly to secure the results you're entitled to."
        }
    ];

    return (
        <div className="w-full">
            {/* Our Expertise Section */}
            <section className="w-full bg-[#023437] relative py-8 md:py-16">
                {/* Section Header */}
                <div className="pt-8 md:pt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                    <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-4 md:mb-8">
                        Our Expertise
                    </h1>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 md:gap-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-4 md:mb-8">
                    {expertiseTags.map((tag, index) => (
                        <button
                            key={index}
                            className={`
                                rounded-full px-4 md:px-6 py-2 md:py-3
                                font-['Open_Sans'] text-sm md:text-base font-semibold
                                transition-all duration-300
                                ${tag.active 
                                    ? 'bg-[#C09F53] text-[#023437]' 
                                    : 'border border-[#FFFBF3] text-[#FFFBF3] bg-transparent hover:bg-[#FFFBF3] hover:text-[#023437]'
                                }
                            `}
                        >
                            {tag.text}
                        </button>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                    <div className="w-full overflow-hidden flex flex-col lg:flex-row rounded-lg lg:rounded-none">
                        {/* Left - Text Content */}
                        <div className="w-full lg:w-1/2 bg-[#C09F53] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center order-2 lg:order-1">
                            <h2 className="text-white font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 md:mb-6 drop-shadow-lg">
                                Mesothelioma Lawsuit
                            </h2>
                            <p className="text-white font-['Open_Sans'] text-base sm:text-lg md:text-xl lg:text-xl font-normal leading-relaxed mb-6 md:mb-8 drop-shadow-md max-w-full lg:max-w-lg">
                                Seeks justice for individuals diagnosed with mesothelioma due to asbestos exposure, often decades ago.
                            </p>
                            <button
                                className="
                                    rounded-full border-2 border-white px-6 md:px-8 py-3 md:py-4
                                    text-white font-['Open_Sans'] text-base md:text-lg font-semibold
                                    bg-transparent self-start transition-all duration-300
                                    hover:bg-white hover:text-[#C09F53] cursor-pointer drop-shadow-md
                                "
                                onClick={handleLearnMoreClick}
                            >
                                Learn More
                            </button>
                        </div>

                        {/* Right - Image */}
                        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto min-h-[400px] order-1 lg:order-2">
                            <img
                                src={bg}
                                alt="X-ray or Medical Illustration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="w-full bg-[#023437] py-12 lg:py-20">
                <div ref={targetRef}></div>
                
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-12 lg:mb-16">
                    <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
                        How IT Works
                    </h1>
                    <div className="lg:mt-8 xl:mt-12">
                        <p className="text-[#FFFBF3] font-['Open_Sans'] text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed max-w-md">
                            Start in just a few steps, where{' '}
                            <span className="text-[#C09F53]">your rights come first.</span>
                        </p>
                    </div>
                </div>

                {/* Steps Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`
                                flex flex-col p-6 md:p-8 lg:p-10 gap-6 md:gap-8 lg:gap-12
                                border border-[#FFFBF3] border-opacity-35 cursor-pointer
                                transition-all duration-300 hover:border-opacity-60
                                ${index === 0 ? 'lg:rounded-l-lg' : ''}
                                ${index === steps.length - 1 ? 'lg:rounded-r-lg' : ''}
                                ${index < steps.length - 1 ? 'lg:border-r-0' : ''}
                                lg:rounded-none rounded-lg
                            `}
                            onClick={handleConsultationClick}
                        >
                            <p className="text-[#FFFBF3] font-['Open_Sans'] text-lg md:text-xl lg:text-2xl font-semibold">
                                {step.number}
                            </p>
                            <h4 className="text-[#C09F53] font-sans text-2xl md:text-3xl lg:text-4xl font-bold leading-tight underline">
                                {step.title}
                            </h4>
                            <p className="text-[#FFFBF3] font-['Open_Sans'] text-base md:text-lg lg:text-xl font-semibold leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Active Lawsuits Section */}
            <section className="w-full bg-[#023437] py-12 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center lg:w-1/2 w-full space-y-6 md:space-y-8 text-center lg:text-left">
                        <h1 className="text-[#FFFBF3] font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight italic">
                            Active Lawsuits
                        </h1>

                        <h2 className="text-[#FFFBF3] font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                            Mesothelioma Lawsuit
                        </h2>

                        <p className="text-[#FFFBF3] font-['Open_Sans'] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Seeks justice for individuals diagnosed with mesothelioma due to asbestos exposure, often decades ago.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                        <img
                            src={window.innerWidth < 640 ? Framem176 : Frame176}
                            alt="Active Lawsuit Visual"
                            className="w-full max-w-lg lg:max-w-2xl xl:max-w-4xl h-auto object-contain"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeThree;