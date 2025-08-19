// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import {
//   FaArrowRight,
//   FaCheckCircle,
//   FaCode,
//   FaServer,
//   FaMobile,
//   FaDesktop,
//   FaShieldAlt,
//   FaChartLine,
//   FaUserCog,
//   FaUserGraduate,
//   FaUserTie,
//   FaMoneyBillWave,
//   FaBook,
//   FaClipboardList,
//   FaCalendarAlt,
//   FaBullhorn,
//   FaFileAlt,
//   FaChalkboardTeacher,
//   FaWhatsapp,
// } from "react-icons/fa";
// import { MdLightMode, MdDarkMode } from "react-icons/md";

// // Components
// import Section from "../components/common/Section";
// import Button from "../components/common/Button";
// import SectionHeading from "../components/common/SectionHeading";
// import Chatbot from "../components/common/Chatbot"; // Assuming Chatbot component is in a separate file

// // Import sample product images (replace with your actual images)
// import mobileImage from "../assets/images/mobimage.png";
// import deskImage from "../assets/images/desimg.png";

// const ProductsContainer = styled.div`
//   padding: 8rem 1.5rem 6rem;
//   max-width: 1400px;
//   margin: 0 auto;
//   font-family: "Inter", sans-serif;
//   position: relative; // To position fixed buttons

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 6rem 1rem 3rem;
//   }
// `;

// const ProductCategories = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;
//   justify-content: center;
//   margin-bottom: 3rem;

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     gap: 0.75rem;
//     padding: 0 1rem;
//   }
// `;

// const CategoryButton = styled.button`
//   padding: 0.75rem 1.5rem;
//   background: ${({ active }) => (active ? "#3B82F6" : "#f8fafc")};
//   color: ${({ active }) => (active ? "white" : "#64748b")};
//   border: none;
//   border-radius: 30px;
//   font-weight: 600;
//   font-size: 0.95rem;
//   cursor: pointer;
//   transition: all 0.4s ease;
//   box-shadow: ${({ active }) =>
//     active
//       ? "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
//       : "0 4px 6px -1px rgba(0, 0, 0, 0.05)"};

//   &:hover {
//     background: ${({ active }) => (active ? "#2563eb" : "#f1f5f9")};
//     transform: translateY(-3px);
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 0.6rem 1.2rem;
//     font-size: 0.85rem;
//   }
// `;

// const ProductsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   gap: 2.5rem;
//   margin-bottom: 5rem;

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     grid-template-columns: 1fr;
//     gap: 2rem;
//     padding: 0 1rem;
//   }
// `;

// const FeaturedProduct = styled.div`
//   background: white;
//   border-radius: 1.5rem;
//   overflow: hidden;
//   box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
//     0 10px 10px -5px rgba(0, 0, 0, 0.04);
//   margin-bottom: 5rem;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   transition: all 0.4s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.1),
//       0 10px 10px -5px rgba(0, 0, 0, 0.05);
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FeaturedProductImage = styled.div`
//   background: linear-gradient(135deg, #f0f7ff 0%, #e6f0fd 100%);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 7rem;

//   img {
//     max-width: 100%;
//     height: auto;
//     border-radius: 0.75rem;
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
//     transition: transform 0.5s ease, box-shadow 0.5s ease;

//     &:hover {
//       transform: scale(1.05);
//       box-shadow: 0 15px 25px rgba(0, 0, 0, 0.18);
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 1.5rem;
//   }
// `;

// const FeaturedProductContent = styled.div`
//   padding: 4rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   h3 {
//     font-size: clamp(1.5rem, 4vw, 2rem);
//     margin-bottom: 1.2rem;
//     color: #1e293b;
//     font-weight: 700;
//     line-height: 1.5;
//   }

//   p {
//     color: #64748b;
//     margin-bottom: 2rem;
//     line-height: 1.7;
//     font-size: clamp(1rem, 2.5vw, 1.1rem);
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 2rem;
//   }
// `;

// const ProductCard = styled(motion.div)`
//   background: white;
//   border-radius: 1.25rem;
//   overflow: hidden;
//   box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08),
//     0 4px 6px -2px rgba(0, 0, 0, 0.03);
//   transition: all 0.4s ease;
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   position: relative;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
//       0 10px 10px -5px rgba(0, 0, 0, 0.04);
//   }

//   /* Add subtle border gradient on hover */
//   &:after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     border-radius: 1.25rem;
//     border: 2px solid transparent;
//     background: linear-gradient(
//         135deg,
//         rgba(59, 130, 246, 0),
//         rgba(59, 130, 246, 0)
//       )
//       border-box;
//     -webkit-mask: linear-gradient(#fff 0 0) padding-box,
//       linear-gradient(#fff 0 0);
//     -webkit-mask-composite: destination-out;
//     mask-composite: exclude;
//     transition: all 0.4s ease;
//     pointer-events: none;
//   }

//   &:hover:after {
//     border: 2px solid transparent;
//     background: linear-gradient(135deg, #3b82f6, #60a5fa) border-box;
//   }
// `;

// const ProductImage = styled.div`
//   height: 250px;
//   overflow: hidden;
//   position: relative;

//   &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(
//       0deg,
//       rgba(0, 0, 0, 0.2) 0%,
//       rgba(0, 0, 0, 0) 50%
//     );
//     z-index: 1;
//   }

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.8s ease;
//   }

//   &:hover img {
//     transform: scale(1.08);
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     height: 200px;
//   }
// `;

// const ProductBadge = styled.span`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   background: ${({ theme, type }) =>
//     type === "new"
//       ? "#10b981"
//       : type === "popular"
//       ? "#3B82F6"
//       : "rgba(0, 0, 0, 0.7)"};
//   color: white;
//   padding: 0.4rem 0.9rem;
//   border-radius: 20px;
//   font-size: 0.8rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
//   z-index: 2;
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
// `;

// const ProductContent = styled.div`
//   padding: 1.75rem;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
// `;

// const ProductTitle = styled.h3`
//   font-size: clamp(1.3rem, 3vw, 1.5rem);
//   margin-bottom: 0.8rem;
//   color: #1e293b;
//   font-weight: 700;
//   line-height: 1.3;
// `;

// const ProductDescription = styled.p`
//   color: #64748b;
//   margin-bottom: 1.5rem;
//   line-height: 1.7;
//   font-size: clamp(0.9rem, 2.5vw, 1rem);
//   flex: 1;
// `;

// const ProductFeatures = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin-bottom: 1.5rem;

//   li {
//     display: flex;
//     align-items: center;
//     margin-bottom: 0.8rem;
//     color: #475569;
//     font-size: clamp(1.25rem, 2.5vw, 0.95rem);
//     line-height: 1.5;

//     svg {
//       color: #3b82f6;
//       margin-right: 0.7rem;
//       flex-shrink: 0;
//       font-size: clamp(1rem, 2.5vw, 1.1rem);
//     }
//   }
// `;

// const ProductActions = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: auto;

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     flex-direction: column;
//     gap: 0.75rem;
//   }
// `;

// const ComparisonSection = styled.div`
//   margin-top: 6rem;
//   padding: 3rem;
//   background: #f8fafc;
//   border-radius: 1.5rem;
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     margin-top: 3rem;
//     padding: 2rem 1rem;
//   }
// `;

// const ComparisonTable = styled.div`
//   overflow-x: auto;
//   margin-top: 2rem;
//   padding: 0 1rem;

//   table {
//     width: 100%;
//     min-width: 600px;
//     border-collapse: separate;
//     border-spacing: 0;
//     border-radius: 1rem;
//     overflow: hidden;
//     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);

//     th,
//     td {
//       padding: 1rem;
//       text-align: center;
//       border-bottom: 1px solid #e2e8f0;
//       font-size: clamp(0.85rem, 2.5vw, 0.95rem);
//     }

//     th {
//       background: #3b82f6;
//       color: white;
//       font-weight: 600;
//       position: sticky;
//       top: 0;
//       letter-spacing: 0.5px;
//     }

//     th:first-child {
//       text-align: left;
//       background: #2563eb;
//     }

//     td:first-child {
//       text-align: left;
//       font-weight: 500;
//       color: #1e293b;
//     }

//     tr:nth-child(even) {
//       background-color: #f1f5f9;
//     }

//     tr:hover {
//       background-color: #e0f2fe;
//     }

//     .highlight {
//       background-color: rgba(59, 130, 246, 0.1);
//     }

//     td:not(:first-child) {
//       color: #059669;
//       font-weight: 600;
//       font-size: 1.1rem;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     table {
//       min-width: 400px;
//     }
//   }
// `;

// const TestimonialSection = styled.div`
//   margin-top: 6rem;
//   background: linear-gradient(135deg, #f0f7ff 0%, #e6f0fd 100%);
//   padding: 4rem 2rem;
//   border-radius: 1.5rem;
//   text-align: center;
//   box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05),
//     0 4px 6px -2px rgba(0, 0, 0, 0.025);

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     margin-top: 3rem;
//     padding: 3rem 1.5rem;
//   }
// `;

// const TestimonialQuote = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   font-size: clamp(1.1rem, 3vw, 1.3rem);
//   line-height: 1.8;
//   font-style: italic;
//   color: #1e293b;
//   position: relative;

//   &:before,
//   &:after {
//     content: '"';
//     font-size: clamp(3rem, 6vw, 4rem);
//     color: rgba(59, 130, 246, 0.2);
//     position: absolute;
//     font-family: "Georgia", serif;
//   }

//   &:before {
//     top: -2rem;
//     left: -1.5rem;
//   }

//   &:after {
//     bottom: -3.5rem;
//     right: -1.5rem;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     max-width: 100%;
//   }
// `;

// const TestimonialAuthor = styled.div`
//   margin-top: 2.5rem;

//   h4 {
//     font-size: clamp(1.1rem, 2.5vw, 1.3rem);
//     color: #1e293b;
//     margin-bottom: 0.3rem;
//     font-weight: 700;
//   }

//   p {
//     color: #64748b;
//     font-size: clamp(0.9rem, 2.5vw, 1rem);
//   }
// `;

// const CTASection = styled.div`
//   background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
//   padding: 4rem 2rem;
//   border-radius: 1.5rem;
//   text-align: center;
//   margin-top: 6rem;
//   box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.25),
//     0 10px 10px -5px rgba(59, 130, 246, 0.1);
//   position: relative;
//   overflow: hidden;

//   /* Add decorative elements */
//   &:before,
//   &:after {
//     content: "";
//     position: absolute;
//     border-radius: 50%;
//     background: rgba(255, 255, 255, 0.05);
//   }

//   &:before {
//     width: 300px;
//     height: 300px;
//     top: -100px;
//     right: -100px;
//   }

//   &:after {
//     width: 200px;
//     height: 200px;
//     bottom: -70px;
//     left: -70px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 3rem 1.5rem;
//     margin-top: 3rem;
//   }
// `;

// const CTATitle = styled.h2`
//   color: white;
//   font-size: clamp(2rem, 5vw, 2.5rem);
//   margin-bottom: 1.5rem;
//   font-weight: 700;
//   line-height: 1.3;
// `;

// const CTADescription = styled.p`
//   color: rgba(255, 255, 255, 0.9);
//   max-width: 700px;
//   margin: 0 auto 2rem;
//   font-size: clamp(1rem, 3vw, 1.1rem);
//   line-height: 1.7;
// `;

// // New Components for Module Details
// const ModuleDetailsSection = styled.div`
//   margin: 6rem 0;

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     margin: 4rem 0;
//   }
// `;

// const ModuleTabs = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.75rem;
//   margin-bottom: 2.5rem;
//   justify-content: center;

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     gap: 0.5rem;
//   }
// `;

// const ModuleTab = styled.button`
//   padding: 1rem 1.75rem;
//   background: ${({ active }) => (active ? "#3B82F6" : "#f8fafc")};
//   color: ${({ active }) => (active ? "white" : "#64748b")};
//   border: none;
//   border-radius: 10px;
//   font-weight: 600;
//   font-size: 0.95rem;
//   cursor: pointer;
//   transition: all 0.4s ease;
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   box-shadow: ${({ active }) =>
//     active
//       ? "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
//       : "0 4px 6px -1px rgba(0, 0, 0, 0.05)"};

//   svg {
//     font-size: 1.1rem;
//   }

//   &:hover {
//     background: ${({ active }) => (active ? "#2563eb" : "#f1f5f9")};
//     transform: translateY(-3px);
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 0.75rem 1.25rem;
//     font-size: 0.85rem;
//   }
// `;

// const ModuleContent = styled.div`
//   background: white;
//   border-radius: 1.25rem;
//   padding: 2.5rem;
//   box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08),
//     0 4px 6px -2px rgba(0, 0, 0, 0.03);

//   h3 {
//     font-size: clamp(1.4rem, 3vw, 1.7rem);
//     margin-bottom: 1.2rem;
//     color: #1e293b;
//     display: flex;
//     align-items: center;
//     gap: 0.75rem;
//     font-weight: 700;
//   }

//   p {
//     color: #64748b;
//     margin-bottom: 2rem;
//     line-height: 1.7;
//     font-size: clamp(1rem, 2.5vw, 1.1rem);
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 2rem;
//   }
// `;

// const FeatureGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 1.75rem;
//   margin-top: 2rem;
// `;

// const FeatureCard = styled(motion.div)`
//   background: #f8fafc;
//   padding: 1.5rem;
//   border-radius: 1rem;
//   transition: all 0.4s ease;
//   border-left: 4px solid #3b82f6;

//   h4 {
//     font-size: 1.15rem;
//     margin-bottom: 0.8rem;
//     color: #1e293b;
//     display: flex;
//     align-items: center;
//     gap: 0.75rem;
//     font-weight: 600;
//   }

//   p {
//     color: #64748b;
//     font-size: 0.95rem;
//     margin-bottom: 0;
//     line-height: 1.6;
//   }

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08),
//       0 4px 6px -2px rgba(0, 0, 0, 0.03);
//     background: white;
//   }
// `;

// const WhatsAppButton = styled.a`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   background-color: #25d366;
//   color: white;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 2rem;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   z-index: 1000;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// const ThemeToggle = styled.button`
//   position: fixed;
//   bottom: 90px;
//   right: 20px;
//   background-color: ${({ darkMode }) => (darkMode ? "#222" : "#fff")};
//   color: ${({ darkMode }) => (darkMode ? "#ffd600" : "#222")};
//   border: 2px solid ${({ darkMode }) => (darkMode ? "#ffd600" : "#222")};
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 2rem;
//   cursor: pointer;
//   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
//   z-index: 1000;
//   transition: background 0.3s, color 0.3s, border 0.3s, transform 0.3s;

//   &:hover {
//     background-color: ${({ darkMode }) => (darkMode ? "#333" : "#f1f1f1")};
//     transform: scale(1.08);
//   }
// `;

// // Animation variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const ProductsPage = () => {
//   useEffect(() => {
//     document.title = "Our Products - CodeNiche SoftStudio";
//     window.scrollTo(0, 0);
//   }, []);

//   // State for active module tab
//   const [activeModule, setActiveModule] = useState("admin");

//   // State for active category
//   const [activeCategory, setActiveCategory] = useState("all");

//   // State for dark mode
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//     // Add logic to toggle theme (e.g., updating CSS variables or a theme provider)
//   };

//   // Sample product data based on SRS
//   const products = [
//     {
//       id: 1,
//       title: "SkoolVriksh",
//       description:
//         "A comprehensive school management system with multi-tenant architecture designed to streamline administrative tasks and enhance communication between administrators, teachers, students, and parents.",
//       image: mobileImage,
//       features: [
//         "Multi-Tenant Architecture",
//         "Comprehensive User Roles",
//         "RTE Compliance",
//         "Fee Management",
//         "Real-time Notifications",
//         "Attendance Tracking",
//         "Fee Payment",
//         "Academic Progress",
//         "Custom Fee Categories",
//         "RTE Management",
//         "Payment Gateway",
//         "Fee Reports",
//       ],
//       category: "education",
//       badge: "popular",
//     },
//   ];

//   // Modules data based on SRS
//   const modules = {
//     admin: {
//       title: "School Admin Panel",
//       icon: <FaUserCog />,
//       description:
//         "Comprehensive administrative control for school principals and administrators to manage all aspects of the school operation.",
//       features: [
//         {
//           title: "User Management",
//           icon: <FaUserCog />,
//           description:
//             "Register and manage class teachers, clerks, librarians, fee management staff, parents, and trustees with role-based permissions.",
//         },
//         {
//           title: "Academic Management",
//           icon: <FaChalkboardTeacher />,
//           description:
//             "Create customizable classes, set class capacity, define divisions, assign class teachers, and track RTE seat allocation.",
//         },
//         {
//           title: "Attendance System",
//           icon: <FaClipboardList />,
//           description:
//             "Monitor attendance for students, teachers, and staff with daily, weekly, monthly, and yearly reports.",
//         },
//         {
//           title: "Examination Management",
//           icon: <FaFileAlt />,
//           description:
//             "Create exam schedules, generate seating arrangements, manage results, and produce report cards.",
//         },
//         {
//           title: "Announcement System",
//           icon: <FaBullhorn />,
//           description:
//             "Publish school-wide announcements targeted to specific user groups including teachers, students, parents, staff, and trustees.",
//         },
//         {
//           title: "Trusty Management",
//           icon: <FaUserTie />,
//           description:
//             "Create and manage Trusty Panel accounts, define roles and permissions, schedule board meetings, and maintain meeting minutes.",
//         },
//       ],
//     },
//     trusty: {
//       title: "Trusty Panel",
//       icon: <FaUserTie />,
//       description:
//         "Dedicated access for school trustees to monitor financial, academic, and operational aspects of the institution.",
//       features: [
//         {
//           title: "Financial Oversight",
//           icon: <FaMoneyBillWave />,
//           description:
//             "View school financial reports, fee records details, and review annual budgets and expenditure.",
//         },
//         {
//           title: "Admission Monitoring",
//           icon: <FaUserGraduate />,
//           description:
//             "Monitor admission statistics and RTE admission compliance to ensure proper implementation of policies.",
//         },
//         {
//           title: "Academic Oversight",
//           icon: <FaChalkboardTeacher />,
//           description:
//             "Access academic performance metrics to ensure educational quality and standards.",
//         },
//         {
//           title: "Infrastructure Development",
//           icon: <FaDesktop />,
//           description:
//             "Oversee school infrastructure development projects and track their progress.",
//         },
//         {
//           title: "Meeting Management",
//           icon: <FaCalendarAlt />,
//           description:
//             "Access board meeting schedules, attend scheduled meetings, and review meeting minutes.",
//         },
//         {
//           title: "Inventory Oversight",
//           icon: <FaClipboardList />,
//           description:
//             "View and monitor inventory management activities and asset tracking.",
//         },
//       ],
//     },
//     clerk: {
//       title: "Clerk Panel",
//       icon: <FaClipboardList />,
//       description:
//         "Streamlined interface for administrative staff to handle admissions, records, and certificate management.",
//       features: [
//         {
//           title: "Admission Management",
//           icon: <FaUserGraduate />,
//           description:
//             "Process new admissions with separate workflows for RTE and normal admissions.",
//         },
//         {
//           title: "Document Generation",
//           icon: <FaFileAlt />,
//           description:
//             "Generate GR numbers and issue certificates such as bonafide, leaving, and transfer certificates.",
//         },
//         {
//           title: "RTE Compliance",
//           icon: <FaShieldAlt />,
//           description:
//             "Verify RTE eligibility documents, process admissions without fees, and mark students as RTE in the system.",
//         },
//         {
//           title: "Fee Processing",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Calculate applicable admission fees for normal admissions and process fee payments.",
//         },
//         {
//           title: "Admission Workflow",
//           icon: <FaClipboardList />,
//           description:
//             "Manage the complete admission process from application to class allocation and parent notification.",
//         },
//         {
//           title: "Student Records",
//           icon: <FaFileAlt />,
//           description:
//             "Maintain comprehensive student records including personal information, academic history, and document status.",
//         },
//       ],
//     },
//     fee: {
//       title: "Fee Management Panel",
//       icon: <FaMoneyBillWave />,
//       description:
//         "Comprehensive fee management system with specialized handling for both regular students and RTE beneficiaries.",
//       features: [
//         {
//           title: "Fee Categories",
//           icon: <FaClipboardList />,
//           description:
//             "Define various fee categories including school fees, computer fees, transportation fees, examination fees, and more.",
//         },
//         {
//           title: "Payment Tracking",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Track payments, generate receipts, manage pending dues, and apply late fees when applicable.",
//         },
//         {
//           title: "Discount Management",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Process discounts and special fee arrangements for eligible students.",
//         },
//         {
//           title: "RTE Management",
//           icon: <FaShieldAlt />,
//           description:
//             "Maintain separate records for RTE students, generate reimbursement claims, and track government reimbursements.",
//         },
//         {
//           title: "Compliance Reporting",
//           icon: <FaFileAlt />,
//           description:
//             "Generate RTE compliance reports and monitor RTE quota fulfillment as per government regulations.",
//         },
//         {
//           title: "Online Payments",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Integrated payment gateway for online fee collection with automatic receipt generation.",
//         },
//       ],
//     },
//     library: {
//       title: "Librarian Panel",
//       icon: <FaBook />,
//       description:
//         "Complete library management system to maintain book inventory, handle lending, and track returns.",
//       features: [
//         {
//           title: "Book Inventory",
//           icon: <FaBook />,
//           description:
//             "Maintain comprehensive book inventory with ability to add, update, or remove books.",
//         },
//         {
//           title: "Issue & Return",
//           icon: <FaClipboardList />,
//           description:
//             "Issue books to students and staff, process returns, and track overdue books.",
//         },
//         {
//           title: "Fine Management",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Calculate and apply fines for late returns or damaged books.",
//         },
//         {
//           title: "Library Cards",
//           icon: <FaFileAlt />,
//           description:
//             "Generate and manage library cards for students and staff.",
//         },
//         {
//           title: "Usage Analytics",
//           icon: <FaChartLine />,
//           description:
//             "Generate reports on library usage patterns, popular books, and resource utilization.",
//         },
//         {
//           title: "Resource Tracking",
//           icon: <FaClipboardList />,
//           description:
//             "Track status of all library resources including availability, condition, and location.",
//         },
//       ],
//     },
//     inventory: {
//       title: "Inventory Management Panel",
//       icon: <FaClipboardList />,
//       description:
//         "Comprehensive system to track and manage all school assets, consumables, and resources.",
//       features: [
//         {
//           title: "Asset Tracking",
//           icon: <FaDesktop />,
//           description:
//             "Keep records of all school-owned items, including computers, projectors, lab tools, and furniture.",
//         },
//         {
//           title: "Stock Management",
//           icon: <FaClipboardList />,
//           description:
//             "Monitor consumable supplies like notebooks, pens, chalk, printer paper, and cleaning materials.",
//         },
//         {
//           title: "Procurement",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Ensure timely purchasing and replenishment of inventory with automated alerts.",
//         },
//         {
//           title: "Maintenance Scheduling",
//           icon: <FaCalendarAlt />,
//           description:
//             "Track maintenance needs for equipment like computers, laboratory tools, and sports gear.",
//         },
//         {
//           title: "Loss Prevention",
//           icon: <FaShieldAlt />,
//           description:
//             "Implement measures to prevent theft, misplacement, or damage to school assets.",
//         },
//         {
//           title: "Budget Control",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Manage expenses related to school supplies and ensure cost-effectiveness.",
//         },
//       ],
//     },
//     student: {
//       title: "Student Panel",
//       icon: <FaUserGraduate />,
//       description:
//         "Student-focused interface providing access to academic information, resources, and services.",
//       features: [
//         {
//           title: "Academic Access",
//           icon: <FaChalkboardTeacher />,
//           description:
//             "View attendance records, access study materials, submit homework, and check exam schedules.",
//         },
//         {
//           title: "Result Tracking",
//           icon: <FaFileAlt />,
//           description:
//             "Check results, download report cards, and view monthly progress reports.",
//         },
//         {
//           title: "Fee Management",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Pay fees online (for normal admission students) and download fee receipts.",
//         },
//         {
//           title: "Certificate Requests",
//           icon: <FaFileAlt />,
//           description:
//             "Request various certificates such as bonafide, character, and transfer certificates.",
//         },
//         {
//           title: "Library Services",
//           icon: <FaBook />,
//           description:
//             "Access library catalog, check book availability, and manage borrowed books.",
//         },
//         {
//           title: "Notifications",
//           icon: <FaBullhorn />,
//           description:
//             "Receive event notifications, exam schedules, and important announcements.",
//         },
//       ],
//     },
//     parent: {
//       title: "Parent Panel",
//       icon: <FaUserCog />,
//       description:
//         "Dedicated interface for parents to monitor their child's progress, attendance, and school activities.",
//       features: [
//         {
//           title: "Attendance Monitoring",
//           icon: <FaClipboardList />,
//           description:
//             "Receive daily attendance notifications and track attendance patterns.",
//         },
//         {
//           title: "Progress Tracking",
//           icon: <FaChartLine />,
//           description:
//             "Access monthly progress reports and track academic performance over time.",
//         },
//         {
//           title: "Fee Management",
//           icon: <FaMoneyBillWave />,
//           description:
//             "View and pay fees (for normal admission students) and access payment history.",
//         },
//         {
//           title: "School Communications",
//           icon: <FaBullhorn />,
//           description:
//             "Receive event notifications, exam schedules, and important announcements.",
//         },
//         {
//           title: "Transportation",
//           icon: <FaDesktop />,
//           description:
//             "View transportation details including routes, pick-up/drop-off times, and contact information.",
//         },
//         {
//           title: "Document Access",
//           icon: <FaFileAlt />,
//           description:
//             "Download certificates, view report cards, and access other important documents.",
//         },
//       ],
//     },
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   // Filter products by category
//   const filteredProducts =
//     activeCategory === "all"
//       ? products
//       : products.filter((product) => product.category === activeCategory);

//   return (
//     <ProductsContainer>
//       <Chatbot /> {/* Add the Chatbot component */}
//       <WhatsAppButton
//         href="https://wa.me/9408534684"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaWhatsapp />
//       </WhatsAppButton>
//       <ThemeToggle darkMode={darkMode} onClick={toggleTheme}>
//         {darkMode ? <MdLightMode /> : <MdDarkMode />}
//       </ThemeToggle>
//       {/* <SectionHeading
//         subHeading="Our Solutions"
//         heading="Innovative Products"
//         description="Explore our range of software products designed to solve specific business challenges and drive digital transformation."
//       /> */}
//       {/* Featured Product */}
//       {/* <Section id="featured-product" padding="0">
//         <SectionHeading
//           subHeading="Featured Product"
//           heading="SkoolVriksh"
//           description="Our flagship multi-tenant school management system trusted by hundreds of educational institutions"
//         />
//         <FeaturedProduct>
//           <FeaturedProductImage>
//             <img src={mobileImage} alt="SkoolVriksh Dashboard" />
//           </FeaturedProductImage>
//           <FeaturedProductContent>
//             <h3>Transform Your School Management</h3>
//             <p>
//               SkoolVriksh is a comprehensive multi-tenant school management
//               system designed to streamline administrative tasks and enhance
//               communication between administrators, teachers, students, and
//               parents. Our solution helps educational institutions digitize
//               processes, reduce paperwork, and focus on what matters most -
//               education.
//             </p>
//             <ProductFeatures>
//               <li>
//                 <FaCheckCircle /> Multi-Tenant Architecture with Secure Data
//                 Isolation
//               </li>
//               <li>
//                 <FaCheckCircle /> Comprehensive Role-Based Access Control
//               </li>
//               <li>
//                 <FaCheckCircle /> RTE Compliance Management & Reporting
//               </li>
//               <li>
//                 <FaCheckCircle /> Advanced Fee Management with Payment Gateway
//               </li>
//               <li>
//                 <FaCheckCircle /> Custom Admission Form System
//               </li>
//             </ProductFeatures>
//           </FeaturedProductContent>
//         </FeaturedProduct>



//       </Section> */}
//       {/* Featured Product */}
//       <Section id="featured-product" padding="0">
//         <SectionHeading
//           subHeading="Featured Product"
//           heading="SkoolVriksh"
//           description="Our flagship multi-tenant school management system trusted by hundreds of educational institutions"
//         />
//         <FeaturedProduct>
//           <FeaturedProductImage>
//             <img src={mobileImage} alt="SkoolVriksh Dashboard" />
//           </FeaturedProductImage>
//           <FeaturedProductContent>
//             <h3>Transform Your School Management</h3>
//             <p>
//               SkoolVriksh is a comprehensive multi-tenant school management
//               system designed to streamline administrative tasks and enhance
//               communication between administrators, teachers, students, and
//               parents. Our solution helps educational institutions digitize
//               processes, reduce paperwork, and focus on what matters most -
//               education.
//             </p>
//             <ProductFeatures>
//               <li>
//                 <FaCheckCircle /> Multi-Tenant Architecture with Secure Data
//                 Isolation
//               </li>
//               <li>
//                 <FaCheckCircle /> Comprehensive Role-Based Access Control
//               </li>
//               <li>
//                 <FaCheckCircle /> RTE Compliance Management & Reporting
//               </li>
//               <li>
//                 <FaCheckCircle /> Advanced Fee Management with Payment Gateway
//               </li>
//               <li>
//                 <FaCheckCircle /> Custom Admission Form System
//               </li>
//             </ProductFeatures>
//           </FeaturedProductContent>
//         </FeaturedProduct>
//       </Section>
//       {/* All Products */}
//       <Section id="all-products" padding="0">
//         <SectionHeading
//           subHeading="Product Portfolio"
//           heading="Our Software Solutions"
//           description="We develop industry-specific solutions to address unique business challenges"
//         />

//         <ProductsGrid
//           as={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} variants={itemVariants}>
//               <ProductImage>
//                 <img
//                   src={product.id === 1 ? mobileImage : deskImage}
//                   alt={product.title}
//                 />
//                 {product.badge && (
//                   <ProductBadge type={product.badge}>
//                     {product.badge}
//                   </ProductBadge>
//                 )}
//               </ProductImage>
//               <ProductContent>
//                 <ProductTitle>{product.title}</ProductTitle>
//                 <ProductDescription>{product.description}</ProductDescription>
//                 <ProductFeatures>
//                   {product.features.map((feature, index) => (
//                     <li key={index}>
//                       <FaCheckCircle size={14} /> {feature}
//                     </li>
//                   ))}
//                 </ProductFeatures>
//                 <ProductActions></ProductActions>
//               </ProductContent>
//             </ProductCard>
//           ))}
//         </ProductsGrid>
//       </Section>
//       {/* Module Details Section */}
//       <ModuleDetailsSection>
//         <SectionHeading
//           subHeading="SkoolVriksh System Architecture"
//           heading="Comprehensive Module System"
//           description="Our multi-tenant school management system features specialized modules for different user roles"
//         />

//         <ModuleTabs>
//           {Object.keys(modules).map((key) => (
//             <ModuleTab
//               key={key}
//               active={activeModule === key}
//               onClick={() => setActiveModule(key)}
//             >
//               {modules[key].icon} {modules[key].title}
//             </ModuleTab>
//           ))}
//         </ModuleTabs>

//         <ModuleContent>
//           <h3>
//             {modules[activeModule].icon} {modules[activeModule].title}
//           </h3>
//           <p>{modules[activeModule].description}</p>

//           <FeatureGrid>
//             {modules[activeModule].features.map((feature, index) => (
//               <FeatureCard key={index}>
//                 <h4>
//                   {feature.icon} {feature.title}
//                 </h4>
//                 <p>{feature.description}</p>
//               </FeatureCard>
//             ))}
//           </FeatureGrid>
//         </ModuleContent>
//       </ModuleDetailsSection>
//       {/* Product Comparison */}
//       <ComparisonSection>
//         <SectionHeading
//           subHeading="System Capabilities"
//           heading="SkoolVriksh Features"
//           description="Comprehensive features based on our multi-tenant architecture"
//         />

//         <ComparisonTable>
//           <table>
//             <thead>
//               <tr>
//                 <th>Features</th>
//                 <th>SkoolVriksh</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Multi-Tenant Architecture</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Role-Based Access Control</td>
//                 <td>✓</td>
//               </tr>
//               <tr className="highlight">
//                 <td>RTE Compliance Management</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Custom Admission Forms</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Fee Management & Payment Gateway</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Exam & Result Management</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Attendance Tracking System</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Library Management</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Inventory Management</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Trusty Board Management</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Mobile Application Access</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Document Generation System</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>24/7 Support</td>
//                 <td>✓</td>
//               </tr>
//             </tbody>
//           </table>
//         </ComparisonTable>
//       </ComparisonSection>
//       {/* Testimonial */}
//       <TestimonialSection>
//         <SectionHeading
//           subHeading="Customer Story"
//           heading="What Our Clients Say"
//           description=""
//         />

//         <TestimonialQuote>
//           "Implementing SkoolVriksh has transformed how we manage our school
//           operations. The multi-tenant architecture ensures our data remains
//           secure while giving us complete control. The RTE compliance features
//           have been especially valuable, helping us meet all regulatory
//           requirements effortlessly. The administrative burden has reduced
//           significantly, and the communication between trustees, teachers,
//           students, and parents has never been better."
//         </TestimonialQuote>

//         <TestimonialAuthor>
//           <h4>Rajesh Sharma</h4>
//           <p>Principal, Sardar Patel School Ahmedabad</p>
//         </TestimonialAuthor>
//       </TestimonialSection>
//       {/* CTA Section */}
//       <CTASection>
//         <CTATitle>Ready to Transform Your School Management?</CTATitle>
//         <CTADescription>
//           Discover how SkoolVriksh can streamline your administrative
//           operations, enhance communication, and ensure RTE compliance while
//           providing a better experience for students, parents, and staff.
//         </CTADescription>
//         <Link to="/contact">
//           <Button
//             as="span"
//             size="large"
//             style={{ backgroundColor: "#fff", color: "#000" }}
//           >
//             Schedule a Consultation
//           </Button>
//         </Link>
//       </CTASection>
//     </ProductsContainer>
//   );
// };

// export default ProductsPage;



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaServer,
  FaMobile,
  FaDesktop,
  FaShieldAlt,
  FaChartLine,
  FaUserCog,
  FaUserGraduate,
  FaUserTie,
  FaMoneyBillWave,
  FaBook,
  FaClipboardList,
  FaCalendarAlt,
  FaBullhorn,
  FaFileAlt,
  FaChalkboardTeacher,
  FaWhatsapp,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

// Components (Assuming these are defined elsewhere)
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import SectionHeading from "../components/common/SectionHeading";
import FloatingActionButtons from "../components/common/FloatingActionButtons";

// Import sample product images (replace with your actual images)
import mobileImage from "../assets/images/lapimg.png";
import deskImage from "../assets/images/desimg.png";

// Theme definitions using the provided palette
// Palette: 0D1B2A, 1B263B, 415A77, 778DA9, E0E1DD
const lightTheme = {
  background: "#F9FAFB",
  text: "#374151",
  secondaryText: "#6B7280",
  cardBackground: "#FFFFFF",
  secondaryBackground: "#F3F4F6",
  accent: "#2563EB",
  accentHover: "#1D4ED8",
  shadow: "rgba(0, 0, 0, 0.08)",
  gradient: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
  buttonText: "#FFFFFF",
  buttonBackground: "#2563EB",
  border: "#E5E7EB",
  tableHighlight: "rgba(37, 99, 235, 0.12)",
  iconColor: "#2563EB",
};

const darkTheme = {
  background: "#0D1B2A",
  text: "#E0E1DD",
  secondaryText: "#778DA9",
  cardBackground: "#1B263B",
  secondaryBackground: "#0D1B2A",
  accent: "#778DA9",
  accentHover: "#A4B3C7",
  shadow: "rgba(0, 0, 0, 0.4)",
  gradient: "linear-gradient(135deg, #0D1B2A 0%, #1B263B 100%)",
  buttonText: "#0D1B2A",
  buttonBackground: "#778DA9",
  border: "#2A3A4A",
  tableHighlight: "rgba(119, 141, 169, 0.15)",
  iconColor: "#778DA9",
};

// Styled Components with improved dark mode visibility
const ProductsContainer = styled.div`
  padding: 6rem 2rem;
  width: 100%;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: relative;
  min-height: 100vh;
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    padding: 4rem 1rem;
  }
`;

const ProductCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

const CategoryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${({ active, theme }) => (active ? theme.accent : theme.secondaryBackground)};
  color: ${({ active, theme }) => (active ? theme.buttonText : theme.text)};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active, theme }) => (active ? theme.accentHover : theme.border)};
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedProduct = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 15px 30px ${({ theme }) => theme.shadow};
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px ${({ theme }) => theme.shadow};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedProductImage = styled.div`
  background: ${({ theme }) => theme.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 10px 20px ${({ theme }) => theme.shadow};
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.03);
    }
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const FeaturedProductContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.secondaryText};
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: clamp(1rem, 2vw, 1.1rem);
  }

  @media (max-width: 640px) {
    padding: 2rem;
  }
`;

const ProductCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 10px 20px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px ${({ theme }) => theme.shadow};
  }
`;

const ProductImage = styled.div`
  height: auto;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;

  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    border-radius: 1%;
  }

  &:hover img {
    transform: scale(1.02);
  }

  @media (max-width: 640px) {
    height: 200px;
  }
`;

const ProductBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme, type }) =>
    type === "new" ? "#10b981" : type === "popular" ? theme.accent : "#000"};
  color: ${({ theme }) => theme.buttonText};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 2;
`;

const ProductContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h3`
  font-size: clamp(1.3rem, 2.5vw, 1.5rem);
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
`;

const ProductDescription = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: clamp(0.9rem, 2vw, 1rem);
  flex: 1;
`;

const ProductFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem 1.25rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  li {
    display: flex;
    align-items: center;
    margin: 0;
    color: ${({ theme }) => theme.secondaryText};
    font-size: clamp(0.9rem, 2vw, 0.95rem);
    line-height: 1.6;

    svg {
      color: ${({ theme }) => theme.iconColor};
      margin-right: 0.6rem;
      font-size: 1rem;
      flex-shrink: 0;
    }
  }
`;

const ComparisonSection = styled.div`
  margin-top: 5rem;
  padding: 3rem;
  background: ${({ theme }) => theme.secondaryBackground};
  border-radius: 1.5rem;
  box-shadow: 0 5px 15px ${({ theme }) => theme.shadow};

  @media (max-width: 640px) {
    padding: 2rem 1rem;
  }
`;

const ComparisonTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  overflow-x: auto;
  margin: 2rem auto 0;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 1rem;
  box-shadow: 0 5px 15px ${({ theme }) => theme.shadow};

  table {
    width: 100%;
    min-width: 820px;
    border-collapse: separate;
    border-spacing: 0;

    th,
    td {
      padding: 1rem;
      text-align: center;
      border-bottom: 1px solid ${({ theme }) => theme.border};
      font-size: clamp(0.85rem, 2vw, 0.95rem);
    }

    th {
      background: ${({ theme }) => theme.accent};
      color: ${({ theme }) => theme.buttonText};
      font-weight: 600;
    }

    th:first-child {
      text-align: left;
      background: ${({ theme }) => theme.accentHover};
    }

    td:first-child {
      text-align: left;
      font-weight: 500;
      color: ${({ theme }) => theme.text};
    }

    tr:nth-child(even) td {
      background: ${({ theme }) => theme.gray};
    }
    tr:nth-child(odd) td {
      background: ${({ theme }) => theme.cardBackground};
    }

    tr:hover td {
      background: ${({ theme }) => theme.tableHighlight};
    }

    td:not(:first-child) {
      color: #10b981;
      font-weight: 600;
    }
  }
`;

const TestimonialSection = styled.div`
  margin-top: 5rem;
  background: ${({ theme }) => theme.gradient};
  padding: 4rem 2rem;
  border-radius: 1.5rem;
  text-align: center;
  box-shadow: 0 10px 20px ${({ theme }) => theme.shadow};

  @media (max-width: 640px) {
    padding: 3rem 1rem;
  }
`;

const TestimonialQuote = styled.div`
  max-width: 900px;
  margin: 0 auto;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  line-height: 1.8;
  font-style: italic;
  color: ${({ theme }) => (theme.mode === 'light' ? '#E5E7EB' : theme.text)};
  position: relative;

  &:before,
  &:after {
    content: '"';
    font-size: clamp(3rem, 5vw, 4rem);
    color: ${({ theme }) => (theme.mode === 'light' ? '#A4B3C7' : theme.accent)};
    opacity: 0.3;
    position: absolute;
    font-family: "Georgia", serif;
  }

  &:before {
    top: -2rem;
    left: -1.5rem;
  }

  &:after {
    bottom: -3rem;
    right: -1.5rem;
  }
`;

const TestimonialAuthor = styled.div`
  margin-top: 2rem;

  h4 {
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    color: ${({ theme }) => (theme.mode === 'light' ? '#E5E7EB' : theme.text)};
    margin-bottom: 0.5rem; 
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => (theme.mode === 'light' ? '#E0E1DD' : theme.secondaryText)};
    font-size: clamp(0.9rem, 2vw, 1rem);
  }
`;

const CTASection = styled.div`
  background: ${({ theme }) => theme.gradient};
  padding: 4rem 2rem;
  border-radius: 1.5rem;
  text-align: center;
  margin-top: 5rem;
  box-shadow: 0 15px 30px ${({ theme }) => theme.shadow};
  position: relative;

  @media (max-width: 640px) {
    padding: 3rem 1rem;
  }
`;

const CTATitle = styled.h2`
  color: ${({ theme }) => theme.buttonText};
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const CTADescription = styled.p`
  color: ${({ theme }) => theme.buttonText};
  max-width: 800px;
  margin: 0 auto 2rem;
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.7;
`;

const ModuleDetailsSection = styled.div`
  margin: 5rem auto;
  width: 70%;
`;

const ModuleTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  justify-items: center;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(170px, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(160px, 1fr));
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ModuleTab = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${({ active, theme }) => (active ? theme.accent : theme.secondaryBackground)};
  color: ${({ active, theme }) => (active ? theme.buttonText : theme.text)};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 1.1rem;
    color: ${({ active, theme }) => (active ? theme.buttonText : theme.iconColor)};
  }

  &:hover {
    background: ${({ active, theme }) => (active ? theme.accentHover : theme.border)};
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
`;

const ModuleContent = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 10px 20px ${({ theme }) => theme.shadow};
  

  h3 {
    font-size: clamp(1.5rem, 2.5vw, 1.8rem);
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;

    svg {
      color: ${({ theme }) => theme.iconColor};
    }
  }

  p {
    color: ${({ theme }) => theme.secondaryText};
    margin-bottom: 2rem;
    line-height: 1.8;
    font-size: clamp(1rem, 2vw, 1.1rem);
  }
`;

const FeatureGrid = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => theme.secondaryBackground};
  padding: 1.5rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
  border-left: 4px solid ${({ theme }) => theme.accent};

  h4 {
    font-size: 1.15rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;

    svg {
      color: ${({ theme }) => theme.iconColor};
    }
  }

  p {
    color: ${({ theme }) => theme.secondaryText};
    font-size: 0.95rem;
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-5px);
    background: ${({ theme }) => theme.cardBackground};
    box-shadow: 0 10px 20px ${({ theme }) => theme.shadow};
  }
`;

const FixedButtonsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 1rem;
  z-index: 1000;
`;

const WhatsAppButton = styled.a`
  background: #25d366;
  color: white;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px ${({ theme }) => theme.shadow};
  }
`;

const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.border};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  cursor: pointer;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.secondaryBackground};
    transform: scale(1.1);
    box-shadow: 0 6px 16px ${({ theme }) => theme.shadow};
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductsPage = () => {
  useEffect(() => {
    document.title = "Our Products - CodeNiche SoftStudio";
    window.scrollTo(0, 0);
  }, []);

  const [activeModule, setActiveModule] = useState("admin");
  const [activeCategory, setActiveCategory] = useState("all");
  const { mode } = useTheme();
  const theme = mode === "light" ? lightTheme : darkTheme;

  const products = [
    {
      id: 1,
      title: "SkoolVriksh",
      description:
        "A comprehensive school management system with multi-tenant architecture designed to streamline administrative tasks and enhance communication between administrators, teachers, students, and parents.",
      image: mobileImage,
      features: [
        "Multi-Tenant Architecture",
        "Comprehensive User Roles",
        "RTE Compliance",
        "Fee Management",
        "Real-time Notifications",
        "Attendance Tracking",
        "Fee Payment",
        "Academic Progress",
        "Custom Fee Categories",
        "RTE Management",
        "Payment Gateway",
        "Fee Reports",
      ],
      category: "education",
      badge: "popular",
    },
  ];

  const modules = {
    admin: {
      title: "School Admin Panel",
      icon: <FaUserCog />,
      description:
        "Comprehensive administrative control for school principals and administrators to manage all aspects of the school operation.",
      features: [
        {
          title: "User Management",
          icon: <FaUserCog />,
          description:
            "Register and manage class teachers, clerks, librarians, fee management staff, parents, and trustees with role-based permissions.",
        },
        {
          title: "Academic Management",
          icon: <FaChalkboardTeacher />,
          description:
            "Create customizable classes, set class capacity, define divisions, assign class teachers, and track RTE seat allocation.",
        },
        {
          title: "Attendance System",
          icon: <FaClipboardList />,
          description:
            "Monitor attendance for students, teachers, and staff with daily, weekly, monthly, and yearly reports.",
        },
        {
          title: "Examination Management",
          icon: <FaFileAlt />,
          description:
            "Create exam schedules, generate seating arrangements, manage results, and produce report cards.",
        },
        {
          title: "Announcement System",
          icon: <FaBullhorn />,
          description:
            "Publish school-wide announcements targeted to specific user groups including teachers, students, parents, staff, and trustees.",
        },
        {
          title: "Trusty Management",
          icon: <FaUserTie />,
          description:
            "Create and manage Trusty Panel accounts, define roles and permissions, schedule board meetings, and maintain meeting minutes.",
        },
      ],
    },
    trusty: {
      title: "Trusty Panel",
      icon: <FaUserTie />,
      description:
        "Dedicated access for school trustees to monitor financial, academic, and operational aspects of the institution.",
      features: [
        {
          title: "Financial Oversight",
          icon: <FaMoneyBillWave />,
          description:
            "View school financial reports, fee records details, and review annual budgets and expenditure.",
        },
        {
          title: "Admission Monitoring",
          icon: <FaUserGraduate />,
          description:
            "Monitor admission statistics and RTE admission compliance to ensure proper implementation of policies.",
        },
        {
          title: "Academic Oversight",
          icon: <FaChalkboardTeacher />,
          description:
            "Access academic performance metrics to ensure educational quality and standards.",
        },
        {
          title: "Infrastructure Development",
          icon: <FaDesktop />,
          description:
            "Oversee school infrastructure development projects and track their progress.",
        },
        {
          title: "Meeting Management",
          icon: <FaCalendarAlt />,
          description:
            "Access board meeting schedules, attend scheduled meetings, and review meeting minutes.",
        },
        {
          title: "Inventory Oversight",
          icon: <FaClipboardList />,
          description:
            "View and monitor inventory management activities and asset tracking.",
        },
      ],
    },
    clerk: {
      title: "Clerk Panel",
      icon: <FaClipboardList />,
      description:
        "Streamlined interface for administrative staff to handle admissions, records, and certificate management.",
      features: [
        {
          title: "Admission Management",
          icon: <FaUserGraduate />,
          description:
            "Process new admissions with separate workflows for RTE and normal admissions.",
        },
        {
          title: "Document Generation",
          icon: <FaFileAlt />,
          description:
            "Generate GR numbers and issue certificates such as bonafide, leaving, and transfer certificates.",
        },
        {
          title: "RTE Compliance",
          icon: <FaShieldAlt />,
          description:
            "Verify RTE eligibility documents, process admissions without fees, and mark students as RTE in the system.",
        },
        {
          title: "Fee Processing",
          icon: <FaMoneyBillWave />,
          description:
            "Calculate applicable admission fees for normal admissions and process fee payments.",
        },
        {
          title: "Admission Workflow",
          icon: <FaClipboardList />,
          description:
            "Manage the complete admission process from application to class allocation and parent notification.",
        },
        {
          title: "Student Records",
          icon: <FaFileAlt />,
          description:
            "Maintain comprehensive student records including personal information, academic history, and document status.",
        },
      ],
    },
    fee: {
      title: "Fee Management Panel",
      icon: <FaMoneyBillWave />,
      description:
        "Comprehensive fee management system with specialized handling for both regular students and RTE beneficiaries.",
      features: [
        {
          title: "Fee Categories",
          icon: <FaClipboardList />,
          description:
            "Define various fee categories including school fees, computer fees, transportation fees, examination fees, and more.",
        },
        {
          title: "Payment Tracking",
          icon: <FaMoneyBillWave />,
          description:
            "Track payments, generate receipts, manage pending dues, and apply late fees when applicable.",
        },
        {
          title: "Discount Management",
          icon: <FaMoneyBillWave />,
          description:
            "Process discounts and special fee arrangements for eligible students.",
        },
        {
          title: "RTE Management",
          icon: <FaShieldAlt />,
          description:
            "Maintain separate records for RTE students, generate reimbursement claims, and track government reimbursements.",
        },
        {
          title: "Compliance Reporting",
          icon: <FaFileAlt />,
          description:
            "Generate RTE compliance reports and monitor RTE quota fulfillment as per government regulations.",
        },
        {
          title: "Online Payments",
          icon: <FaMoneyBillWave />,
          description:
            "Integrated payment gateway for online fee collection with automatic receipt generation.",
        },
      ],
    },
    library: {
      title: "Librarian Panel",
      icon: <FaBook />,
      description:
        "Complete library management system to maintain book inventory, handle lending, and track returns.",
      features: [
        {
          title: "Book Inventory",
          icon: <FaBook />,
          description:
            "Maintain comprehensive book inventory with ability to add, update, or remove books.",
        },
        {
          title: "Issue & Return",
          icon: <FaClipboardList />,
          description:
            "Issue books to students and staff, process returns, and track overdue books.",
        },
        {
          title: "Fine Management",
          icon: <FaMoneyBillWave />,
          description:
            "Calculate and apply fines for late returns or damaged books.",
        },
        {
          title: "Library Cards",
          icon: <FaFileAlt />,
          description:
            "Generate and manage library cards for students and staff.",
        },
        {
          title: "Usage Analytics",
          icon: <FaChartLine />,
          description:
            "Generate reports on library usage patterns, popular books, and resource utilization.",
        },
        {
          title: "Resource Tracking",
          icon: <FaClipboardList />,
          description:
            "Track status of all library resources including availability, condition, and location.",
        },
      ],
    },
    inventory: {
      title: "Inventory Management Panel",
      icon: <FaClipboardList />,
      description:
        "Comprehensive system to track and manage all school assets, consumables, and resources.",
      features: [
        {
          title: "Asset Tracking",
          icon: <FaDesktop />,
          description:
            "Keep records of all school-owned items, including computers, projectors, lab tools, and furniture.",
        },
        {
          title: "Stock Management",
          icon: <FaClipboardList />,
          description:
            "Monitor consumable supplies like notebooks, pens, chalk, printer paper, and cleaning materials.",
        },
        {
          title: "Procurement",
          icon: <FaMoneyBillWave />,
          description:
            "Ensure timely purchasing and replenishment of inventory with automated alerts.",
        },
        {
          title: "Maintenance Scheduling",
          icon: <FaCalendarAlt />,
          description:
            "Track maintenance needs for equipment like computers, laboratory tools, and sports gear.",
        },
        {
          title: "Loss Prevention",
          icon: <FaShieldAlt />,
          description:
            "Implement measures to prevent theft, misplacement, or damage to school assets.",
        },
        {
          title: "Budget Control",
          icon: <FaMoneyBillWave />,
          description:
            "Manage expenses related to school supplies and ensure cost-effectiveness.",
        },
      ],
    },
    student: {
      title: "Student Panel",
      icon: <FaUserGraduate />,
      description:
        "Student-focused interface providing access to academic information, resources, and services.",
      features: [
        {
          title: "Academic Access",
          icon: <FaChalkboardTeacher />,
          description:
            "View attendance records, access study materials, submit homework, and check exam schedules.",
        },
        {
          title: "Result Tracking",
          icon: <FaFileAlt />,
          description:
            "Check results, download report cards, and view monthly progress reports.",
        },
        {
          title: "Fee Management",
          icon: <FaMoneyBillWave />,
          description:
            "Pay fees online (for normal admission students) and download fee receipts.",
        },
        {
          title: "Certificate Requests",
          icon: <FaFileAlt />,
          description:
            "Request various certificates such as bonafide, character, and transfer certificates.",
        },
        {
          title: "Library Services",
          icon: <FaBook />,
          description:
            "Access library catalog, check book availability, and manage borrowed books.",
        },
        {
          title: "Notifications",
          icon: <FaBullhorn />,
          description:
            "Receive event notifications, exam schedules, and important announcements.",
        },
      ],
    },
    parent: {
      title: "Parent Panel",
      icon: <FaUserCog />,
      description:
        "Dedicated interface for parents to monitor their child's progress, attendance, and school activities.",
      features: [
        {
          title: "Attendance Monitoring",
          icon: <FaClipboardList />,
          description:
            "Receive daily attendance notifications and track attendance patterns.",
        },
        {
          title: "Progress Tracking",
          icon: <FaChartLine />,
          description:
            "Access monthly progress reports and track academic performance over time.",
        },
        {
          title: "Fee Management",
          icon: <FaMoneyBillWave />,
          description:
            "View and pay fees (for normal admission students) and access payment history.",
        },
        {
          title: "School Communications",
          icon: <FaBullhorn />,
          description:
            "Receive event notifications, exam schedules, and important announcements.",
        },
        {
          title: "Transportation",
          icon: <FaDesktop />,
          description:
            "View transportation details including routes, pick-up/drop-off times, and contact information.",
        },
        {
          title: "Document Access",
          icon: <FaFileAlt />,
          description:
            "Download certificates, view report cards, and access other important documents.",
        },
      ],
    },
  };

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <ThemeProvider theme={theme}>
      <ProductsContainer>
        <FloatingActionButtons showChatbot={true} showWhatsApp={true} />

        <Section id="featured-product" padding="0">
          <SectionHeading
            color={mode === "dark" ? "#FFFFFF" : "#023e8a"}
            subColor={mode === "dark" ? "#E0E1DD" : "#0077b6"}
            subHeading="Featured Product"
            heading="SkoolVriksh"
            description="Our flagship multi-tenant school management system trusted by hundreds of educational institutions"
          />
          <FeaturedProduct>
            <FeaturedProductImage>
              <img src={mobileImage} alt="SkoolVriksh Dashboard" />
            </FeaturedProductImage>
            <FeaturedProductContent>
              <h3>Transform Your School Management</h3>
              <p>
                SkoolVriksh is a comprehensive multi-tenant school management
                system designed to streamline administrative tasks and enhance
                communication between administrators, teachers, students, and
                parents. Our solution helps educational institutions digitize
                processes, reduce paperwork, and focus on what matters most -
                education.
              </p>
              <ProductFeatures>
                <li>
                  <FaCheckCircle /> Multi-Tenant Architecture with Secure Data
                  Isolation
                </li>
                <li>
                  <FaCheckCircle /> Comprehensive Role-Based Access Control
                </li>
                <li>
                  <FaCheckCircle /> RTE Compliance Management & Reporting
                </li>
                <li>
                  <FaCheckCircle /> Advanced Fee Management with Payment Gateway
                </li>
                <li>
                  <FaCheckCircle /> Custom Admission Form System
                </li>
              </ProductFeatures>
            </FeaturedProductContent>
          </FeaturedProduct>
        </Section>

        <Section id="all-products" padding="0" align="center">
          <SectionHeading
            color={mode === "dark" ? "#FFFFFF" : "#023e8a"}
            subColor={mode === "dark" ? "#E0E1DD" : "#0077b6"}
            subHeading="Product Portfolio"
            heading="Our Software Solutions"
            description="We develop industry-specific solutions to address unique business challenges"
          />
          <ProductsGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} variants={itemVariants}>
                <ProductImage>
                  <img
                    src={product.id === 1 ? mobileImage : deskImage}
                    alt={product.title}
                  />
                  {product.badge && (
                    <ProductBadge type={product.badge}>
                      {product.badge}
                    </ProductBadge>
                  )}
                </ProductImage>
                <ProductContent>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductDescription>{product.description}</ProductDescription>
          <ProductFeatures>
            {product.features.map((feature, index) => (
              <li key={index}>
                <FaCheckCircle size={14} /> {feature}
              </li>
            ))}
          </ProductFeatures>
                </ProductContent>
              </ProductCard>
            ))}
          </ProductsGrid>
        </Section>

        <ModuleDetailsSection>
          <SectionHeading
            color={mode === "dark" ? "#FFFFFF" : "#023e8a"}
            subColor={mode === "dark" ? "#E0E1DD" : "#0077b6"}
            subHeading="SkoolVriksh System Architecture"
            heading="Comprehensive Module System"
            description="Our multi-tenant school management system features specialized modules for different user roles"
          />
          <ModuleTabs>
            {Object.keys(modules).map((key) => (
              <ModuleTab
                key={key}
                active={activeModule === key}
                onClick={() => setActiveModule(key)}
              >
                {modules[key].icon} {modules[key].title}
              </ModuleTab>
            ))}
          </ModuleTabs>
          <ModuleContent>
            <h3>
              {modules[activeModule].icon} {modules[activeModule].title}
            </h3>
            <p>{modules[activeModule].description}</p>
            <FeatureGrid>
              {modules[activeModule].features.map((feature, index) => (
                <FeatureCard key={index}>
                  <h4>
                    {feature.icon} {feature.title}
                  </h4>
                  <p>{feature.description}</p>
                </FeatureCard>
              ))}
            </FeatureGrid>
          </ModuleContent>
        </ModuleDetailsSection>

        <ComparisonSection>
          <SectionHeading
            subHeading="System Capabilities"
            heading="SkoolVriksh Features"
            description="Comprehensive features based on our multi-tenant architecture"
            color={mode === "dark" ? "#FFFFFF" : "#023e8a"}
            subColor={mode === "dark" ? "#E0E1DD" : "#0077b6"}
          />
          <ComparisonTable>
            <table>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>SkoolVriksh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Multi-Tenant Architecture</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Role-Based Access Control</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>RTE Compliance Management</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Custom Admission Forms</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Fee Management & Payment Gateway</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Exam & Result Management</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Attendance Tracking System</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Library Management</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Inventory Management</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Trusty Board Management</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Mobile Application Access</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Document Generation System</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>24/7 Support</td>
                  <td>✓</td>
                </tr>
              </tbody>
            </table>
          </ComparisonTable>
        </ComparisonSection>

        <TestimonialSection>
          <SectionHeading
            subHeading="Customer Story"
            heading="What Our Clients Say"
            description=""
            color="white"
            subColor="#E0E1DD"
          />
          <TestimonialQuote>
            "Implementing SkoolVriksh has transformed how we manage our school
            operations. The multi-tenant architecture ensures our data remains
            secure while giving us complete control. The RTE compliance features
            have been especially valuable, helping us meet all regulatory
            requirements effortlessly."
          </TestimonialQuote>
          <TestimonialAuthor>
            <h4>Rajesh Sharma</h4>
            <p>Principal, Sardar Patel School Ahmedabad</p>
          </TestimonialAuthor>
        </TestimonialSection>

        {/* <CTASection>
          <CTATitle>Ready to Transform Your School Management?</CTATitle>
          <CTADescription>
            Discover how SkoolVriksh can streamline your administrative
            operations, enhance communication, and ensure RTE compliance while
            providing a better experience for students, parents, and staff.
          </CTADescription>
          <Link to="/contact">
            <Button
              as="span"
              size="large"
              style={{ backgroundColor: theme.buttonBackground, color: theme.buttonText }}
            >
              Schedule a Consultation
            </Button>
          </Link>
        </CTASection> */}
      </ProductsContainer>
    </ThemeProvider>
  );
};

export default ProductsPage;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import {
//   FaCheckCircle,
//   FaUserCog,
//   FaUserGraduate,
//   FaUserTie,
//   FaMoneyBillWave,
//   FaBook,
//   FaClipboardList,
//   FaCalendarAlt,
//   FaBullhorn,
//   FaFileAlt,
//   FaChalkboardTeacher,
//   FaWhatsapp,
//   FaComments,
// } from "react-icons/fa";
// import { MdLightMode, MdDarkMode } from "react-icons/md";

// // Components (Assuming these are defined in your project)
// import Section from "../components/common/Section";
// import Button from "../components/common/Button";
// import SectionHeading from "../components/common/SectionHeading";
// import Chatbot from "../components/common/Chatbot";

// // Import sample product images (replace with your actual images)
// import mobileImage from "../assets/images/lapimg.png";
// import deskImage from "../assets/images/desimg.png";

// // Theme configurations
// const themes = {
//   light: {
//     background: "#f7fafc",
//     text: "#1a202c",
//     textLight: "#4a5568",
//     lightGray: "#edf2f7",
//     border: "#e2e8f0",
//     white: "#ffffff",
//     shadow: "rgba(0, 0, 0, 0.1)",
//     accent: "#3182ce",
//     accentHover: "#2b6cb0",
//     breakpoints: {
//       sm: "640px",
//       md: "768px",
//       lg: "1024px",
//       xl: "1280px",
//     },
//   },
//   dark: {
//     background: "#1a202c",
//     text: "#e2e8f0",
//     textLight: "#a0aec0",
//     lightGray: "#2d3748",
//     border: "#4a5568",
//     white: "#2d3748",
//     shadow: "rgba(0, 0, 0, 0.5)",
//     accent: "#63b3ed",
//     accentHover: "#4299e1",
//     breakpoints: {
//       sm: "640px",
//       md: "768px",
//       lg: "1024px",
//       xl: "1280px",
//     },
//   },
// };

// // Styled Components
// const ProductsContainer = styled.div`
//   padding: clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem);
//   max-width: 1440px;
//   margin: 0 auto;
//   font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
//   background: ${props => props.theme.background};
//   color: ${props => props.theme.text};
//   min-height: 100vh;
//   position: relative;
// `;

// const HeroBanner = styled.div`
//  background: linear-gradient(135deg, ${props => props.theme.accent} 0%, ${props => props.theme.accentHover} 100%);
//   border-radius: 1.5rem;
//   padding: clamp(2rem, 6vw, 4rem);
//   margin-bottom: clamp(3rem, 8vw, 5rem);
//   text-align: center;
//   box-shadow: 0 8px 24px ${props => props.theme.shadow};
//   position: relative;
//   overflow: hidden;

//   &:before {
//     content: "";
//     position: absolute;
//     top: -50px;
//     right: -50px;
//     width: 200px;
//     height: 200px;
//     background: rgba(255, 255, 255, 0.2);
//     border-radius: 50%;
//     pointer-events: none;
//   }

//   h2 {
//     color: ${props => props.theme.white};
//     font-size: clamp(2rem, 5vw, 3rem);
//     font-weight: 800;
//     margin-bottom: 1rem;
//   }

//   p {
//     color: ${props => props.theme.white};
//     font-size: clamp(1rem, 2.5vw, 1.2rem);
//     max-width: 600px;
//     margin: 0 auto 2rem;
//     line-height: 1.6;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 2rem;
//   }
// `;

// const ButtonContainer = styled.div`
//   position: fixed;
//   bottom: 24px;
//   right: 24px;
//   display: flex;
//   gap: 12px;
//   z-index: 1000;

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     bottom: 16px;
//     right: 16px;
//     gap: 8px;
//   }
// `;

// const ActionButton = styled.button`
//   background: ${props => props.theme.white};
//   border: 2px solid ${props => props.theme.border};
//   border-radius: 50%;
//   width: 52px;
//   height: 52px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   box-shadow: 0 4px 12px ${props => props.theme.shadow};
//   transition: all 0.3s ease;

//   &:hover {
//     background: ${props => props.theme.accent};
//     border-color: ${props => props.theme.accent};
//     transform: translateY(-2px);
//     svg {
//       color: ${props => props.theme.white};
//     }
//   }

//   svg {
//     font-size: 24px;
//     color: ${props => props.theme.accent};
//     transition: color 0.3s ease;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     width: 44px;
//     height: 44px;
//     svg {
//       font-size: 20px;
//     }
//   }
// `;

// const WhatsAppButton = styled.a`
//   background: #25d366;
//   border: none;
//   border-radius: 50%;
//   width: 52px;
//   height: 52px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   box-shadow: 0 4px 12px ${props => props.theme.shadow};
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 16px rgba(37, 211, 102, 0.3);
//   }

//   svg {
//     font-size: 24px;
//     color: ${props => props.theme.white};
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     width: 44px;
//     height: 44px;
//     svg {
//       font-size: 20px;
//     }
//   }
// `;

// const ProductCategories = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;
//   justify-content: center;
//   margin: 2rem 0 clamp(2rem, 6vw, 3rem);

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     gap: 0.75rem;
//   }
// `;

// const CategoryButton = styled.button`
//   padding: 0.75rem 1.5rem;
//   background: ${({ active, theme }) =>
//     active
//       ? `linear-gradient(90deg, ${theme.accent}, ${theme.accentHover})`
//       : theme.lightGray};
//   color: ${({ active, theme }) => (active ? theme.white : theme.text)};
//   border: none;
//   border-radius: 30px;
//   font-weight: 600;
//   font-size: clamp(0.9rem, 2vw, 1rem);
//   cursor: pointer;
//   transition: all 0.3s ease;
//   box-shadow: 0 2px 8px ${props => props.theme.shadow};

//   &:hover {
//     background: linear-gradient(
//       90deg,
//       ${props => props.theme.accent},
//       ${props => props.theme.accentHover}
//     );
//     color: ${props => props.theme.white};
//     transform: translateY(-2px);
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 0.5rem 1rem;
//     font-size: 0.9rem;
//   }
// `;

// const ProductsGrid = styled(motion.div)`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: clamp(1.5rem, 4vw, 2rem);
//   margin-bottom: clamp(3rem, 8vw, 5rem);

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     grid-template-columns: 1fr;
//     gap: 1.5rem;
//   }
// `;

// const FeaturedProduct = styled(motion.div)`
//   background: ${props => props.theme.white};
//   border-radius: 1.25rem;
//   overflow: hidden;
//   box-shadow: 0 8px 20px ${props => props.theme.shadow};
//   margin-bottom: clamp(3rem, 8vw, 5rem);
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   transition: all 0.3s ease;

//   &:hover {
//     box-shadow: 0 12px 24px ${props => props.theme.shadow};
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FeaturedProductImage = styled.div`
//   background: ${props => props.theme.lightGray};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: clamp(2rem, 5vw, 3rem);

//   img {
//     max-width: 100%;
//     height: auto;
//     border-radius: 1rem;
//     box-shadow: 0 4px 12px ${props => props.theme.shadow};
//     transition: transform 0.4s ease;

//     &:hover {
//       transform: scale(1.04);
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 1.5rem;
//   }
// `;

// const FeaturedProductContent = styled.div`
//   padding: clamp(2rem, 5vw, 3rem);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   h3 {
//     font-size: clamp(1.8rem, 4vw, 2.2rem);
//     font-weight: 700;
//     margin-bottom: 1rem;
//     color: ${props => props.theme.text};
//     background: linear-gradient(
//       90deg,
//       ${props => props.theme.accent},
//       ${props => props.theme.accentHover}
//     );
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }

//   p {
//     color: ${props => props.theme.textLight};
//     font-size: clamp(1rem, 2.5vw, 1.1rem);
//     line-height: 1.8;
//     margin-bottom: 1.5rem;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 1.5rem;
//   }
// `;

// // const ProductCard = styled(motion.div)`
// //   background: ${props => props.theme.white};
// //   border-radius: 1.25rem;
// //   overflow: hidden;
// //   box-shadow: 0 6px 16px ${props => props.theme.shadow};
// //   transition: all 0.3s ease;
// //   display: flex;
// //   flex-direction: column;
// //   height: 100%;
// //   border: 1px solid ${props => props.theme.border};

// //   &:hover {
// //     transform: translateY(-4px);
// //     box-shadow: 0 10px 20px ${props => props.theme.shadow};
// //     border-color: ${props => props.theme.accent};
// //   }
// // `;

// const ProductCard = styled(motion.div)`
//   background: ${props => props.theme.white};
//   border-radius: 1.25rem;
//   overflow: hidden;
//   box-shadow: 0 6px 16px ${props => props.theme.shadow};
//   transition: all 0.3s ease;
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   border: 1px solid ${props => props.theme.border};

//   &:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 10px 20px ${props => props.theme.shadow};
//     border-color: ${props => props.theme.accent};
//   }
// `;

// const ProductImage = styled.div`
//   height: 200px;
//   overflow: hidden;
//   position: relative;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.5s ease;
//   }

//   &:hover img {
//     transform: scale(1.05);
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     height: 180px;
//   }
// `;

// const ProductBadge = styled.span`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   background: ${({ type, theme }) =>
//     type === "new" ? "#10b981" : type === "popular" ? theme.accent : theme.textLight};
//   color: ${props => props.theme.white};
//   padding: 0.4rem 0.9rem;
//   border-radius: 20px;
//   font-size: 0.8rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   box-shadow: 0 2px 6px ${props => props.theme.shadow};
// `;

// // const ProductContent = styled.div`
// //   padding: clamp(1.25rem, 3vw, 1.5rem);
// //   flex: 1;
// //   display: flex;
// //   flex-direction: column;
// // `;

// const ProductContent = styled.div`
//   padding: clamp(1.25rem, 3vw, 1.5rem);
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   background: ${props => props.theme.white};
//   color: ${props => props.theme.text};
// `;

// // const ProductTitle = styled.h3`
// //   font-size: clamp(1.4rem, 3vw, 1.6rem);
// //   font-weight: 700;
// //   margin-bottom: 0.75rem;
// //   color: ${props => props.theme.text};
// // `;

// const ProductTitle = styled.h3`
//   font-size: clamp(1.4rem, 3vw, 1.6rem);
//   font-weight: 700;
//   margin-bottom: 0.75rem;
//   color: ${props => props.theme.text};
// `;

// // const ProductDescription = styled.p`
// //   color: ${props => props.theme.textLight};
// //   font-size: clamp(0.9rem, 2vw, 1rem);
// //   line-height: 1.7;
// //   margin-bottom: 1.25rem;
// //   flex: 1;
// // `;

// const ProductDescription = styled.p`
//   color: ${props => props.theme.textLight};
//   font-size: clamp(0.9rem, 2vw, 1rem);
//   line-height: 1.7;
//   margin-bottom: 1.25rem;
//   flex: 1;
// `;

// // const ProductFeatures = styled.ul`
// //   list-style: none;
// //   padding: 0;
// //   margin-bottom: 1.5rem;

// //   li {
// //     display: flex;
// //     align-items: center;
// //     margin-bottom: 0.75rem;
// //     color: ${props => props.theme.text};
// //     font-size: clamp(0.85rem, 2vw, 0.95rem);

// //     svg {
// //       color: ${props => props.theme.accent};
// //       margin-right: 0.75rem;
// //       font-size: 1rem;
// //     }
// //   }
// // `;

// const ProductFeatures = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin-bottom: 1.5rem;

//   li {
//     display: flex;
//     align-items: center;
//     margin-bottom: 0.75rem;
//     color: ${props => props.theme.text};
//     font-size: clamp(0.85rem, 2vw, 0.95rem);

//     svg {
//       color: ${props => props.theme.accent};
//       margin-right: 0.75rem;
//       font-size: 1rem;
//     }
//   }
// `;

// const ProductActions = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: auto;

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     flex-direction: column;
//     gap: 0.75rem;
//   }
// `;

// // const ComparisonSection = styled(motion.div)`
// //   margin-top: clamp(3rem, 8vw, 5rem);
// //   padding: clamp(2rem, 5vw, 3rem);
// //   background: ${props => props.theme.lightGray};
// //   border-radius: 1.25rem;
// //   box-shadow: 0 6px 16px ${props => props.theme.shadow};

// //   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
// //     padding: 1.5rem;
// //   }
// // `;

// const ComparisonSection = styled(motion.div)`
//   margin-top: clamp(3rem, 8vw, 5rem);
//   padding: clamp(2rem, 5vw, 3rem);
//   background: ${props => props.theme.lightGray};
//   border-radius: 1.25rem;
//   box-shadow: 0 6px 16px ${props => props.theme.shadow};
//   color: ${props => props.theme.text};

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 1.5rem;
//   }
// `;


// // const ComparisonTable = styled.div`
// //   overflow-x: auto;
// //   margin-top: 1.5rem;

// //   table {
// //     width: 100%;
// //     min-width: 500px;
// //     border-collapse: separate;
// //     border-spacing: 0;
// //     border-radius: 1rem;
// //     overflow: hidden;
// //     background: ${props => props.theme.white};
// //     box-shadow: 0 4px 12px ${props => props.theme.shadow};

// //     th,
// //     td {
// //       padding: 1rem;
// //       text-align: center;
// //       border-bottom: 1px solid ${props => props.theme.border};
// //       font-size: clamp(0.85rem, 2vw, 0.95rem);
// //     }

// //     th {
// //       background: ${props => props.theme.accent};
// //       color: ${props => props.theme.white};
// //       font-weight: 600;
// //     }

// //     th:first-child {
// //       text-align: left;
// //       background: ${props => props.theme.accentHover};
// //     }

// //     td:first-child {
// //       text-align: left;
// //       font-weight: 500;
// //       color: ${props => props.theme.text};
// //     }

// //     tr:nth-child(even) {
// //       background: ${props => props.theme.lightGray};
// //     }

// //     tr:hover {
// //       background: ${props => props.theme.border};
// //     }

// //     .highlight {
// //       background: rgba(59, 130, 246, 0.1);
// //     }

// //     td:not(:first-child) {
// //       color: #10b981;
// //       font-weight: 600;
// //       font-size: 1rem;
// //     }
// //   }
// // `;

// const ComparisonTable = styled.div`
//   overflow-x: auto;
//   margin-top: 1.5rem;

//   table {
//     width: 100%;
//     min-width: 500px;
//     border-collapse: separate;
//     border-spacing: 0;
//     border-radius: 1rem;
//     overflow: hidden;
//     background: ${props => props.theme.white};
//     box-shadow: 0 4px 12px ${props => props.theme.shadow};
//     color: ${props => props.theme.text};

//     th,
//     td {
//       padding: 1rem;
//       text-align: center;
//       border-bottom: 1px solid ${props => props.theme.border};
//       font-size: clamp(0.85rem, 2vw, 0.95rem);
//     }

//     th {
//       background: ${props => props.theme.accent};
//       color: ${props => props.theme.white};
//       font-weight: 600;
//     }

//     th:first-child {
//       text-align: left;
//       background: ${props => props.theme.accentHover};
//     }

//     td:first-child {
//       text-align: left;
//       font-weight: 500;
//       color: ${props => props.theme.text};
//     }

//     tr:nth-child(even) {
//       background: ${props => props.theme.lightGray};
//     }

//     tr:hover {
//       background: ${props => props.theme.border};
//     }

//     .highlight {
//       background: rgba(59, 130, 246, 0.1);
//     }

//     td:not(:first-child) {
//       color: #10b981;
//       font-weight: 600;
//       font-size: 1rem;
//     }
//   }
// `;

// const TestimonialSection = styled(motion.div)`
//   margin-top: clamp(3rem, 8vw, 5rem);
//   padding: clamp(2rem, 5vw, 3rem);
//   background: linear-gradient(
//     135deg,
//     ${props => props.theme.lightGray} 0%,
//     ${props => props.theme.border} 100%
//   );
//   border-radius: 1.25rem;
//   text-align: center;
//   box-shadow: 0 6px 16px ${props => props.theme.shadow};

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 1.5rem;
//   }
// `;

// const TestimonialQuote = styled.blockquote`
//   max-width: 700px;
//   margin: 0 auto;
//   font-size: clamp(1.1rem, 2.5vw, 1.3rem);
//   line-height: 1.8;
//   font-style: italic;
//   color: ${props => props.theme.text};
//   position: relative;

//   &:before,
//   &:after {
//     content: '"';
//     font-size: clamp(2.5rem, 5vw, 3rem);
//     color: ${props => props.theme.accent};
//     opacity: 0.4;
//     position: absolute;
//     font-family: "Georgia", serif;
//   }

//   &:before {
//     top: -1.5rem;
//     left: -1rem;
//   }

//   &:after {
//     bottom: -2rem;
//     right: -1rem;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     font-size: 1rem;
//   }
// `;

// const TestimonialAuthor = styled.div`
//   margin-top: 1.5rem;

//   h4 {
//     font-size: clamp(1.1rem, 2.5vw, 1.2rem);
//     color: ${props => props.theme.text};
//     font-weight: 700;
//   }

//   p {
//     color: ${props => props.theme.textLight};
//     font-size: clamp(0.9rem, 2vw, 1rem);
//   }
// `;

// const CTASection = styled(motion.div)`
//   background: linear-gradient(135deg, ${props => props.theme.accent} 0%, ${props => props.theme.accentHover} 100%);
//   padding: clamp(2rem, 5vw, 3rem);
//   border-radius: 1.25rem;
//   text-align: center;
//   margin-top: clamp(3rem, 8vw, 5rem);
//   box-shadow: 0 8px 20px ${props => props.theme.shadow};
//   position: relative;
//   overflow: hidden;

//   &:before {
//     content: "";
//     position: absolute;
//     top: -40px;
//     right: -40px;
//     width: 150px;
//     height: 150px;
//     background: rgba(255, 255, 255, 0.15);
//     border-radius: 50%;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 1.5rem;
//   }
// `;

// const CTATitle = styled.h2`
//   color: ${props => props.theme.white};
//   font-size: clamp(1.8rem, 4vw, 2.2rem);
//   font-weight: 700;
//   margin-bottom: 1rem;
// `;

// const CTADescription = styled.p`
//   color: ${props => props.theme.white};
//   font-size: clamp(1rem, 2.5vw, 1.1rem);
//   max-width: 600px;
//   margin: 0 auto 1.5rem;
//   line-height: 1.7;
// `;

// const ModuleDetailsSection = styled(motion.div)`
//   margin: clamp(3rem, 8vw, 5rem) 0;
// `;

// const ModuleTabs = styled.nav`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;
//   margin-bottom: 2rem;
//   justify-content: center;

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     gap: 0.75rem;
//   }
// `;

// const ModuleTab = styled.button`
//   padding: 0.75rem 1.5rem;
//   background: ${({ active, theme }) =>
//     active
//       ? `linear-gradient(90deg, ${theme.accent}, ${theme.accentHover})`
//       : theme.lightGray};
//   color: ${({ active, theme }) => (active ? theme.white : theme.text)};
//   border: none;
//   border-radius: 12px;
//   font-weight: 600;
//   font-size: clamp(0.9rem, 2vw, 1rem);
//   cursor: pointer;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   box-shadow: 0 2px 8px ${props => props.theme.shadow};

//   svg {
//     font-size: 1rem;
//   }

//   &:hover {
//     background: linear-gradient(
//       90deg,
//       ${props => props.theme.accent},
//       ${props => props.theme.accentHover}
//     );
//     color: ${props => props.theme.white};
//     transform: translateY(-2px);
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     padding: 0.5rem 1rem;
//     font-size: 0.9rem;
//   }
// `;

// // const ModuleContent = styled.div`
// //   background: ${props => props.theme.white};
// //   border-radius: 1.25rem;
// //   padding: clamp(1.5rem, 4vw, 2rem);
// //   box-shadow: 0 6px 16px ${props => props.theme.shadow};
// //   border-left: 4px solid ${props => props.theme.accent};

// //   h3 {
// //     font-size: clamp(1.6rem, 3vw, 1.8rem);
// //     font-weight: 700;
// //     margin-bottom: 1rem;
// //     color: ${props => props.theme.text};
// //     display: flex;
// //     align-items: center;
// //     gap: 0.5rem;
// //   }

// //   p {
// //     color: ${props => props.theme.textLight};
// //     font-size: clamp(1rem, 2vw, 1.1rem);
// //     line-height: 1.7;
// //     margin-bottom: 1.5rem;
// //   }
// // `;

// const ModuleContent = styled.div`
//   background: ${props => props.theme.white};
//   border-radius: 1.25rem;
//   padding: clamp(1.5rem, 4vw, 2rem);
//   box-shadow: 0 6px 16px ${props => props.theme.shadow};
//   border-left: 4px solid ${props => props.theme.accent};
//   color: ${props => props.theme.text};

//   h3 {
//     font-size: clamp(1.6rem, 3vw, 1.8rem);
//     font-weight: 700;
//     margin-bottom: 1rem;
//     color: ${props => props.theme.text};
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//   }

//   p {
//     color: ${props => props.theme.textLight};
//     font-size: clamp(1rem, 2vw, 1.1rem);
//     line-height: 1.7;
//     margin-bottom: 1.5rem;
//   }
// `;

// const FeatureGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: clamp(1rem, 3vw, 1.5rem);
//   margin-top: 1.5rem;
// `;

// // const FeatureCard = styled(motion.div)`
// //   background: ${props => props.theme.white};
// //   padding: clamp(1rem, 3vw, 1.25rem);
// //   border-radius: 1rem;
// //   box-shadow: 0 4px 12px ${props => props.theme.shadow};
// //   transition: all 0.3s ease;
// //   border-left: 3px solid ${props => props.theme.accent};

// //   h4 {
// //     font-size: clamp(1rem, 2vw, 1.1rem);
// //     font-weight: 600;
// //     margin-bottom: 0.75rem;
// //     color: ${props => props.theme.text};
// //     display: flex;
// //     align-items: center;
// //     gap: 0.5rem;
// //   }

// //   p {
// //     color: ${props => props.theme.textLight};
// //     font-size: clamp(0.85rem, 2vw, 0.95rem);
// //     line-height: 1.6;
// //   }

// //   &:hover {
// //     transform: translateY(-4px);
// //     box-shadow: 0 8px 16px ${props => props.theme.shadow};
// //   }
// // `;

// const FeatureCard = styled(motion.div)`
//   background: ${props => props.theme.white};
//   padding: clamp(1rem, 3vw, 1.25rem);
//   border-radius: 1rem;
//   box-shadow: 0 4px 12px ${props => props.theme.shadow};
//   transition: all 0.3s ease;
//   border-left: 3px solid ${props => props.theme.accent};
//   color: ${props => props.theme.text};

//   h4 {
//     font-size: clamp(1rem, 2vw, 1.1rem);
//     font-weight: 600;
//     margin-bottom: 0.75rem;
//     color: ${props => props.theme.text};
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//   }

//   p {
//     color: ${props => props.theme.textLight};
//     font-size: clamp(0.85rem, 2vw, 0.95rem);
//     line-height: 1.6;
//   }

//   &:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 8px 16px ${props => props.theme.shadow};
//   }
// `;

// // Animation Variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
// };

// const ProductsPage = () => {
//   useEffect(() => {
//     document.title = "Our Products - CodeNiche SoftStudio";
//     window.scrollTo(0, 0);
//   }, []);

//   const [activeModule, setActiveModule] = useState("admin");
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [darkMode, setDarkMode] = useState(false);
//   const [showChatbot, setShowChatbot] = useState(false);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   const toggleChatbot = () => {
//     setShowChatbot(!showChatbot);
//   };

//   const products = [
//     {
//       id: 1,
//       title: "SkoolVriksh",
//       description:
//         "A comprehensive school management system with multi-tenant architecture designed to streamline administrative tasks and enhance communication between administrators, teachers, students, and parents.",
//       image: mobileImage,
//       features: [
//         "Multi-Tenant Architecture",
//         "Comprehensive User Roles",
//         "RTE Compliance",
//         "Fee Management",
//         "Real-time Notifications",
//         "Attendance Tracking",
//         "Fee Payment",
//         "Academic Progress",
//         "Custom Fee Categories",
//         "RTE Management",
//         "Payment Gateway",
//         "Fee Reports",
//       ],
//       category: "education",
//       badge: "popular",
//     },
//   ];

//   const modules = {
//     admin: {
//       title: "School Admin Panel",
//       icon: <FaUserCog />,
//       description:
//         "Comprehensive administrative control for school principals and administrators to manage all aspects of the school operation.",
//       features: [
//         {
//           title: "User Management",
//           icon: <FaUserCog />,
//           description:
//             "Register and manage class teachers, clerks, librarians, fee management staff, parents, and trustees with role-based permissions.",
//         },
//         {
//           title: "Academic Management",
//           icon: <FaChalkboardTeacher />,
//           description:
//             "Create customizable classes, set class capacity, define divisions, assign class teachers, and track RTE seat allocation.",
//         },
//         {
//           title: "Attendance System",
//           icon: <FaClipboardList />,
//           description:
//             "Monitor attendance for students, teachers, and staff with daily, weekly, monthly, and yearly reports.",
//         },
//         {
//           title: "Examination Management",
//           icon: <FaFileAlt />,
//           description:
//             "Create exam schedules, generate seating arrangements, manage results, and produce report cards.",
//         },
//         {
//           title: "Announcement System",
//           icon: <FaBullhorn />,
//           description:
//             "Publish school-wide announcements targeted to specific user groups including teachers, students, parents, staff, and trustees.",
//         },
//         {
//           title: "Trusty Management",
//           icon: <FaUserTie />,
//           description:
//             "Create and manage Trusty Panel accounts, define roles and permissions, schedule board meetings, and maintain meeting minutes.",
//         },
//       ],
//     },
//     trusty: {
//       title: "Trusty Panel",
//       icon: <FaUserTie />,
//       description:
//         "Dedicated access for school trustees to monitor financial, academic, and operational aspects of the institution.",
//       features: [
//         {
//           title: "Financial Oversight",
//           icon: <FaMoneyBillWave />,
//           description:
//             "View school financial reports, fee records details, and review annual budgets and expenditure.",
//         },
//         {
//           title: "Admission Monitoring",
//           icon: <FaUserGraduate />,
//           description:
//             "Monitor admission statistics and RTE admission compliance to ensure proper implementation of policies.",
//         },
//         {
//           title: "Academic Oversight",
//           icon: <FaChalkboardTeacher />,
//           description:
//             "Access academic performance metrics to ensure educational quality and standards.",
//         },
//         {
//           title: "Infrastructure Development",
//           icon: <FaChalkboardTeacher />,
//           description:
//             "Oversee school infrastructure development projects and track their progress.",
//         },
//         {
//           title: "Meeting Management",
//           icon: <FaCalendarAlt />,
//           description:
//             "Access board meeting schedules, attend scheduled meetings, and review meeting minutes.",
//         },
//         {
//           title: "Inventory Oversight",
//           icon: <FaClipboardList />,
//           description:
//             "View and monitor inventory management activities and asset tracking.",
//         },
//       ],
//     },
//     clerk: {
//       title: "Clerk Panel",
//       icon: <FaClipboardList />,
//       description:
//         "Streamlined interface for administrative staff to handle admissions, records, and certificate management.",
//       features: [
//         {
//           title: "Admission Management",
//           icon: <FaUserGraduate />,
//           description:
//             "Process new admissions with separate workflows for RTE and normal admissions.",
//         },
//         {
//           title: "Document Generation",
//           icon: <FaFileAlt />,
//           description:
//             "Generate GR numbers and issue certificates such as bonafide, leaving, and transfer certificates.",
//         },
//         {
//           title: "RTE Compliance",
//           icon: <FaFileAlt />,
//           description:
//             "Verify RTE eligibility documents, process admissions without fees, and mark students as RTE in the system.",
//         },
//         {
//           title: "Fee Processing",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Calculate applicable admission fees for normal admissions and process fee payments.",
//         },
//         {
//           title: "Admission Workflow",
//           icon: <FaClipboardList />,
//           description:
//             "Manage the complete admission process from application to class allocation and parent notification.",
//         },
//         {
//           title: "Student Records",
//           icon: <FaFileAlt />,
//           description:
//             "Maintain comprehensive student records including personal information, academic history, and document status.",
//         },
//       ],
//     },
//     fee: {
//       title: "Fee Management Panel",
//       icon: <FaMoneyBillWave />,
//       description:
//         "Comprehensive fee management system with specialized handling for both regular students and RTE beneficiaries.",
//       features: [
//         {
//           title: "Fee Categories",
//           icon: <FaClipboardList />,
//           description:
//             "Define various fee categories including school fees, computer fees, transportation fees, examination fees, and more.",
//         },
//         {
//           title: "Payment Tracking",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Track payments, generate receipts, manage pending dues, and apply late fees when applicable.",
//         },
//         {
//           title: "Discount Management",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Process discounts and special fee arrangements for eligible students.",
//         },
//         {
//           title: "RTE Management",
//           icon: <FaFileAlt />,
//           description:
//             "Maintain separate records for RTE students, generate reimbursement claims, and track government reimbursements.",
//         },
//         {
//           title: "Compliance Reporting",
//           icon: <FaFileAlt />,
//           description:
//             "Generate RTE compliance reports and monitor RTE quota fulfillment as per government regulations.",
//         },
//         {
//           title: "Online Payments",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Integrated payment gateway for online fee collection with automatic receipt generation.",
//         },
//       ],
//     },
//     library: {
//       title: "Librarian Panel",
//       icon: <FaBook />,
//       description:
//         "Complete library management system to maintain book inventory, handle lending, and track returns.",
//       features: [
//         {
//           title: "Book Inventory",
//           icon: <FaBook />,
//           description:
//             "Maintain comprehensive book inventory with ability to add, update, or remove books.",
//         },
//         {
//           title: "Issue & Return",
//           icon: <FaClipboardList />,
//           description:
//             "Issue books to students and staff, process returns, and track overdue books.",
//         },
//         {
//           title: "Fine Management",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Calculate and apply fines for late returns or damaged books.",
//         },
//         {
//           title: "Library Cards",
//           icon: <FaFileAlt />,
//           description:
//             "Generate and manage library cards for students and staff.",
//         },
//         {
//           title: "Usage Analytics",
//           icon: <FaClipboardList />,
//           description:
//             "Generate reports on library usage patterns, popular books, and resource utilization.",
//         },
//         {
//           title: "Resource Tracking",
//           icon: <FaClipboardList />,
//           description:
//             "Track status of all library resources including availability, condition, and location.",
//         },
//       ],
//     },
//     inventory: {
//       title: "Inventory Management Panel",
//       icon: <FaClipboardList />,
//       description:
//         "Comprehensive system to track and manage all school assets, consumables, and resources.",
//       features: [
//         {
//           title: "Asset Tracking",
//           icon: <FaChalkboardTeacher />,
//           description:
//             "Keep records of all school-owned items, including computers, projectors, lab tools, and furniture.",
//         },
//         {
//           title: "Stock Management",
//           icon: <FaClipboardList />,
//           description:
//             "Monitor consumable supplies like notebooks, pens, chalk, printer paper, and cleaning materials.",
//         },
//         {
//           title: "Procurement",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Ensure timely purchasing and replenishment of inventory with automated alerts.",
//         },
//         {
//           title: "Maintenance Scheduling",
//           icon: <FaCalendarAlt />,
//           description:
//             "Track maintenance needs for equipment like computers, laboratory tools, and sports gear.",
//         },
//         {
//           title: "Loss Prevention",
//           icon: <FaFileAlt />,
//           description:
//             "Implement measures to prevent theft, misplacement, or damage to school assets.",
//         },
//         {
//           title: "Budget Control",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Manage expenses related to school supplies and ensure cost-effectiveness.",
//         },
//       ],
//     },
//     student: {
//       title: "Student Panel",
//       icon: <FaUserGraduate />,
//       description:
//         "Student-focused interface providing access to academic information, resources, and services.",
//       features: [
//         {
//           title: "Academic Access",
//           icon: <FaChalkboardTeacher />,
//           description:
//             "View attendance records, access study materials, submit homework, and check exam schedules.",
//         },
//         {
//           title: "Result Tracking",
//           icon: <FaFileAlt />,
//           description:
//             "Check results, download report cards, and view monthly progress reports.",
//         },
//         {
//           title: "Fee Management",
//           icon: <FaMoneyBillWave />,
//           description:
//             "Pay fees online (for normal admission students) and download fee receipts.",
//         },
//         {
//           title: "Certificate Requests",
//           icon: <FaFileAlt />,
//           description:
//             "Request various certificates such as bonafide, character, and transfer certificates.",
//         },
//         {
//           title: "Library Services",
//           icon: <FaBook />,
//           description:
//             "Access library catalog, check book availability, and manage borrowed books.",
//         },
//         {
//           title: "Notifications",
//           icon: <FaBullhorn />,
//           description:
//             "Receive event notifications, exam schedules, and important announcements.",
//         },
//       ],
//     },
//     parent: {
//       title: "Parent Panel",
//       icon: <FaUserCog />,
//       description:
//         "Dedicated interface for parents to monitor their child's progress, attendance, and school activities.",
//       features: [
//         {
//           title: "Attendance Monitoring",
//           icon: <FaClipboardList />,
//           description:
//             "Receive daily attendance notifications and track attendance patterns.",
//         },
//         {
//           title: "Progress Tracking",
//           icon: <FaClipboardList />,
//           description:
//             "Access monthly progress reports and track academic performance over time.",
//         },
//         {
//           title: "Fee Management",
//           icon: <FaMoneyBillWave />,
//           description:
//             "View and pay fees (for normal admission students) and access payment history.",
//         },
//         {
//           title: "School Communications",
//           icon: <FaBullhorn />,
//           description:
//             "Receive event notifications, exam schedules, and important announcements.",
//         },
//         {
//           title: "Transportation",
//           icon: <FaChalkboardTeacher />,
//           description:
//             "View transportation details including routes, pick-up/drop-off times, and contact information.",
//         },
//         {
//           title: "Document Access",
//           icon: <FaFileAlt />,
//           description:
//             "Download certificates, view report cards, and access other important documents.",
//         },
//       ],
//     },
//   };

//   const filteredProducts =
//     activeCategory === "all"
//       ? products
//       : products.filter((product) => product.category === activeCategory);

//   return (
//     <ProductsContainer theme={themes[darkMode ? "dark" : "light"]}>
//       <HeroBanner>
//         <h2>Discover SkoolVriksh</h2>
//         <p>
//           Revolutionize school management with our multi-tenant platform, designed
//           for seamless administration and enhanced communication.
//         </p>
//         <Link to="/contact">
//           {/* <Button
//             as="span"
//             size="large"
//             style={{
//               background: "white",
//               color: themes[darkMode ? "dark" : "light"].accent,
//               boxShadow: `0 4px 12px ${themes[darkMode ? "dark" : "light"].shadow}`,
//             }}
//             aria-label="Schedule a consultation"
//           >
//             Get Started
//           </Button> */}
//         </Link>
//       </HeroBanner>

//       <Section id="featured-product" padding="0">
//         <SectionHeading
//           subHeading="Featured Product"
//           heading="SkoolVriksh"
//           description="Our flagship multi-tenant school management system trusted by hundreds of educational institutions."
//         />
//         <FeaturedProduct
//           variants={itemVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <FeaturedProductImage>
//             <img src={mobileImage} alt="SkoolVriksh Dashboard" />
//           </FeaturedProductImage>
//           <FeaturedProductContent>
//             <h3>Transform Your School Management</h3>
//             <p>
//               SkoolVriksh is a comprehensive multi-tenant school management system
//               designed to streamline administrative tasks and enhance
//               communication between administrators, teachers, students, and
//               parents. Our solution helps educational institutions digitize
//               processes, reduce paperwork, and focus on what matters most —
//               education.
//             </p>
//             <ProductFeatures>
//               <li>
//                 <FaCheckCircle /> Multi-Tenant Architecture with Secure Data
//                 Isolation
//               </li>
//               <li>
//                 <FaCheckCircle /> Comprehensive Role-Based Access Control
//               </li>
//               <li>
//                 <FaCheckCircle /> RTE Compliance Management & Reporting
//               </li>
//               <li>
//                 <FaCheckCircle /> Advanced Fee Management with Payment Gateway
//               </li>
//               <li>
//                 <FaCheckCircle /> Custom Admission Form System
//               </li>
//             </ProductFeatures>
//           </FeaturedProductContent>
//         </FeaturedProduct>
//       </Section>

//       <Section id="all-products" padding="0">
//         <SectionHeading
//           subHeading="Product Portfolio"
//           heading="Our Software Solutions"
//           description="We develop industry-specific solutions to address unique business challenges."
//         />
//         <ProductCategories>
//           <CategoryButton
//             active={activeCategory === "all"}
//             onClick={() => setActiveCategory("all")}
//             aria-pressed={activeCategory === "all"}
//           >
//             All
//           </CategoryButton>
//           <CategoryButton
//             active={activeCategory === "education"}
//             onClick={() => setActiveCategory("education")}
//             aria-pressed={activeCategory === "education"}
//           >
//             Education
//           </CategoryButton>
//         </ProductCategories>
//         <ProductsGrid
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {filteredProducts.map((product) => (
//             <ProductCard
//               key={product.id}
//               variants={itemVariants}
//               whileHover={{ scale: 1.02 }}
//             >
//               <ProductImage>
//                 <img
//                   src={product.id === 1 ? mobileImage : deskImage}
//                   alt={product.title}
//                 />
//                 {product.badge && (
//                   <ProductBadge type={product.badge}>
//                     {product.badge}
//                   </ProductBadge>
//                 )}
//               </ProductImage>
//               <ProductContent>
//                 <ProductTitle>{product.title}</ProductTitle>
//                 <ProductDescription>{product.description}</ProductDescription>
//                 <ProductFeatures>
//                   {product.features.map((feature, index) => (
//                     <li key={index}>
//                       <FaCheckCircle size={14} /> {feature}
//                     </li>
//                   ))}
//                 </ProductFeatures>
//                 <ProductActions />
//               </ProductContent>
//             </ProductCard>
//           ))}
//         </ProductsGrid>
//       </Section>

//       <ModuleDetailsSection
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <SectionHeading
//           subHeading="SkoolVriksh System Architecture"
//           heading="Comprehensive Module System"
//           description="Our multi-tenant school management system features specialized modules for different user roles."
//         />
//         <ModuleTabs aria-label="Module navigation">
//           {Object.keys(modules).map((key) => (
//             <ModuleTab
//               key={key}
//               active={activeModule === key}
//               onClick={() => setActiveModule(key)}
//               aria-pressed={activeModule === key}
//             >
//               {modules[key].icon} {modules[key].title}
//             </ModuleTab>
//           ))}
//         </ModuleTabs>
//         <ModuleContent>
//           <h3>
//             {modules[activeModule].icon} {modules[activeModule].title}
//           </h3>
//           <p>{modules[activeModule].description}</p>
//           <FeatureGrid>
//             {modules[activeModule].features.map((feature, index) => (
//               <FeatureCard
//                 key={index}
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <h4>
//                   {feature.icon} {feature.title}
//                 </h4>
//                 <p>{feature.description}</p>

//               </FeatureCard>
//             ))}
//           </FeatureGrid>
//         </ModuleContent>
//       </ModuleDetailsSection>

//       <ComparisonSection
//         variants={itemVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <SectionHeading
//           subHeading="System Capabilities"
//           heading="SkoolVriksh Features"
//           description="Comprehensive features based on our multi-tenant architecture."
//         />
//         <ComparisonTable>
//           <table>
//             <thead>
//               <tr>
//                 <th scope="col">Features</th>
//                 <th scope="col">SkoolVriksh</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Multi-Tenant Architecture</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Role-Based Access Control</td>
//                 <td>✓</td>
//               </tr>
//               <tr className="highlight">
//                 <td>RTE Compliance Management</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Custom Admission Forms</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Fee Management & Payment Gateway</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Exam & Result Management</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Attendance Tracking System</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Library Management</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Inventory Management</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Trusty Board Management</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Mobile Application Access</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>Document Generation System</td>
//                 <td>✓</td>
//               </tr>
//               <tr>
//                 <td>24/7 Support</td>
//                 <td>✓</td>
//               </tr>
//             </tbody>
//           </table>
//         </ComparisonTable>
//       </ComparisonSection>

//       <TestimonialSection
//         variants={itemVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <SectionHeading
//           subHeading="Customer Story"
//           heading="What Our Clients Say"
//           description=""
//         />
//         <TestimonialQuote>
//           "Implementing SkoolVriksh has transformed how we manage our school
//           operations. The multi-tenant architecture ensures our data remains
//           secure while giving us complete control. The RTE compliance features
//           have been especially valuable, helping us meet all regulatory
//           requirements effortlessly."
//         </TestimonialQuote>
//         <TestimonialAuthor>
//           <h4>Rajesh Sharma</h4>
//           <p>Principal, Sardar Patel School Ahmedabad</p>
//         </TestimonialAuthor>
//       </TestimonialSection>

//       <CTASection
//         variants={itemVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <CTATitle>Ready to Transform Your School Management?</CTATitle>
//         <CTADescription>
//           Discover how SkoolVriksh can streamline your administrative operations,
//           enhance communication, and ensure RTE compliance.
//         </CTADescription>
//         <Link to="/contact">
//           <Button
//             as="span"
//             size="large"
//             style={{
//               background: "white",
//               color: themes[darkMode ? "dark" : "light"].accent,
//               boxShadow: `0 4px 12px ${themes[darkMode ? "dark" : "light"].shadow}`,
//             }}
//             aria-label="Schedule a consultation"
//           >
//             Schedule a Consultation
//           </Button>
//         </Link>
//       </CTASection>

//       <ButtonContainer>
//         <ActionButton onClick={toggleTheme} aria-label="Toggle theme">
//           {darkMode ? <MdLightMode /> : <MdDarkMode />}
//         </ActionButton>
//         <ActionButton onClick={toggleChatbot} aria-label="Toggle chatbot">
//           <FaComments />
//         </ActionButton>
//         <WhatsAppButton
//           href="https://wa.me/9408534684"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Contact via WhatsApp"
//         >
//           <FaWhatsapp />
//         </WhatsAppButton>
//       </ButtonContainer>

//       {showChatbot && <Chatbot />}
//     </ProductsContainer>
//   );
// };

// export default ProductsPage;


