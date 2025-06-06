import React,{useState} from 'react';
import about from "../../assets/about1.png";
import aboutMobile from "../../assets/Frame 175 (3).png"; // You'll need a mobile-optimized image
import Frame from "../../assets/Frame 19.png";
import Searchbar from "../../assets/Search bar.png";
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';

function AboutOne() {
        const navigate = useNavigate();
        const [isMenuOpen, setIsMenuOpen] = useState(false);
    
        const menuItems = [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/Service' },
            { name: 'Sub Services', path: '/SubService' },
            { name: 'About Us', path: '/About' },
            { name: 'Contact', path: '/ContactUs' },
        ];
    
    return (
        <div>
            {/* Desktop View */}
            <div className='hidden md:block'>
                <div className='h-full object-cover relative'>
                    <div className='absolute z-10 mt-[23%] text-end ml-[44%]'>
                        <p className="w-[176px] text-[#FFFBF3] font-open-sans text-[24px] font-bold normal-case ml-[-4%]">
                            Who We Are
                        </p>
                        <h1 className="text-[#ffffff] font-['Playfair_Display'] text-[96px] font-extrabold leading-[100px] w-[697px] text-left">
                            Empowering Your Legal Journey Across Australia
                        </h1>
                    </div>
                    <div className='absolute z-10 mt-[70%] text-end ml-[3%] p-10'>
                        <h1 className="text-[150px] text-[#023437] text-center font-['Playfair_Display'] font-bold leading-none">
                            Our Commitment
                        </h1>
                        <div className="flex">
                            <p className="text-[#023437] w-[590px] h-[132px] flex-shrink-0 font-open-sans text-[20px] font-bold leading-7 text-left ml-16 mt-10">
                                Personalized Matching: Utilizing advanced algorithms to connect you with lawyers who specialize in your specific legal matter.
                            </p>
                            <p className="text-[#023437] w-[590px] h-[132px] flex-shrink-0 font-open-sans text-[20px] font-bold leading-8 text-left ml-16 mt-[2.5%]">
                                Comprehensive Services: Offering assistance in areas such as personal injury, medical malpractice, mass tort litigation, and more.
                            </p>
                        </div>
                    </div>
                    <img
                        src={about}
                        alt="About Us"
                        className="h-full object-cover mt-[-10%] w-full"
                    />
                </div>
            </div>

            {/* Mobile View */}
            <div className='block md:hidden relative mt-10'>
                <div className='absolute z-10 top-[20%] left-[5%] right-[5%]'>
                    <p className="text-[#FFFBF3] font-open-sans text-[18px] mt-[-10%] font-bold normal-case">
                        Who We Are
                    </p>
                    <h1 className="text-[#ffffff] font-['Playfair_Display'] text-[36px] font-extrabold leading-[40px] mt-2">
                        Empowering Your Legal Journey Across Australia
                    </h1>
                </div>

                <div className='absolute z-10 top-[44%] left-1/2 transform -translate-x-1/2 w-full text-center '>
                    <div className='max-w-xs mx-auto md:max-w-md lg:max-w-lg'>
                        <h1 className="text-[28px] text-[#023437] font-['Playfair_Display'] font-bold leading-[5px] ml-5">
                            Our Commitment
                        </h1>
                        <div className="mt-4 space-y-4 text-left">
                            <div className="text-[#023437] font-open-sans text-[14px] font-semibold leading-[17px] w-[330px] h-[105.326px] flex-shrink-0">
                                <p className="mx-auto">
                                    Personalized Matching: Utilizing advanced algorithms to connect you with lawyers who specialize in your specific legal matter.
                                </p>
                                <p className="mx-auto mt-4">
                                    Comprehensive Services: Offering assistance in areas such as personal injury, medical malpractice, mass tort litigation, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    src={aboutMobile}
                    alt="About Us"
                    className="w-full h-full object-cover"
                />

                {/* Mobile Header */}
                {/* <div className="fixed top-0 left-0 w-full bg-white z-[1000] p-4 shadow-md">
                    <div className="flex items-center justify-between">
                        <img src={Frame} alt="Logo" className="w-[150px] h-[30px]" />

                        <div className="flex items-center">
                            <img src={Searchbar} alt="Search" className="w-[30px] h-[30px] mr-4" />
                            <button
                                className="bg-[#C09F53] rounded-full px-4 py-2 text-white text-sm font-bold"
                                onClick={() => navigate('/ClaimForm')}
                            >
                                Free Consultation
                            </button>
                        </div>
                    </div>
                </div> */}
                <NavBar />
            </div>
        </div>
    );
}

export default AboutOne;