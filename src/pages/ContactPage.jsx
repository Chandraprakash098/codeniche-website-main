// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import {
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaClock,
//   FaLinkedin,
//   FaTwitter,
//   FaGithub,
// } from "react-icons/fa";
// import emailjs from "@emailjs/browser";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// const EMAILJS_CONFIG = {
//   SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
//   TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//   PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
// };

// // Styled components remain unchanged
// const ContactPageContainer = styled.div`
//   padding: 5rem 0 3.75rem;
//   background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
//   min-height: 100vh;
//   box-sizing: border-box;
//   width: 100%;
//   overflow-x: hidden;

//   @media (max-width: 768px) {
//     padding: 3.75rem 0 2.5rem;
//   }

//   @media (max-width: 480px) {
//     padding: 3rem 0 2rem;
//   }
// `;

// const ContactWrapper = styled.div`
//   max-width: 75rem;
//   margin: 0 auto;
//   padding: 0 1.25rem;
//   width: 100%;
//   box-sizing: border-box;

//   @media (max-width: 768px) {
//     padding: 0 1rem;
//   }

//   @media (max-width: 480px) {
//     padding: 0 0.75rem;
//   }
// `;

// const PageTitle = styled.h1`
//   text-align: center;
//   margin-bottom: 1rem;
//   font-size: clamp(1.75rem, 5vw, 2.25rem);
//   font-weight: 700;
//   color: #2d3748;
//   position: relative;
//   width: 100%;
//   word-wrap: break-word;

//   &:after {
//     content: "";
//     display: block;
//     width: 3.75rem;
//     height: 0.1875rem;
//     background: linear-gradient(90deg, #1a75ff, #00c3ff);
//     margin: 0.75rem auto 0;
//     border-radius: 0.125rem;
//   }

//   @media (max-width: 480px) {
//     margin-bottom: 0.75rem;
//     &:after {
//       width: 3.125rem;
//       margin: 0.625rem auto 0;
//     }
//   }
// `;

// const SubTitle = styled.p`
//   text-align: center;
//   max-width: 43.75rem;
//   margin: 0 auto 2.5rem;
//   font-size: clamp(0.875rem, 2.5vw, 1rem);
//   color: #4a5568;
//   line-height: 1.6;
//   width: 100%;
//   word-wrap: break-word;

//   @media (max-width: 768px) {
//     margin-bottom: 1.875rem;
//     max-width: 100%;
//   }

//   @media (max-width: 480px) {
//     font-size: 0.875rem;
//     margin-bottom: 1.5rem;
//   }
// `;

// const ContactGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 1.875rem;
//   width: 100%;

//   @media (max-width: 992px) {
//     grid-template-columns: 1fr;
//     gap: 1.25rem;
//   }

//   @media (max-width: 480px) {
//     gap: 1rem;
//   }
// `;

// const ContactForm = styled.form`
//   background-color: white;
//   padding: clamp(1.25rem, 4vw, 1.875rem);
//   border-radius: 0.625rem;
//   box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.08);
//   transition: transform 0.3s ease;
//   width: 100%;
//   box-sizing: border-box;

//   &:hover {
//     transform: translateY(-0.3125rem);
//   }

//   @media (max-width: 480px) {
//     border-radius: 0.5rem;
//     padding: 1rem;
//   }
// `;

// const FormTitle = styled.h2`
//   font-size: clamp(1.25rem, 3.5vw, 1.5rem);
//   margin-bottom: 1.5rem;
//   color: #2d3748;
//   position: relative;
//   width: 100%;
//   word-wrap: break-word;

//   &:after {
//     content: "";
//     display: block;
//     width: 2.5rem;
//     height: 0.125rem;
//     background: linear-gradient(90deg, #1a75ff, #00c3ff);
//     margin-top: 0.625rem;
//     border-radius: 0.125rem;
//   }

//   @media (max-width: 480px) {
//     margin-bottom: 1.25rem;
//     &:after {
//       width: 1.875rem;
//       margin-top: 0.5rem;
//     }
//   }
// `;

// const FormGroup = styled.div`
//   margin-bottom: 1.25rem;
//   width: 100%;

//   @media (max-width: 480px) {
//     margin-bottom: 1rem;
//   }
// `;

// const FormLabel = styled.label`
//   display: block;
//   margin-bottom: 0.375rem;
//   font-weight: 600;
//   color: #4a5568;
//   font-size: clamp(0.8125rem, 2vw, 0.875rem);

//   @media (max-width: 480px) {
//     margin-bottom: 0.25rem;
//   }
// `;

// const FormInput = styled.input`
//   width: 100%;
//   padding: clamp(0.625rem, 2.5vw, 0.75rem) clamp(0.875rem, 3vw, 1rem);
//   border: 1px solid #e2e8f0;
//   border-radius: 0.375rem;
//   font-size: clamp(0.875rem, 2.5vw, 0.9375rem);
//   transition: all 0.3s ease;
//   background-color: #f8fafc;
//   touch-action: manipulation;
//   box-sizing: border-box;

//   &:focus {
//     outline: none;
//     border-color: #1a75ff;
//     box-shadow: 0 0 0 0.1875rem rgba(26, 117, 255, 0.15);
//     background-color: #fff;
//   }

//   &::placeholder {
//     color: #a0aec0;
//   }

//   @media (max-width: 480px) {
//     border-radius: 0.3125rem;
//     padding: 0.5rem 0.75rem;
//   }
// `;

// const FormTextarea = styled.textarea`
//   width: 100%;
//   padding: clamp(0.625rem, 2.5vw, 0.75rem) clamp(0.875rem, 3vw, 1rem);
//   border: 1px solid #e2e8f0;
//   border-radius: 0.375rem;
//   font-size: clamp(0.875rem, 2.5vw, 0.9375rem);
//   min-height: clamp(7.5rem, 20vw, 9.375rem);
//   resize: vertical;
//   transition: all 0.3s ease;
//   background-color: #f8fafc;
//   touch-action: manipulation;
//   box-sizing: border-box;

//   &:focus {
//     outline: none;
//     border-color: #1a75ff;
//     box-shadow: 0 0 0 0.1875rem rgba(26, 117, 255, 0.15);
//     background-color: #fff;
//   }

//   &::placeholder {
//     color: #a0aec0;
//   }

//   @media (max-width: 480px) {
//     border-radius: 0.3125rem;
//     padding: 0.5rem 0.75rem;
//   }
// `;

// const FormSelect = styled.select`
//   width: 100%;
//   padding: clamp(0.625rem, 2.5vw, 0.75rem) clamp(0.875rem, 3vw, 1rem);
//   border: 1px solid #e2e8f0;
//   border-radius: 0.375rem;
//   font-size: clamp(0.875rem, 2.5vw, 0.9375rem);
//   background-color: #f8fafc;
//   cursor: pointer;
//   appearance: none;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='%234a5568' viewBox='0 0 16 16'%3E%3Cpath d='M8 10.5l-4.5-4.5h9l-4.5 4.5z'/%3E%3C/svg%3E");
//   background-repeat: no-repeat;
//   background-position: right 0.75rem center;
//   background-size: 0.875rem;
//   touch-action: manipulation;
//   box-sizing: border-box;

//   &:focus {
//     outline: none;
//     border-color: #1a75ff;
//     box-shadow: 0 0 0 0.1875rem rgba(26, 117, 255, 0.15);
//     background-color: #fff;
//   }

//   @media (max-width: 480px) {
//     border-radius: 0.3125rem;
//     background-position: right 0.625rem center;
//     background-size: 0.75rem;
//     padding: 0.5rem 0.75rem;
//   }
// `;

// const SubmitButton = styled.button`
//   background: linear-gradient(135deg, #1a75ff 0%, #0056b3 100%);
//   color: white;
//   border: none;
//   border-radius: 0.375rem;
//   padding: clamp(0.75rem, 2.5vw, 0.875rem) clamp(1.5rem, 4vw, 1.75rem);
//   font-size: clamp(0.875rem, 2.5vw, 0.9375rem);
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   width: 100%;
//   text-transform: uppercase;
//   letter-spacing: 0.03125rem;
//   box-shadow: 0 0.25rem 0.625rem rgba(26, 117, 255, 0.3);
//   touch-action: manipulation;
//   box-sizing: border-box;

//   &:hover {
//     background: linear-gradient(135deg, #0056b3 0%, #003d82 100%);
//     transform: translateY(-0.125rem);
//     box-shadow: 0 0.375rem 0.9375rem rgba(26, 117, 255, 0.4);
//   }

//   &:active {
//     transform: translateY(0);
//     box-shadow: 0 0.125rem 0.3125rem rgba(26, 117, 255, 0.3);
//   }

//   &:disabled {
//     background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
//     cursor: not-allowed;
//     transform: none;
//     box-shadow: none;
//   }

//   @media (max-width: 480px) {
//     border-radius: 0.3125rem;
//     padding: 0.625rem 1.25rem;
//   }
// `;

// const ContactInfoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.25rem;
//   width: 100%;

//   @media (max-width: 480px) {
//     gap: 1rem;
//   }
// `;

// const ContactInfoCard = styled.div`
//   background-color: white;
//   padding: clamp(1.25rem, 4vw, 1.5625rem);
//   border-radius: 0.625rem;
//   box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.08);
//   transition: transform 0.3s ease;
//   position: relative;
//   overflow: hidden;
//   width: 100%;
//   box-sizing: border-box;

//   &:hover {
//     transform: translateY(-0.3125rem);
//   }

//   &:after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 0.3125rem;
//     height: 100%;
//     background: linear-gradient(to bottom, #1a75ff, #00c3ff);
//   }

//   @media (max-width: 480px) {
//     border-radius: 0.5rem;
//     padding: 1rem 1rem 1rem 1.25rem;
//   }
// `;

// const ContactInfoTitle = styled.h2`
//   font-size: clamp(1.25rem, 3.5vw, 1.5rem);
//   margin-bottom: 1.5rem;
//   color: #2d3748;
//   position: relative;
//   padding-left: 0.5rem;
//   width: 100%;
//   word-wrap: break-word;

//   &:after {
//     content: "";
//     display: block;
//     width: 2.5rem;
//     height: 0.125rem;
//     background: linear-gradient(90deg, #1a75ff, #00c3ff);
//     margin-top: 0.625rem;
//     border-radius: 0.125rem;
//   }

//   @media (max-width: 480px) {
//     margin-bottom: 1.25rem;
//     padding-left: 0.375rem;
//     &:after {
//       width: 1.875rem;
//       margin-top: 0.5rem;
//     }
//   }
// `;

// const ContactInfoList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   width: 100%;
// `;

// const ContactInfoItem = styled.li`
//   display: flex;
//   align-items: flex-start;
//   margin-bottom: 1.25rem;
//   transition: transform 0.3s ease;
//   width: 100%;
//   box-sizing: border-box;

//   &:hover {
//     transform: translateX(0.3125rem);
//   }

//   &:last-child {
//     margin-bottom: 0;
//   }

//   @media (max-width: 480px) {
//     margin-bottom: 1rem;
//   }
// `;

// const ContactIcon = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-size: clamp(0.875rem, 2.5vw, 1rem);
//   margin-right: clamp(0.75rem, 2.5vw, 0.875rem);
//   min-width: clamp(2rem, 5vw, 2.25rem);
//   height: clamp(2rem, 5vw, 2.25rem);
//   border-radius: 50%;
//   background: linear-gradient(135deg, #1a75ff 0%, #00c3ff 100%);
//   box-shadow: 0 0.1875rem 0.375rem rgba(26, 117, 255, 0.2);
//   flex-shrink: 0;

//   @media (max-width: 480px) {
//     margin-right: 0.75rem;
//     min-width: 1.875rem;
//     height: 1.875rem;
//     font-size: 0.875rem;
//   }
// `;

// const ContactDetails = styled.div`
//   flex: 1;
//   overflow-wrap: break-word;
//   word-wrap: break-word;
//   word-break: break-word;
//   hyphens: auto;
// `;

// const ContactLabel = styled.p`
//   font-weight: 700;
//   margin-bottom: 0.25rem;
//   color: #2d3748;
//   font-size: clamp(0.875rem, 2.5vw, 0.9375rem);

//   @media (max-width: 480px) {
//     margin-bottom: 0.1875rem;
//  said: true
//   }
// `;

// const ContactText = styled.p`
//   color: #4a5568;
//   line-height: 1.6;
//   margin: 0;
//   margin-bottom: 0.1875rem;
//   font-size: clamp(0.8125rem, 2vw, 0.875rem);
//   overflow-wrap: break-word;
//   word-wrap: break-word;
//   word-break: break-word;

//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// const MapContainer = styled.div`
//   margin-top: 1.25rem;
//   height: clamp(10rem, 25vw, 11.25rem);
//   border-radius: 0.375rem;
//   overflow: hidden;
//   box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
//   position: relative;
//   width: 100%;
//   box-sizing: border-box;

//   @media (max-width: 480px) {
//     height: 9.375rem;
//     margin-top: 1rem;
//     border-radius: 0.3125rem;
//   }
// `;

// const Map = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// const SocialLinks = styled.div`
//   margin-top: 1.25rem;
//   display: flex;
//   flex-wrap: wrap;
//   gap: clamp(0.625rem, 2vw, 0.75rem);

//   @media (max-width: 480px) {
//     margin-top: 1rem;
//     gap: 0.625rem;
//   }
// `;

// const SocialLink = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: clamp(2.25rem, 5vw, 2.5rem);
//   height: clamp(2.25rem, 5vw, 2.5rem);
//   background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
//   border-radius: 50%;
//   color: #1a75ff;
//   font-size: clamp(0.875rem, 2.5vw, 1rem);
//   transition: all 0.3s ease;
//   box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.08);

//   &:hover {
//     background: linear-gradient(135deg, #1a75ff 0%, #00c3ff 100%);
//     color: white;
//     transform: translateY(-0.3125rem) rotate(8deg);
//     box-shadow: 0 0.375rem 0.75rem rgba(26, 117, 255, 0.25);
//   }

//   @media (max-width: 480px) {
//     width: 2rem;
//     height: 2rem;
//     font-size: 0.875rem;
//   }
// `;

// const FormError = styled.p`
//   color: #e53e3e;
//   font-size: clamp(0.75rem, 2vw, 0.8125rem);
//   margin-top: 0.25rem;
//   display: flex;
//   align-items: center;

//   &:before {
//     content: "⚠ ";
//     margin-right: 0.1875rem;
//   }

//   @media (max-width: 480px) {
//     margin-top: 0.1875rem;
//   }
// `;

// const FormSuccess = styled.div`
//   padding: clamp(0.625rem, 2.5vw, 0.75rem);
//   background-color: #c6f6d5;
//   color: #276749;
//   border-radius: 0.375rem;
//   margin-bottom: 1.25rem;
//   display: ${({ visible }) => (visible ? "flex" : "none")};
//   align-items: center;
//   font-size: clamp(0.8125rem, 2vw, 0.875rem);
//   width: 100%;
//   box-sizing: border-box;

//   &:before {
//     content: "✓ ";
//     margin-right: 0.375rem;
//     font-weight: bold;
//   }

//   @media (max-width: 480px) {
//     border-radius: 0.3125rem;
//     margin-bottom: 1rem;
//     padding: 0.5rem;
//   }
// `;

// const FormRow = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: clamp(0.75rem, 2.5vw, 1rem);
//   width: 100%;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     gap: 0.75rem;
//   }
// `;

// const ContactBadge = styled.div`
//   display: inline-block;
//   font-size: clamp(0.75rem, 2vw, 0.8125rem);
//   font-weight: 600;
//   color: #1a75ff;
//   background-color: rgba(26, 117, 255, 0.1);
//   padding: clamp(0.125rem, 1vw, 0.1875rem) clamp(0.5rem, 2vw, 0.625rem);
//   border-radius: 0.875rem;
//   margin-bottom: 0.5rem;

//   @media (max-width: 480px) {
//     padding: 0.125rem 0.5rem;
//     border-radius: 0.75rem;
//     margin-bottom: 0.375rem;
//   }
// `;

// const CardFlare = styled.div`
//   position: absolute;
//   top: -2.5rem;
//   right: -2.5rem;
//   width: 5rem;
//   height: 5rem;
//   border-radius: 50%;
//   background: radial-gradient(
//     circle,
//     rgba(26, 117, 255, 0.1) 0%,
//     rgba(26, 117, 255, 0) 70%
//   );
//   pointer-events: none;

//   @media (max-width: 480px) {
//     top: -1.875rem;
//     right: -1.875rem;
//     width: 3.75rem;
//     height: 3.75rem;
//   }
// `;

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     service: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [submissionError, setSubmissionError] = useState("");

//   useEffect(() => {
//     // Initialize EmailJS once on component mount
//     if (EMAILJS_CONFIG.PUBLIC_KEY) {
//       emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
//     } else {
//       console.error("EmailJS Public Key is missing.");
//     }

//     // Initialize Leaflet map
//     const map = L.map("map", {
//       zoomControl: true,
//       scrollWheelZoom: false,
//       touchZoom: true,
//       doubleClickZoom: true,
//     }).setView([23.0716, 72.6682], 15);

//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution:
//         '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       maxZoom: 19,
//     }).addTo(map);

//     L.marker([23.0716, 72.6682])
//       .addTo(map)
//       .bindPopup(
//         "<b>Codeniche Softstudio</b><br>5th Floor, Fortune Plaza, 507/1<br>Opp. Fortune Sky, New India Colony<br>Nava Naroda, Ahmedabad, Gujarat 382330"
//       )
//       .openPopup();

//     const resizeMap = () => map.invalidateSize();
//     window.addEventListener("resize", resizeMap);

//     return () => {
//       window.removeEventListener("resize", resizeMap);
//       map.remove();
//     };
//   }, []);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Invalid email address";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\+?[\d\s\-]{7,15}$/.test(formData.phone)) {
//       newErrors.phone = "Invalid phone number";
//     }

//     if (!formData.subject.trim()) {
//       newErrors.subject = "Subject is required";
//     }

//     if (!formData.service.trim()) {
//       newErrors.service = "Please select a service";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//     setSubmissionError(""); // Clear submission error on input change
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmissionError("");

//     if (!validateForm()) return;

//     if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
//       setSubmissionError("EmailJS configuration is incomplete. Please contact support.");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       await emailjs.send(
//         EMAILJS_CONFIG.SERVICE_ID,
//         EMAILJS_CONFIG.TEMPLATE_ID,
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           phone: formData.phone,
//           subject: formData.subject,
//           service: formData.service,
//           message: formData.message,
//         }
//       );

//       setIsSubmitting(false);
//       setIsSubmitted(true);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         service: "",
//         message: "",
//       });

//       // Reset success message after 5 seconds
//       setTimeout(() => setIsSubmitted(false), 5000);
//     } catch (error) {
//       setIsSubmitting(false);
//       setSubmissionError("Failed to send message. Please try again later.");
//       console.error("EmailJS error:", error);
//     }
//   };

//   return (
//     <ContactPageContainer>
//       <ContactWrapper>
//         <PageTitle>Contact Us</PageTitle>
//         <SubTitle>
//           We would love to hear from you! Please fill out the form below to get
//           in touch.
//         </SubTitle>
//         <ContactGrid>
//           <ContactForm onSubmit={handleSubmit} noValidate>
//             <FormTitle>Send a Message</FormTitle>
//             {isSubmitted && (
//               <FormSuccess visible={isSubmitted}>
//                 Your message has been sent successfully!
//               </FormSuccess>
//             )}
//             {submissionError && <FormError>{submissionError}</FormError>}
//             <FormRow>
//               <FormGroup>
//                 <FormLabel htmlFor="name">Name</FormLabel>
//                 <FormInput
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your full name"
//                   aria-invalid={errors.name ? "true" : "false"}
//                 />
//                 {errors.name && <FormError>{errors.name}</FormError>}
//               </FormGroup>
//               <FormGroup>
//                 <FormLabel htmlFor="email">Email</FormLabel>
//                 <FormInput
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="you@example.com"
//                   aria-invalid={errors.email ? "true" : "false"}
//                 />
//                 {errors.email && <FormError>{errors.email}</FormError>}
//               </FormGroup>
//             </FormRow>
//             <FormRow>
//               <FormGroup>
//                 <FormLabel htmlFor="phone">Phone</FormLabel>
//                 <FormInput
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+1 234 567 8900"
//                   aria-invalid={errors.phone ? "true" : "false"}
//                 />
//                 {errors.phone && <FormError>{errors.phone}</FormError>}
//               </FormGroup>
//               <FormGroup>
//                 <FormLabel htmlFor="subject">Subject</FormLabel>
//                 <FormInput
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Subject"
//                   aria-invalid={errors.subject ? "true" : "false"}
//                 />
//                 {errors.subject && <FormError>{errors.subject}</FormError>}
//               </FormGroup>
//             </FormRow>
//             <FormGroup>
//               <FormLabel htmlFor="service">Service</FormLabel>
//               <FormSelect
//                 id="service"
//                 name="service"
//                 value={formData.service}
//                 onChange={handleChange}
//                 aria-invalid={errors.service ? "true" : "false"}
//               >
//                 <option value="">Select a service</option>
//                 <option value="web-development">Web Development</option>
//                 <option value="mobile-app">Mobile App Development</option>
//                 <option value="ui-ux-design">UI/UX Design</option>
//                 <option value="seo">SEO Optimization</option>
//                 <option value="cloud-solutions">Cloud Solutions</option>
//                 <option value="software-consulting">Software Consulting</option>
//                 <option value="other">Other</option>
//               </FormSelect>
//               {errors.service && <FormError>{errors.service}</FormError>}
//             </FormGroup>
//             <FormGroup>
//               <FormLabel htmlFor="message">Message</FormLabel>
//               <FormTextarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your message here..."
//                 aria-invalid={errors.message ? "true" : "false"}
//               />
//               {errors.message && <FormError>{errors.message}</FormError>}
//             </FormGroup>
//             <SubmitButton type="submit" disabled={isSubmitting}>
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </SubmitButton>
//           </ContactForm>

//           <ContactInfoContainer>
//             <ContactInfoCard>
//               <CardFlare />
//               <ContactInfoTitle>Contact Information</ContactInfoTitle>
//               <ContactInfoList>
//                 <ContactInfoItem>
//                   <ContactIcon>
//                     <FaMapMarkerAlt />
//                   </ContactIcon>
//                   <ContactDetails>
//                     <ContactLabel>Address</ContactLabel>
//                     <ContactText>
//                       5th Floor, Fortune Plaza, 507/1, Opp. Fortune Sky, New India
//                       Colony, Nava Naroda, Ahmedabad, Gujarat 382330
//                     </ContactText>
//                   </ContactDetails>
//                 </ContactInfoItem>
//                 <ContactInfoItem>
//                   <ContactIcon>
//                     <FaPhone />
//                   </ContactIcon>
//                   <ContactDetails>
//                     <ContactLabel>Phone</ContactLabel>
//                     <ContactText>+91 8401901942</ContactText>
//                   </ContactDetails>
//                 </ContactInfoItem>
//                 <ContactInfoItem>
//                   <ContactIcon>
//                     <FaEnvelope />
//                   </ContactIcon>
//                   <ContactDetails>
//                     <ContactLabel>Email</ContactLabel>
//                     <ContactText>codenichesoftstudio@gmail.com</ContactText>
//                   </ContactDetails>
//                 </ContactInfoItem>
//                 <ContactInfoItem>
//                   <ContactIcon>
//                     <FaClock />
//                   </ContactIcon>
//                   <ContactDetails>
//                     <ContactLabel>Working Hours</ContactLabel>
//                     <ContactText>Monday - Saturday: Open 24 hours</ContactText>
//                     <ContactText>Sunday: Closed</ContactText>
//                   </ContactDetails>
//                 </ContactInfoItem>
//               </ContactInfoList>
//               <MapContainer>
//                 <Map id="map" />
//               </MapContainer>
//               <SocialLinks>
//                 <SocialLink
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="LinkedIn"
//                 >
//                   <FaLinkedin />
//                 </SocialLink>
//                 <SocialLink
//                   href="https://twitter.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Twitter"
//                 >
//                   <FaTwitter />
//                 </SocialLink>
//                 <SocialLink
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="GitHub"
//                 >
//                   <FaGithub />
//                 </SocialLink>
//               </SocialLinks>
//             </ContactInfoCard>
//           </ContactInfoContainer>
//         </ContactGrid>
//       </ContactWrapper>
//     </ContactPageContainer>
//   );
// };

// export default ContactPage;



import { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

// Mock EmailJS for demo
const emailjs = {
  init: () => {},
  send: () => Promise.resolve({ status: 200 })
};

const EMAILJS_CONFIG = {
  SERVICE_ID: "demo_service",
  TEMPLATE_ID: "demo_template", 
  PUBLIC_KEY: "demo_key",
};

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [focusedField, setFocusedField] = useState("");

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize EmailJS
    if (EMAILJS_CONFIG.PUBLIC_KEY) {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.service.trim()) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmissionError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionError("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          service: formData.service,
          message: formData.message,
        }
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        service: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmissionError("Failed to send message. Please try again later.");
    }
  };

  // Styles
  const styles = {
    page: {
      minHeight: "100vh",
      background: "#1b263b",
      position: "relative",
      overflow: "hidden"
    },
    animatedBackground: {
      position: "absolute",
      inset: 0,
      overflow: "hidden"
    },
    blob1: {
      position: "absolute",
      top: "-10rem",
      left: "-10rem",
      width: "24rem",
      height: "24rem",
      backgroundColor: "#10b981",
      borderRadius: "50%",
      mixBlendMode: "multiply",
      filter: "blur(20px)",
      opacity: 0.2,
      animation: "pulse 2s infinite"
    },
    blob2: {
      position: "absolute",
      bottom: "-10rem",
      right: "-10rem",
      width: "20rem",
      height: "20rem",
      backgroundColor: "#06b6d4",
      borderRadius: "50%",
      mixBlendMode: "multiply",
      filter: "blur(20px)",
      opacity: 0.2,
      animation: "pulse 2s infinite 1s"
    },
    blob3: {
      position: "absolute",
      top: "25%",
      right: "25%",
      width: "16rem",
      height: "16rem",
      backgroundColor: "#0d9488",
      borderRadius: "50%",
      mixBlendMode: "multiply",
      filter: "blur(20px)",
      opacity: 0.15,
      animation: "pulse 2s infinite 0.5s"
    },
    blob4: {
      position: "absolute",
      bottom: "25%",
      left: "25%",
      width: "18rem",
      height: "18rem",
      backgroundColor: "#34d399",
      borderRadius: "50%",
      mixBlendMode: "multiply",
      filter: "blur(20px)",
      opacity: 0.1,
      animation: "pulse 2s infinite 0.7s"
    },
    mouseFollower: {
      position: "absolute",
      pointerEvents: "none",
      zIndex: 10,
      width: "20rem",
      height: "20rem",
      background: "radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(30px)",
      transition: "all 0.5s ease-out"
    },
    floatingShape: {
      position: "absolute",
      opacity: 0.2,
      animation: "pulse 3s infinite"
    },
    header: {
      position: "relative",
      zIndex: 20,
      textAlign: "center",
      padding: "3rem 1rem",
      transition: "all 1s",
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? "translateY(0)" : "translateY(10px)"
    },
    headerBadge: {
      display: "inline-block",
      padding: "0.75rem 1.5rem",
      background: "linear-gradient(90deg, rgba(16, 185, 129, 0.2) 0%, rgba(20, 184, 166, 0.2) 100%)",
      borderRadius: "9999px",
      border: "1px solid rgba(16, 185, 129, 0.3)",
      backdropFilter: "blur(4px)",
      marginBottom: "1.5rem"
    },
    headerTitle: {
      fontSize: "2.25rem",
      fontWeight: 700,
      background: "linear-gradient(90deg, #ffffff 0%, #a7f3d0 50%, #99f6e4 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      marginBottom: "1rem"
    },
    headerSubtitle: {
      fontSize: "1.125rem",
      color: "#d1d5db",
      maxWidth: "42rem",
      marginLeft: "auto",
      marginRight: "auto"
    },
     mainContent: {
    position: "relative",
    zIndex: 20,
    maxWidth: "80rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0 1rem 4rem",
    transition: "all 1s 0.3s",
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? "translateY(0)" : "translateY(10px)"
  },
    contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    "@media (min-width: 768px)": {
      flexDirection: "row"
    }
  },
    formColumn: {
    flex: "1 1 60%",
    minWidth: 0 // Important for flex items
  },
    infoColumn: {
    flex: "1 1 40%",
    minWidth: 0 // Important for flex items
  },
  
    formCard: {
      position: "relative",
      padding: "1.5rem",
      borderRadius: "1.5rem",
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: "all 0.5s"
    },
    formHeader: {
      textAlign: "center",
      marginBottom: "2rem"
    },
    formIconContainer: {
      display: "inline-block",
      padding: "0.75rem",
      background: "linear-gradient(90deg, #10b981 0%, #0d9488 100%)",
      borderRadius: "1rem",
      marginBottom: "1rem"
    },
    formTitle: {
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "white",
      marginBottom: "0.5rem"
    },
    formDescription: {
      color: "#d1d5db"
    },
    successMessage: {
      marginBottom: "1.5rem",
      padding: "1rem",
      borderRadius: "1rem",
      background: "rgba(16, 185, 129, 0.2)",
      color: "#6ee7b7",
      border: "1px solid rgba(16, 185, 129, 0.3)",
      textAlign: "center",
      fontWeight: 500
    },
    errorMessage: {
      marginBottom: "1.5rem",
      padding: "1rem",
      borderRadius: "1rem",
      background: "rgba(239, 68, 68, 0.2)",
      color: "#fca5a5",
      border: "1px solid rgba(239, 68, 68, 0.3)",
      textAlign: "center",
      fontWeight: 500
    },
    formGroup: {
      marginBottom: "1.5rem"
    },
    label: {
      display: "block",
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "#d1d5db",
      marginBottom: "0.5rem"
    },
    input: {
      width: "100%",
      padding: "0.75rem 1rem",
      borderRadius: "0.75rem",
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      color: "white",
      outline: "none",
      transition: "all 0.3s"
    },
    inputFocused: {
      background: "rgba(255, 255, 255, 0.1)"
    },
    inputError: {
      borderColor: "#ef4444"
    },
    errorText: {
      color: "#f87171",
      fontSize: "0.875rem",
      marginTop: "0.25rem"
    },
    submitButton: {
      width: "100%",
      padding: "1rem 1.5rem",
      borderRadius: "0.75rem",
      fontWeight: 600,
      color: "white",
      transition: "all 0.3s",
      transform: "none",
      outline: "none"
    },
    submitButtonEnabled: {
      background: "linear-gradient(90deg, #059669 0%, #0d9488 100%)",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
    },
    submitButtonDisabled: {
      backgroundColor: "#4b5563",
      cursor: "not-allowed"
    },
    securityNotice: {
      textAlign: "center",
      paddingTop: "1rem",
      fontSize: "0.875rem",
      color: "#9ca3af"
    },
    infoCard: {
      position: "relative",
      marginBottom: "2rem",
      padding: "1.5rem",
      borderRadius: "1.5rem",
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: "all 0.5s"
    },
    infoItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
      padding: "1rem",
      borderRadius: "0.75rem",
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s"
    },
    infoIcon: {
      flexShrink: 0,
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "0.75rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white"
    },
    statsCard: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1rem"
    },
    statItem: {
      textAlign: "center",
      padding: "1.5rem",
      borderRadius: "1rem",
      border: "1px solid rgba(16, 185, 129, 0.3)",
      backdropFilter: "blur(4px)"
    },
    featureItem: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "1rem",
      borderRadius: "0.75rem",
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s"
    },
    featureIcon: {
      flexShrink: 0,
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "0.75rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: 700
    },
    socialLinks: {
      marginTop: "2rem",
      paddingTop: "2rem",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)"
    },
    socialLink: {
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "0.75rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s"
    }
  };

  return (
    <div style={styles.page}>
      {/* Animated Background Elements */}
      <div style={styles.animatedBackground}>
        <div style={styles.blob1}></div>
        <div style={styles.blob2}></div>
        <div style={styles.blob3}></div>
        <div style={styles.blob4}></div>
      </div>

      {/* Interactive Mouse Follower */}
      <div 
        style={{
          ...styles.mouseFollower,
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
        }}
      ></div>

      {/* Floating Geometric Shapes */}
      <div style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none"
      }}>
        {[...Array(15)].map((_, i) => {
          const shapeStyle = {
            ...styles.floatingShape,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          };

          if (i % 3 === 0) {
            shapeStyle.width = "0.75rem";
            shapeStyle.height = "0.75rem";
            shapeStyle.backgroundColor = "#34d399";
            shapeStyle.borderRadius = "50%";
          } else if (i % 3 === 1) {
            shapeStyle.width = "0.5rem";
            shapeStyle.height = "0.5rem";
            shapeStyle.backgroundColor = "#2dd4bf";
            shapeStyle.transform = "rotate(45deg)";
          } else {
            shapeStyle.width = "0.5rem";
            shapeStyle.height = "0.5rem";
            shapeStyle.backgroundColor = "#22d3ee";
            shapeStyle.borderRadius = "50%";
          }

          return <div key={i} style={shapeStyle}></div>;
        })}
      </div>

      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.headerBadge}>
          <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#6ee7b7" }}>🚀 Ready to Connect?</span>
        </div>
        <h1 style={styles.headerTitle}>
          Let's Create Amazing
          <span style={{ 
            display: "block",
            background: "linear-gradient(90deg, #34d399 0%, #22d3ee 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent"
          }}>
            Things Together
          </span>
        </h1>
        <p style={styles.headerSubtitle}>
          Transform your ideas into digital reality with our expert development team
        </p>
      </header>

      {/* Main Content */}
      {/* <main style={styles.mainContent}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          '@media (min-width: 1024px)': {
            flexDirection: "row"
          }
        }}> */}

        <main style={styles.mainContent}>
  <div style={{
    display: "flex",
    flexDirection: window.innerWidth >= 768 ? "row" : "column",
    gap: "2rem",
    alignItems: "flex-start"
  }}>
          {/* Left Column - Contact Form */}
          <div style={{
      flex: "1 1 60%",
      minWidth: 0
    }}>
            <div style={styles.formCard}>
              {/* Form Header */}
              <div style={styles.formHeader}>
                <div style={styles.formIconContainer}>
                  <FaEnvelope style={{ width: "1.5rem", height: "1.5rem", color: "white" }} />
                </div>
                <h2 style={styles.formTitle}>Send a Message</h2>
                <p style={styles.formDescription}>Tell us about your project and we'll get back to you within 24 hours</p>
              </div>

              {/* Success/Error Messages */}
              {isSubmitted && (
                <div style={styles.successMessage}>
                  ✓ Your message has been sent successfully!
                </div>
              )}
              {submissionError && (
                <div style={styles.errorMessage}>
                  ⚠ {submissionError}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ marginBottom: 0 }}>
                {/* Name and Email Row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      Full Name <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Your full name"
                      style={{
                        ...styles.input,
                        ...(errors.name ? styles.inputError : {}),
                        ...(focusedField === 'name' ? styles.inputFocused : {})
                      }}
                    />
                    {errors.name && <p style={styles.errorText}>{errors.name}</p>}
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      Email Address <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      placeholder="you@example.com"
                      style={{
                        ...styles.input,
                        ...(errors.email ? styles.inputError : {}),
                        ...(focusedField === 'email' ? styles.inputFocused : {})
                      }}
                    />
                    {errors.email && <p style={styles.errorText}>{errors.email}</p>}
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      Phone Number <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      placeholder="+1 234 567 8900"
                      style={{
                        ...styles.input,
                        ...(errors.phone ? styles.inputError : {}),
                        ...(focusedField === 'phone' ? styles.inputFocused : {})
                      }}
                    />
                    {errors.phone && <p style={styles.errorText}>{errors.phone}</p>}
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      Subject <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Project subject"
                      style={{
                        ...styles.input,
                        ...(errors.subject ? styles.inputError : {}),
                        ...(focusedField === 'subject' ? styles.inputFocused : {})
                      }}
                    />
                    {errors.subject && <p style={styles.errorText}>{errors.subject}</p>}
                  </div>
                </div>

                {/* Service Selection */}
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Service Required <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      ...styles.input,
                      ...(errors.service ? styles.inputError : {})
                    }}
                  >
                    <option value="" style={{ backgroundColor: "#1e293b", color: "white" }}>Select a service</option>
                    <option value="web-development" style={{ backgroundColor: "#1e293b", color: "white" }}>Web Development</option>
                    <option value="mobile-app" style={{ backgroundColor: "#1e293b", color: "white" }}>Mobile App Development</option>
                    <option value="ui-ux-design" style={{ backgroundColor: "#1e293b", color: "white" }}>UI/UX Design</option>
                    <option value="seo" style={{ backgroundColor: "#1e293b", color: "white" }}>SEO Optimization</option>
                    <option value="cloud-solutions" style={{ backgroundColor: "#1e293b", color: "white" }}>Cloud Solutions</option>
                    <option value="software-consulting" style={{ backgroundColor: "#1e293b", color: "white" }}>Software Consulting</option>
                    <option value="other" style={{ backgroundColor: "#1e293b", color: "white" }}>Other</option>
                  </select>
                  {errors.service && <p style={styles.errorText}>{errors.service}</p>}
                </div>

                {/* Message */}
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Your Message <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Tell us about your project, goals, or how we can help you..."
                    style={{
                      ...styles.input,
                      resize: "none",
                      ...(errors.message ? styles.inputError : {}),
                      ...(focusedField === 'message' ? styles.inputFocused : {})
                    }}
                  ></textarea>
                  {errors.message && <p style={styles.errorText}>{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    ...styles.submitButton,
                    ...(isSubmitting ? styles.submitButtonDisabled : styles.submitButtonEnabled),
                    marginBottom: 0
                  }}
                >
                  {isSubmitting ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                      <svg style={{ animation: "spin 1s linear infinite", width: "1.25rem", height: "1.25rem" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                      <span>Send Message</span>
                      <svg style={{ width: "1.25rem", height: "1.25rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                      </svg>
                    </span>
                  )}
                </button>

                {/* Security Notice */}
                <div style={styles.securityNotice}>
                  <p>🔒 Your information is secure and will never be shared</p>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div style={{
      flex: "1 1 40%",
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
            <div style={styles.infoCard}>
              <div style={styles.formHeader}>
                <div style={{ ...styles.formIconContainer, background: "linear-gradient(90deg, #0d9488 0%, #0891b2 100%)" }}>
                  <FaMapMarkerAlt style={{ width: "1.5rem", height: "1.5rem", color: "white" }} />
                </div>
                <h3 style={styles.formTitle}>Get In Touch</h3>
                <p style={styles.formDescription}>We're here to help bring your ideas to life</p>
              </div>

              <div>
                {/* Address */}
                <div style={{ ...styles.infoItem, marginBottom: "1rem" }}>
                  <div style={{ ...styles.infoIcon, background: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)" }}>
                    <FaMapMarkerAlt style={{ width: "1rem", height: "1rem", color: "white" }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: "white", marginBottom: "0.25rem" }}>Address</h4>
                    <p style={{ color: "#d1d5db", fontSize: "0.875rem", lineHeight: "1.5" }}>
                      507/1, Opp. Fortune Sky, New India Colony, Nava Naroda, Ahmedabad, Gujarat 382330
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ ...styles.infoItem, marginBottom: "1rem" }}>
                  <div style={{ ...styles.infoIcon, background: "linear-gradient(135deg, #0d9488 0%, #0891b2 100%)" }}>
                    <FaPhone style={{ width: "1rem", height: "1rem", color: "white" }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: "white", marginBottom: "0.25rem" }}>Phone</h4>
                    <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>+91 8401901942</p>
                  </div>
                </div>

                {/* Email */}
                <div style={{ ...styles.infoItem, marginBottom: "1rem" }}>
                  <div style={{ ...styles.infoIcon, background: "linear-gradient(135deg, #0891b2 0%, #10b981 100%)" }}>
                    <FaEnvelope style={{ width: "1rem", height: "1rem", color: "white" }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: "white", marginBottom: "0.25rem" }}>Email</h4>
                    <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>codenichesoftstudio@gmail.com</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div style={{ ...styles.infoItem, marginBottom: "1rem" }}>
                  <div style={{ ...styles.infoIcon, background: "linear-gradient(135deg, #10b981 0%, #0891b2 100%)" }}>
                    <FaClock style={{ width: "1rem", height: "1rem", color: "white" }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: "white", marginBottom: "0.25rem" }}>Working Hours</h4>
                    <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>Monday - Saturday: Open 24 hours</p>
                    <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div style={styles.socialLinks}>
                <h4 style={{ fontWeight: 600, color: "white", marginBottom: "1rem", textAlign: "center" }}>Connect With Us</h4>
                <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      ...styles.socialLink,
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                      color: "#34d399",
                      textDecoration: "none"
                    }}
                  >
                    <FaLinkedin style={{ width: "1rem", height: "1rem" }} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      ...styles.socialLink,
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                      color: "#2dd4bf",
                      textDecoration: "none"
                    }}
                  >
                    <FaTwitter style={{ width: "1rem", height: "1rem" }} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      ...styles.socialLink,
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                      color: "#22d3ee",
                      textDecoration: "none"
                    }}
                  >
                    <FaGithub style={{ width: "1rem", height: "1rem" }} />
                  </a>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div style={styles.statsCard}>
        <div style={{ 
          ...styles.statItem,
          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(20, 184, 166, 0.2) 100%)",
          border: "1px solid rgba(16, 185, 129, 0.3)"
        }}>
          <div style={{ fontSize: "1.875rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>500+</div>
          <div style={{ color: "#6ee7b7", fontSize: "0.875rem" }}>Projects Delivered</div>
        </div>
        <div style={{ 
          ...styles.statItem,
          background: "linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(8, 145, 178, 0.2) 100%)",
          border: "1px solid rgba(20, 184, 166, 0.3)"
        }}>
          <div style={{ fontSize: "1.875rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>98%</div>
          <div style={{ color: "#67e8f9", fontSize: "0.875rem" }}>Client Satisfaction</div>
        </div>
      </div>
            {/* Quick Features */}
            <div style={{ marginTop: "1rem" }}>
              {[
                { icon: "⚡", text: "Lightning-fast responses within 24 hours", color: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)" },
                { icon: "🎯", text: "Tailored solutions for your unique needs", color: "linear-gradient(135deg, #0d9488 0%, #0891b2 100%)" },
                { icon: "🔒", text: "Enterprise-grade security & privacy", color: "linear-gradient(135deg, #0891b2 0%, #10b981 100%)" }
              ].map((item, index) => (
                <div 
                  key={index}
                  style={{ ...styles.featureItem, marginBottom: "1rem"}}
                >
                  <div style={{ ...styles.featureIcon, background: item.color }}>
                    {item.icon}
                  </div>
                  <p style={{ color: "#d1d5db", fontWeight: 500, fontSize: "0.875rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}