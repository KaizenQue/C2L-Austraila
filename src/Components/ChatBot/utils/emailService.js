// import emailjs from '@emailjs/browser';

// // Initialize EmailJS with your Public Key
// emailjs.init('DyDZ85E9uwzwSyUoD');

// // Function to get IP address
// const getIPAddress = async () => {
//   try {
//     const response = await fetch('https://api.ipify.org?format=json');
//     const data = await response.json();
//     return data.ip;
//   } catch (error) {
//     console.error('Failed to get IP address:', error);
//     return 'IP address not available';
//   }
// };

// // Function to send confirmation email to user
// // const sendConfirmationEmail = async (userEmail, formType, formData) => {
// //   try {
// //     const templateParams = {
// //       to_email: userEmail,
// //       from_email: 'reachus@fightformesothelioma.com',
// //       to_name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim() || 'Valued Customer',
// //       from_name: 'Fight For Mesothelioma',
// //       subject: `Thank you for your ${formType} submission`,
// //       message: `Thank you for submitting your ${formType}. We have received your information and will get back to you soon.`,
// //       name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
// //       form_type: formType,
// //       submission_date: new Date().toLocaleDateString(),
// //       reply_to: 'reachus@fightformesothelioma.com',
// //       user_email: userEmail
// //     };

// //     const response = await emailjs.send(
// //       'service_9pv809e',
// //       'template_ri6bi4g',
// //       templateParams
// //     );
    
// //     return { success: true, response };
// //   } catch (error) {
// //     console.error('Failed to send confirmation email:', error);
// //     return { success: false, error };
// //   }
// // };
// const sendConfirmationEmail = async (userEmail, formType, formData) => {
//     try {
//       const templateParams = {
//         to_email: userEmail,  // Recipient's email
//         from_email: 'reachus@fightformesothelioma.com',
//         to_name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim() || 'Valued Customer',
//         from_name: 'Fight For Mesothelioma',
//         subject: `Thank you for your ${formType} submission`,
//         message: `Thank you for submitting your ${formType}. We have received your information and will get back to you soon.`,
//         name: formData.name || '',
//         form_type: formType,
//         submission_date: new Date().toLocaleDateString(),
//         reply_to: 'reachus@fightformesothelioma.com',
//         user_email: userEmail  // Adding this to ensure the template uses the correct email
//       };
  
//       // Send confirmation email to user
//       const response = await emailjs.send(
//         'service_9pv809e',  // Using the same service ID as other email functions
//         'template_ri6bi4g',
//         templateParams
//       );
      
//       return { success: true, response };
//     } catch (error) {
//       console.error('Failed to send confirmation email:', error);
//       return { success: false, error };
//     }
//   };

// // Function to send home form data
// export const sendHomeFormEmail = async (formData) => {
//   try {
//     const ipAddress = await getIPAddress();
//     const templateParams = {
//       from_name: `${formData.firstName} ${formData.lastName}`,
//       from_email: 'reachus@fightformesothelioma.com',
//       email: formData.emailId,
//       phone_number: formData.phoneNumber,
//       ip_address: ipAddress,
//       page_source: 'HomeForm'
//     };

//     // Send admin notification
//     const response = await emailjs.send(
//       'service_9pv809e',
//       'template_zbzb40t',
//       templateParams
//     );

//     // Send confirmation email to user if email is provided
//     if (formData.emailId) {
//       try {
//         await sendConfirmationEmail(formData.emailId, 'home form', formData);
//       } catch (confirmationError) {
//         console.error('Failed to send confirmation email:', confirmationError);
//       }
//     }
    
//     return { success: true, response };
//   } catch (error) {
//     console.error('Failed to send email:', error);
//     return { success: false, error };
//   }
// };

// // Function to send claim form data
// export const sendClaimFormEmail = async (formData) => {
//   try {
//     const ipAddress = await getIPAddress();
//     const templateParams = {
//       from_name: `${formData.firstName} ${formData.lastName}`,
//       from_email: 'reachus@fightformesothelioma.com',
//       email: formData.emailId,
//       phone_number: formData.phoneNumber,
//       state: formData.state,
//       exposure_type: formData.asbestosExposure,
//       exposure_location: formData.exposureLocation,
//       date_of_birth: formData.dateOfBirth,
//       additional_info: formData.story || "No additional information provided",
//       agreed_to_terms: formData.privacyPolicy ? "Yes" : "No",
//       ip_address: ipAddress,
//       page_source: typeof window !== 'undefined' 
//         ? `https://www.fightformesothelioma.com${window.location.pathname}`
//         : 'Unknown'
//     };

//     // Send admin notification
//     const response = await emailjs.send(
//       'service_9pv809e',
//       'template_x9omuym',
//       templateParams
//     );

//     // Send confirmation email to user if email is provided
//     if (formData.emailId) {
//       try {
//         await sendConfirmationEmail(formData.emailId, 'claim form', formData);
//       } catch (confirmationError) {
//         console.error('Failed to send confirmation email:', confirmationError);
//       }
//     }
    
//     return { success: true, response };
//   } catch (error) {
//     console.error('Failed to send email:', error);
//     return { success: false, error };
//   }
// };

// // Function to send newsletter subscription
// export const sendNewsletterSubscription = async (email, pageSource = '') => {
//     try {
//         const ipAddress = await getIPAddress();
//         const templateParams = {
//           to_email: 'reachus@fightformesothelioma.com',
//           from_email: 'reachus@fightformesothelioma.com',
//           subscriber_email: email,
//           message: `New newsletter subscription from ${email}`,
//           ip_address: ipAddress,
//           page_source: pageSource || 'Unknown',
//           subject: 'Newsletter Subscription'
//         };

//     // Send admin notification
//     const response = await emailjs.send(
//       'service_9pv809e',
//       'template_1wc3wd1',
//       templateParams
//     );

//     // Send confirmation email to subscriber
//     try {
//       await sendConfirmationEmail(email, 'newsletter subscription', { email });
//     } catch (confirmationError) {
//       console.error('Failed to send confirmation email:', confirmationError);
//     }
    
//     return { success: true, response };
//   } catch (error) {
//     console.error('Failed to send subscription email:', error);
//     return { success: false, error };
//   }
// };

// // Function to send construction form data
// export const sendConstructionFormEmail = async (formData) => {
//   try {
//     const ipAddress = await getIPAddress();
//     const templateParams = {
//       from_name: `${formData.firstName} ${formData.lastName}`,
//       from_email: 'reachus@fightformesothelioma.com',
//       email: formData.emailId,
//       phone_number: formData.phoneNumber,
//       state: formData.state,
//       date_of_birth: formData.dateOfBirth,
//       date_of_diagnosis: formData.dateOfDiagnosis,
//       diagnosis_type: formData.diagnosisType,
//       other_diagnosis: formData.otherDiagnosis || "Not specified",
//       job_title: formData.jobTitle,
//       ip_address: ipAddress,
//       page_source: typeof window !== 'undefined' 
//         ? `https://www.fightformesothelioma.com${window.location.pathname}`
//         : 'Unknown'
//     };

//     // Send admin notification
//     const response = await emailjs.send(
//       'service_9pv809e',
//       'template_6s7k6t5', // You'll need to create this template in EmailJS
//       templateParams
//     );

//     // Send confirmation email to user if email is provided
//     if (formData.emailId) {
//       try {
//         await sendConfirmationEmail(formData.emailId, 'construction form', formData);
//       } catch (confirmationError) {
//         console.error('Failed to send confirmation email:', confirmationError);
//       }
//     }
    
//     return { success: true, response };
//   } catch (error) {
//     console.error('Failed to send email:', error);
//     return { success: false, error };
//   }
// }; 

import emailjs from "@emailjs/browser";

import React, { useState, useEffect } from "react";
// Initialize EmailJS with your Public Key
emailjs.init("DyDZ85E9uwzwSyUoD");

// Function to get IP address
const getIPAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Failed to get IP address:", error);
    return "IP address not available";
  }
};

// Function to send confirmation email to user
// const sendConfirmationEmail = async (userEmail, formType, formData) => {
//   try {
//     const templateParams = {
//       to_email: userEmail,
//       from_email: 'reachus@fightformesothelioma.com',
//       to_name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim() || 'Valued Customer',
//       from_name: 'Fight For Mesothelioma',
//       subject: `Thank you for your ${formType} submission`,
//       message: `Thank you for submitting your ${formType}. We have received your information and will get back to you soon.`,
//       name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
//       form_type: formType,
//       submission_date: new Date().toLocaleDateString(),
//       reply_to: 'reachus@fightformesothelioma.com',
//       user_email: userEmail
//     };

//     const response = await emailjs.send(
//       'service_9pv809e',
//       'template_ri6bi4g',
//       templateParams
//     );

//     return { success: true, response };
//   } catch (error) {
//     console.error('Failed to send confirmation email:', error);
//     return { success: false, error };
//   }
// };
const sendConfirmationEmail = async (userEmail, formType, formData) => {
  try {
    const templateParams = {
      to_email: userEmail, // Recipient's email
      from_email: "teamup@connect2lawyer.com.au",
      to_name:
        `${formData.firstName || ""} ${formData.lastName || ""}`.trim() ||
        "Valued Customer",
      from_name: "Fight For Mesothelioma",
      subject: `Thank you for your ${formType} submission`,
      message: `Thank you for submitting your ${formType}. We have received your information and will get back to you soon.`,
      name: formData.name || "",
      form_type: formType,
      submission_date: new Date().toLocaleDateString(),
      reply_to: "teamup@connect2lawyer.com.au",
      user_email: userEmail, // Adding this to ensure the template uses the correct email
    };

    // Send confirmation email to user
    const response = await emailjs.send(
      "service_brjo5qt", // Using the same service ID as other email functions
      "template_jfbk7op",
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
    return { success: false, error };
  }
};

// Function to send home form data
export const sendHomeFormEmail = async (formData) => {
  try {
    const ipAddress = await getIPAddress();
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: "reachus@fightformesothelioma.com",
      email: formData.emailId,
      phone_number: formData.phoneNumber,
      ip_address: ipAddress,
      page_source: "HomeForm",
    };

    // Send admin notification
    const response = await emailjs.send(
      "service_9pv809e",
      "template_zbzb40t",
      templateParams
    );

    // Send confirmation email to user if email is provided
    if (formData.emailId) {
      try {
        await sendConfirmationEmail(formData.emailId, "home form", formData);
      } catch (confirmationError) {
        console.error("Failed to send confirmation email:", confirmationError);
      }
    }

    return { success: true, response };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};

// Function to send claim form data
export const sendClaimFormEmail = async (formData) => {
  try {
    const ipAddress = await getIPAddress();
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: "reachus@fightformesothelioma.com",
      email: formData.emailId,
      phone_number: formData.phoneNumber,
      state: formData.state,
      exposure_type: formData.asbestosExposure,
      exposure_location: formData.exposureLocation,
      date_of_birth: formData.dateOfBirth,
      additional_info: formData.story || "No additional information provided",
      agreed_to_terms: formData.privacyPolicy ? "Yes" : "No",
      ip_address: ipAddress,
      // ping_url: ping_url,
      // cert_id: cert_id,
      page_source:
        typeof window !== "undefined"
          ? `https://www.fightformesothelioma.com${window.location.pathname}`
          : "Unknown",
    };

    // Send admin notification
    const response = await emailjs.send(
      "service_9pv809e",
      "template_x9omuym",
      templateParams
    );

    // Send confirmation email to user if email is provided
    if (formData.emailId) {
      try {
        await sendConfirmationEmail(formData.emailId, "claim form", formData);
      } catch (confirmationError) {
        console.error("Failed to send confirmation email:", confirmationError);
      }
    }

    return { success: true, response };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};

// Function to send newsletter subscription
export const sendNewsletterSubscription = async (email, pageSource = "") => {
  try {
    const ipAddress = await getIPAddress();
    const templateParams = {
      to_email: "reachus@fightformesothelioma.com",
      from_email: "reachus@fightformesothelioma.com",
      subscriber_email: email,
      message: `New newsletter subscription from ${email}`,
      ip_address: ipAddress,
      page_source: pageSource || "Unknown",
      subject: "Newsletter Subscription",
    };

    // Send admin notification
    const response = await emailjs.send(
      "service_9pv809e",
      "template_1wc3wd1",
      templateParams
    );

    // Send confirmation email to subscriber
    try {
      await sendConfirmationEmail(email, "newsletter subscription", { email });
    } catch (confirmationError) {
      console.error("Failed to send confirmation email:", confirmationError);
    }

    return { success: true, response };
  } catch (error) {
    console.error("Failed to send subscription email:", error);
    return { success: false, error };
  }
};

// Function to send construction form data
export const sendConstructionFormEmail = async (formData, trustedFormData) => {
  console.log("formData", formData);
  
  try {
    const ipAddress = await getIPAddress();
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: "reachus@fightformesothelioma.com",
      email: formData.emailId,
      phone_number: formData.phoneNumber,
      state: formData.state,
      date_of_birth: formData.dateOfBirth,
      date_of_diagnosis: formData.dateOfDiagnosis,
      diagnosis_type: formData.diagnosisType,
      other_diagnosis: formData.otherDiagnosis || "Not specified",
      job_title: formData.jobTitle,
      ip_address: ipAddress,
      xxTrustedFormCertUrl: trustedFormData.xxTrustedFormCertUrl,
      xxTrustedFormPingUrl: trustedFormData.xxTrustedFormPingUrl,
      xxTrustedFormCertToken: trustedFormData.xxTrustedFormCertToken,
      page_source:
        typeof window !== "undefined"
          ? `https://www.fightformesothelioma.com${window.location.pathname}`
          : "Unknown",
    };

    // Send admin notification
    const response = await emailjs.send(
      "service_9pv809e",
      "template_6s7k6t5",
      templateParams
    );

    // Send confirmation email to user if email is provided
    if (formData.emailId) {
      try {
        await sendConfirmationEmail(
          formData.emailId,
          "construction form",
          formData
        );
      } catch (confirmationError) {
        console.error("Failed to send confirmation email:", confirmationError);
      }
    }

    return { success: true, response };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};

// Function to send landing page form data
export const sendLandingPageFormEmail = async (formData, trustedFormData) => {
  try {
    const ipAddress = await getIPAddress();
    const templateParams = {
      from_name: formData.fullName,
      from_email: "teamup@connect2lawyer.com.au",
      email: formData.email,
      phone_number: `${formData.countryCode}${formData.phone}`,
      ip_address: ipAddress,
      page_source:
        typeof window !== "undefined"
          ? `https://www.C2L.com${window.location.pathname}`
          : "Unknown",
      subject: "New Landing Page Form Submission",
      xxTrustedFormCertUrl: trustedFormData.xxTrustedFormCertUrl,
      xxTrustedFormPingUrl: trustedFormData.xxTrustedFormPingUrl,
      xxTrustedFormCertToken: trustedFormData.xxTrustedFormCertToken,
      submission_date: new Date().toLocaleDateString()
    };

    // Send admin notification
    const response = await emailjs.send(
      "service_brjo5qt",
      "template_ef4lv9n",
      templateParams
    );

    // Send confirmation email to user
    if (formData.email) {
      try {
        await sendConfirmationEmail(formData.email, "landing page form", {
          name: formData.fullName
        });
      } catch (confirmationError) {
        console.error("Failed to send confirmation email:", confirmationError);
      }
    }

    return { success: true, response };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};
