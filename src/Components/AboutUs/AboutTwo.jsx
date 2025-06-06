import React, {useEffect} from 'react'
import Frame from "../../assets/Frame 263.png"
import arrow from "../../assets/smallarrow.png"
import Fram from "../../assets/box.png"
import Frames from "../../assets/Frame 172 (1).png"
import { useNavigate } from 'react-router-dom';

function AboutTwo() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <div className="w-full overflow-hidden">
            {/* Desktop Version */}
            <div className="hidden md:block mb-10">
                <div className='mt-10'>
                    <h1 className="text-[#023437] text-center font-['Playfair_Display'] text-[120px] font-extrabold leading-[137.6px] w-[1009px] ml-64">Why Choose Connect2Lawyer?</h1>
                    <p className='text-[#C09F53] text-center font-open-sans text-2xl font-bold leading-normal w-[633px] ml-[30%] mt-16'>
                        Navigating the legal system can be complex, but with us, finding the right legal representation is simple, efficient, and stress-free.
                    </p>

                    <p className="text-[#FFFBF3] font-['Playfair_Display'] text-[64px] w-[400px] font-[800] leading-[70px] absolute z-10 pt-10 mt-[6%] ml-[15%]">Expert Network</p>
                    <p className="text-[#FFFBF3] font-['Open Sans'] text-[20px] w-[434px] font-[600] absolute z-10 pt-10 mt-[19%] ml-[15%]"> Our platform features a vast network of experienced lawyers, each vetted for their expertise and commitment to client success.</p>

                    <p className="text-[#023437] font-['Playfair_Display'] text-[64px] w-[400px] font-[800] leading-[70px] absolute z-10 pt-10 mt-[6%] ml-[60%]">Transparent Insights</p>
                    <p className="text-[#023437] font-['Open Sans'] text-[20px] w-[434px] font-[600] absolute z-10 pt-10 mt-[19%] ml-[60%]"> Access detailed lawyer profiles, client reviews, and success stories to make informed decisions.</p>

                    <p className="text-[#023437] font-['Playfair_Display'] text-[64px] w-[400px] font-[800] leading-[70px] absolute z-10 pt-10 mt-[35%] ml-[15%]">Seamless Connection</p>
                    <p className="text-[#023437] font-['Open Sans'] text-[20px] w-[434px] font-[600] absolute z-10 pt-10 mt-[48%] ml-[15%]">Our user-friendly interface allows for direct communication with your chosen legal professional, streamlining the initiation process. </p>

                    <p className="text-[#FFFBF3] font-['Playfair_Display'] text-[64px] w-[400px] font-[800] leading-[70px] absolute z-10 pt-10 mt-[35%] ml-[60%]">Nationwide Reach</p>
                    <p className="text-[#FFFBF3] font-['Open Sans'] text-[20px] w-[434px] font-[600] absolute z-10 pt-10 mt-[48%] ml-[60%]"> Serving clients across all major cities and regions in Australia, ensuring local expertise is always within reach. </p>

                    <img src={Frame} className='mt-16 w-[1400px] p-10 ml-16' alt="" />
                </div>

                <div className="w-[1200px] h-[539px] border border-[rgba(2,52,55,0.35)] items-center ml-[11%] mb-16">
                    <h1 className="w-[779px] text-[#023437] font-['Playfair_Display'] text-[128px] font-extrabold leading-[140px] ml-16 mt-16">Start Your Case Today</h1>
                    <div className="flex items-center justify-between mt-8">
                        <p className="text-[#023437] font-sans text-xl font-semibold leading-normal w-[779px] ml-16">
                            Finding the right lawyer has never been easier.
                            Take a moment to explore our website today and connect with a dedicated attorney who will protect your rights.
                        </p>
                        <button className="inline-flex justify-center items-center px-8 py-3 rounded-[60px] border border-[rgba(2,52,55,0.61)] text-[#023437] font-sans text-lg font-medium whitespace-nowrap ml-8 mr-16" onClick={() => navigate('/ContactUs')}>
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="relative bg-[#023437] flex rounded-[60px] h-[100px] w-[1230px] ml-[10%]" onClick={() => navigate('/ContactUs')}>
                    <p className="text-[#EFE4CB] font-sans text-[36px] font-bold leading-none ml-16 mt-[2%] mr-[13.8%]">
                        Fill out the free case review form now!
                    </p>
                    <img src={arrow} alt="" className="h-[100px] w-[100px] mt-0 ml-[20%]" />

                </div>                                   
            </div>

            {/* Mobile Version - unchanged from previous implementation */}
            <div className="block md:hidden px-4 mb-10">
                <div className='mt-8'>
                    <h1 className="text-[#023437] text-center font-['Playfair_Display'] text-[36px] font-extrabold leading-[40px]">
                        Why Choose Connect2Lawyer?
                    </h1>
                    <p className='text-[#C09F53] text-center font-open-sans text-lg font-bold leading-normal mt-6'>
                        Navigating the legal system can be complex, but with us, finding the right legal representation is simple, efficient, and stress-free.
                    </p>

                    <div className="mt-8 space-y-8">
                        <div className="rounded-lg">
                            <img src={Fram} alt="" />
                            <p className="text-[#FFFBF3] font-['Playfair_Display'] text-[28px] font-[800] leading-[40px] absolute z-10 mt-[-50%] ml-16 w-[200px] h-auto">Expert Network</p>
                            <p className="text-[#FFFBF3] font-['Open Sans'] text-base font-[600] absolute z-10 mt-[-25%] leading-tight ml-16 w-[240px] h-auto">Our platform features a vast network of experienced lawyers, each vetted for their expertise and commitment.</p>
                        </div>


                        <div className="rounded-lg px-2">
                            <img src={Frames} alt="" />
                            <p className="text-[#023437] font-['Playfair_Display'] text-[28px] font-[800] leading-[40px] absolute z-10 mt-[-50%] ml-16 w-[230px] h-auto">Transparent Insights</p>
                            <p className="text-[#023437] font-['Open Sans'] text-base font-[600] absolute z-10 mt-[-25%] leading-tight ml-16 w-[240px] h-auto">Access detailed lawyer profiles, client reviews, and success stories to make informed decisions.</p>
                        </div>

                        <div className="rounded-lg">
                            <img src={Fram} alt="" />
                            <p className="text-[#FFFBF3] font-['Playfair_Display'] text-[28px] font-[800] leading-[40px] absolute z-10 mt-[-50%] ml-16 w-[230px] h-auto">Seamless Connection</p>
                            <p className="text-[#FFFBF3]  font-['Open Sans'] text-base font-[600] absolute z-10 mt-[-25%] leading-tight ml-16 w-[240px] h-auto">Our user-friendly interface allows for direct communication with your chosen legal professional.</p>
                        </div>

                        <div className="rounded-lg">
                            <img src={Frames} alt="" />
                            <p className="text-[#023437]  font-['Playfair_Display'] text-[28px] font-[800] leading-[40px] absolute z-10 mt-[-50%] ml-16 w-[230px] h-auto">Nationwide Reach</p>
                            <p className="text-[#023437] font-['Open Sans'] text-base font-[600] absolute z-10 mt-[-25%] leading-tight w-[240px] h-auto ml-16">Serving clients across all major cities and regions in Australia, ensuring local expertise is always within reach.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full border border-[rgba(2,52,55,0.35)] p-6 my-8 rounded-lg">
                    <h1 className="text-[#023437] font-['Playfair_Display'] text-[48px] font-extrabold leading-[50px]">
                        Start Your Case Today
                    </h1>
                    <div className="mt-4">
                        <p className="text-[#023437] font-sans text-base font-semibold leading-normal mb-4 ">
                            Finding the right lawyer has never been easier.
                            Take a moment to explore our website today and connect with a dedicated attorney who will protect your rights.
                        </p>
                        <button className="w-full text-center px-6 py-3 rounded-[60px] border border-[rgba(2,52,55,0.61)] text-[#023437] font-sans text-lg font-medium" onClick={() => navigate('/ContactUs')}>
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="relative bg-[#023437] flex rounded-[60px] h-[60px] " onClick={() => navigate('/ContactUs')}>
                    <p className="text-[#EFE4CB] font-sans text-[15px] font-bold leading-tight ml-5 mt-[3%]">
                        Fill out the free case review form now!
                    </p>
                    <img
                        src={arrow}
                        className="h-[60px] w-[60px] mt-0 ml-[10%]"  // Adjust size and margin
                        alt="Arrow icon"
                    />
                </div>
            </div>

        </div>
    )
}

export default AboutTwo