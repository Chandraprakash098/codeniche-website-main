import { useState, useEffect } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaExternalLinkAlt, 
  FaSearch, 
  FaStar, 
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaTimes,
  FaEye
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
import expense from "../assets/images/exp1.png";
import library from '../assets/images/library.png'
import gaushala from '../assets/images/gaushala.png'
import school from '../assets/images/school.png'
import bike from '../assets/images/bike.png'

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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.darkGray};
  gap: 1rem;
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex: 1;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ViewDetailsButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

// Modal Styles
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.xlarge};
`;

const ModalHeader = styled.div`
  position: relative;
  padding: 2rem 2rem 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.text};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff4757;
    color: white;
    transform: scale(1.1);
  }
`;

const ModalBody = styled.div`
  padding: 0 2rem 2rem 2rem;
`;

const ModalCategory = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

const ModalDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2rem;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const ClientInfo = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  
  h4 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  p {
    color: ${({ theme }) => theme.colors.textLight};
    margin: 0;
  }
`;

const TechnologiesSection = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
    font-weight: 600;
  }
`;

const TechnologiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechTagLarge = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const SkillsSection = styled(Section)`
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
  const [selectedProject, setSelectedProject] = useState(null);
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
      shortDescription: "A comprehensive ERP system streamlining operations with dispatch management and inventory control...",
      fullDescription: "A comprehensive ERP system streamlining operations with dispatch management, inventory control, and real-time reporting. It helps the company manage day-to-day expenses and earnings while maintaining a fixed budget. The system ensures transparency, efficiency, and accuracy in tracking financial transactions. The application features advanced reporting capabilities, user role management, automated workflows, and integration with third-party services for enhanced functionality.",
      image: optima,
      featured: true,
      client: "Optima Polyplast Pvt. Ltd."
    },
    
    {
      id: 2,
      title: "The Optima Expense-Earning Management System",
      category: "ecommerce",
      technologies: [".Net", "MySQL"],
      shortDescription: "Web-based financial management application for tracking expenses and earnings with budget control...",
      fullDescription: "The Optima Expense-Earning Management System is a web-based financial management application developed for Optima Polyplast LLP. It helps the company manage day-to-day expenses and earnings while maintaining a fixed budget. The system ensures transparency, efficiency, and accuracy in tracking financial transactions. Features include automated expense categorization, budget alerts, financial reporting dashboards, approval workflows, and integration with accounting systems for seamless financial management.",
      image: expense,
      client: "Optima Polyplast LLP"
    },
    {
      id: 3,
      title: "Library Book Management System",
      category: "Industry",
      technologies: ["React.js","Tailwind CSS","Node.js", "mongoDB"],
      shortDescription: "A full-stack web application designed to streamline the library book request...",
      fullDescription: "A full-stack web application designed to streamline the library book request and approval process. Users can browse available books, request titles they are interested in, and track the status of their requests. The admin panel allows librarians to view all user requests, approve or reject them with specific reasons, and manage book availability efficiently.",
      image: library,
      
    },
    {
      id: 4,
      title: "Gausala Management and Customer Engagement Application",
      category: "Industry",
      technologies: [".Net", "MySQL"],
      shortDescription: "Streamlines Gausala operations enabling customers to order dairy products and engage through campaigns.",
      fullDescription: "The purpose of this application is to streamline the operations of a Gausala (cow shelter), enabling customers to order dairy products, raise complaints, donate rotis, and engage with the Gausala through marketing campaigns. The system includes inventory management for dairy products, customer relationship management, donation tracking, complaint resolution system, and marketing campaign tools. It also features automated notifications, payment processing, and detailed analytics for operational insights.",
      image: gaushala,
      client: "Local Gausala Organization"
    },
    {
      id: 5,
      title: "School Website",
      category: "Industry",
      technologies: ["Node.js","React.js","mongoDB","Tailwind CSS"],
      shortDescription: "A responsive and interactive school website built to provide seamless access to information for students",
      fullDescription: "A responsive and interactive school website built to provide seamless access to information for students, parents, and administrators. The platform includes dedicated sections for academics, events, announcements, and contact details, ensuring smooth communication and transparency.✨ Key Features Dynamic homepage with school highlights and announcements Student and parent portals for easy access to resources Responsive design for optimal viewing on all devices Integration with social media platforms for broader engagement Contact forms for inquiries and feedback",
      image: school,
      
    },
    {
      id: 6,
      title: "Anvi Bike Project",
      category: "ecommerce",
      technologies: ["React.js","Tailwind CSS"],
      shortDescription: "A modern and responsive website built for Anvi Bike..",
      fullDescription: "A modern and responsive website built for Anvi Bike, a local bike repairing and service shop. The platform is designed to enhance customer engagement and streamline service booking. Users can explore services, view pricing, and request repairs online, while the shop owner can efficiently manage customer inquiries.",
      image: bike,
      
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

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

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
                  <div className="overlay"></div>
                </ProjectImage>
                <ProjectContent>
                  <ProjectCategory>{project.category}</ProjectCategory>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.shortDescription}</ProjectDescription>
                  <ProjectMeta>
                    <ProjectTechnologies>
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <TechTag key={index}>{tech}</TechTag>
                      ))}
                      {/* {project.technologies.length > 2 && (
                        <TechTag>+{project.technologies.length - 2} more</TechTag>
                      )} */}
                    </ProjectTechnologies>
                    <ViewDetailsButton onClick={() => handleViewDetails(project)}>
                      <FaEye /> View Details
                    </ViewDetailsButton>
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

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            >
              <ModalContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ModalHeader>
                  <div>
                    <ModalCategory>{selectedProject.category}</ModalCategory>
                    <ModalTitle>{selectedProject.title}</ModalTitle>
                    {selectedProject.featured && (
                      <ProjectBadge featured style={{ position: 'static', marginTop: '0.5rem' }}>
                        <FaStar /> Featured
                      </ProjectBadge>
                    )}
                  </div>
                  <CloseButton onClick={handleCloseModal}>
                    <FaTimes />
                  </CloseButton>
                </ModalHeader>
                <ModalBody>
                  <ModalDescription>{selectedProject.fullDescription}</ModalDescription>
                  
                  {selectedProject.client && (
                    <ClientInfo>
                      <h4>Client</h4>
                      <p>{selectedProject.client}</p>
                    </ClientInfo>
                  )}
                  
                  <TechnologiesSection>
                    <h4>Technologies Used</h4>
                    <TechnologiesGrid>
                      {selectedProject.technologies.map((tech, index) => (
                        <TechTagLarge key={index}>{tech}</TechTagLarge>
                      ))}
                    </TechnologiesGrid>
                  </TechnologiesSection>
                </ModalBody>
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>

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