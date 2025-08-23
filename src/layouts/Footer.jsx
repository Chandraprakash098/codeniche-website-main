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

const FooterContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 2rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || "992px"}) {
    padding: 1.5rem 1.5rem 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    padding: 1.5rem 1rem 0;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || "992px"}) {
    margin-bottom: 2rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    margin-bottom: 1rem;
  }
`;

const CompanyName = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #778DA9 0%, #415A77 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg || "992px"}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    font-size: 1.75rem;
  }
`;

const CompanyDescription = styled.p`
  color: #E0E1DD;
  font-size: 1.125rem;
  max-width: 32rem;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || "992px"}) {
    font-size: 1rem;
    max-width: 28rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || "992px"}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md || "768px"}) {
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-bottom: 3rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    gap: 1.25rem;
    text-align: center;
    align-items: center;
  }
`;

const FooterHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #778DA9;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    font-size: 1.1rem;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const AboutText = styled.p`
  font-size: 0.85rem;
  color: #E0E1DD;
  line-height: 1.6;
  margin-bottom: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    font-size: 0.8rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    justify-content: center;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    width: 1.75rem;
    height: 1.75rem;
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  font-size: 0.85rem;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    align-items: center;
    gap: 0.6rem;
  }
`;

const FooterLinkItem = styled.li`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    justify-content: center;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    width: 2.25rem;
    height: 2.25rem;
  }
`;

const ContactText = styled.div`
  color: #E0E1DD;
  transition: all 0.3s ease;
  line-height: 1.4;
`;

const NewsletterSection = styled.div`
  margin-top: 4rem;
  padding: 3rem 0;
  border-top: 1px solid rgba(107, 114, 128, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    margin-top: 3rem;
    padding: 2rem 0;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    font-size: 1.25rem;
  }
`;

const NewsletterDescription = styled.p`
  color: #E0E1DD;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
  }
`;

const NewsletterForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 20rem;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    padding: 0.65rem 0.9rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    padding: 0.65rem 1.25rem;
    font-size: 0.9rem;
  }
`;

const BottomBar = styled.div`
  margin-top: 3rem;
  padding: 1.5rem 0 1rem;
  border-top: 1px solid rgba(107, 114, 128, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    margin-top: 2rem;
    padding: 1.25rem 0 0.75rem;
  }
`;

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md || "768px"}) {
    flex-direction: row;
    gap: 0;
  }
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md || "768px"}) {
    flex-direction: row;
    gap: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    gap: 0.75rem;
  }
`;

const Copyright = styled.p`
  color: #9ca3af;
  font-size: 0.75rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    font-size: 0.7rem;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    gap: 0.75rem;
    font-size: 0.7rem;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    font-size: 0.7rem;
  }
`;

const HeartIcon = styled.svg`
  width: 1rem;
  height: 1rem;
  color: #415A77;
  fill: currentColor;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || "576px"}) {
    width: 0.9rem;
    height: 0.9rem;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
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