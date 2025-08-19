// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
//   FaGithub,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa";
// import Logo from "../components/common/Logo";

// const FooterContainer = styled.footer`
//   // background-color: ${({ theme }) => theme.colors.dark};
//   background-color: ${({ scrolled, theme }) =>
//     scrolled ? theme.colors.headerBg : "rgba(43, 45, 60, 0.95)"};
//   color: ${({ theme }) => theme.colors.light};
//   padding: 5rem 0 0;
// `;

// const FooterContent = styled.div`
//   max-width: 1400px;
//   margin: 0 auto;
//   padding: 0 2rem;
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 2rem;

//   @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FooterColumn = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const FooterHeading = styled.h3`
//   font-size: 1.2rem;
//   margin-bottom: 1.5rem;
//   position: relative;

//   &::after {
//     content: "";
//     position: absolute;
//     left: 0;
//     bottom: -0.5rem;
//     width: 50px;
//     height: 2px;
//     background-color: ${({ theme }) => theme.colors.primary};
//   }
// `;

// const FooterLinks = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 0.75rem;
// `;

// const FooterLink = styled(Link)`
//   color: ${({ theme }) => theme.colors.gray};
//   transition: color ${({ theme }) => theme.transitions.fast};

//   &:hover {
//     color: ${({ theme }) => theme.colors.primary};
//   }
// `;

// const ContactItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;
//   color: ${({ theme }) => theme.colors.gray};
// `;

// const ContactIcon = styled.div`
//   margin-right: 1rem;
//   color: ${({ theme }) => theme.colors.primary};
// `;

// const SocialLinks = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 1.5rem;
// `;

// const SocialLink = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: rgba(255, 255, 255, 0.1);
//   color: ${({ theme }) => theme.colors.light};
//   transition: all ${({ theme }) => theme.transitions.fast};

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.primary};
//     transform: translateY(-3px);
//   }
// `;

// const BottomBar = styled.div`
//   margin-top: 4rem;
//   padding: 1.5rem 0;
//   background-color: rgba(0, 0, 0, 0.2);
//   text-align: center;
// `;

// const Copyright = styled.p`
//   font-size: 0.9rem;
//   color: ${({ theme }) => theme.colors.gray};
// `;

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <FooterContainer>
//       <FooterContent>
//         <FooterColumn>
//           <Logo />
//           <p style={{ margin: "1.5rem 0", color: "#f8f9fa" }}>
//             CodeNiche SoftStudio is a leading software development company
//             providing innovative solutions for businesses globally.
//           </p>
//           <SocialLinks>
//             <SocialLink href="#" target="_blank" rel="noopener noreferrer">
//               <FaFacebookF />
//             </SocialLink>
//             <SocialLink href="#" target="_blank" rel="noopener noreferrer">
//               <FaTwitter />
//             </SocialLink>
//             <SocialLink
//               href="https://www.linkedin.com/company/codeniche-softstudio/"
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={(e) => {
//                 window.open(
//                   "https://www.linkedin.com/company/codeniche-softstudio/",
//                   "_blank",
//                   "noopener,noreferrer"
//                 );
//               }}
//             >
//               <FaLinkedinIn />
//             </SocialLink>
//             <SocialLink href="#" target="_blank" rel="noopener noreferrer">
//               <FaInstagram />
//             </SocialLink>
//             <SocialLink href="#" target="_blank" rel="noopener noreferrer">
//               <FaGithub />
//             </SocialLink>
//           </SocialLinks>
//         </FooterColumn>

//         <FooterColumn>
//           <FooterHeading>Quick Links</FooterHeading>
//           <FooterLinks>
//             <li>
//               <FooterLink to="/">Home</FooterLink>
//             </li>
//             <li>
//               <FooterLink to="/about">About Us</FooterLink>
//             </li>
//             <li>
//               <FooterLink to="/services">Services</FooterLink>
//             </li>
//             <li>
//               <FooterLink to="/products">Products</FooterLink>
//             </li>
//             <li>
//               <FooterLink to="/portfolio">Portfolio</FooterLink>
//             </li>
//             <li>
//               <FooterLink to="/contact">Contact</FooterLink>
//             </li>
//           </FooterLinks>
//         </FooterColumn>

//         <FooterColumn>
//           <FooterHeading>Our Services</FooterHeading>
//           <FooterLinks>
//             <li>
//               <FooterLink to="/services">Web Development</FooterLink>
//             </li>
//             <li>
//               <FooterLink to="/services">Mobile App Development</FooterLink>
//             </li>
//             <li>
//               <FooterLink to="/services">
//                 Custom Software Development
//               </FooterLink>
//             </li>
//             <li>
//               <FooterLink to="/services">UI/UX Design</FooterLink>
//             </li>
//             <li>
//               <FooterLink to="/services">E-commerce Solutions</FooterLink>
//             </li>
//             <li>
//               <FooterLink to="/services">Digital Marketing</FooterLink>
//             </li>
//           </FooterLinks>
//         </FooterColumn>

//         <FooterColumn>
//           <FooterHeading>Contact Us</FooterHeading>
//           <ContactItem>
//             <ContactIcon>
//               <FaMapMarkerAlt />
//             </ContactIcon>
//             <div>Ahmedabad</div>
//           </ContactItem>
//           <ContactItem>
//             <ContactIcon>
//               <FaPhone />
//             </ContactIcon>
//             <div>8401901942</div>
//           </ContactItem>
//           <ContactItem>
//             <ContactIcon>
//               <FaEnvelope />
//             </ContactIcon>
//             <div>codenichesoftstudio@gmail.com</div>
//           </ContactItem>
//         </FooterColumn>
//       </FooterContent>

//       <BottomBar>
//         <Copyright>
//           &copy; {currentYear} CodeNiche SoftStudio Pvt Ltd. All Rights
//           Reserved.
//         </Copyright>
//       </BottomBar>
//     </FooterContainer>
//   );
// };

// export default Footer;




import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../components/common/Logo";

const FooterContainer = styled.footer`
  position: relative;
  background: #0d1b2a;
  color: white;
  overflow: hidden;
  margin-bottom: 0;
`;

// const DecorativeBackground = styled.div`
//   position: absolute;
//   inset: 0;
//   opacity: 0.1;
  
//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 18rem;
//     height: 18rem;
//     background: linear-gradient(135deg, #415A77 0%, #1B263B 100%);
//     border-radius: 50%;
//     filter: blur(3rem);
//     transform: translate(-50%, -50%);
//   }
  
//   &::after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     width: 24rem;
//     height: 24rem;
//     background: linear-gradient(225deg, #778DA9 0%, #415A77 100%);
//     border-radius: 50%;
//     filter: blur(3rem);
//     transform: translate(50%, 50%);
//   }
// `;

const FooterContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 2rem 0;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CompanyName = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #778DA9 0%, #415A77 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2rem;
  }
`;

const CompanyDescription = styled.p`
  color: #E0E1DD;
  font-size: 1.125rem;
  max-width: 32rem;
  margin: 0 auto;
  line-height: 1.6;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FooterHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #778DA9;
  // margin-bottom: 0rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 3rem;
    height: 0.125rem;
    background: linear-gradient(135deg, #415A77 0%, #1B263B 100%);
  }
`;

const AboutText = styled.p`
  font-size: 0.85rem;
  color: #E0E1DD;
  line-height: 1.6;
  margin-bottom: 0.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, rgba(65, 90, 119, 0.2) 0%, rgba(27, 38, 59, 0.2) 100%);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(65, 90, 119, 0.3);
  color: #778DA9;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #778DA9;
    color: #E0E1DD;
    transform: scale(1.1);
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  font-size: 0.85rem;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLinkItem = styled.li`
  display: flex;
  align-items: center;
  group: true;
`;

const FooterLink = styled(Link)`
  color: #E0E1DD;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: #778DA9;
  }
`;

const ServiceItem = styled.span`
  color: #E0E1DD;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #778DA9;
  }
`;

const ContactItem = styled.div`
  display: flex;
  font-size: 0.85rem;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    .contact-text {
      color: #778DA9;
    }
    
    .contact-icon {
      border-color: #778DA9;
    }
  }
`;

const ContactIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, rgba(65, 90, 119, 0.2) 0%, rgba(27, 38, 59, 0.2) 100%);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(65, 90, 119, 0.3);
  color: #778DA9;
  flex-shrink: 0;
  transition: all 0.3s ease;
`;

const ContactText = styled.div`
  color: #E0E1DD;
  transition: all 0.3s ease;
`;

const NewsletterSection = styled.div`
  margin-top: 4rem;
  padding: 3rem 0;
  border-top: 1px solid rgba(107, 114, 128, 0.5);
`;

const NewsletterContainer = styled.div`
  max-width: 32rem;
  margin: 0 auto;
  text-align: center;
`;

const NewsletterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #778DA9;
  margin-bottom: 1rem;
`;

const NewsletterDescription = styled.p`
  color: #E0E1DD;
  margin-bottom: 2rem;
`;

const NewsletterForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 20rem;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  background-color: #1B263B;
  border: 1px solid #415A77;
  border-radius: 0.5rem;
  color: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #778DA9;
    box-shadow: 0 0 0 2px rgba(119, 141, 169, 0.2);
  }

  &::placeholder {
    color: #778DA9;
  }
`;

const NewsletterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #415A77 0%, #1B263B 100%);
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #778DA9 0%, #415A77 100%);
    transform: scale(1.05);
    box-shadow: 0 8px 25px -8px rgba(65, 90, 119, 0.25);
  }
`;

const BottomBar = styled.div`
  margin-top: 3rem;
  padding: 1.5rem 0 1rem;
  border-top: 1px solid rgba(107, 114, 128, 0.5);
`;

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: 0;
  }
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const Copyright = styled.p`
  color: #9ca3af;
  font-size: 0.75rem;
`;

const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.75rem;
`;

const LegalLink = styled(Link)`
  color: #778DA9;
  transition: color 0.3s ease;

  &:hover {
    color: #E0E1DD;
  }
`;

const BottomRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #9ca3af;
  font-size: 0.75rem;
`;

const HeartIcon = styled.svg`
  width: 1rem;
  height: 1rem;
  color: #415A77;
  fill: currentColor;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      {/* <DecorativeBackground /> */}
      <FooterContent>
        {/* <HeaderSection>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <CompanyName>CodeNiche SoftStudio</CompanyName>
          <CompanyDescription>
            Innovative software solutions for the modern world. Building tomorrow's technology today with cutting-edge development and design.
          </CompanyDescription>
        </HeaderSection> */}

        <MainGrid>
          <FooterColumn>
            <FooterHeading>About Us</FooterHeading>
            <AboutText>
              We are passionate about creating cutting-edge solutions that drive innovation and transform businesses worldwide through technology.
            </AboutText>
            <SocialLinks>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/company/codeniche-softstudio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Our Services</FooterHeading>
            <FooterLinks>
              <FooterLinkItem>
                <ServiceItem>Web Development</ServiceItem>
              </FooterLinkItem>
              <FooterLinkItem>
                <ServiceItem>Mobile App Development</ServiceItem>
              </FooterLinkItem>
              <FooterLinkItem>
                <ServiceItem>Custom Software Development</ServiceItem>
              </FooterLinkItem>
              <FooterLinkItem>
                <ServiceItem>UI/UX Design</ServiceItem>
              </FooterLinkItem>
              <FooterLinkItem>
                <ServiceItem>E-commerce Solutions</ServiceItem>
              </FooterLinkItem>
              <FooterLinkItem>
                <ServiceItem>Digital Marketing</ServiceItem>
              </FooterLinkItem>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinks>
              <FooterLinkItem>
                <FooterLink to="/" onClick={() => window.scrollTo(0, 0)}>Home</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/services" onClick={() => window.scrollTo(0, 0)}>Services</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/products" onClick={() => window.scrollTo(0, 0)}>Products</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/portfolio" onClick={() => window.scrollTo(0, 0)}>Portfolio</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</FooterLink>
              </FooterLinkItem>
            </FooterLinks>
          </FooterColumn>
        
          <FooterColumn>
            <FooterHeading>Get in Touch</FooterHeading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ContactItem>
                <ContactIcon className="contact-icon">
                  <FaMapMarkerAlt />
                </ContactIcon>
                <ContactText className="contact-text">
                  Ahmedabad, Gujarat<br />
                  India
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon className="contact-icon">
                  <FaEnvelope />
                </ContactIcon>
                <ContactText className="contact-text">
                  codenichesoftstudio@gmail.com
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon className="contact-icon">
                  <FaPhone />
                </ContactIcon>
                <ContactText className="contact-text">
                  +91 8401901942
                </ContactText>
              </ContactItem>
            </div>
          </FooterColumn>
        </MainGrid>

        {/* <NewsletterSection>
          <NewsletterContainer>
            <NewsletterTitle>Stay Updated</NewsletterTitle>
            <NewsletterDescription>
              Subscribe to our newsletter for the latest updates and insights.
            </NewsletterDescription>
            <NewsletterForm>
              <NewsletterInput 
                type="email" 
                placeholder="Enter your email" 
              />
              <NewsletterButton>
                Subscribe
              </NewsletterButton>
            </NewsletterForm>
          </NewsletterContainer>
        </NewsletterSection> */}

        <BottomBar>
          <BottomContent>
            <BottomLeft>
              <Copyright>
                &copy; {currentYear} CodeNiche SoftStudio Pvt Ltd. All Rights Reserved.
              </Copyright>
              <LegalLinks>
                <LegalLink to="/privacy">Privacy Policy</LegalLink>
                <span style={{ color: '#6b7280' }}>•</span>
                <LegalLink to="/terms">Terms of Service</LegalLink>
              </LegalLinks>
            </BottomLeft>
            <BottomRight>
              <span>Made with</span>
              <HeartIcon viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </HeartIcon>
              <span>by CodeNiche Team</span>
            </BottomRight>
          </BottomContent>
        </BottomBar>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;