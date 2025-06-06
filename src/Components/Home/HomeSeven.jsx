import React from 'react'
import Frame from "../../assets/Frame 172.png"
import { useNavigate } from 'react-router-dom';
import Frame2 from "../../assets/Group 33.png"

function HomeSeven() {

    const navigate = useNavigate();
    return (
        <div className="bg-[#023437] py-5 px-6 w-full mt-0">

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center">
                <div className="flex items-center mb-8">
                    <img src={Frame} alt="" className='w-full h-[20%]' />
                </div>
                <div className='flex gap-2 ml-32'>
                    <button class="inline-flex h-[39px] px-6 py-[10px] justify-center items-center flex-shrink-0 rounded-[40px] text-[#FFFBF3] font-open-sans text-sm font-bold bg-[#C09F53]" onClick={() => navigate("/About")}>Join Us</button>
                    <button class="text-[#FFFBF3] font-['Open_Sans'] text-sm font-bold not-italic leading-none flex w-32 h-[39px] px-6 py-[10px] justify-center items-center shrink-0 rounded-[40px] border border-[rgba(255,251,243,0.8)]" onClick={() => navigate("/ContactUs")}>
                        Let's talk
                    </button>
                </div>


            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block max-w-6xl mx-auto">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src={Frame2} alt="" className='w-[150px] h-[150px] ml-[-20%]' />
                        <h2 className="text-white font-['Playfair_Display'] text-[80px] font-bold leading-[90px] w-[479px]">
                            Let's work<br />together
                        </h2>
                    </div>

                    <div className="flex flex-row gap-6">
                        <div className="flex flex-col justify-center items-center gap-6 w-[360px] p-[107px_62px] border border-white border-opacity-40">
                            <p className="text-white text-center font-open-sans text-[32px] font-semibold leading-[35px] w-[236px] mb-8">
                                Looking to hire<br />a lawyer?
                            </p>
                            <button className="flex h-[52px] px-8 py-2 justify-center items-center rounded-[60px] bg-[#C09F53] hover:bg-amber-600 text-white text-center font-open-sans text-[20px] font-semibold leading-[35px] transition-colors" onClick={() => navigate("/ContactUs")}>
                                Let's Talk
                            </button>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-6 w-[360px] p-[107px_62px] border border-white border-opacity-40">
                            <p className="text-white text-center font-open-sans text-[32px] font-semibold leading-[35px] w-[236px] mb-8">
                                Work with<br />Connect2Lawyer!
                            </p>
                            <button className="flex h-[52px] px-8 py-2 justify-center items-center rounded-[60px] bg-[#C09F53] hover:bg-amber-600 text-white text-center font-open-sans text-[20px] font-semibold leading-[35px] transition-colors" onClick={() => navigate("/About")}>
                                Join Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSeven