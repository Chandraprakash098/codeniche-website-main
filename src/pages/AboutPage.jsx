// import { useState, useEffect } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import { MdLightMode, MdDarkMode } from "react-icons/md";
// import Chatbot from "../components/common/Chatbot"; 
// import cto from '../assets/images/ceo.png';
// import ceo from '../assets/images/ceoimgre.png';
// import ctoimage from '../assets/images/ctoimg.jpeg'
// import officeimg from '../assets/images/officeimg.jpeg';
// import styled from "styled-components";

// // Placeholder images
// const ceoImage = "/api/placeholder/400/400";
// const ctoImage = "/api/placeholder/400/400";

// const AboutPage = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
  
//   useEffect(() => {
//     setIsVisible(true);
    
//     // Check if user has a saved preference
//     const savedTheme = localStorage.getItem('darkMode');
//     if (savedTheme) {
//       setDarkMode(savedTheme === 'true');
//     }
//   }, []);

//   // Apply theme whenever darkMode changes
//   useEffect(() => {
//     document.body.classList.toggle('dark-mode', darkMode);
//     localStorage.setItem('darkMode', darkMode);
//   }, [darkMode]);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };
  
//   return (
//     <PageContainer className={darkMode ? 'dark-mode' : 'light-mode'}>
//       <Chatbot />
//       <WhatsAppButton
//         href="https://wa.me/9408534684"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaWhatsapp />
//       </WhatsAppButton>
//       {/* <ThemeToggle darkMode={darkMode} onClick={toggleTheme}>
//         {darkMode ? <MdLightMode /> : <MdDarkMode />}
//       </ThemeToggle> */}
      
//       <HeroSection darkMode={darkMode}>
//         <HeroContent>
//           <HeroTitle>We Build Software That Matters</HeroTitle>
//           <HeroSubtitle>
//             At CodeNiche, we're passionate about creating innovative solutions that transform businesses and improve lives.
//           </HeroSubtitle>
//         </HeroContent>
//       </HeroSection>
      
//       <StorySection>
//         <SectionTitle darkMode={darkMode}>Our Story</SectionTitle>
//         <StoryContent>
//           <StoryText>
//             <p>Founded in 2024, CodeNiche began with a simple mission: to build software that solves real problems. Our founders recognized that in the rapidly evolving tech landscape, many solutions were becoming increasingly complex without adding proportional value.</p>
//             <p>Starting with a small team of dedicated developers, we focused on creating elegant, efficient solutions for businesses across various industries. As our reputation for quality and innovation grew, so did our team and our capabilities.</p>
//             <p>Today, CodeNiche has evolved into a full-service software development company with over 120 employees across three global offices. We pride ourselves on maintaining the same commitment to excellence and client satisfaction that defined us from day one.</p>
//           </StoryText>
//           <StoryImage>
//             <img src={officeimg} alt="CodeNiche office" />
//           </StoryImage>
//         </StoryContent>
//       </StorySection>
      
//       <MissionSection darkMode={darkMode}>
//         <MissionContent>
//           <SectionTitle darkMode={darkMode}>Our Mission & Values</SectionTitle>
//           <MissionStatement>
//             To empower businesses through thoughtful technology solutions that drive growth, efficiency, and innovation while maintaining the highest standards of quality and client satisfaction.
//           </MissionStatement>
          
//           <ValueGrid>
//             <ValueCard darkMode={darkMode}>
//               <ValueIcon>💡</ValueIcon>
//               <ValueTitle>Innovation</ValueTitle>
//               <p>We constantly push boundaries to discover new and better ways to solve problems.</p>
//             </ValueCard>
            
//             <ValueCard darkMode={darkMode}>
//               <ValueIcon>🤝</ValueIcon>
//               <ValueTitle>Partnership</ValueTitle>
//               <p>We build lasting relationships with our clients based on trust, transparency, and mutual success.</p>
//             </ValueCard>
            
//             <ValueCard darkMode={darkMode}>
//               <ValueIcon>✨</ValueIcon>
//               <ValueTitle>Excellence</ValueTitle>
//               <p>We are committed to delivering the highest quality in everything we do.</p>
//             </ValueCard>
            
//             <ValueCard darkMode={darkMode}>
//               <ValueIcon>🌱</ValueIcon>
//               <ValueTitle>Growth</ValueTitle>
//               <p>We foster continuous learning and development, both for our team and our clients.</p>
//             </ValueCard>
            
//             <ValueCard darkMode={darkMode}>
//               <ValueIcon>🔄</ValueIcon>
//               <ValueTitle>Adaptability</ValueTitle>
//               <p>We embrace change and evolve our approaches to stay ahead of industry trends.</p>
//             </ValueCard>
            
//             <ValueCard darkMode={darkMode}>
//               <ValueIcon>🌍</ValueIcon>
//               <ValueTitle>Impact</ValueTitle>
//               <p>We measure our success by the positive difference we make for our clients and communities.</p>
//             </ValueCard>
//           </ValueGrid>
//         </MissionContent>
//       </MissionSection>
      
//       <TeamSection>
//         <SectionTitle darkMode={darkMode}>Leadership Team</SectionTitle>
//         <TeamGrid>
//           <TeamMember
//             initial={{ opacity: 0, y: 50 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.5 }}
//             darkMode={darkMode}
//           >
//             <MemberImage src={ceo} alt="CEO" />
//             <MemberInfo>
//               <MemberName>Harikesh Morya</MemberName>
//               <MemberTitle>Chief Executive Officer</MemberTitle>
//               <MemberBio>
//                 With over 20 years in the tech industry, Harikesh brings a wealth of experience and vision to CodeNiche. Before founding the company, he held leadership positions at several Fortune 500 tech firms, where he developed a reputation for strategic innovation and business growth. Alex holds an MBA from Stanford and a BS in Computer Science from MIT.
//               </MemberBio>
//             </MemberInfo>
//           </TeamMember>
          
//           <TeamMember
//             initial={{ opacity: 0, y: 50 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             darkMode={darkMode}
//           >
//             <MemberImage src={ctoimage} alt="CTO" />
//             <MemberInfo>
//               <MemberName>Mahil Morya</MemberName>
//               <MemberTitle>Chief Technology Officer</MemberTitle>
//               <MemberBio>
//                 Mahil leads our technical strategy and innovation initiatives. A brilliant engineer with a background in AI and distributed systems, she previously led development teams at several innovative startups. Sophia has multiple patents to her name and regularly speaks at major tech conferences. She holds a Ph.D. in Computer Science from UC Berkeley.
//               </MemberBio>
//             </MemberInfo>
//           </TeamMember>
          
//           <TeamMember
//             initial={{ opacity: 0, y: 50 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             darkMode={darkMode}
//           >
//             <MemberImage src={cto} alt="COO" />
//             <MemberInfo>
//               <MemberName>Jaydip Chaudhary</MemberName>
//               <MemberTitle>Chief Operating Officer</MemberTitle>
//               <MemberBio>
//                 Jaydip Chaudhary oversees our day-to-day operations, ensuring that we deliver exceptional service and value to our clients. With a background in management consulting and operations at scale, he brings structure and efficiency to our growing organization. Marcus is known for his people-first approach to leadership and holds an MBA from Harvard Business School.
//               </MemberBio>
//             </MemberInfo>
//           </TeamMember>
//         </TeamGrid>
//       </TeamSection>
      
//       <ContactCTA darkMode={darkMode}>
//         <CTAContent>
//           <CTATitle>Ready to Work With Us?</CTATitle>
//           <CTAText>
//             Let's discuss how CodeNiche can help bring your vision to life with innovative software solutions tailored to your specific needs.
//           </CTAText>
//           <CTAButton href="/contact" darkMode={darkMode}>Get in Touch</CTAButton>
//         </CTAContent>
//       </ContactCTA>
//     </PageContainer>
//   );
// };

// // Styled components with dark mode support
// const PageContainer = styled.div`
//   padding-top: 100px;
//   overflow-x: hidden;
//   position: relative;
//   transition: background-color 0.3s ease, color 0.3s ease;
  
//   &.light-mode {
//     background-color: #fff;
//     color: #333;
//   }
  
//   &.dark-mode {
//     background-color: #121212;
//     color: #f5f5f5;
//   }
// `;

// const HeroSection = styled.section`
//   position: relative;
//   height: 30vh;
//   min-height: 400px;
//   display: flex;
//   align-items: center;
//   background: ${props => props.darkMode 
//     ? 'linear-gradient(135deg, #000000 0%, #1a1a2e 100%)'
//     : 'linear-gradient(135deg, #0a2540 0%, #1a4980 100%)'};
//   color: white;
//   margin-bottom: 4rem;
//   margin-top: -70px;
//   transition: background 0.3s ease;
// `;

// const HeroContent = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 2rem;
//   padding-top: 2rem;
//   width: 100%;
//   z-index: 2;
// `;

// const HeroTitle = styled.h1`
//   font-size: 4rem;
//   margin-bottom: 1.5rem;
//   font-weight: 700;
  
//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//   }
// `;

// const HeroSubtitle = styled.p`
//   font-size: 1.5rem;
//   max-width: 700px;
//   line-height: 1.6;
//   margin-bottom: 2rem;
  
//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//   }
// `;

// const StorySection = styled.section`
//   max-width: 1200px;
//   margin: 0 auto 6rem;
//   padding: 0 2rem;
// `;

// const SectionTitle = styled.h2`
//   font-size: 2.5rem;
//   margin-bottom: 1.5rem;
//   position: relative;
//   display: inline-block;
//   color: ${props => props.darkMode ? '#f5f5f5' : '#333'};
//   transition: color 0.3s ease;
  
//   &:after {
//     content: '';
//     position: absolute;
//     bottom: -10px;
//     left: 0;
//     width: 80px;
//     height: 4px;
//     background-color: #ff6b00;
//   }
// `;

// const StoryContent = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 3rem;
//   align-items: center;
  
//   @media (max-width: 992px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const StoryText = styled.div`
//   font-size: 1.1rem;
//   line-height: 1.8;
// `;

// const StoryImage = styled.div`
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  
//   img {
//     width: 100%;
//     height: auto;
//     display: block;
//   }
// `;

// const MissionSection = styled.section`
//   background-color: ${props => props.darkMode ? '#1a1a2e' : '#f8f9fa'};
//   padding: 1rem 0;
//   margin-bottom: 6rem;
//   transition: background-color 0.3s ease;
// `;

// const MissionContent = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 2rem;
//   text-align: center;
// `;

// const MissionStatement = styled.p`
//   font-size: 1.5rem;
//   max-width: 900px;
//   margin: 0 auto 3rem;
//   line-height: 1.7;
// `;

// const ValueGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 2rem;
  
//   @media (max-width: 992px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
  
//   @media (max-width: 576px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ValueCard = styled.div`
//   background-color: ${props => props.darkMode ? '#252538' : 'white'};
//   color: ${props => props.darkMode ? '#f5f5f5' : '#333'};
//   border-radius: 10px;
//   padding: 2rem;
//   box-shadow: ${props => props.darkMode 
//     ? '0 5px 15px rgba(0, 0, 0, 0.3)' 
//     : '0 5px 15px rgba(0, 0, 0, 0.05)'};
//   transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: ${props => props.darkMode 
//       ? '0 15px 30px rgba(0, 0, 0, 0.4)' 
//       : '0 15px 30px rgba(0, 0, 0, 0.1)'};
//   }
// `;

// const ValueIcon = styled.div`
//   font-size: 2.5rem;
//   margin-bottom: 1rem;
//   color: #ff6b00;
// `;

// const ValueTitle = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
// `;

// const TeamSection = styled.section`
//   max-width: 1200px;
//   margin: 0 auto 6rem;
//   padding: 0 2rem;
// `;

// const TeamGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 3rem;
  
//   @media (max-width: 992px) {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 2rem;
//   }
  
//   @media (max-width: 576px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const TeamMember = styled.div`
//   position: relative;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: ${props => props.darkMode 
//     ? '0 10px 20px rgba(0, 0, 0, 0.3)' 
//     : '0 10px 20px rgba(0, 0, 0, 0.1)'};
//   transition: box-shadow 0.3s ease;
// `;

// const MemberImage = styled.img`
//   width: 100%;
//   height: auto;
//   display: block;
//   transition: transform 0.5s ease;
// `;

// const MemberInfo = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
//   color: white;
//   padding: 1.5rem;
//   transform: translateY(0);
//   transition: transform 0.3s ease;
// `;

// const MemberName = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 0.5rem;
// `;

// const MemberTitle = styled.p`
//   font-size: 1rem;
//   opacity: 0.9;
//   margin-bottom: 0.5rem;
// `;

// const MemberBio = styled.p`
//   font-size: 0.9rem;
//   line-height: 1.6;
//   height: 0;
//   opacity: 0;
//   overflow: hidden;
//   transition: height 0.3s ease, opacity 0.3s ease;
  
//   ${TeamMember}:hover & {
//     height: auto;
//     opacity: 1;
//     margin-top: 1rem;
//   }
// `;

// const ContactCTA = styled.section`
//   background: ${props => props.darkMode 
//     ? 'linear-gradient(135deg, #000000 0%, #1a1a2e 100%)' 
//     : 'linear-gradient(135deg, #001f3f 0%, #003366 100%)'};
//   padding: 5rem 0;
//   color: white;
//   text-align: center;
//   margin-bottom: 4rem;
//   transition: background 0.3s ease;
// `;

// const CTAContent = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 0 2rem;
// `;

// const CTATitle = styled.h2`
//   font-size: 2.5rem;
//   margin-bottom: 1.5rem;
// `;

// const CTAText = styled.p`
//   font-size: 1.2rem;
//   margin-bottom: 2rem;
//   line-height: 1.6;
// `;

// const CTAButton = styled.a`
//   display: inline-block;
//   background-color: ${props => props.darkMode ? '#ff6b00' : 'white'};
//   color: ${props => props.darkMode ? 'white' : '#ff6b00'};
//   font-weight: 600;
//   padding: 1rem 2rem;
//   border-radius: 50px;
//   text-decoration: none;
//   transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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
//   transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  
//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// export default AboutPage;



import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Chatbot from "../components/common/Chatbot";
import FloatingActionButtons from "../components/common/FloatingActionButtons";
import cto from '../assets/images/ceo.png';
import ceo from '../assets/images/ceoimgre.png';
import ctoimage from '../assets/images/ctoimg.jpeg';
import officeimg from '../assets/images/officeimg.jpeg';
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

// Theme colors based on the provided palette
// Palette: 0D1B2A (deep), 1B263B (dark), 415A77 (steel), 778DA9 (dusty), E0E1DD (light)
const lightTheme = {
  body: '#F9FAFB',
  text: '#374151',
  background: '#F9FAFB',
  cardBg: '#FFFFFF',
  heroBg: '#0077b6',
  ctaBg: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
  shadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  buttonBg: '#2563EB',
  buttonText: '#FFFFFF',
  valueCardBg: '#FFFFFF',
  teamCardBg: '#FFFFFF',
  accent: '#2563EB',
};

const darkTheme = {
  body: '#0D1B2A',
  text: '#E0E1DD',
  background: '#0D1B2A',
  cardBg: '#1B263B',
  heroBg: 'linear-gradient(135deg, #0D1B2A 0%, #1B263B 100%)',
  ctaBg: 'linear-gradient(135deg, #0D1B2A 0%, #1B263B 100%)',
  shadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
  buttonBg: '#778DA9',
  buttonText: '#E0E1DD',
  valueCardBg: '#1B263B',
  teamCardBg: '#1B263B',
  accent: '#778DA9',
};

const AboutPage = () => {
  const { mode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const darkMode = mode === "dark";
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <PageContainer>
        <HeroSection>
          <HeroContent>
            <HeroTitle>We Build Software That Matters</HeroTitle>
            <HeroSubtitle>
              At CodeNiche, we're passionate about creating innovative solutions that transform businesses and improve lives.
            </HeroSubtitle>
          </HeroContent>
        </HeroSection>
        
        <StorySection>
          <SectionTitle>Our Story</SectionTitle>
          <StoryContent>
            <StoryText>
              <p>Founded in 2024, CodeNiche began with a simple mission: to build software that solves real problems. Our founders recognized that in the rapidly evolving tech landscape, many solutions were becoming increasingly complex without adding proportional value.</p>
              <p>Starting with a small team of dedicated developers, we focused on creating elegant, efficient solutions for businesses across various industries. As our reputation for quality and innovation grew, so did our team and our capabilities.</p>
              <p>Today, CodeNiche has evolved into a full-service software development company with over 120 employees across three global offices. We pride ourselves on maintaining the same commitment to excellence and client satisfaction that defined us from day one.</p>
            </StoryText>
            <StoryImage>
              <img src={officeimg} alt="CodeNiche office" />
            </StoryImage>
          </StoryContent>
        </StorySection>
        
        <MissionSection>
          <MissionContent>
            <SectionTitle>Our Mission & Values</SectionTitle>
            <MissionStatement>
              To empower businesses through thoughtful technology solutions that drive growth, efficiency, and innovation while maintaining the highest standards of quality and client satisfaction.
            </MissionStatement>
            
            <ValueGrid>
              <ValueCard>
                <ValueIcon>💡</ValueIcon>
                <ValueTitle>Innovation</ValueTitle>
                <p>We constantly push boundaries to discover new and better ways to solve problems.</p>
              </ValueCard>
              
              <ValueCard>
                <ValueIcon>🤝</ValueIcon>
                <ValueTitle>Partnership</ValueTitle>
                <p>We build lasting relationships with our clients based on trust, transparency, and mutual success.</p>
              </ValueCard>
              
              <ValueCard>
                <ValueIcon>✨</ValueIcon>
                <ValueTitle>Excellence</ValueTitle>
                <p>We are committed to delivering the highest quality in everything we do.</p>
              </ValueCard>
              
              <ValueCard>
                <ValueIcon>🌱</ValueIcon>
                <ValueTitle>Growth</ValueTitle>
                <p>We foster continuous learning and development, both for our team and our clients.</p>
              </ValueCard>
              
              <ValueCard>
                <ValueIcon>🔄</ValueIcon>
                <ValueTitle>Adaptability</ValueTitle>
                <p>We embrace change and evolve our approaches to stay ahead of industry trends.</p>
              </ValueCard>
              
              <ValueCard>
                <ValueIcon>🌍</ValueIcon>
                <ValueTitle>Impact</ValueTitle>
                <p>We measure our success by the positive difference we make for our clients and communities.</p>
              </ValueCard>
            </ValueGrid>
          </MissionContent>
        </MissionSection>
        
        <TeamSection>
          <SectionTitle>Leadership Team</SectionTitle>
          <TeamGrid>
            <TeamMember
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <MemberImage src={ceo} alt="CEO" />
              <MemberInfo>
                <MemberName>Harikesh Maurya</MemberName>
                <MemberTitle>Chief Executive Officer</MemberTitle>
                <MemberBio>
                  With over 10 years in the tech industry, Harikesh brings a wealth of experience and vision to CodeNiche. Before founding the company, he held leadership positions at several Fortune 500 tech firms, where he developed a reputation for strategic innovation and business growth.
                </MemberBio>
              </MemberInfo>
            </TeamMember>
            
            <TeamMember
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MemberImage src={ctoimage} alt="CTO" />
              <MemberInfo>
                <MemberName>Mahil Maurya</MemberName>
                <MemberTitle>Chief Technology Officer</MemberTitle>
                <MemberBio>
                  Mahil leads our technical strategy and innovation initiatives. He previously led development teams at several innovative startups.
                </MemberBio>
              </MemberInfo>
            </TeamMember>
            
            <TeamMember
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <MemberImage src={cto} alt="COO" />
              <MemberInfo>
                <MemberName>Jaydeep Chaudhary</MemberName>
                <MemberTitle>Chief Operating Officer</MemberTitle>
                <MemberBio>
                  Jaydip Chaudhary oversees our day-to-day operations, ensuring that we deliver exceptional service and value to our clients. With a background in management consulting and operations at scale, he brings structure and efficiency to our growing organization.
                </MemberBio>
              </MemberInfo>
            </TeamMember>
          </TeamGrid>
        </TeamSection>
        
        <ContactCTA>
          <CTAContent>
            <CTATitle>Ready to Work With Us?</CTATitle>
            <CTAText>
              Let's discuss how CodeNiche can help bring your vision to life with innovative software solutions tailored to your specific needs.
            </CTAText>
            <CTAButton href="/contact">Get in Touch</CTAButton>
          </CTAContent>
        </ContactCTA>

        {/* Floating Action Buttons */}
        <FloatingActionButtons 
          showChatbot={true}
          showWhatsApp={true}
        />
      </PageContainer>
    </ThemeProvider>
  );
};

// Styled components with theme support
const PageContainer = styled.div`
  padding-top: 100px;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const HeroSection = styled.section`
  position: relative;
  height: 50vh;
  // min-height: 400px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.heroBg};
  color: white;
  margin-bottom: 2rem;
  margin-top: -100px;
  transition: background 0.3s ease;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  // padding-top: 2rem;
  width: 100%;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3.25rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  line-height: 1.6;
  // margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StorySection = styled.section`
  max-width: 1200px;
  margin: 0 auto 6rem;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.accent};
  }
`;

const StoryContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const StoryText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
`;

const StoryImage = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const MissionSection = styled.section`
  background-color: ${({ theme }) => theme.background};
  padding: 1rem 0;
  margin-bottom: 6rem;
  transition: background-color 0.3s ease;
`;

const MissionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const MissionStatement = styled.p`
  font-size: 1.5rem;
  max-width: 900px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background-color: ${({ theme }) => theme.valueCardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.accent};
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const TeamSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 6rem;
  padding: 0 2rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.teamCardBg};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: box-shadow 0.3s ease;
`;

const MemberImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const MemberTitle = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.accent};
`;

const MemberBio = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
`;

const ContactCTA = styled.section`
  background: #0077b6;
  padding: 5rem 0;
  color: white;
  text-align: center;
  // margin-bottom: 4rem;
  transition: background 0.3s ease;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: #023e8a;
  color: ${({ theme }) => theme.buttonText};
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;



export default AboutPage;