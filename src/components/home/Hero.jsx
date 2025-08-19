import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import softwareTeamImage from "../../assets/images/sideimg1.webp";
import { Helmet } from "react-helmet";

const HeroSection = styled.section`
  position: relative;
  min-height: 80vh;
  background: linear-gradient(135deg, #E0E1DD 0%, #778DA9 100%);
  display: flex;
  align-items: center;
  color: #1B263B;
  overflow: hidden;
  padding: 4rem 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background: rgba(224, 225, 221, 0.1);
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 0;
  }
`;

const HeroContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 2rem;
    gap: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
    padding: 0 1.5rem;
    gap: 1.5rem;
    display: contents;
  }
`;

const MobileContainer = styled.div`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
    gap: 1.5rem;
  }
`;

const DesktopContent = styled.div`
  flex: 0.9;
  max-width: 550px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileContentTop = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const MobileContentBottom = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const HeroImageContainer = styled.div`
  flex: 1.1;
  max-width: 650px;
  position: relative;
  z-index: 3;
  transform: perspective(1200px) rotateY(-8deg) translateZ(20px);
  transition: all 0.7s ease-in-out;
  margin-right: -30px;
  
  &:hover {
    transform: perspective(1200px) rotateY(-3deg) translateZ(30px) scale(1.02);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 600px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 550px;
    margin-right: -20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileImageContainer = styled.div`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    max-width: 450px;
    width: 90%;
    margin: 1rem auto;
    transform: perspective(1000px) rotateY(0deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 350px;
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
  background: radial-gradient(
    circle at center,
    rgba(64, 196, 255, 0.2) 0%,
    rgba(64, 196, 255, 0) 70%
  );
  z-index: -1;
  pointer-events: none;
  opacity: 0.7;
  animation: pulse-glow 6s infinite ease-in-out;
  
  @keyframes pulse-glow {
    0% { opacity: 0.5; transform: scale(0.98); }
    50% { opacity: 0.8; transform: scale(1); }
    100% { opacity: 0.5; transform: scale(0.98); }
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease;
  position: relative;
  z-index: 2;
  display: block;
`;



const ImageWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: visible;
  
  /* Custom border effect */
  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.colors.primary}, 
      transparent 30%, 
      transparent 70%, 
      ${({ theme }) => theme.colors.primary}
    );
    border-radius: 22px;
    z-index: 1;
    animation: rotate-border 8s linear infinite;
  }
  
  @keyframes rotate-border {
    0% { 
      filter: hue-rotate(0deg);
    }
    100% { 
      filter: hue-rotate(360deg);
    }
  }
  
  /* Glass effect overlay */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.05)
    );
    z-index: 4;
    pointer-events: none;
    border-radius: 20px;
    /* Removed backdrop-filter: blur(1px); to eliminate blur */
  }
  
  /* Floating elements decoration */
  .tech-icon {
    position: absolute;
    background: white;
    border-radius: 50%;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    animation: float 3s infinite ease-in-out;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.15) translateY(-5px);
    }
    
    &.icon1 {
      top: -20px;
      right: 80px;
      animation-delay: 0s;
    }
    
    &.icon2 {
      bottom: 30px;
      left: -20px;
      animation-delay: 1s;
    }
    
    &.icon3 {
      bottom: -20px;
      right: 100px;
      animation-delay: 2s;
    }
    
    &.icon4 {
      top: 40px;
      left: -15px;
      animation-delay: 1.5s;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 45px;
      height: 45px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 40px;
      height: 40px;
    }
  }
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  /* Image slices effect */
  .image-slice {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    clip-path: polygon(0 25%, 100% 0%, 100% 75%, 0% 100%);
    opacity: 0.5;
    z-index: 3;
    pointer-events: none;
  }
  
  .image-highlight {
    position: absolute;
    width: 150%;
    height: 50px;
    background: linear-gradient(90deg, 
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,0.5) 50%,
      rgba(255,255,255,0) 100%
    );
    z-index: 4;
    transform: rotate(-45deg) translateX(-50%);
    top: 0;
    left: 0;
    animation: slide-highlight 5s infinite ease-in-out;
    pointer-events: none;
  }
  
  @keyframes slide-highlight {
    0% { top: -100%; left: -100%; }
    50% { top: 100%; left: 100%; }
    100% { top: -100%; left: -100%; }
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(0, 102, 255, 0.1) 0%, 
    rgba(0, 0, 0, 0) 50%
  );
  z-index: 3;
  border-radius: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 4.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(90deg, #1a1a1a 0%, #2a7687 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: ${({ theme }) => theme.fonts.heading};

  span {
    color: ${({ theme }) => theme.colors.primary};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.primary};
    position: relative;
    display: inline-block;
    
    &::after {
      content: "";
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 6px;
      background: rgba(64, 196, 255, 0.2);
      z-index: -1;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 3.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  color: #333333;
  font-weight: 400;
  max-width: 90%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: auto;
    margin-right: auto;
    font-size: 1.2rem;
    margin-bottom: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.1rem;
    max-width: 100%;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    gap: 1rem;
  }
`;

// const StyledButton = styled(Button)`
//   padding: 0.9rem 2rem;
//   font-weight: 600;
//   transition: all 0.3s ease;
//   letter-spacing: 0.5px;
  
//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
//   }
// `;


const StyledButton = styled(Button)`
  padding: 0.9rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  border-radius: 8px; /* Added border radius */
  
  /* Primary button styles */
  background-color: ${({ theme }) => theme.colors.primary || '#3a7bd5'};
  color: white;
  border: 2px solid ${({ theme }) => theme.colors.primary || '#3a7bd5'};
  
  /* Outline button styles */
  &.outline, &[variant="outline"] {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary || '#3a7bd5'};
    border: 2px solid ${({ theme }) => theme.colors.primary || '#3a7bd5'};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary || '#3a7bd5'};
      color: white;
    }
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px; /* Consistent on hover */
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #555;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  z-index: 10;

  &::after {
    content: "";
    width: 2px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-top: 10px;
    display: block;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 0.3;
      height: 20px;
    }
    50% {
      opacity: 0.8;
      height: 40px;
    }
    100% {
      opacity: 0.3;
      height: 20px;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 25px;
  }
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;

  .shape {
    position: absolute;
    opacity: 0.08;
    
    &.shape1 {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary};
      top: 10%;
      left: 5%;
    }
    
    &.shape2 {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: #3a7bd5;
      bottom: 15%;
      right: 8%;
    }
    
    &.shape3 {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: #5cb85c;
      top: 20%;
      right: 15%;
    }

    &.code-block {
      width: 180px;
      height: 120px;
      border-radius: 8px;
      border: 2px dashed rgba(64, 196, 255, 0.3);
      top: 25%;
      left: 15%;
      transform: rotate(-15deg);
    }

    &.circuit {
      width: 150px;
      height: 150px;
      bottom: 15%;
      left: 12%;
      border: 2px solid rgba(138, 43, 226, 0.2);
      transform: rotate(30deg);
      
      &::before, &::after {
        content: "";
        position: absolute;
        background: rgba(138, 43, 226, 0.2);
      }
      
      &::before {
        width: 100%;
        height: 2px;
        top: 50%;
      }
      
      &::after {
        width: 2px;
        height: 100%;
        left: 50%;
      }
    }
  }
`;

// SVG icons for use in the tech icons
const CodeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 18L22 12L16 6" stroke="#4C84FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 6L2 12L8 18" stroke="#4C84FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MobileIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="2" width="14" height="20" rx="2" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18H12.01" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloudIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 10H16.74C16.3659 8.551 15.5892 7.23599 14.4854 6.23751C13.3816 5.23903 12.0063 4.61414 10.5486 4.4452C9.09085 4.27625 7.61444 4.57486 6.34294 5.29933C5.07143 6.02379 4.07437 7.1372 3.49577 8.46573C2.91717 9.79426 2.78512 11.2739 3.11944 12.6879C3.45377 14.102 4.23731 15.3843 5.34817 16.3334C6.45902 17.2825 7.84099 17.8509 9.29639 17.9568C10.7518 18.0627 12.2146 17.7009 13.44 16.92" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 11L16 14L19 11" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DataIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3C16.9706 3 21 4.5 21 6.5V17.5C21 19.5 16.9706 21 12 21C7.02944 21 3 19.5 3 17.5V6.5C3 4.5 7.02944 3 12 3Z" stroke="#9C27B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12C21 14 17 15.5 12 15.5C7 15.5 3 14 3 12" stroke="#9C27B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 6.5C21 8.5 17 10 12 10C7 10 3 8.5 3 6.5" stroke="#9C27B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroSection>
      <FloatingShapes>
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape code-block"></div>
        <div className="shape circuit"></div>
      </FloatingShapes>
    
      <HeroContainer>
        <DesktopContent>
          
          <HeroTitle>
            Innovative <span>Software Solutions</span> for Modern Businesses
          </HeroTitle>

          <HeroSubtitle>
            We create custom software applications, web solutions, and mobile
            apps that drive business growth and enhance operational efficiency.
          </HeroSubtitle>
          
          <HeroButtons>
            <Link to="/services">
              <StyledButton as="span" size="large">
                Our Services
              </StyledButton>
            </Link>
            <Link to="/contact">
              <StyledButton as="span" variant="outline" size="large">
                Get in Touch
              </StyledButton>
            </Link>
          </HeroButtons>


        </DesktopContent>

        <HeroImageContainer>
          <GlowEffect />
          <ImageWrapper>
            <HeroImage 
              src={softwareTeamImage}
              alt="Software development team visualization" 
              loading="eager"
            />
            <ImageOverlay />
            <div className="image-slice"></div>
            <div className="image-highlight"></div>
            <div className="tech-icon icon1"><CodeIcon /></div>
            <div className="tech-icon icon2"><MobileIcon /></div>
            <div className="tech-icon icon3"><CloudIcon /></div>
            <div className="tech-icon icon4"><DataIcon /></div>
          </ImageWrapper>
        </HeroImageContainer>
      </HeroContainer>

      <MobileContainer>
        <MobileContentTop>
          <HeroTitle>
            Innovative <span>Software Solutions</span> for Modern Businesses
          </HeroTitle>

          <HeroSubtitle>
            We create custom software applications, web solutions, and mobile
            apps that drive business growth and enhance operational efficiency.
          </HeroSubtitle>
        </MobileContentTop>

        <MobileImageContainer>
          <ImageWrapper>
            <HeroImage 
              src={softwareTeamImage}
              alt="Software development team visualization" 
              loading="eager"
            />
            <ImageOverlay />
            <div className="image-slice"></div>
            <div className="image-highlight"></div>
            <div className="tech-icon icon1"><CodeIcon /></div>
            <div className="tech-icon icon2"><MobileIcon /></div>
            <div className="tech-icon icon3"><CloudIcon /></div>
          </ImageWrapper>
        </MobileImageContainer>

        <MobileContentBottom>
          <HeroButtons>
            <Link to="/services">
              <StyledButton as="span" size="large">
                Our Services
              </StyledButton>
            </Link>
            <Link to="/contact">
              <StyledButton as="span" variant="outline" size="large">
                Get in Touch
              </StyledButton>
            </Link>
          </HeroButtons>
        </MobileContentBottom>
      </MobileContainer>

      {/* <ScrollIndicator onClick={scrollToServices}>
        Explore More
      </ScrollIndicator> */}
    </HeroSection>
  );
};

export default Hero;

