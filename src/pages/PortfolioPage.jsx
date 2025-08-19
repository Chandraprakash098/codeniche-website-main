
// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FaExternalLinkAlt, FaSearch, FaStar, FaWhatsapp } from "react-icons/fa";
// import { MdLightMode, MdDarkMode } from "react-icons/md";

// // Components
// import Section from "../components/common/Section";
// import SectionHeading from "../components/common/SectionHeading";
// import Button from "../components/common/Button";
// import Chatbot from "../components/common/Chatbot"; // Assuming Chatbot component is in a separate file

// // Import sample project images (replace with your actual images)
// import projectPlaceholder from "../assets/images/opimg.png";

// const PortfolioContainer = styled.div`
//   padding: 120px 2rem 80px;
//   max-width: 1400px;
//   margin: 0 auto;
//   position: relative; // To position fixed buttons
// `;

// const FilterContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 1rem;
//   margin-bottom: 3rem;
// `;

// const FilterButton = styled.button`
//   padding: 0.7rem 1.5rem;
//   background: ${({ active, theme }) => active ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` : "#f5f5f5"};
//   color: ${({ active }) => active ? "white" : "#555"};
//   border: none;
//   border-radius: 30px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background: ${({ active, theme }) => active ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` : "#e9e9e9"};
//     transform: translateY(-3px);
//   }
// `;

// const ProjectsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
//   gap: 2rem;
//   margin-bottom: 4rem;
  
//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ProjectCard = styled(motion.div)`
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: ${({ theme }) => theme.shadows.medium};
//   background: white;
//   transition: all 0.3s ease;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
  
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: ${({ theme }) => theme.shadows.large};
//   }
// `;

// const ProjectImage = styled.div`
//   position: relative;
//   height: 240px;
//   overflow: hidden;
  
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.5s ease;
//   }
  
//   .overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.3);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }
  
//   &:hover {
//     img {
//       transform: scale(1.1);
//     }
    
//     .overlay {
//       opacity: 1;
//     }
//   }
// `;

// const ProjectBadge = styled.span`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   background: ${({ featured }) => featured ? '#FFD700' : 'rgba(0, 0, 0, 0.7)'};
//   color: ${({ featured }) => featured ? '#000' : '#fff'};
//   padding: 0.3rem 0.8rem;
//   border-radius: 20px;
//   font-size: 0.8rem;
//   font-weight: 600;
//   display: flex;
//   align-items: center;
//   gap: 0.3rem;
//   z-index: 2;
// `;

// const ProjectOverlayButton = styled.button`
//   background: white;
//   color: ${({ theme }) => theme.colors.primary};
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: none;
//   margin: 0 0.5rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
  
//   &:hover {
//     background: ${({ theme }) => theme.colors.primary};
//     color: white;
//     transform: translateY(-5px);
//   }
// `;

// const ProjectContent = styled.div`
//   padding: 1.5rem;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
// `;

// const ProjectCategory = styled.div`
//   color: ${({ theme }) => theme.colors.primary};
//   font-size: 0.9rem;
//   font-weight: 600;
//   margin-bottom: 0.5rem;
//   text-transform: uppercase;
// `;

// const ProjectTitle = styled.h3`
//   font-size: 1.4rem;
//   margin-bottom: 1rem;
//   color: ${({ theme }) => theme.colors.text};
// `;

// const ProjectDescription = styled.p`
//   color: ${({ theme }) => theme.colors.textLight};
//   margin-bottom: 1.5rem;
//   line-height: 1.6;
//   flex: 1;
// `;

// const ProjectMeta = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-top: 1rem;
//   border-top: 1px solid #eee;
// `;

// const ProjectTechnologies = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
// `;

// const TechTag = styled.span`
//   background: #f5f5f5;
//   color: ${({ theme }) => theme.colors.textLight};
//   padding: 0.3rem 0.6rem;
//   border-radius: 15px;
//   font-size: 0.8rem;
// `;

// const ProjectLink = styled.a`
//   color: ${({ theme }) => theme.colors.primary};
//   display: flex;
//   align-items: center;
//   gap: 0.3rem;
//   font-weight: 500;
//   transition: all 0.2s ease;
  
//   &:hover {
//     color: ${({ theme }) => theme.colors.secondary};
//   }
// `;

// const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 2rem 0;
// `;

// const PaginationButton = styled.button`
//   padding: 0.5rem 1rem;
//   margin: 0 0.3rem;
//   background: ${({ active, theme }) => active ? theme.colors.primary : "white"};
//   color: ${({ active }) => active ? "white" : "#555"};
//   border: 1px solid ${({ active, theme }) => active ? theme.colors.primary : "#e0e0e0"};
//   border-radius: 5px;
//   cursor: pointer;
//   transition: all 0.2s ease;
  
//   &:hover {
//     background: ${({ active, theme }) => active ? theme.colors.primaryDark : "#f5f5f5"};
//   }
  
//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// const FeaturedProjectSection = styled.div`
//   margin-bottom: 5rem;
// `;

// const FeaturedProject = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 3rem;
//   background: white;
//   border-radius: 1rem;
//   overflow: hidden;
//   box-shadow: ${({ theme }) => theme.shadows.medium};
  
//   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FeaturedProjectImage = styled.div`
//   height: 100%;
//   min-height: 400px;
//   position: relative;
//   overflow: hidden;
  
//   img {
//     width: 100%;
//     height: 80%;
//     object-fit: cover;
//   }
  
//   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     height: 300px;
//   }
// `;

// const FeaturedProjectContent = styled.div`
//   padding: 3rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
  
//   h3 {
//     font-size: 2rem;
//     margin-bottom: 1rem;
//     color: ${({ theme }) => theme.colors.text};
//   }
  
//   p {
//     color: ${({ theme }) => theme.colors.textLight};
//     margin-bottom: 2rem;
//     line-height: 1.7;
//   }
// `;

// const FeaturedTechList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.8rem;
//   margin-bottom: 2rem;
// `;

// const StatisticsSection = styled.div`
//   background: ${({ theme }) => theme.colors.lightGray};
//   padding: 4rem 2rem;
//   border-radius: 1rem;
//   margin: 5rem 0;
// `;

// const StatisticsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 2rem;
  
//   @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//     grid-template-columns: repeat(2, 1fr);
//   }
  
//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const StatItem = styled.div`
//   text-align: center;
// `;

// const StatNumber = styled.div`
//   font-size: 3rem;
//   font-weight: 700;
//   color: ${({ theme }) => theme.colors.primary};
//   margin-bottom: 0.5rem;
// `;

// const StatTitle = styled.div`
//   font-size: 1.1rem;
//   color: ${({ theme }) => theme.colors.text};
// `;

// const TestimonialSection = styled.div`
//   margin: 5rem 0;
// `;

// const TestimonialCard = styled.div`
//   background: white;
//   border-radius: 1rem;
//   padding: 2rem;
//   box-shadow: ${({ theme }) => theme.shadows.medium};
//   position: relative;
  
//   &::before {
//     content: '"';
//     position: absolute;
//     top: 0;
//     left: 2rem;
//     font-size: 8rem;
//     line-height: 1;
//     color: ${({ theme }) => theme.colors.primary}20;
//   }
// `;

// const TestimonialText = styled.p`
//   font-size: 1.1rem;
//   line-height: 1.8;
//   margin-bottom: 2rem;
//   color: ${({ theme }) => theme.colors.text};
//   position: relative;
//   z-index: 1;
// `;

// const TestimonialAuthor = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const AuthorAvatar = styled.div`
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   overflow: hidden;
//   margin-right: 1rem;
  
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const AuthorInfo = styled.div`
//   h4 {
//     font-size: 1.1rem;
//     margin-bottom: 0.3rem;
//     color: ${({ theme }) => theme.colors.text};
//   }
  
//   p {
//     color: ${({ theme }) => theme.colors.textLight};
//     font-size: 0.9rem;
//   }
// `;

// const CTASection = styled.div`
//   background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
//   padding: 4rem 2rem;
//   border-radius: 1rem;
//   text-align: center;
//   margin-top: 5rem;
// `;

// const CTATitle = styled.h2`
//   color: white;
//   font-size: 2.2rem;
//   margin-bottom: 1.5rem;
// `;

// const CTADescription = styled.p`
//   color: rgba(255, 255, 255, 0.9);
//   max-width: 700px;
//   margin: 0 auto 2rem;
//   font-size: 1.1rem;
//   line-height: 1.6;
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
//   background-color: ${props => props.darkMode ? '#fff' : '#333'};
//   color: ${props => props.darkMode ? '#333' : '#fff'};
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1.5rem;
//   border: none;
//   cursor: pointer;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   z-index: 1000;
//   transition: transform 0.3s ease;
  
//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// const PortfolioPage = () => {
//   const [filter, setFilter] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [darkMode, setDarkMode] = useState(false);
//   const projectsPerPage = 6;

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//     // Add logic to toggle theme (e.g., updating CSS variables or a theme provider)
//   };

//   useEffect(() => {
//     document.title = "Portfolio - CodeNiche SoftStudio";
//     window.scrollTo(0, 0);
//   }, []);

//   // Sample projects data - replace with your actual projects
//   const projectsData = [
//     {
//       id: 1,
//       title: "Optima Polyplast ERP",
//       category: "industry",
//       technologies: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
//       description: "A role-based ERP system tailored for Optima Polyplast to streamline operations such as dispatch management, order tracking, inventory control, marketing logs, and real-time challan generation.",
//       image: projectPlaceholder,
//       featured: true,
//       client: "Optima Polyplast Pvt. Ltd."
//     },
//     {
//       id: 2,
//       title: "Hospital Management Solution",
//       category: "healthcare",
//       technologies: ["Angular", "Spring Boot", "MySQL"],
//       description: "End-to-end hospital management system with patient records, appointment scheduling, and billing management.",
//       image: projectPlaceholder,
//       client: "City Medical Center"
//     },
//     {
//       id: 3,
//       title: "Expense Management System",
//       category: "enterprise",
//       technologies: ["React", "Node.js", "PostgreSQL"],
//       description: "Real-time inventory tracking system with barcode scanning, sales reporting, and supplier management.",
//       image: projectPlaceholder,
//       client: "Global Retail Corp"
//     },
//     {
//       id: 5,
//       title: "E-commerce Platform",
//       category: "ecommerce",
//       technologies: ["Next.js", "GraphQL", "MongoDB"],
//       description: "Feature-rich e-commerce platform with product catalog, shopping cart, payment integration, and order management.",
//       image: projectPlaceholder,
//       client: "Fashion Retailers Inc"
//     },
    
//   ];

//   // Filter projects based on selected category
//   const filteredProjects = filter === "all" 
//     ? projectsData 
//     : projectsData.filter(project => project.category === filter);
  
//   // Get featured project
//   const featuredProject = projectsData.find(project => project.featured);
  
//   // Pagination
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
//   const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
//   // Reset to first page when filter changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [filter]);
  
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <PortfolioContainer>
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

//       <SectionHeading
//         subHeading="Our Work"
//         heading="Project Portfolio"
//         description="Explore our diverse portfolio of successful projects across various industries and technologies."
//       />

//       {/* Featured Project */}
//       {featuredProject && (
//         <FeaturedProjectSection>
//           <SectionHeading
//             subHeading="Featured Project"
//             heading={featuredProject.title}
//             description=""
//             align="left"
//           />
          
//           <FeaturedProject>
//             <FeaturedProjectImage>
//               <img src={featuredProject.image} alt={featuredProject.title} />
//             </FeaturedProjectImage>
//             <FeaturedProjectContent>
//               <ProjectCategory>{featuredProject.category}</ProjectCategory>
//               <h3>{featuredProject.title}</h3>
//               <p>{featuredProject.description}</p>
              
//               {/* <FeaturedTechList>
//                 {featuredProject.technologies.map((tech, index) => (
//                   <TechTag key={index}>{tech}</Tag>
//                 ))}
//               </FeaturedTechList> */}
              
//               <p><strong>Client:</strong> {featuredProject.client}</p>
//               {/* <Button as={Link} to={`/portfolio/${featuredProject.id}`}>View Case Study</Button> */}
//             </FeaturedProjectContent>
//           </FeaturedProject>
//         </FeaturedProjectSection>
//       )}

//       {/* Project Filters */}
//       <FilterContainer>
//         {/* Uncomment and adjust filters as needed */}
//         {/* <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
//           All Projects
//         </FilterButton>
//         <FilterButton active={filter === "education"} onClick={() => setFilter("education")}>
//           Education
//         </FilterButton>
//         <FilterButton active={filter === "healthcare"} onClick={() => setFilter("healthcare")}>
//           Healthcare
//         </FilterButton>
//         <FilterButton active={filter === "enterprise"} onClick={() => setFilter("enterprise")}>
//           Enterprise
//         </FilterButton>
//         <FilterButton active={filter === "finance"} onClick={() => setFilter("finance")}>
//           Finance
//         </FilterButton>
//         <FilterButton active={filter === "ecommerce"} onClick={() => setFilter("ecommerce")}>
//           E-commerce
//         </FilterButton> */}
//       </FilterContainer>

//       {/* Projects Grid */}
//       <ProjectsGrid as={motion.div}
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {currentProjects.map((project) => (
//           <ProjectCard key={project.id} variants={itemVariants}>
//             <ProjectImage>
//               <img src={project.image} alt={project.title} />
//               {project.featured && (
//                 <ProjectBadge featured>
//                   <FaStar /> Featured
//                 </ProjectBadge>
//               )}
//               <div className="overlay">
//                 <ProjectOverlayButton as={Link} to={`/portfolio/${project.id}`}>
//                   <FaSearch />
//                 </ProjectOverlayButton>
//                 <ProjectOverlayButton as="a" href="#" target="_blank" rel="noopener noreferrer">
//                   <FaExternalLinkAlt />
//                 </ProjectOverlayButton>
//               </div>
//             </ProjectImage>
//             <ProjectContent>
//               <ProjectCategory>{project.category}</ProjectCategory>
//               <ProjectTitle>{project.title}</ProjectTitle>
//               <ProjectDescription>{project.description}</ProjectDescription>
              
//               <ProjectMeta>
//                 <ProjectTechnologies>
//                   {project.technologies.slice(0, 3).map((tech, index) => (
//                     <TechTag key={index}>{tech}</TechTag>
//                   ))}
//                 </ProjectTechnologies>
//                 <ProjectLink as={Link} to={`/portfolio/${project.id}`}>
//                   View Details <FaExternalLinkAlt size={12} />
//                 </ProjectLink>
//               </ProjectMeta>
//             </ProjectContent>
//           </ProjectCard>
//         ))}
//       </ProjectsGrid>

//       {/* Pagination */}
//       {/* {totalPages > 1 && (
//         <PaginationContainer>
//           <PaginationButton 
//             onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//           >
//             Prev
//           </PaginationButton>
          
//           {[...Array(totalPages)].map((_, index) => (
//             <PaginationButton
//               key={index}
//               active={currentPage === index + 1}
//               onClick={() => setCurrentPage(index + 1)}
//             >
//               {index + 1}
//             </PaginationButton>
//           ))}
          
//           <PaginationButton
//             onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </PaginationButton> 
//          </PaginationContainer>
//       )} */}

//       {/* Statistics Section */}
//       <StatisticsSection>
//         <SectionHeading
//           subHeading="Our Impact"
//           heading="Project Statistics"
//           description="Numbers that showcase our experience and success"
//         />
        
//         <StatisticsGrid>
//           <StatItem>
//             <StatNumber>100+</StatNumber>
//             <StatTitle>Projects Completed</StatTitle>
//           </StatItem>
//           <StatItem>
//             <StatNumber>85%</StatNumber>
//             <StatTitle>Repeat Clients</StatTitle>
//           </StatItem>
//           <StatItem>
//             <StatNumber>12</StatNumber>
//             <StatTitle>Industries Served</StatTitle>
//           </StatItem>
//           <StatItem>
//             <StatNumber>98%</StatNumber>
//             <StatTitle>Client Satisfaction</StatTitle>
//           </StatItem>
//         </StatisticsGrid>
//       </StatisticsSection>

//       {/* Testimonial Section */}
//       <TestimonialSection>
//         <SectionHeading
//           subHeading="Client Feedback"
//           heading="What Our Clients Say"
//           description="Hear from the organizations that have worked with us"
//         />
        
//         <TestimonialCard>
//           <TestimonialText>
//             "The team at CodeNiche SoftStudio delivered beyond our expectations. Their technical expertise, 
//             attention to detail, and commitment to quality resulted in a solution that transformed our 
//             business operations. The project was delivered on time and within budget, and the ongoing 
//             support has been exceptional."
//           </TestimonialText>
          
//           <TestimonialAuthor>
//             <AuthorAvatar>
//               <img src={projectPlaceholder} alt="Client" />
//             </AuthorAvatar>
//             <AuthorInfo>
//               <h4>Jaydeep Chaudhary</h4>
//               <p>COO, Ijanani Codebots PVT LTD</p>
//             </AuthorInfo>
//           </TestimonialAuthor>
//         </TestimonialCard>
//       </TestimonialSection>

//       {/* CTA Section */}
//       <CTASection>
//         <CTATitle>Ready to Start Your Project?</CTATitle>
//         <CTADescription>
//           Let's collaborate to bring your vision to life. Our team of experts is ready to 
//           help you with your next software development project.
//         </CTADescription>
//         <Button as={Link} to="/contact" size="large">
//           Get in Touch
//         </Button>
//       </CTASection>
//     </PortfolioContainer>
//   );
// };

// export default PortfolioPage;

import { useState, useEffect } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaExternalLinkAlt, 
  FaSearch, 
  FaStar, 
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaCode
} from "react-icons/fa";
import { 
  MdOutlineDesignServices,
  MdOutlineWeb,
  MdOutlineDataObject
} from "react-icons/md";
import { RiFlutterFill } from "react-icons/ri";
import { useTheme } from "../contexts/ThemeContext";

// Components
import Section from "../components/common/Section";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import Chatbot from "../components/common/Chatbot";
import FloatingActionButtons from "../components/common/FloatingActionButtons";

// Assets
import optima from "../assets/images/opimg.png";
import hospital from "../assets/images/hosman.png";
import expense from "../assets/images/exp.png";
// import wavePattern from "../assets/patterns/wave.svg";
// import dotsPattern from "../assets/patterns/dots.svg";

// Animations
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Themes based on provided palette
const lightTheme = {
  colors: {
    primary: "#2563EB",
    secondary: "#06B6D4",
    accent: "#EC4899",
    text: "#374151",
    textLight: "#6B7280",
    background: "#F9FAFB",
    cardBg: "#FFFFFF",
    lightGray: "#F3F4F6",
    darkGray: "#E5E7EB",
  },
  shadows: {
    small: "0 1px 3px rgba(0,0,0,0.08)",
    medium: "0 4px 6px rgba(0,0,0,0.1)",
    large: "0 10px 25px rgba(0,0,0,0.12)",
    xlarge: "0 20px 40px rgba(0,0,0,0.15)"
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px"
  }
};

const darkTheme = {
  colors: {
    primary: "#778DA9",
    secondary: "#415A77",
    accent: "#A4B3C7",
    text: "#E0E1DD",
    textLight: "#A4B3C7",
    background: "#0D1B2A",
    cardBg: "#1B263B",
    lightGray: "#1B263B",
    darkGray: "#2A3A4A",
  },
  shadows: {
    small: "0 1px 3px rgba(0,0,0,0.35)",
    medium: "0 4px 6px rgba(0,0,0,0.3)",
    large: "0 10px 25px rgba(0,0,0,0.3)",
    xlarge: "0 20px 40px rgba(0,0,0,0.35)"
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px"
  }
};

// Styled Components
const PortfolioContainer = styled.div`
  padding: 0;
  max-width: 100%;
  margin: 0;
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  transition: all 0.3s ease;
  overflow-x: hidden;
`;

const HeroSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  background: ${({ theme }) => 
    `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.lightGray} 100%)`};
  
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
  }
`;
// background: url(${wavePattern});
const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  
  h1 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: ${({ theme }) => 
      `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 3rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textLight};
    max-width: 800px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
`;

const FloatingShapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
`;

const Shape = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  
  &:nth-child(1) {
    width: 500px;
    height: 500px;
    background: ${({ theme }) => theme.colors.primary};
    top: -100px;
    left: -100px;
    animation: ${floatAnimation} 8s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    width: 300px;
    height: 300px;
    background: ${({ theme }) => theme.colors.secondary};
    bottom: 50px;
    right: 100px;
    animation: ${floatAnimation} 10s ease-in-out infinite;
    animation-delay: 1s;
  }
  
  &:nth-child(3) {
    width: 400px;
    height: 400px;
    background: ${({ theme }) => theme.colors.accent};
    top: 50%;
    right: -100px;
    animation: ${floatAnimation} 12s ease-in-out infinite;
    animation-delay: 2s;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.large};
  background: ${({ theme }) => theme.colors.cardBg};
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.xlarge};
    
    img {
      transform: scale(1.05);
    }
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover .overlay {
    opacity: 1;
  }
`;

const ProjectBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ featured }) => featured ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 'rgba(0, 0, 0, 0.7)'};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  z-index: 2;
  backdrop-filter: blur(5px);
`;

const ProjectOverlayButton = styled.button`
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-5px);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectCategory = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex: 1;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.darkGray};
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;



const SkillsSection = styled(Section)`
  // background: ${({ theme }) => theme.colors.lightGray};
  // padding: 6rem 2rem;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
   
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    opacity: 0.1;
  }
`;
// background: url(${dotsPattern});
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

const PortfolioPage = () => {
  const [filter, setFilter] = useState("all");
  const { mode } = useTheme();
  const darkMode = mode === "dark";

  useEffect(() => {
    document.title = "Portfolio - CodeNiche SoftStudio";
  }, []);

  const projectsData = [
    {
      id: 1,
      title: "Optima Polyplast ERP",
      category: "industry",
      technologies: ["React", "Node.js", "MongoDB", "Cloudinary"],
      description: "A comprehensive ERP system streamlining operations with dispatch management, inventory control, and real-time reporting.",
      image: optima,
      featured: true,
      client: "Optima Polyplast Pvt. Ltd."
    },
    {
      id: 2,
      title: "Healthcare Management",
      category: "healthcare",
      technologies: ["React", "Node.js", "MySQL"],
      description: "End-to-end hospital management system with patient records and appointment scheduling.",
      image: hospital,
      client: "City Medical Center"
    },
    {
      id: 3,
      title: "Expense Managemet System",
      category: "ecommerce",
      technologies: [".Net", "MySQL"],
      description: "Feature-rich platform with product catalog, shopping cart, and payment integration.",
      image: expense ,
      client: "Fashion Retailers Inc"
    },
  ];

  const skillsData = [
    {
      title: "Web Development",
      description: "Building responsive, performant web applications with modern frameworks and best practices.",
      icon: <MdOutlineWeb />
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces with attention to usability and aesthetic appeal.",
      icon: <MdOutlineDesignServices />
    },
    {
      title: "Mobile Apps",
      description: "Developing cross-platform mobile applications with Flutter and React Native.",
      icon: <RiFlutterFill />
    },
    {
      title: "Backend Systems",
      description: "Designing scalable server architectures and APIs for robust applications.",
      icon: <MdOutlineDataObject />
    }
  ];

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <PortfolioContainer>
        <FloatingActionButtons showChatbot={true} showWhatsApp={true} />
        
        {/* Projects Section */}
        <Section>
          <SectionHeading
            subHeading="Our Work"
            heading="Featured Projects"
          />
          <ProjectsGrid>
            {projectsData.map((project) => (
              <ProjectCard 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                  {project.featured && (
                    <ProjectBadge featured>
                      <FaStar /> Featured
                    </ProjectBadge>
                  )}
                  <div className="overlay">
                  </div>
                </ProjectImage>
                <ProjectContent>
                  <ProjectCategory>{project.category}</ProjectCategory>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectMeta>
                    <ProjectTechnologies>
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <TechTag key={index}>{tech}</TechTag>
                      ))}
                    </ProjectTechnologies>
                    {/* <ProjectLink to={`/portfolio/${project.id}`}>
                      View Details <FaExternalLinkAlt size={12} />
                    </ProjectLink> */}
                  </ProjectMeta>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Section>

        {/* Skills Section */}
        <SkillsSection>
          <SectionHeading
            subHeading="Our Expertise"
            heading="What We Do Best"
            description="Comprehensive services to bring your digital vision to life"
          />
          <SkillsGrid>
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsSection>

        {/* Floating Action Buttons */}
        <FloatingActionButtons 
          showChatbot={false}
          showWhatsApp={true}
        />
      </PortfolioContainer>
    </ThemeProvider>
  );
};

export default PortfolioPage;