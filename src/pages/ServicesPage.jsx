// import React, { useState } from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import {
//   FaCode,
//   FaServer,
//   FaCloud,
//   FaPalette,
//   FaMobileAlt,
//   FaRocket,
//   FaShoppingCart,
//   FaCogs,
//   FaDatabase,
//   FaSearch,
//   FaDesktop,
//   FaWhatsapp,
//   FaLaptopCode,
//   FaBullseye,
//   FaBrain,
//   FaChartLine,
// } from "react-icons/fa";
// import Chatbot from "../components/common/Chatbot";

// // Modern color palette
// const colors = {
//   primary: "#2563eb",
//   secondary: "#3b82f6",
//   accent: "#f59e0b",
//   dark: "#1e293b",
//   text: "#334155",
//   textLight: "#64748b",
//   background: "#ffffff",
//   lightGray: "#f8fafc",
//   border: "#e2e8f0",
//   white: "#ffffff",
//   gradientStart: "#2563eb",
//   gradientEnd: "#7c3aed",
//   shadow: "rgba(0, 70, 173, 0.12)",
// };

// // Styled components with more modern design
// const PageContainer = styled.div`
//   min-height: 100vh;
//   background-color: ${colors.background};
//   color: ${colors.text};
//   font-family: "Inter", "Segoe UI", Arial, sans-serif;
// `;

// const HeroSection = styled.div`
//   background: linear-gradient(
//     135deg,
//     ${colors.primary} 0%,
//     ${colors.secondary} 100%
//   );
//   padding: 100px 0 80px;
//   color: white;
//   text-align: center;
//   position: relative;
//   overflow: hidden;

//   &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-image: url("/images/pattern.png");
//     background-repeat: repeat;
//     opacity: 0.1;
//   }
// `;

// const HeroContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
//   position: relative;
//   z-index: 1;
// `;

// const HeroTitle = styled.h1`
//   font-size: 48px;
//   font-weight: 800;
//   margin-bottom: 20px;
//   background: linear-gradient(to right, #ffffff, #f0f9ff);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;

//   @media (max-width: 768px) {
//     font-size: 36px;
//   }
// `;

// const HeroSubtitle = styled.p`
//   font-size: 18px;
//   font-weight: 400;
//   max-width: 700px;
//   margin: 0 auto;
//   line-height: 1.6;

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const ContentContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
// `;

// const SectionTitle = styled.h2`
//   font-size: 36px;
//   font-weight: 800;
//   color: ${colors.dark};
//   text-align: center;
//   margin: 70px 0 20px;
//   position: relative;

//   &:after {
//     content: "";
//     display: block;
//     width: 60px;
//     height: 4px;
//     background: ${colors.accent};
//     margin: 15px auto 0;
//   }
// `;

// const ServicesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 25px;
//   margin: 40px 0;

//   @media (max-width: 992px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 576px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ServiceCard = styled(motion.div)`
//   background-color: ${colors.white};
//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: 0 10px 30px ${colors.shadow};
//   transition: all 0.4s ease;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 15px 35px rgba(37, 99, 235, 0.2);

//     .service-icon-wrapper {
//       background-color: ${colors.accent};
//       color: ${colors.white};
//       transform: scale(1.1);
//     }
//   }
// `;

// const ServiceCardTop = styled.div`
//   height: 160px;
//   background: linear-gradient(
//     135deg,
//     ${colors.primary} 0%,
//     ${colors.secondary} 100%
//   );
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;

//   &:before {
//     content: "";
//     position: absolute;
//     top: -50%;
//     left: -50%;
//     width: 200%;
//     height: 200%;
//     background: radial-gradient(
//       circle,
//       rgba(255, 255, 255, 0.1) 0%,
//       rgba(255, 255, 255, 0) 70%
//     );
//     opacity: 0;
//     transition: opacity 0.5s ease;
//   }

//   ${ServiceCard}:hover &:before {
//     opacity: 1;
//   }
// `;

// const ServiceIconWrapper = styled.div`
//   background-color: ${colors.white};
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 32px;
//   color: ${colors.primary};
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
//   transition: all 0.4s ease;
// `;

// const ServiceCardBody = styled.div`
//   padding: 25px;
// `;

// const ServiceTitle = styled.h3`
//   font-size: 22px;
//   font-weight: 700;
//   margin-bottom: 10px;
//   color: ${colors.dark};
//   transition: all 0.3s ease;
// `;

// const ServiceFeatures = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 20px 0 0;
// `;

// const ServiceFeature = styled.li`
//   font-size: 14px;
//   color: ${colors.text};
//   padding: 8px 0;
//   border-bottom: 1px solid ${colors.border};
//   display: flex;
//   align-items: center;

//   &:last-child {
//     border-bottom: none;
//   }

//   &:before {
//     content: "✓";
//     color: ${colors.accent};
//     font-weight: bold;
//     margin-right: 10px;
//   }
// `;

// const LearnMoreButton = styled.a`
//   display: inline-block;
//   margin-top: 20px;
//   padding: 10px 24px;
//   background-color: ${colors.primary};
//   color: white;
//   border-radius: 6px;
//   text-decoration: none;
//   font-size: 14px;
//   font-weight: 600;
//   transition: all 0.3s ease;
//   cursor: pointer;
//   box-shadow: 0 4px 10px rgba(37, 99, 235, 0.2);

//   &:hover {
//     background-color: ${colors.secondary};
//     transform: translateY(-3px);
//     box-shadow: 0 6px 15px rgba(37, 99, 235, 0.3);
//   }
// `;

// const WhatsAppButton = styled.a`
//   position: fixed;
//   bottom: 25px;
//   right: 25px;
//   background-color: #25d366;
//   color: white;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 30px;
//   box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
//   z-index: 100;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//     box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
//   }
// `;

// const SpecialTabs = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 10px;
//   margin: 30px 0;
// `;

// const SpecialTab = styled.button`
//   padding: 12px 25px;
//   background-color: ${(props) =>
//     props.active ? colors.primary : colors.lightGray};
//   color: ${(props) => (props.active ? colors.white : colors.text)};
//   border: none;
//   border-radius: 30px;
//   cursor: pointer;
//   font-size: 14px;
//   font-weight: 600;
//   transition: all 0.3s ease;
//   box-shadow: ${(props) =>
//     props.active ? "0 5px 15px rgba(37, 99, 235, 0.25)" : "none"};

//   &:hover {
//     background-color: ${(props) =>
//       props.active ? colors.primary : colors.border};
//     transform: ${(props) => (props.active ? "translateY(-2px)" : "none")};
//   }
// `;

// const ServicesList = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 25px;
//   margin-bottom: 60px;

//   @media (max-width: 992px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 576px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ServiceBox = styled(motion.div)`
//   background-color: ${colors.white};
//   border-radius: 12px;
//   padding: 30px;
//   box-shadow: 0 8px 25px ${colors.shadow};
//   transition: all 0.4s ease;
//   display: flex;
//   flex-direction: column;
//   height: 100%;

//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 15px 35px rgba(37, 99, 235, 0.2);

//     h3 {
//       color: ${colors.secondary};
//     }
//   }
// `;

// const ServiceBoxIcon = styled.div`
//   font-size: 40px;
//   color: ${colors.primary};
//   margin-bottom: 20px;
//   transition: all 0.3s ease;

//   ${ServiceBox}:hover & {
//     color: ${colors.accent};
//     transform: scale(1.1);
//   }
// `;

// const ServiceBoxTitle = styled.h3`
//   font-size: 20px;
//   font-weight: 700;
//   margin-bottom: 15px;
//   color: ${colors.dark};
//   transition: all 0.3s ease;
// `;

// const ServiceBoxList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   flex-grow: 1;
// `;

// const ServiceBoxItem = styled.li`
//   font-size: 14px;
//   color: ${colors.textLight};
//   padding: 6px 0;
//   display: flex;
//   align-items: center;

//   &:before {
//     content: "●";
//     color: ${colors.accent};
//     font-size: 10px;
//     margin-right: 10px;
//   }
// `;

// const ProcessSection = styled.section`
//   background: linear-gradient(
//     to right,
//     ${colors.lightGray},
//     ${colors.white},
//     ${colors.lightGray}
//   );
//   padding: 80px 0;
//   margin: 60px 0;
//   position: relative;

//   &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 10px;
//     background: linear-gradient(
//       to right,
//       ${colors.primary},
//       ${colors.secondary},
//       ${colors.accent}
//     );
//   }
// `;

// const ProcessSteps = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   gap: 20px;
//   margin-top: 40px;
// `;

// const ProcessStep = styled.div`
//   flex: 1;
//   min-width: 200px;
//   background-color: ${colors.white};
//   border-radius: 12px;
//   padding: 30px 20px;
//   box-shadow: 0 10px 30px ${colors.shadow};
//   text-align: center;
//   position: relative;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 15px 35px rgba(37, 99, 235, 0.2);
//   }

//   @media (min-width: 992px) {
//     &:not(:last-child):after {
//       content: "";
//       position: absolute;
//       top: 50%;
//       right: -35px;
//       width: 35px;
//       height: 2px;
//       background-color: ${colors.accent};
//       z-index: 1;
//     }
//   }
// `;

// const StepNumber = styled.div`
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   background: linear-gradient(
//     135deg,
//     ${colors.primary} 0%,
//     ${colors.secondary} 100%
//   );
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 24px;
//   font-weight: 700;
//   margin: 0 auto 20px;
//   box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
// `;

// const StepTitle = styled.h4`
//   font-size: 20px;
//   font-weight: 700;
//   margin-bottom: 10px;
//   color: ${colors.dark};
// `;

// const CTASection = styled.section`
//   background: linear-gradient(
//     135deg,
//     ${colors.gradientStart} 0%,
//     ${colors.gradientEnd} 100%
//   );
//   padding: 80px 0;
//   color: white;
//   text-align: center;
//   margin-top: 70px;
//   position: relative;
//   overflow: hidden;

//   &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-image: url("/images/pattern.png");
//     background-repeat: repeat;
//     opacity: 0.1;
//   }
// `;

// const CTATitle = styled.h2`
//   font-size: 40px;
//   font-weight: 800;
//   margin-bottom: 20px;
//   background: linear-gradient(to right, #ffffff, #f0f9ff);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const CTAButton = styled.a`
//   display: inline-block;
//   padding: 16px 36px;

//   color: white;
//   border-radius: 8px;
//   text-decoration: none;
//   font-size: 18px;
//   font-weight: 700;
//   transition: all 0.3s ease;
//   cursor: pointer;
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

//   &:hover {
//     background-color: white;
//     transform: translateY(-5px);
//     box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
//   }
// `;

// const ServicesPage = () => {
//   const [activeTab, setActiveTab] = useState("all");

//   // Main service categories with improved descriptions
//   const mainServices = [
//     {
//       id: 1,
//       icon: <FaDesktop />,
//       title: "Web Development",
//       features: [
//         "Website with CMS",
//         "Responsive Websites",
//         "Custom Web Design",
//         "Ecommerce Websites",
//         "Search Engine Friendly Websites",
//       ],
//       category: "web",
//     },
//     {
//       id: 2,
//       icon: <FaLaptopCode />,
//       title: "Software Development",
//       features: [
//         "Custom Software Development",
//         "Enterprise Applications",
//         "Legacy System Integration",
//         "Software QA & Testing",
//         "Software Maintenance",
//       ],
//       category: "software",
//     },
//     {
//       id: 3,
//       icon: <FaPalette />,
//       title: "Design & Branding",
//       features: [
//         "UI/UX Design",
//         "Brand Guidelines",
//         "Logo Design",
//         "Digital Assets",
//         "Corporate Image Building",
//       ],
//       category: "design",
//     },
//     {
//       id: 4,
//       icon: <FaCloud />,
//       title: "Cloud Solutions",
//       features: [
//         "Cloud Migration",
//         "AWS/Azure/GCP",
//         "Scalable Infrastructure",
//         "Managed Hosting",
//         "Cloud Security",
//       ],
//       category: "hosting",
//     },
//     {
//       id: 5,
//       icon: <FaMobileAlt />,
//       title: "Mobile Development",
//       features: [
//         "iOS Applications",
//         "Android Applications",
//         "Cross-platform Solutions",
//         "Progressive Web Apps",
//         "Mobile UI/UX",
//       ],
//       category: "mobile",
//     },
//     {
//       id: 6,
//       icon: <FaRocket />,
//       title: "Digital Strategy",
//       features: [
//         "Technology Roadmapping",
//         "Digital Transformation",
//         "Innovation Consulting",
//         "Process Optimization",
//         "Tech Stack Advisory",
//       ],
//       category: "strategy",
//     },
//   ];

//   // All services organized by category
//   const allServices = [
//     {
//       id: "web",
//       title: "Web Development",
//       icon: <FaDesktop />,
//       services: [
//         "Responsive Web Design",
//         "Progressive Web Apps",
//         "E-commerce Solutions",
//         "CMS Development",
//         "Web Application Development",
//         "Frontend Development",
//       ],
//     },
//     {
//       id: "software",
//       title: "Software Solutions",
//       icon: <FaLaptopCode />,
//       services: [
//         "Custom Software Development",
//         "Enterprise Solutions",
//         "SaaS Applications",
//         "API Development",
//         "System Integration",
//         "DevOps Implementation",
//       ],
//     },
//     {
//       id: "design",
//       title: "Design & Branding",
//       icon: <FaPalette />,
//       services: [
//         "UI/UX Design",
//         "Brand Identity",
//         "Design Systems",
//         "Prototyping",
//         "User Research",
//         "Visual Design",
//       ],
//     },
//     {
//       id: "hosting",
//       title: "Cloud Solutions",
//       icon: <FaCloud />,
//       services: [
//         "Cloud Migration",
//         "Infrastructure as Code",
//         "Serverless Solutions",
//         "DevOps Automation",
//         "Managed Hosting",
//         "Cloud Security",
//       ],
//     },
//     {
//       id: "data",
//       title: "Data & Analytics",
//       icon: <FaDatabase />,
//       services: [
//         "Data Engineering",
//         "Business Intelligence",
//         "Data Visualization",
//         "Big Data Solutions",
//         "ML/AI Integration",
//         "Predictive Analytics",
//       ],
//     },
//     {
//       id: "emerging",
//       title: "Emerging Tech",
//       icon: <FaBrain />,
//       services: [
//         "AI/ML Solutions",
//         "IoT Development",
//         "AR/VR Applications",
//         "Blockchain Development",
//         "Computer Vision",
//         "NLP Applications",
//       ],
//     },
//   ];

//   // Filter services based on active tab
//   const filteredServices =
//     activeTab === "all"
//       ? allServices
//       : allServices.filter((service) => service.id === activeTab);

//   // Animation variants
//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   return (
//     <PageContainer>
//       <HeroSection>
//         <HeroContainer>
//           <HeroTitle>Explore Our Services</HeroTitle>
//           <HeroSubtitle>
//             Transforming businesses with cutting-edge technology and exceptional
//             digital experiences
//           </HeroSubtitle>
//         </HeroContainer>
//       </HeroSection>

//       <ContentContainer>
//         <SectionTitle>Core Services</SectionTitle>

//         <ServicesGrid
//           as={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {mainServices.map((service) => (
//             <ServiceCard key={service.id} variants={cardVariants}>
//               <ServiceCardTop>
//                 <ServiceIconWrapper className="service-icon-wrapper">
//                   {service.icon}
//                 </ServiceIconWrapper>
//               </ServiceCardTop>
//               <ServiceCardBody>
//                 <ServiceTitle>{service.title}</ServiceTitle>
//                 <ServiceFeatures>
//                   {service.features.map((feature, index) => (
//                     <ServiceFeature key={index}>{feature}</ServiceFeature>
//                   ))}
//                 </ServiceFeatures>
//                 {/* <LearnMoreButton href={`/services/${service.category}`}>Explore</LearnMoreButton> */}
//               </ServiceCardBody>
//             </ServiceCard>
//           ))}
//         </ServicesGrid>

//         {/* <SectionTitle>Service Catalog</SectionTitle>
        
//         <SpecialTabs>
//           <SpecialTab 
//             active={activeTab === "all"} 
//             onClick={() => setActiveTab("all")}
//           >
//             All Services
//           </SpecialTab>
//           <SpecialTab 
//             active={activeTab === "web"} 
//             onClick={() => setActiveTab("web")}
//           >
//             Web
//           </SpecialTab>
//           <SpecialTab 
//             active={activeTab === "software"} 
//             onClick={() => setActiveTab("software")}
//           >
//             Software
//           </SpecialTab>
//           <SpecialTab 
//             active={activeTab === "design"} 
//             onClick={() => setActiveTab("design")}
//           >
//             Design
//           </SpecialTab>
//           <SpecialTab 
//             active={activeTab === "hosting"} 
//             onClick={() => setActiveTab("hosting")}
//           >
//             Cloud
//           </SpecialTab>
//           <SpecialTab 
//             active={activeTab === "data"} 
//             onClick={() => setActiveTab("data")}
//           >
//             Data
//           </SpecialTab>
//           <SpecialTab 
//             active={activeTab === "emerging"} 
//             onClick={() => setActiveTab("emerging")}
//           >
//             Emerging Tech
//           </SpecialTab>
//         </SpecialTabs>
        
//         <ServicesList 
//           as={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {filteredServices.map((category) => (
//             <ServiceBox 
//               key={category.id}
//               variants={cardVariants}
//             >
//               <ServiceBoxIcon>{category.icon}</ServiceBoxIcon>
//               <ServiceBoxTitle>{category.title}</ServiceBoxTitle>
//               <ServiceBoxList>
//                 {category.services.map((service, index) => (
//                   <ServiceBoxItem key={index}>{service}</ServiceBoxItem>
//                 ))}
//               </ServiceBoxList>
//             </ServiceBox>
//           ))}
//         </ServicesList> */}

//         <ProcessSection>
//           <ContentContainer>
//             <SectionTitle>Our Process</SectionTitle>

//             <ProcessSteps>
//               <ProcessStep>
//                 <StepNumber>1</StepNumber>
//                 <StepTitle>Discover</StepTitle>
//               </ProcessStep>

//               <ProcessStep>
//                 <StepNumber>2</StepNumber>
//                 <StepTitle>Design</StepTitle>
//               </ProcessStep>

//               <ProcessStep>
//                 <StepNumber>3</StepNumber>
//                 <StepTitle>Develop</StepTitle>
//               </ProcessStep>

//               <ProcessStep>
//                 <StepNumber>4</StepNumber>
//                 <StepTitle>Deploy</StepTitle>
//               </ProcessStep>

//               <ProcessStep>
//                 <StepNumber>5</StepNumber>
//                 <StepTitle>Support</StepTitle>
//               </ProcessStep>
//             </ProcessSteps>
//           </ContentContainer>
//         </ProcessSection>
//       </ContentContainer>

//       {/* <CTASection>
//         <ContentContainer>
//           <CTATitle>Ready to Innovate?</CTATitle>
//           <CTAButton href="/contact">Get Started</CTAButton>
//         </ContentContainer>
//       </CTASection> */}

//       <Chatbot />
//       <WhatsAppButton
//         href="https://wa.me/9408534684"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaWhatsapp />
//       </WhatsAppButton>
//     </PageContainer>
//   );
// };

// export default ServicesPage;





// import React, { useState } from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import { 
//   FaCode, 
//   FaServer, 
//   FaCloud, 
//   FaPalette,
//   FaMobileAlt,
//   FaRocket,
//   FaShoppingCart,
//   FaCogs,
//   FaDatabase,
//   FaSearch,
//   FaDesktop,
//   FaWhatsapp,
//   FaLaptopCode,
//   FaBullseye,
//   FaBrain,
//   FaChartLine
// } from "react-icons/fa";
// import { MdBrightness4 } from "react-icons/md";
// import Chatbot from "../components/common/Chatbot";

// // Theme configurations
// const themes = {
//   light: {
//     primary: "#2563eb",
//     secondary: "#3b82f6",
//     accent: "#f59e0b",
//     dark: "#1e293b",
//     text: "#334155",
//     textLight: "#64748b",
//     background: "#ffffff",
//     lightGray: "#f8fafc",
//     border: "#e2e8f0",
//     white: "#ffffff",
//     gradientStart: "#2563eb",
//     gradientEnd: "#7c3aed",
//     shadow: "rgba(0, 70, 173, 0.12)"
//   },
//   dark: {
//     primary: "#60a5fa",
//     secondary: "#93c5fd",
//     accent: "#facc15",
//     dark: "#f1f5f9",
//     text: "#e2e8f0",
//     textLight: "#94a3b8",
//     background: "#0f172a",
//     lightGray: "#1e293b",
//     border: "#334155",
//     white: "#1e293b",
//     gradientStart: "#3b82f6",
//     gradientEnd: "#a78bfa",
//     shadow: "rgba(0, 0, 0, 0.3)"
//   }
// };

// // Styled components with theme support
// const PageContainer = styled.div`
//   min-height: 100vh;
//   background-color: ${props => props.theme.background};
//   color: ${props => props.theme.text};
//   font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
//   position: relative;
// `;

// const ButtonContainer = styled.div`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   display: flex;
//   gap: 15px;
//   z-index: 1000;
// `;

// const ThemeToggleButton = styled.button`
//   background: ${props => props.theme.white};
//   border: 1px solid ${props => props.theme.border};
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   box-shadow: 0 2px 8px ${props => props.theme.shadow};
//   transition: all 0.3s ease;

//   &:hover {
//     background: ${props => props.theme.lightGray};
//     transform: scale(1.1);
//   }

//   svg {
//     font-size: 28px;
//     color: ${props => props.theme.primary};
//   }
// `;

// const WhatsAppButton = styled.a`
//   background-color: #25d366;
//   color: ${props => props.theme.white};
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 28px;
//   box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
//   transition: all 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//     box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
//   }
// `;

// const ChatbotButton = styled.button`
//   background: ${props => props.theme.primary};
//   color: ${props => props.theme.white};
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 24px;
//   border: none;
//   box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//     box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
//     background: ${props => props.theme.secondary};
//   }
// `;

// const HeroSection = styled.div`
//   background: linear-gradient(135deg, ${props => props.theme.primary} 0%, ${props => props.theme.secondary} 100%);
//   padding: 100px 0 80px;
//   color: ${props => props.theme.white};
//   text-align: center;
//   position: relative;
//   overflow: hidden;
  
//   &:before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-image: url('/images/pattern.png');
//     background-repeat: repeat;
//     opacity: 0.1;
//   }
// `;

// const HeroContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
//   position: relative;
//   z-index: 1;
// `;

// const HeroTitle = styled.h1`
//   font-size: 48px;
//   font-weight: 800;
//   margin-bottom: 20px;
//   background: linear-gradient(to right, ${props => props.theme.white}, ${props => props.theme.lightGray});
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
  
//   @media (max-width: 768px) {
//     font-size: 36px;
//   }
// `;

// const HeroSubtitle = styled.p`
//   font-size: 18px;
//   font-weight: 400;
//   max-width: 700px;
//   margin: 0 auto;
//   line-height: 1.6;
//   color: ${props => props.theme.white};
  
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const ContentContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
// `;

// const SectionTitle = styled.h2`
//   font-size: 36px;
//   font-weight: 800;
//   color: ${props => props.theme.dark};
//   text-align: center;
//   margin: 70px 0 20px;
//   position: relative;
  
//   &:after {
//     content: '';
//     display: block;
//     width: 60px;
//     height: 4px;
//     background: ${props => props.theme.accent};
//     margin: 15px auto 0;
//   }
// `;

// const ServicesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 25px;
//   margin: 40px 0;
  
//   @media (max-width: 992px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
  
//   @media (max-width: 576px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ServiceCard = styled(motion.div)`
//   background-color: ${props => props.theme.white};
//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: 0 10px 30px ${props => props.theme.shadow};
//   transition: all 0.4s ease;
  
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 15px 35px rgba(37, 99, 235, 0.2);
    
//     .service-icon-wrapper {
//       background-color: ${props => props.theme.accent};
//       color: ${props => props.theme.white};
//       transform: scale(1.1);
//     }
//   }
// `;

// const ServiceCardTop = styled.div`
//   height: 160px;
//   background: linear-gradient(135deg, ${props => props.theme.primary} 0%, ${props => props.theme.secondary} 100%);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;
  
//   &:before {
//     content: '';
//     position: absolute;
//     top: -50%;
//     left: -50%;
//     width: 200%;
//     height: 200%;
//     background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
//     opacity: 0;
//     transition: opacity 0.5s ease;
//   }
  
//   ${ServiceCard}:hover &:before {
//     opacity: 1;
//   }
// `;

// const ServiceIconWrapper = styled.div`
//   background-color: ${props => props.theme.white};
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 32px;
//   color: ${props => props.theme.primary};
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
//   transition: all 0.4s ease;
// `;

// const ServiceCardBody = styled.div`
//   padding: 25px;
// `;

// const ServiceTitle = styled.h3`
//   font-size: 22px;
//   font-weight: 700;
//   margin-bottom: 10px;
//   color: ${props => props.theme.dark};
//   transition: all 0.3s ease;
// `;

// const ServiceFeatures = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 20px 0 0;
// `;

// const ServiceFeature = styled.li`
//   font-size: 14px;
//   color: ${props => props.theme.text};
//   padding: 8px 0;
//   border-bottom: 1px solid ${props => props.theme.border};
//   display: flex;
//   align-items: center;
  
//   &:last-child {
//     border-bottom: none;
//   }
  
//   &:before {
//     content: "✓";
//     color: ${props => props.theme.accent};
//     font-weight: bold;
//     margin-right: 10px;
//   }
// `;

// const ProcessSection = styled.section`
//   background: linear-gradient(to right, ${props => props.theme.lightGray}, ${props => props.theme.white}, ${props => props.theme.lightGray});
//   padding: 80px 0;
//   margin: 60px 0;
//   position: relative;
  
//   &:before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 10px;
//     background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary}, ${props => props.theme.accent});
//   }
// `;

// const ProcessSteps = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   gap: 20px;
//   margin-top: 40px;
// `;

// const ProcessStep = styled.div`
//   flex: 1;
//   min-width: 200px;
//   background-color: ${props => props.theme.white};
//   border-radius: 12px;
//   padding: 30px 20px;
//   box-shadow: 0 10px 30px ${props => props.theme.shadow};
//   text-align: center;
//   position: relative;
//   transition: all 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 15px 35px rgba(37, 99, 235, 0.2);
//   }
  
//   @media (min-width: 992px) {
//     &:not(:last-child):after {
//       content: "";
//       position: absolute;
//       top: 50%;
//       right: -35px;
//       width: 35px;
//       height: 2px;
//       background-color: ${props => props.theme.accent};
//       z-index: 1;
//     }
//   }
// `;

// const StepNumber = styled.div`
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   background: linear-gradient(135deg, ${props => props.theme.primary} 0%, ${props => props.theme.secondary} 100%);
//   color: ${props => props.theme.white};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 24px;
//   font-weight: 700;
//   margin: 0 auto 20px;
//   box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
// `;

// const StepTitle = styled.h4`
//   font-size: 20px;
//   font-weight: 700;
//   margin-bottom: 10px;
//   color: ${props => props.theme.dark};
// `;

// const ServicesPage = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [theme, setTheme] = useState("light");
//   const [showChatbot, setShowChatbot] = useState(false);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const toggleChatbot = () => {
//     setShowChatbot(!showChatbot);
//   };

//   // Main service categories
//   const mainServices = [
//     {
//       id: 1,
//       icon: <FaDesktop />,
//       title: "Web Development",
//       features: [
//         "Website with CMS",
//         "Responsive Websites",
//         "Custom Web Design",
//         "Ecommerce Websites",
//         "Search Engine Friendly Websites"
//       ],
//       category: "web"
//     },
//     {
//       id: 2,
//       icon: <FaLaptopCode />,
//       title: "Software Development",
//       features: [
//         "Custom Software Development",
//         "Enterprise Applications",
//         "Legacy System Integration",
//         "Software QA & Testing",
//         "Software Maintenance"
//       ],
//       category: "software"
//     },
//     {
//       id: 3,
//       icon: <FaPalette />,
//       title: "Design & Branding",
//       features: [
//         "UI/UX Design",
//         "Brand Guidelines",
//         "Logo Design",
//         "Digital Assets",
//         "Corporate Image Building"
//       ],
//       category: "design"
//     },
//     {
//       id: 4,
//       icon: <FaCloud />,
//       title: "Cloud Solutions",
//       features: [
//         "Cloud Migration",
//         "AWS/Azure/GCP",
//         "Scalable Infrastructure",
//         "Managed Hosting",
//         "Cloud Security"
//       ],
//       category: "hosting"
//     },
//     {
//       id: 5,
//       icon: <FaMobileAlt />,
//       title: "Mobile Development",
//       features: [
//         "iOS Applications",
//         "Android Applications",
//         "Cross-platform Solutions",
//         "Progressive Web Apps",
//         "Mobile UI/UX"
//       ],
//       category: "mobile"
//     },
//     {
//       id: 6,
//       icon: <FaRocket />,
//       title: "Digital Strategy",
//       features: [
//         "Technology Roadmapping",
//         "Digital Transformation",
//         "Innovation Consulting",
//         "Process Optimization",
//         "Tech Stack Advisory"
//       ],
//       category: "strategy"
//     }
//   ];

//   // Animation variants
//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { 
//         duration: 0.6,
//         ease: "easeOut" 
//       } 
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15
//       }
//     }
//   };

//   return (
//     <PageContainer theme={themes[theme]}>
//       <HeroSection theme={themes[theme]}>
//         <HeroContainer>
//           <HeroTitle theme={themes[theme]}>Explore Our Services</HeroTitle>
//           <HeroSubtitle theme={themes[theme]}>
//             Transforming businesses with cutting-edge technology and exceptional digital experiences
//           </HeroSubtitle>
//         </HeroContainer>
//       </HeroSection>
      
//       <ContentContainer>
//         <SectionTitle theme={themes[theme]}>Core Services</SectionTitle>
        
//         <ServicesGrid 
//           as={motion.div}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {mainServices.map((service) => (
//             <ServiceCard 
//               key={service.id}
//               variants={cardVariants}
//               theme={themes[theme]}
//             >
//               <ServiceCardTop theme={themes[theme]}>
//                 <ServiceIconWrapper className="service-icon-wrapper" theme={themes[theme]}>
//                   {service.icon}
//                 </ServiceIconWrapper>
//               </ServiceCardTop>
//               <ServiceCardBody>
//                 <ServiceTitle theme={themes[theme]}>{service.title}</ServiceTitle>
//                 <ServiceFeatures>
//                   {service.features.map((feature, index) => (
//                     <ServiceFeature key={index} theme={themes[theme]}>{feature}</ServiceFeature>
//                   ))}
//                 </ServiceFeatures>
//               </ServiceCardBody>
//             </ServiceCard>
//           ))}
//         </ServicesGrid>
        
//         <ProcessSection theme={themes[theme]}>
//           <ContentContainer>
//             <SectionTitle theme={themes[theme]}>Our Process</SectionTitle>
            
//             <ProcessSteps>
//               <ProcessStep theme={themes[theme]}>
//                 <StepNumber theme={themes[theme]}>1</StepNumber>
//                 <StepTitle theme={themes[theme]}>Discover</StepTitle>
//               </ProcessStep>
              
//               <ProcessStep theme={themes[theme]}>
//                 <StepNumber theme={themes[theme]}>2</StepNumber>
//                 <StepTitle theme={themes[theme]}>Design</StepTitle>
//               </ProcessStep>
              
//               <ProcessStep theme={themes[theme]}>
//                 <StepNumber theme={themes[theme]}>3</StepNumber>
//                 <StepTitle theme={themes[theme]}>Develop</StepTitle>
//               </ProcessStep>
              
//               <ProcessStep theme={themes[theme]}>
//                 <StepNumber theme={themes[theme]}>4</StepNumber>
//                 <StepTitle theme={themes[theme]}>Deploy</StepTitle>
//               </ProcessStep>
              
//               <ProcessStep theme={themes[theme]}>
//                 <StepNumber theme={themes[theme]}>5</StepNumber>
//                 <StepTitle theme={themes[theme]}>Support</StepTitle>
//               </ProcessStep>
//             </ProcessSteps>
//           </ContentContainer>
//         </ProcessSection>
//       </ContentContainer>
      
//       <ButtonContainer>
//         <ThemeToggleButton onClick={toggleTheme} theme={themes[theme]}>
//           <MdBrightness4 />
//         </ThemeToggleButton>
//         {/* <ChatbotButton onClick={toggleChatbot} theme={themes[theme]}>
//           <FaCogs />
//         </ChatbotButton> */}
//         <Chatbot />
//         <WhatsAppButton
//           href="https://wa.me/8401901942"
//           target="_blank"
//           rel="noopener noreferrer"
//           theme={themes[theme]}
//         >
//           <FaWhatsapp />
//         </WhatsAppButton>
//       </ButtonContainer>
      
//       {/* {showChatbot && <Chatbot />} */}
//     </PageContainer>
//   );
// };

// export default ServicesPage;



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingActionButtons from "../components/common/FloatingActionButtons";
import { useTheme } from "../contexts/ThemeContext";
import { 
  FaCode, FaServer, FaCloud, FaPalette, FaMobileAlt, FaRocket,
  FaDesktop, FaWhatsapp, FaLaptopCode, FaComments, FaArrowRight,
  FaCheck, FaStar, FaLightbulb, FaTools, FaUserCheck
} from "react-icons/fa";


const ServicesPage = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);

  // Color palette based on provided theme for light/dark
  const colors = {
    // Home light theme reference
    primary: isDark ? "#778DA9" : "#2563EB",
    secondary: isDark ? "#415A77" : "#06B6D4",
    accent: isDark ? "#A4B3C7" : "#EC4899",
    purple: isDark ? "#778DA9" : "#3B82F6",
    green: isDark ? "#A4B3C7" : "#10B981",
    orange: isDark ? "#A4B3C7" : "#F59E0B",
    bg: isDark ? "#0D1B2A" : "#F9FAFB",
    surface: isDark ? "#1B263B" : "#FFFFFF",
    text: isDark ? "#E0E1DD" : "#374151",
    textLight: isDark ? "#A4B3C7" : "#6B7280",
    border: isDark ? "#2A3A4A" : "#E5E7EB",
    shadow: isDark ? "0 20px 40px rgba(0, 0, 0, 0.35)" : "0 20px 40px rgba(0, 0, 0, 0.12)",
    gradient: isDark 
      ? "linear-gradient(135deg, #0D1B2A 0%, #1B263B 100%)"
      : "#0077b6",
  };

  const styles = {
    // Base styles
    page: {
      minHeight: "100vh",
      backgroundColor: colors.bg,
      color: colors.text,
      fontFamily: "'Inter', sans-serif",
      transition: "all 0.3s ease",
    },
    
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
    },

    // Hero section
    hero: {
      background: colors.gradient,
      padding: "80px 0",
      color: "#FFFFFF",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },
    
    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 70%)",
      zIndex: 1,
    },
    
    heroContent: {
      position: "relative",
      zIndex: 2,
    },
    
    heroTitle: {
      fontSize: "3.25rem",
      fontWeight: "800",
      marginBottom: "24px",
      // background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.primary} 100%)`,
      WebkitBackgroundClip: "text",
      // WebkitTextFillColor: "transparent",
      textShadow: "0 4px 20px rgba(0,0,0,0.3)",
      color: isDark ? "#E0E1DD" : "#FFFFFF",
    },
    
    heroSubtitle: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)",
      maxWidth: "700px",
      margin: "0 auto 40px",
      lineHeight: "1.6",
      color: isDark ? "#A4B3C7" : "#E6F3FF",
    },
    
    heroStats: {
      display: "flex",
      justifyContent: "center",
      gap: "60px",
      marginTop: "40px",
      flexWrap: "wrap",
    },
    
    heroStat: {
      textAlign: "center",
      minWidth: "100px",
    },
    
    heroStatNumber: {
      fontSize: "clamp(2rem, 3vw, 2.5rem)",
      fontWeight: "800",
      color: colors.textlight,
      display: "block",
      marginBottom: "6px",
    },
    
    heroStatLabel: {
      fontSize: "1rem",
      color: colors.textlight,
      fontWeight: "500",
    },

    // Section styles
    section: {
      padding: "50px 0",
    },
    
    sectionTitle: {
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: "800",
      textAlign: "center",
      marginBottom: "15px",
      // background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.purple} 100%)`,
      WebkitBackgroundClip: "text",
      // WebkitTextFillColor: "transparent",
      color: isDark ? "#E0E1DD" : "#023e8a",
    },
    
    sectionSubtitle: {
      fontSize: "1.25rem",
      color: isDark ? "#A4B3C7" : "#6B7280",
      textAlign: "center",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: "1.6",
    },

    // Services grid
    servicesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "30px",
      margin: "40px 0 0",
    },
    
    serviceCard: (isHovered) => ({
      backgroundColor: colors.surface,
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: isHovered ? `0 30px 60px ${colors.shadow}` : `0 15px 30px ${colors.shadow}`,
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      border: `1px solid ${colors.border}`,
      transform: isHovered ? "translateY(-10px)" : "translateY(0)",
    }),
    
    serviceCardTop: (gradient) => ({
      height: "110px",
      background: gradient,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }),
    
    serviceIcon: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(10px)",
      width: "60px",
      height: "60px",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2rem",
      color: "#FFFFFF",
      transition: "all 0.4s ease",
      border: "2px solid rgba(255, 255, 255, 0.3)",
    },
    
    serviceCardBody: {
      padding: "30px",
    },
    
    serviceTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "10px",
      color: isDark ? "#E0E1DD" : "#374151",
    },
    
    serviceDescription: {
      fontSize: "1rem",
      color: isDark ? "#A4B3C7" : "#6B7280",
      lineHeight: "1.6",
      marginBottom: "12px",
    },
    
    serviceFeatures: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    
    serviceFeature: {
      fontSize: "0.95rem",
      color: isDark ? "#E0E1DD" : "#374151",
      padding: "8px 0 2px",
      display: "flex",
      alignItems: "center",
    },
    
    featureIcon: {
      color: isDark ? "#778DA9" : "#2563EB",
      marginRight: "12px",
      fontSize: "0.9rem",
    },

    // Process section
    processSection: {
      background: isDark ? "#0D1B2A" : "#0077b6",
      padding: "80px 0",
      margin: "0",
      color: "#FFFFFF",
    },
    
    processSteps: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "30px",
      marginTop: "30px",
    },
    
    processStep: {
      flex: "1",
      minWidth: "200px",
      maxWidth: "220px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      padding: "30px 20px",
      textAlign: "center",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.1s ease",
    },
    
    stepNumber: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "#023e8a",
      color: "#FFFFFF",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.5rem",
      fontWeight: "700",
      margin: "0 auto 20px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    },
    
    stepTitle: {
      fontSize: "1.25rem",
      fontWeight: "700",
      marginBottom: "12px",
      color: "#f0f0f0",
    },
    
    stepDescription: {
      fontSize: "0.95rem",
      color: "#E0E1DD",
      lineHeight: "1.5",
    },

    // CTA section
    ctaSection: {
      background: isDark ? "#0D1B2A" : "#023e8a",
      padding: "40px 0",
      marginTop: 0,
      textAlign: "center",
      color: "#FFFFFF",
    },
    
    ctaTitle: {
      fontSize: "clamp(2rem, 4vw, 2.5rem)",
      fontWeight: "800",
      marginBottom: "20px",
      color: "#ffffff",
    },
    
    ctaSubtitle: {
      fontSize: "1.25rem",
      marginBottom: "40px",
      color: "#E0E1DD",
    },
    
    ctaButton: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "#FFFFFF",
      padding: "16px 32px",
      borderRadius: "50px",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      fontSize: "1.1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none",
      backdropFilter: "blur(10px)",
    },



    // Chatbot modal
    chatbot: {
      position: "fixed",
      bottom: "120px",
      right: "30px",
      width: "350px",
      height: "500px",
      backgroundColor: colors.surface,
      borderRadius: "20px",
      boxShadow: colors.shadow,
      border: `1px solid ${colors.border}`,
      zIndex: 1001,
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  const mainServices = [
    {
      id: 1,
      icon: <FaDesktop />,
      title: "Web Development",
      description: "Creating stunning, responsive websites that drive results and engage your audience.",
      features: ["Custom Website Design", "Responsive Development", "CMS Integration", "E-commerce Solutions", "SEO Optimization"],
      gradient: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      title: "Software Development",
      description: "Building robust, scalable software solutions tailored to your business needs.",
      features: ["Custom Software Solutions", "Enterprise Applications", "API Development", "Quality Assurance", "Legacy System Modernization"],
      gradient: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.primary} 100%)`,
    },
    {
      id: 3,
      icon: <FaPalette />,
      title: "Design & Branding",
      description: "Creating compelling visual identities that resonate with your target audience.",
      features: ["UI/UX Design", "Brand Identity Design", "Logo & Graphics", "Design Systems", "User Experience Strategy"],
      gradient: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.orange} 100%)`,
    },
    {
      id: 4,
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Leveraging cloud technologies to scale your business infrastructure efficiently.",
      features: ["Cloud Migration", "AWS/Azure/GCP Services", "Serverless Architecture", "Cloud Security", "Performance Optimization"],
      gradient: `linear-gradient(135deg, ${colors.green} 0%, ${colors.primary} 100%)`,
    },
    {
      id: 5,
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      description: "Crafting intuitive mobile experiences that users love across all platforms.",
      features: ["iOS App Development", "Android App Development", "Cross-Platform Solutions", "Mobile UI/UX", "App Store Optimization"],
      gradient: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.accent} 100%)`,
    },
    {
      id: 6,
      icon: <FaRocket />,
      title: "Digital Strategy",
      description: "Strategic consulting to accelerate your digital transformation journey.",
      features: ["Digital Transformation", "Technology Consulting", "Process Optimization", "Innovation Strategy", "Growth Planning"],
      gradient: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.purple} 100%)`,
    }
  ];

  const processSteps = [
    { number: 1, title: "Discovery", description: "Understanding your vision, goals, and requirements" },
    { number: 2, title: "Strategy", description: "Crafting the perfect roadmap for your project" },
    { number: 3, title: "Design", description: "Creating stunning visuals and user experiences" },
    { number: 4, title: "Development", description: "Building robust, scalable solutions" },
    { number: 5, title: "Launch", description: "Deploying and optimizing for success" }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <motion.h1 
              style={styles.heroTitle}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Premium Digital Services
            </motion.h1>
            <motion.p 
              style={styles.heroSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming businesses through innovative technology solutions, exceptional design, and strategic digital experiences that drive growth and success.
            </motion.p>
            
            <motion.div 
              style={styles.heroStats}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div style={styles.heroStat}>
                <span style={styles.heroStatNumber}>500+</span>
                <span style={styles.heroStatLabel}>Projects Completed</span>
              </div>
              <div style={styles.heroStat}>
                <span style={styles.heroStatNumber}>50+</span>
                <span style={styles.heroStatLabel}>Happy Clients</span>
              </div>
              <div style={styles.heroStat}>
                <span style={styles.heroStatNumber}>99%</span>
                <span style={styles.heroStatLabel}>Success Rate</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div style={styles.section}>
        <div style={styles.container}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core Services
          </motion.h2>
          
          <motion.p 
            style={styles.sectionSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We deliver comprehensive digital solutions that help businesses thrive in the modern digital landscape.
          </motion.p>

          <motion.div 
            style={styles.servicesGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mainServices.map((service) => (
              <motion.div
                key={service.id}
                style={styles.serviceCard(hoveredCard === service.id)}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.serviceCardTop(service.gradient)}>
                  <div style={styles.serviceIcon}>
                    {service.icon}
                  </div>
                </div>
                <div style={styles.serviceCardBody}>
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <p style={styles.serviceDescription}>{service.description}</p>
                  <ul style={styles.serviceFeatures}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={styles.serviceFeature}>
                        <FaCheck style={styles.featureIcon} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <div style={styles.processSection}>
        <div style={styles.container}>
          <motion.h2 
            style={{...styles.sectionTitle, color: "#ffffff"}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            Our Proven Process
          </motion.h2>
          
          <motion.div 
            style={styles.processSteps}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {processSteps.map((step) => (
              <motion.div 
                key={step.number}
                style={styles.processStep}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div style={styles.stepNumber}>{step.number}</div>
                <h4 style={styles.stepTitle}>{step.title}</h4>
                <p style={styles.stepDescription}>{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <div style={styles.container}>
          <motion.h2 
            style={styles.ctaTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            style={styles.ctaSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how we can help you achieve your digital goals
          </motion.p>
          <motion.a 
            href="#contact"
            style={styles.ctaButton}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <FaArrowRight />
          </motion.a>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <FloatingActionButtons 
        showChatbot={true}
        showWhatsApp={true}
        onChatbotClick={() => setShowChatbot(!showChatbot)}
      />

      {/* Chatbot Modal */}
      <AnimatePresence>
        {showChatbot && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            style={styles.chatbot}
          >
            <FaComments style={{ fontSize: "3rem", color: colors.primary, marginBottom: "20px" }} />
            <h3 style={{ color: colors.text, marginBottom: "10px", textAlign: "center" }}>
              Chat with Us
            </h3>
            <p style={{ color: colors.textLight, textAlign: "center", marginBottom: "20px" }}>
              We're here to help! Send us a message and we'll get back to you shortly.
            </p>
            <button
              onClick={() => setShowChatbot(false)}
              style={{
                ...styles.ctaButton,
                backgroundColor: colors.primary,
                border: "none",
                fontSize: "1rem",
                padding: "12px 24px",
              }}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;