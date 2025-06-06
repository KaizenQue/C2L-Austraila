import React, { useState, useRef, useEffect } from 'react';
import NavBar from "../NavBar";
import Vector from "../../assets/Vector (1).png";
import map from "../../assets/map.png";
import Frame17 from "../../assets/Frame 17.png";
import Frame from "../../assets/Frame 262 (2).png";
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import Footer from '../Footer';
import { useMediaQuery, MenuItem } from '@mui/material';
import { toast } from 'react-toastify';
import HomeSeven from '../HomeNewSouthWales/HomeSeven';
// import emailjs from 'emailjs-com';

function ContactUs() {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const isMobile = useMediaQuery('(max-width:768px)');
    const textFieldStyle = {
        '& .MuiInputLabel-root': {
            color: 'white',
            fontSize: isMobile ? '16px' : '20px',
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            '&.Mui-focused': {
                color: 'white'
            }
        },
        '& .MuiInput-root': {
            fontSize: isMobile ? '16px' : '20px',
            fontFamily: 'Helvetica',
            color: 'white',
            '&:before': {
                borderBottomColor: 'white'
            },
            '&:hover:not(.Mui-disabled):before': {
                borderBottomColor: 'white'
            },
            '&:after': {
                borderBottomColor: 'white'
            },
            '&.Mui-focused': {
                color: 'white'
            }
        },
        '& .MuiFormHelperText-root': {
            fontSize: isMobile ? '12px' : '14px',
            fontFamily: 'Helvetica'
        },
        '& .Mui-error': {
            color: 'white',
            '&:after': {
                borderBottomColor: '#d32f2f'
            }
        }
    };

    const formRef = useRef();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailId: '',
        concern: '',
        caseHistory: '',
        settlementHelp: false,
        privacyConsent: false,
        humanVerification: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successDialogOpen, setSuccessDialogOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        } else if (formData.firstName.length < 1) {
            newErrors.firstName = 'First name must be at least 1 character';
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        } else {
            const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
            if (!phoneRegex.test(formData.phoneNumber)) {
                newErrors.phoneNumber = 'Invalid phone number format';
            }
        }

        if (!formData.emailId.trim()) {
            newErrors.emailId = 'Email is required';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.emailId)) {
                newErrors.emailId = 'Please enter a valid email';
            }
        }

        if (!formData.privacyConsent) {
            newErrors.privacyConsent = 'You must agree to the privacy policy';
        }

        if (!formData.humanVerification) {
            newErrors.humanVerification = 'Please verify you are human';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCloseDialog = () => {
        setSuccessDialogOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please correct the errors in the form');
            return;
        }

        setIsSubmitting(true);

        const serviceId = 'service_3vbv36o';
        const templateId = 'template_7xrqzk5';
        const publicKey = '5saECdElLOrsCGmdQ';

        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            email: formData.emailId,
            phone_number: formData.phoneNumber,
            concern: formData.concern,
            case_history: formData.caseHistory
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully:', response);

                // Reset form data
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    emailId: '',
                    concern: '',
                    caseHistory: '',
                    settlementHelp: false,
                    privacyConsent: false,
                    humanVerification: false
                });

                // Show success dialog (if you still want this)
                setSuccessDialogOpen(true);

                // Show modal temporarily before redirect (if needed)
                setShowModal(true);

                // Redirect to thank you page after a short delay
                setTimeout(() => {
                    window.location.href = '/Thankyou';
                }, 100); // 1.5 second delay to allow user to see success message
            })
            .catch((error) => {
                console.error('Email sending error:', error);
                toast.error('Error submitting form. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    // Mobile Layout
    if (isMobile) {
        return (
            <>
                <NavBar />
                <div className="relative w-full">
                    {/* Hero Section */}
                    <div className="relative w-full h-auto p-4 mt-[20%]">
                        <div className="text-left">
                            <p className="text-[#023437] font-sans text-md font-bold">Contact Us</p>
                            <h1 className="text-[#023437] mt-2 font-['Playfair_Display'] text-4xl font-extrabold">
                                We're here to help
                            </h1>
                        </div>
                        <div className="mt-8 text-left">
                            <p className="text-[#023437] font-sans text-lg font-bold underline">
                            +61 470 695 167
                            </p>
                            <p className="text-[#023437] font-sans text-lg font-bold underline mt-2">
                                teamup@connect2lawyer.com.au
                            </p>
                        </div>
                    </div>
                    <img src={map} className='w-[500px] h-[428px] p-10 absolute z-10 ' alt="" />

                    {/* Info Section */}
                    <div className="w-full mt-[100%]">

                        <div className="flex justify-center">
                            <img src={Frame17} className="w-full h-[380px]" alt="" />
                        </div>
                        <p className="text-[#023437] w-[260px] font-['Playfair_Display'] text-[24px] font-bold mt-[-69%] ml-[30%]">
                            <span class="w-[294px] text-[#C09F53] font-['Playfair_Display'] text-2xl font-extrabold">Connect2Lawyer</span> has helped thousands secure the legal care they deserve.
                            Filing a claim may seem complex, but our experienced lawyers are here to guide you.
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="w-full bg-[#023437] p-4 mt-2">
                        <h1 className="w-[381px] text-[#C09F53] font-['Playfair_Display'] text-[48px] font-extrabold leading-[56px] mt-4">
                            Let's Review Your Case Today.
                        </h1>
                        <p className="text-[#FFFBF3] font-open-sans text-lg font-semibold mt-2">
                            Take the first step toward justice-complete your free case evaluation today.
                        </p>

                        <form ref={formRef} onSubmit={handleSubmit} className="mt-6">
                            <div className="space-y-6">
                                <TextField
                                    id="firstName"
                                    name="firstName"
                                    label="Name"
                                    variant="standard"
                                    fullWidth
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    error={!!errors.firstName}
                                    helperText={errors.firstName}
                                    sx={textFieldStyle}
                                />

                                <TextField
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Phone"
                                    variant="standard"
                                    fullWidth
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    error={!!errors.phoneNumber}
                                    helperText={errors.phoneNumber}
                                    sx={textFieldStyle}
                                />

                                <TextField
                                    id="emailId"
                                    name="emailId"
                                    label="Email"
                                    variant="standard"
                                    fullWidth
                                    value={formData.emailId}
                                    onChange={handleChange}
                                    error={!!errors.emailId}
                                    helperText={errors.emailId}
                                    sx={textFieldStyle}
                                />

                                <TextField
                                    id="concern"
                                    name="concern"
                                    label="Select your concern"
                                    variant="standard"
                                    fullWidth
                                    select
                                    value={formData.concern}
                                    onChange={handleChange}
                                    error={!!errors.concern}
                                    helperText={errors.concern}
                                    sx={textFieldStyle}
                                    InputLabelProps={{
                                        sx: {
                                            marginBottom: '80px', // adjust as needed
                                        },
                                    }}
                                >
                                    <MenuItem value="Mesothelioma Lawsuit" sx={{ textAlign: 'left' }}>
                                        Mesothelioma Lawsuit
                                    </MenuItem>
                                    <MenuItem value="Truck Accident Claims" sx={{ textAlign: 'left' }}>
                                        Truck Accident Claims
                                    </MenuItem>
                                    <MenuItem value="Rideshare Class Action Lawsuits" sx={{ textAlign: 'left' }}>
                                        Rideshare Class Action Lawsuits
                                    </MenuItem>
                                    <MenuItem value="Other" sx={{ textAlign: 'left' }}>
                                        Other
                                    </MenuItem>
                                </TextField>

                                <TextField
                                    id="caseHistory"
                                    name="caseHistory"
                                    label="Briefly explain your case history"
                                    variant="standard"
                                    fullWidth
                                    value={formData.concern}
                                    onChange={handleChange}
                                    error={!!errors.concern}
                                    helperText={errors.concern}
                                    sx={textFieldStyle}
                                />

                                {/* <TextField
                                    className='mt-[30%]'
                                    id="caseHistory"
                                    name="caseHistory"
                                    label="Briefly explain your case history"
                                    variant="standard"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={formData.caseHistory}
                                    onChange={handleChange}
                                    error={!!errors.caseHistory}
                                    helperText={errors.caseHistory}
                                    sx={{
                                        ...textFieldStyle,
                                        '& .MuiInputLabel-root': {
                                            transform: 'translate(0, -20px) scale(1)',
                                            fontSize: '16px',
                                            color: "white"
                                        },
                                        '& .MuiInputLabel-shrink': {
                                            transform: 'translate(0, -5px) scale(0.75)',
                                             color: "white"
                                        },
                                        '& .MuiInput-root': {
                                            marginTop: '30px',
                                             color: "white"
                                        }
                                    }}
                                /> */}
                            </div>

                            {/* Checkbox Section */}
                            <div className="mt-8 space-y-6 text-white text-sm leading-relaxed">
                                {/* Settlement Help */}
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 mt-0.5"> {/* Container for consistent sizing */}
                                        <input
                                            type="checkbox"
                                            id="settlementHelp"
                                            name="settlementHelp"
                                            checked={formData.settlementHelp || false}
                                            onChange={handleChange}
                                            className="h-5 w-5 accent-[#C09F53]"
                                        />
                                    </div>
                                    <label htmlFor="settlementHelp" className="ml-3 block">
                                        I would be needing help to file a settlement.
                                    </label>
                                </div>

                                {/* Privacy Consent */}
                                <div className="flex items-start mt-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <input
                                            type="checkbox"
                                            id="privacyConsent"
                                            name="privacyConsent"
                                            checked={formData.privacyConsent || false}
                                            onChange={handleChange}
                                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            required
                                        />
                                    </div>
                                    <label htmlFor="privacyConsent" className="ml-3 block text-white text-lg text-left">
                                        <span className="block">
                                            I agree to the{' '}
                                            <a href="/Privacypolicy" className="underline hover:text-blue-200">
                                                privacy policy
                                            </a>{' '}
                                            and{' '}
                                            <a href="/Disclaimer" className="underline hover:text-blue-200">
                                                disclaimer
                                            </a>{' '}
                                            and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list.
                                        </span>
                                        <span className="block mt-2">
                                            I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
                                        </span>
                                    </label>
                                </div>

                                {/* Human Verification */}
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 mt-0.5">
                                        <input
                                            type="checkbox"
                                            id="humanVerification"
                                            name="humanVerification"
                                            checked={formData.humanVerification || false}
                                            onChange={handleChange}
                                            className="h-5 w-5 accent-[#C09F53]"
                                            required
                                        />
                                    </div>
                                    <label htmlFor="humanVerification" className="ml-3 block">
                                        Please click this box so we know you're a person and not a computer
                                    </label>
                                </div>
                            </div>


                            <button
                                type="submit"
                                disabled={isSubmitting}

                                className="
        inline-flex
        h-12
        px-6
        py-[10px]
        justify-center
        items-center
        rounded-[40px]
        bg-[#C09F53]
        text-[#FFFBF3]
        border
        border-[#FFFBF3]
        font-bold
        hover:bg-[#374A67]
        disabled:opacity-70
        w-full
        mt-8
    "
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>

                    {/* <div className="bg-[#023437] py-10 px-6 w-full absolute"> */}
                    <HomeSeven />
                    <Footer />
                    {/* </div> */}
                </div>
            </>
        );
    }

    // Desktop Layout
    return (
        <>
            <div>
                <NavBar />
                <div>
                    <img src={Vector} className='w-[1200px] h-[700px] mt-16 p-10 absolute z-10 ml-16' alt="" />
                    <div className='absolute z-10 mt-[10%] text-end ml-[50%] w-[572px]'>
                        <p class="text-[#023437] font-sans text-[24px] font-bold normal-case leading-none absolute">Contact Us</p>
                        <h1 class="w-[572px] text-[#023437] mt-5 absolute z-10 font-['Playfair_Display'] text-[96px] font-extrabold leading-[100px] text-left">
                            We're here to help
                        </h1>
                        <p class="text-[#023437] absolute font-sans text-[32px] not-italic font-bold underline underline-auto underline-solid underline-from-font l*owercase mt-[50%]">
                        +61 470 695 167
                        </p>
                        <p class="text-[#023437] absolute font-sans text-[32px] not-italic font-bold underline underline-auto underline-solid underline-from-font lowercase mt-[60%]">
                            teamup@connect2lawyer.com.au
                        </p>
                    </div>
                </div>

                <div class="w-[1520px] h-[448px] flex-shrink-0 mt-[50%] absolute bg-[#EFE4CB]">
                    <img src={Frame} className='w-[400px] h-[300px] mt-16 p-10 absolute z-10 ml-64' alt="" />
                    <p class="text-[#023437] font-open-sans text-[32px] w-[795px] font-bold leading-none absolute z-10 mt-[16%] ml-[34%]">
                        Connect2Lawyer has helped thousands secure the legal care they deserve. Filing a claim may seem complex,
                        but our experienced lawyers are here to guide you every step of the way.
                    </p>

                </div>
            </div>
            <div className="p-[20px] mt-[79.5%]  w-[1520px] h-[1300px] absolute flex-shrink-0 bg-[#023437] from-11.75% to-[rgba(2,52,55,0.53)] to-100% backdrop-blur-[12.5px]  text-center">
                <h1 class="text-[#C09F53] font-['Playfair_Display'] text-[96px] w-[771px] font-extrabold leading-[100px] text-left m-10">
                    Let’s Review Your Case Today.
                </h1>
                <p class="w-[505px] text-[#FFFBF3] font-open-sans text-[24px] font-semibold leading-none text-left m-10">
                    Take the first step toward justice-complete your free case evaluation today.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className='mt-[5%] w-[896px] h-[847px] ml-[35%]'>
                    <div className="flex mt-16">
                        <div className="flex-1 px-4">
                            <TextField
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                variant="standard"
                                fullWidth
                                value={formData.firstName}
                                onChange={handleChange}
                                error={!!errors.firstName}
                                helperText={errors.firstName}
                                sx={{
                                    ...textFieldStyle,
                                    marginBottom: '60px'
                                }}
                            />

                            <TextField
                                id="emailId"
                                name="emailId"
                                label="Email ID"
                                variant="standard"
                                fullWidth
                                value={formData.emailId}
                                onChange={handleChange}
                                error={!!errors.emailId}
                                helperText={errors.emailId}
                                sx={textFieldStyle}
                            />
                        </div>

                        <div className="flex-1 px-4">
                            <TextField
                                id="PhoneNumber"
                                name="PhoneNumber"
                                label="Phone Number"
                                variant="standard"
                                fullWidth
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                error={!!errors.phoneNumber}
                                helperText={errors.phoneNumber}
                                sx={{
                                    ...textFieldStyle,
                                    marginBottom: '60px'
                                }}
                            />
                            <TextField
                                id="concern"
                                name="concern"
                                label="Select your concern"
                                variant="standard"
                                fullWidth
                                select
                                value={formData.concern}
                                onChange={handleChange}
                                error={!!errors.concern}
                                helperText={errors.concern}
                                sx={textFieldStyle}
                                InputLabelProps={{
                                    sx: {
                                        marginBottom: '80px', // adjust as needed
                                    },
                                }}
                            >
                                <MenuItem value="Mesothelioma Lawsuit" sx={{ textAlign: 'left' }}>
                                    Mesothelioma Lawsuit
                                </MenuItem>
                                <MenuItem value="Truck Accident Claims" sx={{ textAlign: 'left' }}>
                                    Truck Accident Claims
                                </MenuItem>
                                <MenuItem value="Rideshare Class Action Lawsuits" sx={{ textAlign: 'left' }}>
                                    Rideshare Class Action Lawsuits
                                </MenuItem>
                                <MenuItem value="Other" sx={{ textAlign: 'left' }}>
                                    Other
                                </MenuItem>
                            </TextField>


                        </div>
                    </div>

                    <div className="flex-2 w-[95%] mt-0 ml-[2%]">
                        <TextField
                            id="caseHistory"
                            name="caseHistory"
                            label="Briefly explain your case history"
                            variant="standard"
                            fullWidth
                            value={formData.caseHistory}
                            onChange={handleChange}
                            error={!!errors.caseHistory}
                            helperText={errors.caseHistory}
                            className='mt-5'
                            sx={{
                                ...textFieldStyle,
                                marginBottom: '60px',
                                '& .MuiInputLabel-root': {
                                    transform: 'translate(0, -30px) scale(1)',
                                    fontSize: '20px',
                                    color: "white",
                                    fontWeight: 'bold',
                                },
                                '& .MuiInputLabel-shrink': {
                                    transform: 'translate(0, -10px) scale(0.75)',
                                    color: "white"
                                },
                                '& .MuiInput-root': {
                                    marginTop: '100px',
                                    color: "white",
                                    '&:before': {
                                        borderBottom: '1px solid white',
                                        marginTop: '20px'
                                    },
                                    '&:hover:not(.Mui-disabled):before': {
                                        borderBottom: '2px solid white'
                                    },
                                    '&:after': {
                                        borderBottom: '2px solid white'
                                    }
                                },
                                '& .MuiInput-input': {
                                    color: "white"
                                },
                                '& .MuiFormHelperText-root': {
                                    color: "white"
                                }
                            }}
                        />

                        {/* Checkbox Section */}
                        <div className="mt-8 space-y-6 text-white">
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="settlementHelp"
                                    name="settlementHelp"
                                    checked={formData.settlementHelp || false}
                                    onChange={handleChange}
                                    className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="settlementHelp" className="ml-3 block text-lg">
                                    I would be needing help to file a settlement.
                                </label>
                            </div>

                            <div className="flex items-start mt-4">
                                <div className="flex-shrink-0 mt-1">
                                    <input
                                        type="checkbox"
                                        id="privacyConsent"
                                        name="privacyConsent"
                                        checked={formData.privacyConsent || false}
                                        onChange={handleChange}
                                        className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        required
                                    />
                                </div>
                                <label htmlFor="privacyConsent" className="ml-3 block text-white text-lg text-left">
                                    <span className="block">
                                        I agree to the{' '}
                                        <a href="/Privacypolicy" className="underline hover:text-blue-200">
                                            privacy policy
                                        </a>{' '}
                                        and{' '}
                                        <a href="/Disclaimer" className="underline hover:text-blue-200">
                                            disclaimer
                                        </a>{' '}
                                        and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list.
                                    </span>
                                    <span className="block mt-2">
                                        I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
                                    </span>
                                </label>
                            </div>

                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="humanVerification"
                                    name="humanVerification"
                                    checked={formData.humanVerification || false}
                                    onChange={handleChange}
                                    className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    required
                                />
                                <label htmlFor="humanVerification" className="ml-3 block text-lg">
                                    Please click this box so we know you're a person and not a computer
                                </label>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="
    inline-flex
    h-[60px]                     
    px-[49px]                    
    justify-center
    items-center
    gap-[10px]
    flex-shrink-0
    rounded-[60px]
    bg-[#023437]                 
    text-[#FFFBF3]             
    border
    border-[#FFFBF3]             
    font-open-sans             
    text-[16px]                 
    font-bold                    
    leading-normal
    hover:bg-[#374A67]           
    disabled:opacity-70         
    transition-colors           
    duration-200                 
    mt-16
    ml-[-76%]
  "
                    >
                        {isSubmitting ? 'Submitting...' : 'Begin Here'}
                    </button>
                </form>
            </div>

            <div className="bg-[#023437] py-10 px-6 w-full absolute mt-[164%]">
                <div className="border-t border-[#023437] mb-10"></div>

                <HomeSeven />
                <Footer />

            </div>
        </>
    );
}

export default ContactUs;