// import { useState, useEffect } from "react";
// import {
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaClock,
//   FaLinkedin,
//   FaTwitter,
//   FaGithub,
// } from "react-icons/fa";


// const emailjs = {
//   init: () => {},
//   send: () => Promise.resolve({ status: 200 })
// };

// const EMAILJS_CONFIG = {
//   SERVICE_ID: "demo_service",
//   TEMPLATE_ID: "demo_template", 
//   PUBLIC_KEY: "demo_key",
// };

// export default function ContactPage() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);
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
//   const [focusedField, setFocusedField] = useState("");

//   useEffect(() => {
//     setIsLoaded(true);
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
    
//     // Initialize EmailJS
//     if (EMAILJS_CONFIG.PUBLIC_KEY) {
//       emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
//     }

//     return () => window.removeEventListener('mousemove', handleMouseMove);
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
//     setSubmissionError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmissionError("");

//     if (!validateForm()) return;

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

//       setTimeout(() => setIsSubmitted(false), 5000);
//     } catch (error) {
//       setIsSubmitting(false);
//       setSubmissionError("Failed to send message. Please try again later.");
//     }
//   };

//   // Styles
//   const styles = {
//     page: {
//       minHeight: "100vh",
//       background: "#1b263b",
//       position: "relative",
//       overflow: "hidden"
//     },
//     animatedBackground: {
//       position: "absolute",
//       inset: 0,
//       overflow: "hidden"
//     },
//     blob1: {
//       position: "absolute",
//       top: "-10rem",
//       left: "-10rem",
//       width: "24rem",
//       height: "24rem",
//       backgroundColor: "#10b981",
//       borderRadius: "50%",
//       mixBlendMode: "multiply",
//       filter: "blur(20px)",
//       opacity: 0.2,
//       animation: "pulse 2s infinite"
//     },
//     blob2: {
//       position: "absolute",
//       bottom: "-10rem",
//       right: "-10rem",
//       width: "20rem",
//       height: "20rem",
//       backgroundColor: "#06b6d4",
//       borderRadius: "50%",
//       mixBlendMode: "multiply",
//       filter: "blur(20px)",
//       opacity: 0.2,
//       animation: "pulse 2s infinite 1s"
//     },
//     blob3: {
//       position: "absolute",
//       top: "25%",
//       right: "25%",
//       width: "16rem",
//       height: "16rem",
//       backgroundColor: "#0d9488",
//       borderRadius: "50%",
//       mixBlendMode: "multiply",
//       filter: "blur(20px)",
//       opacity: 0.15,
//       animation: "pulse 2s infinite 0.5s"
//     },
//     blob4: {
//       position: "absolute",
//       bottom: "25%",
//       left: "25%",
//       width: "18rem",
//       height: "18rem",
//       backgroundColor: "#34d399",
//       borderRadius: "50%",
//       mixBlendMode: "multiply",
//       filter: "blur(20px)",
//       opacity: 0.1,
//       animation: "pulse 2s infinite 0.7s"
//     },
//     mouseFollower: {
//       position: "absolute",
//       pointerEvents: "none",
//       zIndex: 10,
//       width: "20rem",
//       height: "20rem",
//       background: "radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, transparent 70%)",
//       borderRadius: "50%",
//       filter: "blur(30px)",
//       transition: "all 0.5s ease-out"
//     },
//     floatingShape: {
//       position: "absolute",
//       opacity: 0.2,
//       animation: "pulse 3s infinite"
//     },
//     header: {
//       position: "relative",
//       zIndex: 20,
//       textAlign: "center",
//       padding: "3rem 1rem",
//       transition: "all 1s",
//       opacity: isLoaded ? 1 : 0,
//       transform: isLoaded ? "translateY(0)" : "translateY(10px)"
//     },
//     headerBadge: {
//       display: "inline-block",
//       padding: "0.75rem 1.5rem",
//       background: "linear-gradient(90deg, rgba(16, 185, 129, 0.2) 0%, rgba(20, 184, 166, 0.2) 100%)",
//       borderRadius: "9999px",
//       border: "1px solid rgba(16, 185, 129, 0.3)",
//       backdropFilter: "blur(4px)",
//       marginBottom: "1.5rem"
//     },
//     headerTitle: {
//       fontSize: "2.25rem",
//       fontWeight: 700,
//       background: "linear-gradient(90deg, #ffffff 0%, #a7f3d0 50%, #99f6e4 100%)",
//       WebkitBackgroundClip: "text",
//       backgroundClip: "text",
//       color: "transparent",
//       marginBottom: "1rem"
//     },
//     headerSubtitle: {
//       fontSize: "1.125rem",
//       color: "#d1d5db",
//       maxWidth: "42rem",
//       marginLeft: "auto",
//       marginRight: "auto"
//     },
//      mainContent: {
//     position: "relative",
//     zIndex: 20,
//     maxWidth: "80rem",
//     marginLeft: "auto",
//     marginRight: "auto",
//     padding: "0 1rem 4rem",
//     transition: "all 1s 0.3s",
//     opacity: isLoaded ? 1 : 0,
//     transform: isLoaded ? "translateY(0)" : "translateY(10px)"
//   },
//     contentContainer: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "2rem",
//     "@media (min-width: 768px)": {
//       flexDirection: "row"
//     }
//   },
//     formColumn: {
//     flex: "1 1 60%",
//     minWidth: 0 // Important for flex items
//   },
//     infoColumn: {
//     flex: "1 1 40%",
//     minWidth: 0 // Important for flex items
//   },
  
//     formCard: {
//       position: "relative",
//       padding: "1.5rem",
//       borderRadius: "1.5rem",
//       background: "rgba(255, 255, 255, 0.1)",
//       backdropFilter: "blur(20px)",
//       border: "1px solid rgba(255, 255, 255, 0.2)",
//       boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//       transition: "all 0.5s"
//     },
//     formHeader: {
//       textAlign: "center",
//       marginBottom: "2rem"
//     },
//     formIconContainer: {
//       display: "inline-block",
//       padding: "0.75rem",
//       background: "linear-gradient(90deg, #10b981 0%, #0d9488 100%)",
//       borderRadius: "1rem",
//       marginBottom: "1rem"
//     },
//     formTitle: {
//       fontSize: "1.5rem",
//       fontWeight: 700,
//       color: "white",
//       marginBottom: "0.5rem"
//     },
//     formDescription: {
//       color: "#d1d5db"
//     },
//     successMessage: {
//       marginBottom: "1.5rem",
//       padding: "1rem",
//       borderRadius: "1rem",
//       background: "rgba(16, 185, 129, 0.2)",
//       color: "#6ee7b7",
//       border: "1px solid rgba(16, 185, 129, 0.3)",
//       textAlign: "center",
//       fontWeight: 500
//     },
//     errorMessage: {
//       marginBottom: "1.5rem",
//       padding: "1rem",
//       borderRadius: "1rem",
//       background: "rgba(239, 68, 68, 0.2)",
//       color: "#fca5a5",
//       border: "1px solid rgba(239, 68, 68, 0.3)",
//       textAlign: "center",
//       fontWeight: 500
//     },
//     formGroup: {
//       marginBottom: "1.5rem"
//     },
//     label: {
//       display: "block",
//       fontSize: "0.875rem",
//       fontWeight: 500,
//       color: "#d1d5db",
//       marginBottom: "0.5rem"
//     },
//     input: {
//       width: "100%",
//       padding: "0.75rem 1rem",
//       borderRadius: "0.75rem",
//       background: "rgba(255, 255, 255, 0.05)",
//       backdropFilter: "blur(4px)",
//       border: "1px solid rgba(255, 255, 255, 0.2)",
//       color: "white",
//       outline: "none",
//       transition: "all 0.3s"
//     },
//     inputFocused: {
//       background: "rgba(255, 255, 255, 0.1)"
//     },
//     inputError: {
//       borderColor: "#ef4444"
//     },
//     errorText: {
//       color: "#f87171",
//       fontSize: "0.875rem",
//       marginTop: "0.25rem"
//     },
//     submitButton: {
//       width: "100%",
//       padding: "1rem 1.5rem",
//       borderRadius: "0.75rem",
//       fontWeight: 600,
//       color: "white",
//       transition: "all 0.3s",
//       transform: "none",
//       outline: "none"
//     },
//     submitButtonEnabled: {
//       background: "linear-gradient(90deg, #059669 0%, #0d9488 100%)",
//       boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
//     },
//     submitButtonDisabled: {
//       backgroundColor: "#4b5563",
//       cursor: "not-allowed"
//     },
//     securityNotice: {
//       textAlign: "center",
//       paddingTop: "1rem",
//       fontSize: "0.875rem",
//       color: "#9ca3af"
//     },
//     infoCard: {
//       position: "relative",
//       marginBottom: "2rem",
//       padding: "1.5rem",
//       borderRadius: "1.5rem",
//       background: "rgba(255, 255, 255, 0.1)",
//       backdropFilter: "blur(20px)",
//       border: "1px solid rgba(255, 255, 255, 0.2)",
//       boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//       transition: "all 0.5s"
//     },
//     infoItem: {
//       display: "flex",
//       alignItems: "flex-start",
//       gap: "1rem",
//       padding: "1rem",
//       borderRadius: "0.75rem",
//       background: "rgba(255, 255, 255, 0.05)",
//       backdropFilter: "blur(4px)",
//       border: "1px solid rgba(255, 255, 255, 0.1)",
//       transition: "all 0.3s"
//     },
//     infoIcon: {
//       flexShrink: 0,
//       width: "2.5rem",
//       height: "2.5rem",
//       borderRadius: "0.75rem",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       color: "white"
//     },
//     statsCard: {
//       display: "grid",
//       gridTemplateColumns: "1fr 1fr",
//       gap: "1rem"
//     },
//     statItem: {
//       textAlign: "center",
//       padding: "1.5rem",
//       borderRadius: "1rem",
//       border: "1px solid rgba(16, 185, 129, 0.3)",
//       backdropFilter: "blur(4px)"
//     },
//     featureItem: {
//       display: "flex",
//       alignItems: "center",
//       gap: "1rem",
//       padding: "1rem",
//       borderRadius: "0.75rem",
//       background: "rgba(255, 255, 255, 0.05)",
//       backdropFilter: "blur(4px)",
//       border: "1px solid rgba(255, 255, 255, 0.1)",
//       transition: "all 0.3s"
//     },
//     featureIcon: {
//       flexShrink: 0,
//       width: "2.5rem",
//       height: "2.5rem",
//       borderRadius: "0.75rem",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       color: "white",
//       fontWeight: 700
//     },
//     socialLinks: {
//       marginTop: "2rem",
//       paddingTop: "2rem",
//       borderTop: "1px solid rgba(255, 255, 255, 0.1)"
//     },
//     socialLink: {
//       width: "2.5rem",
//       height: "2.5rem",
//       borderRadius: "0.75rem",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       transition: "all 0.3s"
//     }
//   };

//   return (
//     <div style={styles.page}>
//       {/* Animated Background Elements */}
//       <div style={styles.animatedBackground}>
//         <div style={styles.blob1}></div>
//         <div style={styles.blob2}></div>
//         <div style={styles.blob3}></div>
//         <div style={styles.blob4}></div>
//       </div>

//       {/* Interactive Mouse Follower */}
//       <div 
//         style={{
//           ...styles.mouseFollower,
//           left: mousePosition.x - 160,
//           top: mousePosition.y - 160,
//         }}
//       ></div>

//       {/* Floating Geometric Shapes */}
//       <div style={{
//         position: "absolute",
//         inset: 0,
//         overflow: "hidden",
//         pointerEvents: "none"
//       }}>
//         {[...Array(15)].map((_, i) => {
//           const shapeStyle = {
//             ...styles.floatingShape,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 4}s`,
//             animationDuration: `${2 + Math.random() * 3}s`,
//           };

//           if (i % 3 === 0) {
//             shapeStyle.width = "0.75rem";
//             shapeStyle.height = "0.75rem";
//             shapeStyle.backgroundColor = "#34d399";
//             shapeStyle.borderRadius = "50%";
//           } else if (i % 3 === 1) {
//             shapeStyle.width = "0.5rem";
//             shapeStyle.height = "0.5rem";
//             shapeStyle.backgroundColor = "#2dd4bf";
//             shapeStyle.transform = "rotate(45deg)";
//           } else {
//             shapeStyle.width = "0.5rem";
//             shapeStyle.height = "0.5rem";
//             shapeStyle.backgroundColor = "#22d3ee";
//             shapeStyle.borderRadius = "50%";
//           }

//           return <div key={i} style={shapeStyle}></div>;
//         })}
//       </div>

//       {/* Header Section */}
//       <header style={styles.header}>
//         <div style={styles.headerBadge}>
//           <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#6ee7b7" }}>🚀 Ready to Connect?</span>
//         </div>
//         <h1 style={styles.headerTitle}>
//           Let's Create Amazing
//           <span style={{ 
//             display: "block",
//             background: "linear-gradient(90deg, #34d399 0%, #22d3ee 100%)",
//             WebkitBackgroundClip: "text",
//             backgroundClip: "text",
//             color: "transparent"
//           }}>
//             Things Together
//           </span>
//         </h1>
//         <p style={styles.headerSubtitle}>
//           Transform your ideas into digital reality with our expert development team
//         </p>
//       </header>

//       {/* Main Content */}
//       {/* <main style={styles.mainContent}>
//         <div style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "2rem",
//           '@media (min-width: 1024px)': {
//             flexDirection: "row"
//           }
//         }}> */}

//         <main style={styles.mainContent}>
//   <div style={{
//     display: "flex",
//     flexDirection: window.innerWidth >= 768 ? "row" : "column",
//     gap: "2rem",
//     alignItems: "flex-start"
//   }}>
//           {/* Left Column - Contact Form */}
//           <div style={{
//       flex: "1 1 60%",
//       minWidth: 0
//     }}>
//             <div style={styles.formCard}>
//               {/* Form Header */}
//               <div style={styles.formHeader}>
//                 <div style={styles.formIconContainer}>
//                   <FaEnvelope style={{ width: "1.5rem", height: "1.5rem", color: "white" }} />
//                 </div>
//                 <h2 style={styles.formTitle}>Send a Message</h2>
//                 <p style={styles.formDescription}>Tell us about your project and we'll get back to you within 24 hours</p>
//               </div>

//               {/* Success/Error Messages */}
//               {isSubmitted && (
//                 <div style={styles.successMessage}>
//                   ✓ Your message has been sent successfully!
//                 </div>
//               )}
//               {submissionError && (
//                 <div style={styles.errorMessage}>
//                   ⚠ {submissionError}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} style={{ marginBottom: 0 }}>
//                 {/* Name and Email Row */}
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "1.5rem" }}>
//                   <div style={styles.formGroup}>
//                     <label style={styles.label}>
//                       Full Name <span style={{ color: "#f87171" }}>*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('name')}
//                       onBlur={() => setFocusedField('')}
//                       placeholder="Your full name"
//                       style={{
//                         ...styles.input,
//                         ...(errors.name ? styles.inputError : {}),
//                         ...(focusedField === 'name' ? styles.inputFocused : {})
//                       }}
//                     />
//                     {errors.name && <p style={styles.errorText}>{errors.name}</p>}
//                   </div>

//                   <div style={styles.formGroup}>
//                     <label style={styles.label}>
//                       Email Address <span style={{ color: "#f87171" }}>*</span>
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('email')}
//                       onBlur={() => setFocusedField('')}
//                       placeholder="you@example.com"
//                       style={{
//                         ...styles.input,
//                         ...(errors.email ? styles.inputError : {}),
//                         ...(focusedField === 'email' ? styles.inputFocused : {})
//                       }}
//                     />
//                     {errors.email && <p style={styles.errorText}>{errors.email}</p>}
//                   </div>
//                 </div>

//                 {/* Phone and Subject Row */}
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "1.5rem" }}>
//                   <div style={styles.formGroup}>
//                     <label style={styles.label}>
//                       Phone Number <span style={{ color: "#f87171" }}>*</span>
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('phone')}
//                       onBlur={() => setFocusedField('')}
//                       placeholder="+1 234 567 8900"
//                       style={{
//                         ...styles.input,
//                         ...(errors.phone ? styles.inputError : {}),
//                         ...(focusedField === 'phone' ? styles.inputFocused : {})
//                       }}
//                     />
//                     {errors.phone && <p style={styles.errorText}>{errors.phone}</p>}
//                   </div>

//                   <div style={styles.formGroup}>
//                     <label style={styles.label}>
//                       Subject <span style={{ color: "#f87171" }}>*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('subject')}
//                       onBlur={() => setFocusedField('')}
//                       placeholder="Project subject"
//                       style={{
//                         ...styles.input,
//                         ...(errors.subject ? styles.inputError : {}),
//                         ...(focusedField === 'subject' ? styles.inputFocused : {})
//                       }}
//                     />
//                     {errors.subject && <p style={styles.errorText}>{errors.subject}</p>}
//                   </div>
//                 </div>

//                 {/* Service Selection */}
//                 <div style={styles.formGroup}>
//                   <label style={styles.label}>
//                     Service Required <span style={{ color: "#f87171" }}>*</span>
//                   </label>
//                   <select
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     style={{
//                       ...styles.input,
//                       ...(errors.service ? styles.inputError : {})
//                     }}
//                   >
//                     <option value="" style={{ backgroundColor: "#1e293b", color: "white" }}>Select a service</option>
//                     <option value="web-development" style={{ backgroundColor: "#1e293b", color: "white" }}>Web Development</option>
//                     <option value="mobile-app" style={{ backgroundColor: "#1e293b", color: "white" }}>Mobile App Development</option>
//                     <option value="ui-ux-design" style={{ backgroundColor: "#1e293b", color: "white" }}>UI/UX Design</option>
//                     <option value="seo" style={{ backgroundColor: "#1e293b", color: "white" }}>SEO Optimization</option>
//                     <option value="cloud-solutions" style={{ backgroundColor: "#1e293b", color: "white" }}>Cloud Solutions</option>
//                     <option value="software-consulting" style={{ backgroundColor: "#1e293b", color: "white" }}>Software Consulting</option>
//                     <option value="other" style={{ backgroundColor: "#1e293b", color: "white" }}>Other</option>
//                   </select>
//                   {errors.service && <p style={styles.errorText}>{errors.service}</p>}
//                 </div>

//                 {/* Message */}
//                 <div style={styles.formGroup}>
//                   <label style={styles.label}>
//                     Your Message <span style={{ color: "#f87171" }}>*</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     onFocus={() => setFocusedField('message')}
//                     onBlur={() => setFocusedField('')}
//                     placeholder="Tell us about your project, goals, or how we can help you..."
//                     style={{
//                       ...styles.input,
//                       resize: "none",
//                       ...(errors.message ? styles.inputError : {}),
//                       ...(focusedField === 'message' ? styles.inputFocused : {})
//                     }}
//                   ></textarea>
//                   {errors.message && <p style={styles.errorText}>{errors.message}</p>}
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   style={{
//                     ...styles.submitButton,
//                     ...(isSubmitting ? styles.submitButtonDisabled : styles.submitButtonEnabled),
//                     marginBottom: 0
//                   }}
//                 >
//                   {isSubmitting ? (
//                     <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
//                       <svg style={{ animation: "spin 1s linear infinite", width: "1.25rem", height: "1.25rem" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       <span>Sending Message...</span>
//                     </span>
//                   ) : (
//                     <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
//                       <span>Send Message</span>
//                       <svg style={{ width: "1.25rem", height: "1.25rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
//                       </svg>
//                     </span>
//                   )}
//                 </button>

//                 {/* Security Notice */}
//                 <div style={styles.securityNotice}>
//                   <p>🔒 Your information is secure and will never be shared</p>
//                 </div>
//               </form>
//             </div>
//           </div>

//           {/* Right Column - Contact Information */}
//           <div style={{
//       flex: "1 1 40%",
//       minWidth: 0,
//       display: "flex",
//       flexDirection: "column",
//       gap: "1rem"
//     }}>
//             <div style={styles.infoCard}>
//               <div style={styles.formHeader}>
//                 <div style={{ ...styles.formIconContainer, background: "linear-gradient(90deg, #0d9488 0%, #0891b2 100%)" }}>
//                   <FaMapMarkerAlt style={{ width: "1.5rem", height: "1.5rem", color: "white" }} />
//                 </div>
//                 <h3 style={styles.formTitle}>Get In Touch</h3>
//                 <p style={styles.formDescription}>We're here to help bring your ideas to life</p>
//               </div>

//               <div>
//                 {/* Address */}
//                 <div style={{ ...styles.infoItem, marginBottom: "1rem" }}>
//                   <div style={{ ...styles.infoIcon, background: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)" }}>
//                     <FaMapMarkerAlt style={{ width: "1rem", height: "1rem", color: "white" }} />
//                   </div>
//                   <div>
//                     <h4 style={{ fontWeight: 600, color: "white", marginBottom: "0.25rem" }}>Address</h4>
//                     <p style={{ color: "#d1d5db", fontSize: "0.875rem", lineHeight: "1.5" }}>
//                       507/1, Opp. Fortune Sky, New India Colony, Nava Naroda, Ahmedabad, Gujarat 382330
//                     </p>
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div style={{ ...styles.infoItem, marginBottom: "1rem" }}>
//                   <div style={{ ...styles.infoIcon, background: "linear-gradient(135deg, #0d9488 0%, #0891b2 100%)" }}>
//                     <FaPhone style={{ width: "1rem", height: "1rem", color: "white" }} />
//                   </div>
//                   <div>
//                     <h4 style={{ fontWeight: 600, color: "white", marginBottom: "0.25rem" }}>Phone</h4>
//                     <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>+91 8401901942</p>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div style={{ ...styles.infoItem, marginBottom: "1rem" }}>
//                   <div style={{ ...styles.infoIcon, background: "linear-gradient(135deg, #0891b2 0%, #10b981 100%)" }}>
//                     <FaEnvelope style={{ width: "1rem", height: "1rem", color: "white" }} />
//                   </div>
//                   <div>
//                     <h4 style={{ fontWeight: 600, color: "white", marginBottom: "0.25rem" }}>Email</h4>
//                     <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>codenichesoftstudio@gmail.com</p>
//                   </div>
//                 </div>

//                 {/* Working Hours */}
//                 <div style={{ ...styles.infoItem, marginBottom: "1rem" }}>
//                   <div style={{ ...styles.infoIcon, background: "linear-gradient(135deg, #10b981 0%, #0891b2 100%)" }}>
//                     <FaClock style={{ width: "1rem", height: "1rem", color: "white" }} />
//                   </div>
//                   <div>
//                     <h4 style={{ fontWeight: 600, color: "white", marginBottom: "0.25rem" }}>Working Hours</h4>
//                     <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>Monday - Saturday: Open 24 hours</p>
//                     <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>Sunday: Closed</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Social Links */}
//               <div style={styles.socialLinks}>
//                 <h4 style={{ fontWeight: 600, color: "white", marginBottom: "1rem", textAlign: "center" }}>Connect With Us</h4>
//                 <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
//                   <a
//                     href="https://linkedin.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{ 
//                       ...styles.socialLink,
//                       background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
//                       color: "#34d399",
//                       textDecoration: "none"
//                     }}
//                   >
//                     <FaLinkedin style={{ width: "1rem", height: "1rem" }} />
//                   </a>
//                   <a
//                     href="https://twitter.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{ 
//                       ...styles.socialLink,
//                       background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
//                       color: "#2dd4bf",
//                       textDecoration: "none"
//                     }}
//                   >
//                     <FaTwitter style={{ width: "1rem", height: "1rem" }} />
//                   </a>
//                   <a
//                     href="https://github.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{ 
//                       ...styles.socialLink,
//                       background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
//                       color: "#22d3ee",
//                       textDecoration: "none"
//                     }}
//                   >
//                     <FaGithub style={{ width: "1rem", height: "1rem" }} />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Card */}
//             <div style={styles.statsCard}>
//         <div style={{ 
//           ...styles.statItem,
//           background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(20, 184, 166, 0.2) 100%)",
//           border: "1px solid rgba(16, 185, 129, 0.3)"
//         }}>
//           <div style={{ fontSize: "1.875rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>500+</div>
//           <div style={{ color: "#6ee7b7", fontSize: "0.875rem" }}>Projects Delivered</div>
//         </div>
//         <div style={{ 
//           ...styles.statItem,
//           background: "linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(8, 145, 178, 0.2) 100%)",
//           border: "1px solid rgba(20, 184, 166, 0.3)"
//         }}>
//           <div style={{ fontSize: "1.875rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>98%</div>
//           <div style={{ color: "#67e8f9", fontSize: "0.875rem" }}>Client Satisfaction</div>
//         </div>
//       </div>
//             {/* Quick Features */}
//             <div style={{ marginTop: "1rem" }}>
//               {[
//                 { icon: "⚡", text: "Lightning-fast responses within 24 hours", color: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)" },
//                 { icon: "🎯", text: "Tailored solutions for your unique needs", color: "linear-gradient(135deg, #0d9488 0%, #0891b2 100%)" },
//                 { icon: "🔒", text: "Enterprise-grade security & privacy", color: "linear-gradient(135deg, #0891b2 0%, #10b981 100%)" }
//               ].map((item, index) => (
//                 <div 
//                   key={index}
//                   style={{ ...styles.featureItem, marginBottom: "1rem"}}
//                 >
//                   <div style={{ ...styles.featureIcon, background: item.color }}>
//                     {item.icon}
//                   </div>
//                   <p style={{ color: "#d1d5db", fontWeight: 500, fontSize: "0.875rem" }}>{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }



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
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    services: [],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const serviceOptions = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-app", label: "Mobile App Development" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "seo", label: "SEO Optimization" },
    { value: "cloud-solutions", label: "Cloud Solutions" },
    { value: "software-consulting", label: "Software Consulting" },
    { value: "e-commerce", label: "E-commerce Solutions" },
    { value: "api-development", label: "API Development" },
    { value: "maintenance", label: "Maintenance & Support" },
    { value: "other", label: "Other" }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (e) => {
      if (isServiceDropdownOpen && !e.target.closest('[data-dropdown]')) {
        setIsServiceDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    
    // Initialize EmailJS
    if (EMAILJS_CONFIG.PUBLIC_KEY) {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isServiceDropdownOpen]);

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

    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service";
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

  const handleServiceToggle = (serviceValue) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceValue)
        ? prev.services.filter(s => s !== serviceValue)
        : [...prev.services, serviceValue]
    }));
    setErrors((prev) => ({ ...prev, services: "" }));
  };

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };

  const getSelectedServicesText = () => {
    if (formData.services.length === 0) {
      return "Select services...";
    }
    if (formData.services.length === 1) {
      const service = serviceOptions.find(s => s.value === formData.services[0]);
      return service ? service.label : "1 service selected";
    }
    return `${formData.services.length} services selected`;
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
          services: formData.services.join(", "),
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
        services: [],
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmissionError("Failed to send message. Please try again later.");
    }
  };

  // Responsive styles
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#1b263b",
      position: "relative",
      overflow: "hidden",
      padding: isMobile ? "0 0.5rem" : "0 1rem"
    },
    animatedBackground: {
      position: "absolute",
      inset: 0,
      overflow: "hidden"
    },
    blob1: {
      position: "absolute",
      top: isMobile ? "-5rem" : "-10rem",
      left: isMobile ? "-5rem" : "-10rem",
      width: isMobile ? "12rem" : "24rem",
      height: isMobile ? "12rem" : "24rem",
      backgroundColor: "#10b981",
      borderRadius: "50%",
      mixBlendMode: "multiply",
      filter: "blur(20px)",
      opacity: 0.2,
      animation: "pulse 2s infinite"
    },
    blob2: {
      position: "absolute",
      bottom: isMobile ? "-5rem" : "-10rem",
      right: isMobile ? "-5rem" : "-10rem",
      width: isMobile ? "10rem" : "20rem",
      height: isMobile ? "10rem" : "20rem",
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
      right: isMobile ? "10%" : "25%",
      width: isMobile ? "8rem" : "16rem",
      height: isMobile ? "8rem" : "16rem",
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
      left: isMobile ? "10%" : "25%",
      width: isMobile ? "9rem" : "18rem",
      height: isMobile ? "9rem" : "18rem",
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
      width: isMobile ? "10rem" : "20rem",
      height: isMobile ? "10rem" : "20rem",
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
      padding: isMobile ? "1.5rem 0.5rem" : "3rem 1rem",
      transition: "all 1s",
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? "translateY(0)" : "translateY(10px)"
    },
    headerBadge: {
      display: "inline-block",
      padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
      background: "linear-gradient(90deg, rgba(16, 185, 129, 0.2) 0%, rgba(20, 184, 166, 0.2) 100%)",
      borderRadius: "9999px",
      border: "1px solid rgba(16, 185, 129, 0.3)",
      backdropFilter: "blur(4px)",
      marginBottom: "1rem"
    },
    headerTitle: {
      fontSize: isMobile ? "1.5rem" : "2.25rem",
      fontWeight: 700,
      background: "linear-gradient(90deg, #ffffff 0%, #a7f3d0 50%, #99f6e4 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      marginBottom: "1rem",
      lineHeight: 1.2
    },
    headerSubtitle: {
      fontSize: isMobile ? "0.875rem" : "1.125rem",
      color: "#d1d5db",
      maxWidth: "42rem",
      marginLeft: "auto",
      marginRight: "auto",
      padding: isMobile ? "0 0.5rem" : "0"
    },
    mainContent: {
      position: "relative",
      zIndex: 20,
      maxWidth: "80rem",
      marginLeft: "auto",
      marginRight: "auto",
      padding: isMobile ? "0 0 2rem" : "0 1rem 4rem",
      transition: "all 1s 0.3s",
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? "translateY(0)" : "translateY(10px)"
    },
    contentContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "1.5rem" : "2rem",
      alignItems: "flex-start"
    },
    formColumn: {
      flex: isMobile ? "none" : "1 1 60%",
      minWidth: 0,
      width: "100%"
    },
    infoColumn: {
      flex: isMobile ? "none" : "1 1 40%",
      minWidth: 0,
      width: "100%"
    },
    formCard: {
      position: "relative",
      padding: isMobile ? "1rem" : "1.5rem",
      borderRadius: "1rem",
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: "all 0.5s"
    },
    formHeader: {
      textAlign: "center",
      marginBottom: isMobile ? "1.5rem" : "2rem"
    },
    formIconContainer: {
      display: "inline-block",
      padding: isMobile ? "0.5rem" : "0.75rem",
      background: "linear-gradient(90deg, #10b981 0%, #0d9488 100%)",
      borderRadius: "0.75rem",
      marginBottom: "1rem"
    },
    formTitle: {
      fontSize: isMobile ? "1.25rem" : "1.5rem",
      fontWeight: 700,
      color: "white",
      marginBottom: "0.5rem"
    },
    formDescription: {
      color: "#d1d5db",
      fontSize: isMobile ? "0.875rem" : "1rem"
    },
    successMessage: {
      marginBottom: "1rem",
      padding: "0.75rem",
      borderRadius: "0.75rem",
      background: "rgba(16, 185, 129, 0.2)",
      color: "#6ee7b7",
      border: "1px solid rgba(16, 185, 129, 0.3)",
      textAlign: "center",
      fontWeight: 500,
      fontSize: isMobile ? "0.875rem" : "1rem"
    },
    errorMessage: {
      marginBottom: "1rem",
      padding: "0.75rem",
      borderRadius: "0.75rem",
      background: "rgba(239, 68, 68, 0.2)",
      color: "#fca5a5",
      border: "1px solid rgba(239, 68, 68, 0.3)",
      textAlign: "center",
      fontWeight: 500,
      fontSize: isMobile ? "0.875rem" : "1rem"
    },
    formGroup: {
      marginBottom: "1rem"
    },
    formRow: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "1rem",
      marginBottom: "1rem"
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
      transition: "all 0.3s",
      fontSize: isMobile ? "16px" : "inherit" // Prevents zoom on iOS
    },
    inputFocused: {
      background: "rgba(255, 255, 255, 0.1)"
    },
    inputError: {
      borderColor: "#ef4444"
    },
    errorText: {
      color: "#f87171",
      fontSize: "0.75rem",
      marginTop: "0.25rem"
    },
    serviceGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "0.5rem",
      marginTop: "0.5rem"
    },
    serviceOption: {
      display: "flex",
      alignItems: "center",
      padding: "0.75rem",
      borderRadius: "0.5rem",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      cursor: "pointer",
      transition: "all 0.3s",
      fontSize: "0.875rem"
    },
    serviceOptionSelected: {
      background: "linear-gradient(90deg, rgba(16, 185, 129, 0.2) 0%, rgba(20, 184, 166, 0.2) 100%)",
      border: "1px solid rgba(16, 185, 129, 0.5)",
      color: "#6ee7b7"
    },
    dropdown: {
      position: "relative",
      width: "100%"
    },
    dropdownButton: {
      width: "100%",
      padding: "0.75rem 1rem",
      borderRadius: "0.75rem",
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      color: "white",
      outline: "none",
      transition: "all 0.3s",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "left",
      fontSize: isMobile ? "14px" : "inherit"
    },
    dropdownButtonOpen: {
      background: "rgba(255, 255, 255, 0.1)",
      borderColor: "#10b981"
    },
    dropdownContent: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      zIndex: 50,
      background: "rgba(30, 41, 59, 0.95)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "0.75rem",
      marginTop: "0.25rem",
      maxHeight: "12rem",
      overflowY: "auto",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
    },
    dropdownItem: {
      display: "flex",
      alignItems: "center",
      padding: "0.75rem 1rem",
      cursor: "pointer",
      transition: "all 0.2s",
      fontSize: "0.875rem",
      color: "#d1d5db"
    },
    dropdownItemHover: {
      background: "rgba(16, 185, 129, 0.1)",
      color: "#6ee7b7"
    },
    dropdownCheckbox: {
      width: "1rem",
      height: "1rem",
      marginRight: "0.75rem",
      accentColor: "#10b981"
    },
    submitButton: {
      width: "100%",
      padding: "1rem 1.5rem",
      borderRadius: "0.75rem",
      fontWeight: 600,
      color: "white",
      transition: "all 0.3s",
      transform: "none",
      outline: "none",
      border: "none",
      cursor: "pointer",
      fontSize: isMobile ? "0.875rem" : "1rem"
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
      fontSize: "0.75rem",
      color: "#9ca3af"
    },
    infoCard: {
      position: "relative",
      marginBottom: isMobile ? "1.5rem" : "2rem",
      padding: isMobile ? "1rem" : "1.5rem",
      borderRadius: "1rem",
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
      padding: "0.75rem",
      borderRadius: "0.75rem",
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s",
      marginBottom: "0.75rem"
    },
    infoIcon: {
      flexShrink: 0,
      width: "2rem",
      height: "2rem",
      borderRadius: "0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "0.75rem"
    },
    statsCard: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "1rem",
      marginBottom: "1rem"
    },
    statItem: {
      textAlign: "center",
      padding: "1rem",
      borderRadius: "0.75rem",
      border: "1px solid rgba(16, 185, 129, 0.3)",
      backdropFilter: "blur(4px)"
    },
    featureItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.75rem",
      borderRadius: "0.5rem",
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s",
      marginBottom: "0.5rem"
    },
    featureIcon: {
      flexShrink: 0,
      width: "2rem",
      height: "2rem",
      borderRadius: "0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: 700,
      fontSize: "0.875rem"
    },
    socialLinks: {
      marginTop: "1.5rem",
      paddingTop: "1.5rem",
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
          left: mousePosition.x - (isMobile ? 80 : 160),
          top: mousePosition.y - (isMobile ? 80 : 160),
        }}
      ></div>

      {/* Floating Geometric Shapes */}
      <div style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none"
      }}>
        {[...Array(isMobile ? 8 : 15)].map((_, i) => {
          const shapeStyle = {
            ...styles.floatingShape,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          };

          if (i % 3 === 0) {
            shapeStyle.width = isMobile ? "0.5rem" : "0.75rem";
            shapeStyle.height = isMobile ? "0.5rem" : "0.75rem";
            shapeStyle.backgroundColor = "#34d399";
            shapeStyle.borderRadius = "50%";
          } else if (i % 3 === 1) {
            shapeStyle.width = isMobile ? "0.375rem" : "0.5rem";
            shapeStyle.height = isMobile ? "0.375rem" : "0.5rem";
            shapeStyle.backgroundColor = "#2dd4bf";
            shapeStyle.transform = "rotate(45deg)";
          } else {
            shapeStyle.width = isMobile ? "0.375rem" : "0.5rem";
            shapeStyle.height = isMobile ? "0.375rem" : "0.5rem";
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
      <main style={styles.mainContent}>
        <div style={styles.contentContainer}>
          {/* Left Column - Contact Form */}
          <div style={styles.formColumn}>
            <div style={styles.formCard}>
              {/* Form Header */}
              <div style={styles.formHeader}>
                <div style={styles.formIconContainer}>
                  <FaEnvelope style={{ width: "1.25rem", height: "1.25rem", color: "white" }} />
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
                <div style={{
                  display: "grid",
                  gridTemplateColumns: windowWidth >= 640 ? "1fr 1fr" : "1fr",
                  gap: "1rem",
                  marginBottom: "1rem"
                }}>
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
                <div style={{
                  display: "grid",
                  gridTemplateColumns: windowWidth >= 640 ? "1fr 1fr" : "1fr",
                  gap: "1rem",
                  marginBottom: "1rem"
                }}>
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

                {/* Services Selection */}
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Services Required <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  
                  <div style={styles.dropdown} data-dropdown="true">
                    <button
                      type="button"
                      onClick={toggleServiceDropdown}
                      style={{
                        ...styles.dropdownButton,
                        ...(isServiceDropdownOpen ? styles.dropdownButtonOpen : {}),
                        ...(errors.services ? styles.inputError : {})
                      }}
                    >
                      <span>{getSelectedServicesText()}</span>
                      <svg
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          transform: isServiceDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s"
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isServiceDropdownOpen && (
                      <div style={styles.dropdownContent}>
                        {serviceOptions.map((service) => (
                          <div
                            key={service.value}
                            onClick={() => handleServiceToggle(service.value)}
                            style={{
                              ...styles.dropdownItem,
                              ...(formData.services.includes(service.value) ? { background: "rgba(16, 185, 129, 0.15)", color: "#6ee7b7" } : {})
                            }}
                            onMouseEnter={(e) => {
                              if (!formData.services.includes(service.value)) {
                                e.target.style.background = "rgba(16, 185, 129, 0.1)";
                                e.target.style.color = "#6ee7b7";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!formData.services.includes(service.value)) {
                                e.target.style.background = "transparent";
                                e.target.style.color = "#d1d5db";
                              }
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service.value)}
                              onChange={() => {}} // Handled by onClick
                              style={styles.dropdownCheckbox}
                            />
                            <span>{service.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {errors.services && <p style={styles.errorText}>{errors.services}</p>}
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
          <div style={styles.infoColumn}>
            <div style={styles.infoCard}>
              <div style={styles.formHeader}>
                <div style={{ ...styles.formIconContainer, background: "linear-gradient(90deg, #0d9488 0%, #0891b2 100%)" }}>
                  <FaMapMarkerAlt style={{ width: "2.25rem", height: "2.25rem", color: "white" }} />
                </div>
                <h3 style={styles.formTitle}>Get In Touch</h3>
                <p style={styles.formDescription}>We're here to help bring your ideas to life</p>
              </div>

              <div>
                <div style={styles.infoItem}>
                  <div style={{ ...styles.infoIcon, background: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)" }}>
                    <FaMapMarkerAlt style={{ width: "0.875rem", height: "0.875rem", color: "white" }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: "white", marginBottom: "0.75rem", fontSize: "0.875rem" }}>Address</h4>
                    <p style={{ color: "#d1d5db", fontSize: "0.8rem", lineHeight: "1.5" }}>
                      507/1, Opp. Fortune Sky, New India Colony, Nava Naroda, Ahmedabad, Gujarat 382330
                    </p>
                  </div>
                </div>

                
                <div style={styles.infoItem}>
                  <div style={{ ...styles.infoIcon, background: "linear-gradient(135deg, #0d9488 0%, #0891b2 100%)" }}>
                    <FaPhone style={{ width: "0.875rem", height: "0.875rem", color: "white" }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: "white", marginBottom: "0.9rem", fontSize: "0.875rem" }}>Phone</h4>
                    <p style={{ color: "#d1d5db", fontSize: "0.75rem" }}>+91 8401901942</p>
                  </div>
                </div>

                
                <div style={styles.infoItem}>
                  <div style={{ ...styles.infoIcon, background: "linear-gradient(135deg, #0891b2 0%, #10b981 100%)" }}>
                    <FaEnvelope style={{ width: "0.875rem", height: "0.875rem", color: "white" }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: "white", marginBottom: "0.9rem", fontSize: "0.875rem" }}>Email</h4>
                    <p style={{ color: "#d1d5db", fontSize: "0.75rem" }}>codenichesoftstudio@gmail.com</p>
                  </div>
                </div>

                
                <div style={styles.infoItem}>
                  <div style={{ ...styles.infoIcon, background: "linear-gradient(135deg, #10b981 0%, #0891b2 100%)" }}>
                    <FaClock style={{ width: "0.875rem", height: "0.875rem", color: "white" }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: "white", marginBottom: "0.9rem", fontSize: "0.875rem" }}>Working Hours</h4>
                    <p style={{ color: "#d1d5db", fontSize: "0.75rem" }}>Monday - Saturday: Open 24 hours</p>
                    <p style={{ color: "#d1d5db", fontSize: "0.75rem" }}>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              
              <div style={styles.socialLinks}>
                <h4 style={{ fontWeight: 600, color: "white", marginBottom: "1rem", textAlign: "center", fontSize: "0.875rem" }}>Connect With Us</h4>
                <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem" }}>
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
          </div>
        </div>
      </main>

     
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.05); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.2; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Improve mobile experience */
        @media (max-width: 640px) {
          input, textarea, select {
            font-size: 16px !important; /* Prevents zoom on iOS */
          }
        }
      `}</style>
    </div>
  );
}