// import { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { FaBars, FaTimes } from "react-icons/fa";
// import CodenicheLogo from "../assets/images/cdelogo.png";
// import sunSvg from "../assets/images/sun.svg";
// import moonSvg from "../assets/images/moon.svg";
// import { useTheme } from "../contexts/ThemeContext";
// import { useLocation,useNavigate } from "react-router-dom";

// const HeaderContainer = styled.header`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: 1000;
//   background-color: rgba(224, 225, 221, 0.95);
//   backdrop-filter: blur(12px);
//   box-shadow: 0 8px 32px rgba(13, 27, 42, 0.1);
//   border-bottom: 1px solid rgba(119, 141, 169, 0.2);
//   transition: all 0.5s ease;
// `;

// const HeaderWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0;
//   width: 100%;
//   height: 80px;

//   @media (max-width: 1024px) {
//     padding: 0;
//     height: 80px;
//   }

//   @media (max-width: 768px) {
//     padding: 0;
//     height: 80px;
//   }
// `;

// const LogoWrapper = styled(Link)`
//   display: flex;
//   align-items: center;
//   transition: transform 0.3s ease;
//   flex-shrink: 0;
//   padding-left: 2rem;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
// `;

// const LogoIcon = styled.div`
//   position: relative;
//   width: 48px;
//   height: 48px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.3s ease;

//   @media (max-width: 1024px) {
//     width: 48px;
//     height: 48px;
//   }
// `;

// const LogoImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
//   position: relative;
//   z-index: 1;
// `;

// const LogoText = styled.div`
//   display: flex;
//   flex-direction: column;
  
//   @media (max-width: 640px) {
//     display: none;
//   }
// `;

// const LogoTitle = styled.h1`
//   font-size: 22px;
//   font-weight: 700;
//   background: linear-gradient(135deg, #415A77, #1B263B, #415A77);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   margin: 0;
//   line-height: 1.2;
//   transition: all 0.3s ease;

//   @media (max-width: 1024px) {
//     font-size: 20px;
//   }
// `;

// const LogoSubtitle = styled.p`
//   font-size: 12px;
//   color: #778DA9;
//   margin: -2px 0 0 0;
//   font-weight: 500;
// `;

// // Desktop Navigation
// const DesktopNav = styled.nav`
//   display: flex;
//   align-items: center;

//   @media (max-width: 1024px) {
//     display: none;
//   }
// `;

// const DesktopNavList = styled.ul`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   margin: 0;
//   padding: 0;
//   list-style: none;
// `;

// const DesktopNavItem = styled.li`
//   position: relative;
// `;

// const StyledNavLink = styled(NavLink)`
//   position: relative;
//   display: block;
//   padding: 0.625rem 1rem;
//   color: #415A77;
//   font-weight: 500;
//   border-radius: 0.5rem;
//   transition: all 0.3s ease;
//   overflow: hidden;
//   font-size: 16px;
//   text-decoration: none;

//   &:hover {
//     color: #1B263B;
//     background: linear-gradient(135deg, rgba(65, 90, 119, 0.05), rgba(27, 38, 59, 0.05));
//   }

//   &.active {
//     color: #1B263B;
//     background: linear-gradient(135deg, rgba(65, 90, 119, 0.1), rgba(27, 38, 59, 0.1));
//   }

//   &::before {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 0;
//     height: 2px;
//     background: linear-gradient(135deg, #415A77, #1B263B);
//     transition: width 0.3s ease;
//   }

//   &:hover::before,
//   &.active::before {
//     width: 100%;
//   }
// `;

// // Mobile Navigation
// const MobileNav = styled.nav`
//   display: none;

//   @media (max-width: 1024px) {
//     display: block;
//     position: fixed;
//     top: 0;
//     right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
//     width: 320px;
//     max-width: 80vw;
//     height: 100vh;
//     background-color: #E0E1DD;
//     transition: all 0.3s ease;
//     box-shadow: -8px 0 32px rgba(13, 27, 42, 0.15);
//     overflow-y: auto;
//     z-index: 40;
//   }
// `;

// const MobileNavContent = styled.div`
//   padding-top: 5rem;
//   padding-bottom: 2rem;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
// `;

// const MobileNavList = styled.ul`
//   flex-direction: column;
//   gap: 0.5rem;
//   width: 100%;
//   padding: 0 1.5rem;
//   margin: 0;
//   list-style: none;
// `;

// const MobileNavItem = styled.li`
//   width: 100%;
// `;

// const MobileNavLink = styled(NavLink)`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 1rem 1.5rem;
//   color: #415A77;
//   font-weight: 500;
//   border-radius: 0.75rem;
//   transition: all 0.3s ease;
//   font-size: 18px;
//   width: 100%;
//   text-decoration: none;

//   &:hover {
//     color: #1B263B;
//     background: linear-gradient(135deg, rgba(65, 90, 119, 0.05), rgba(27, 38, 59, 0.05));
//   }

//   &.active {
//     color: #1B263B;
//     background: linear-gradient(135deg, rgba(65, 90, 119, 0.1), rgba(27, 38, 59, 0.1));
//   }

//   &::after {
//     content: '';
//     width: 20px;
//     height: 20px;
//     background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23778DA9'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'/%3E%3C/svg%3E") no-repeat center;
//     background-size: contain;
//     opacity: 0.6;
//     transition: transform 0.3s ease;
//   }

//   &:hover::after {
//     transform: translateX(4px);
//   }
// `;

// const MobileMenuButton = styled.button`
//   display: none;
//   padding: 0.625rem;
//   border-radius: 0.75rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   position: relative;
//   z-index: 50;

//   &:hover {
//     background: rgba(65, 90, 119, 0.05);
//   }

//   @media (max-width: 1024px) {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const HamburgerLine = styled.span`
//   position: absolute;
//   left: 0;
//   width: 24px;
//   height: 2px;
//   background: linear-gradient(135deg, #415A77, #1B263B);
//   transition: all 0.3s ease;
//   transform-origin: center;

//   &:nth-child(1) {
//     top: ${({ isOpen }) => isOpen ? '50%' : '6px'};
//     transform: ${({ isOpen }) => isOpen ? 'translateY(-50%) rotate(45deg)' : 'translateY(0) rotate(0)'};
//   }

//   &:nth-child(2) {
//     top: 50%;
//     transform: translateY(-50%);
//     opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
//   }

//   &:nth-child(3) {
//     top: ${({ isOpen }) => isOpen ? '50%' : 'calc(100% - 8px)'};
//     transform: ${({ isOpen }) => isOpen ? 'translateY(-50%) rotate(-45deg)' : 'translateY(0) rotate(0)'};
//   }
// `;

// const HamburgerIcon = styled.div`
//   position: relative;
//   width: 24px;
//   height: 24px;
// `;

// const DesktopActions = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   flex-shrink: 0;
//   padding-right: 2rem;

//   @media (max-width: 1024px) {
//     display: none;
//   }
// `;

// const MobileActions = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
//   margin-top: auto;
//   padding: 1.5rem;
//   border-top: 1px solid rgba(119, 141, 169, 0.2);
//   width: 100%;
// `;

// const GetStartedButton = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.75rem 1.5rem;
//   background: linear-gradient(135deg, #415A77, #1B263B, #415A77);
//   color: white;
//   font-weight: 600;
//   border-radius: 9999px;
//   text-decoration: none;
//   transition: all 0.3s ease;
//   box-shadow: 0 4px 20px rgba(65, 90, 119, 0.3);
//   position: relative;
//   overflow: hidden;
//   white-space: nowrap;

//   &:hover {
//     transform: scale(1.05) translateY(-2px);
//     box-shadow: 0 8px 32px rgba(65, 90, 119, 0.4);
//     background: linear-gradient(135deg, #778DA9, #415A77, #778DA9);
//   }

//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(135deg, #778DA9, #415A77);
//     opacity: 0;
//     transition: opacity 0.3s ease;
//     border-radius: 9999px;
//   }

//   &:hover::before {
//     opacity: 0.2;
//   }

//   svg {
//     margin-left: 0.5rem;
//     transition: transform 0.3s ease;
//   }

//   &:hover svg {
//     transform: translateX(4px);
//   }

//   @media (max-width: 1024px) {
//     width: 100%;
//     padding: 1rem 1.5rem;
//     font-size: 18px;
//   }
// `;

// const ThemeToggle = styled.button`
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   color: #415A77;
//   font-size: 1.25rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.3s ease;
//   padding: 0.5rem;
//   border-radius: 0.5rem;
  
//   svg {
//     fill: currentColor;
//     width: 100%;
//     height: 100%;
//   }
  
//   &:hover {
//     color: #1B263B;
//     background: rgba(65, 90, 119, 0.05);
//     transform: rotate(15deg);
//   }
// `;

// const Overlay = styled.div`
//   display: ${({ isOpen }) => (isOpen ? "block" : "none")};
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   backdrop-filter: blur(4px);
//   z-index: 30;
//   transition: all 0.3s ease;
//   opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

//   @media (min-width: 1025px) {
//     display: none;
//   }
// `;

// const Header = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { mode, toggleTheme } = useTheme();

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   // Close menu when screen is resized to desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 1024 && isOpen) {
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [isOpen]);

//   // Close menu on escape key
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') setIsOpen(false);
//     };
    
//     if (isOpen) {
//       document.addEventListener('keydown', handleEscape);
//     }
    
//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//     };
//   }, [isOpen]);

//   const navItems = [
//     { to: "/", label: "Home", end: true },
//     { to: "/services", label: "Services" },
//     { to: "/products", label: "Products" },
//     { to: "/portfolio", label: "Portfolio" },
//      { to: "/about", label: "About" },
//     { to: "/contact", label: "Contact" }
//   ];

//   const handleLogoClick = (e) => {
//     if (location.pathname === '/') {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       navigate('/');
//     }
//     closeMenu();
//   };

//   return (      
//     <>
//       <Overlay isOpen={isOpen} onClick={closeMenu} />
//       <HeaderContainer scrolled={scrolled}>
//         <HeaderWrapper scrolled={scrolled}>
//           <LogoWrapper to="/" onClick={handleLogoClick}>
//             <LogoContainer>
//               <LogoIcon>
//                 <LogoImage src={CodenicheLogo} alt="CodeNiche Logo" />
//               </LogoIcon>
//               <LogoText>
//                 <LogoTitle>CodeNiche </LogoTitle>
//                 <LogoSubtitle>Softstudio PVT LTD</LogoSubtitle>
//               </LogoText>
//             </LogoContainer>
//           </LogoWrapper>

//           <DesktopNav>
//             <DesktopNavList>
//               {navItems.map((item) => (
//                 <DesktopNavItem key={item.to}>
//                   <StyledNavLink to={item.to} end={item.end}>
//                     {item.label}
//                   </StyledNavLink>
//                 </DesktopNavItem>
//               ))}
//             </DesktopNavList>
//           </DesktopNav>

//           <DesktopActions>
//             <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
//               <img 
//                 src={mode === 'dark' ? sunSvg : moonSvg}
//                 alt={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
//                 style={{ width: '20px', height: '20px' }}
//               />
//             </ThemeToggle>
//             <GetStartedButton to="/contact">
//               <span>Get Started</span>
//               <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </GetStartedButton>
//           </DesktopActions>

//           <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
//             <HamburgerIcon>
//               <HamburgerLine isOpen={isOpen} />
//               <HamburgerLine isOpen={isOpen} />
//               <HamburgerLine isOpen={isOpen} />
//             </HamburgerIcon>
//           </MobileMenuButton>

//           <MobileNav isOpen={isOpen}>
//             <MobileNavContent>
//               <MobileNavList>
//                 {navItems.map((item) => (
//                   <MobileNavItem key={item.to}>
//                     <MobileNavLink to={item.to} end={item.end} onClick={closeMenu}>
//                       {item.label}
//                     </MobileNavLink>
//                   </MobileNavItem>
//                 ))}
//               </MobileNavList>

//               <MobileActions>
//                 <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
//                   <img 
//                     src={mode === 'dark' ? sunSvg : moonSvg}
//                     alt={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
//                     style={{ width: '24px', height: '24px' }}
//                   />
//                 </ThemeToggle>
//                 <GetStartedButton to="/contact" onClick={closeMenu}>
//                   <span>Get Started</span>
//                   <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </GetStartedButton>
//               </MobileActions>
//             </MobileNavContent>
//           </MobileNav>
//         </HeaderWrapper>
//       </HeaderContainer>
//     </>
//   );
// };

// export default Header;


import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import CodenicheLogo from "../assets/images/cdelogo.png";
import sunSvg from "../assets/images/sun.svg";
import moonSvg from "../assets/images/moon.svg";
import { useTheme } from "../contexts/ThemeContext";
import { useLocation,useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(224, 225, 221, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(13, 27, 42, 0.1);
  border-bottom: 1px solid rgba(119, 141, 169, 0.2);
  transition: all 0.5s ease;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 80px;

  @media (max-width: 1024px) {
    padding: 0;
    height: 70px;
  }

  @media (max-width: 768px) {
    padding: 0;
    height: 70px;
  }
`;

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  padding-left: 2rem;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const LogoIcon = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
  z-index: 1;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  
  /* Removed the mobile hide rule - now shows on all screens */
`;

const LogoTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(135deg, #415A77, #1B263B, #415A77);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 1.2;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const LogoSubtitle = styled.p`
  font-size: 12px;
  color: #778DA9;
  margin: -2px 0 0 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

// Desktop Navigation
const DesktopNav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const DesktopNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const DesktopNavItem = styled.li`
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  display: block;
  padding: 0.625rem 1rem;
  color: #415A77;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  overflow: hidden;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: #1B263B;
    background: linear-gradient(135deg, rgba(65, 90, 119, 0.05), rgba(27, 38, 59, 0.05));
  }

  &.active {
    color: #1B263B;
    background: linear-gradient(135deg, rgba(65, 90, 119, 0.1), rgba(27, 38, 59, 0.1));
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #415A77, #1B263B);
    transition: width 0.3s ease;
  }

  &:hover::before,
  &.active::before {
    width: 100%;
  }
`;

// Mobile Navigation
const MobileNav = styled.nav`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 320px;
    max-width: 80vw;
    height: 100vh;
    background-color: #E0E1DD;
    transition: all 0.3s ease;
    box-shadow: -8px 0 32px rgba(13, 27, 42, 0.15);
    overflow-y: auto;
    z-index: 40;
  }
`;

const MobileNavContent = styled.div`
  padding-top: 5rem;
  padding-bottom: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MobileNavList = styled.ul`
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0;
  list-style: none;
`;

const MobileNavItem = styled.li`
  width: 100%;
`;

const MobileNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  color: #415A77;
  font-weight: 500;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  font-size: 18px;
  width: 100%;
  text-decoration: none;

  &:hover {
    color: #1B263B;
    background: linear-gradient(135deg, rgba(65, 90, 119, 0.05), rgba(27, 38, 59, 0.05));
  }

  &.active {
    color: #1B263B;
    background: linear-gradient(135deg, rgba(65, 90, 119, 0.1), rgba(27, 38, 59, 0.1));
  }

  &::after {
    content: '';
    width: 20px;
    height: 20px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23778DA9'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'/%3E%3C/svg%3E") no-repeat center;
    background-size: contain;
    opacity: 0.6;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(4px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(65, 90, 119, 0.05), rgba(27, 38, 59, 0.05));
  border: 1px solid rgba(65, 90, 119, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 50;
  margin-right: 1rem;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(65, 90, 119, 0.1);

  &:hover {
    background: linear-gradient(135deg, rgba(65, 90, 119, 0.1), rgba(27, 38, 59, 0.1));
    border-color: rgba(65, 90, 119, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(65, 90, 119, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(65, 90, 119, 0.2);
  }

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    margin-right: 0.75rem;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
  }
`;

const HamburgerIcon = styled.div`
  position: relative;
  width: 24px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 22px;
    height: 16px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 14px;
  }
`;

const HamburgerLine = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(135deg, #415A77, #1B263B);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center;
  position: relative;

  &:nth-child(1) {
    transform: ${({ isOpen }) => 
      isOpen 
        ? 'rotate(45deg) translateY(8px)' 
        : 'rotate(0) translateY(0)'
    };
  }

  &:nth-child(2) {
    opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    transform: ${({ isOpen }) => 
      isOpen 
        ? 'translateX(-100%)' 
        : 'translateX(0)'
    };
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) => 
      isOpen 
        ? 'rotate(-45deg) translateY(-8px)' 
        : 'rotate(0) translateY(0)'
    };
  }

  @media (max-width: 768px) {
    &:nth-child(1) {
      transform: ${({ isOpen }) => 
        isOpen 
          ? 'rotate(45deg) translateY(7px)' 
          : 'rotate(0) translateY(0)'
      };
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => 
        isOpen 
          ? 'rotate(-45deg) translateY(-7px)' 
          : 'rotate(0) translateY(0)'
      };
    }
  }

  @media (max-width: 480px) {
    &:nth-child(1) {
      transform: ${({ isOpen }) => 
        isOpen 
          ? 'rotate(45deg) translateY(6px)' 
          : 'rotate(0) translateY(0)'
      };
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => 
        isOpen 
          ? 'rotate(-45deg) translateY(-6px)' 
          : 'rotate(0) translateY(0)'
      };
    }
  }
`;

const DesktopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  padding-right: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: auto;
  padding: 1.5rem;
  border-top: 1px solid rgba(119, 141, 169, 0.2);
  width: 100%;
`;

const GetStartedButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #415A77, #1B263B, #415A77);
  color: white;
  font-weight: 600;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(65, 90, 119, 0.3);
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 8px 32px rgba(65, 90, 119, 0.4);
    background: linear-gradient(135deg, #778DA9, #415A77, #778DA9);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #778DA9, #415A77);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 9999px;
  }

  &:hover::before {
    opacity: 0.2;
  }

  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 18px;
  }
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #415A77;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 0.5rem;
  
  svg {
    fill: currentColor;
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    color: #1B263B;
    background: rgba(65, 90, 119, 0.05);
    transform: rotate(15deg);
  }
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 30;
  transition: all 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

  @media (min-width: 1025px) {
    display: none;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close menu when screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/services", label: "Services" },
    { to: "/products", label: "Products" },
    { to: "/portfolio", label: "Portfolio" },
     { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" }
  ];

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    closeMenu();
  };

  return (      
    <>
      <Overlay isOpen={isOpen} onClick={closeMenu} />
      <HeaderContainer scrolled={scrolled}>
        <HeaderWrapper scrolled={scrolled}>
          <LogoWrapper to="/" onClick={handleLogoClick}>
            <LogoContainer>
              <LogoIcon>
                <LogoImage src={CodenicheLogo} alt="CodeNiche Logo" />
              </LogoIcon>
              <LogoText>
                <LogoTitle>CodeNiche </LogoTitle>
                <LogoSubtitle>Softstudio PVT LTD</LogoSubtitle>
              </LogoText>
            </LogoContainer>
          </LogoWrapper>

          <DesktopNav>
            <DesktopNavList>
              {navItems.map((item) => (
                <DesktopNavItem key={item.to}>
                  <StyledNavLink to={item.to} end={item.end}>
                    {item.label}
                  </StyledNavLink>
                </DesktopNavItem>
              ))}
            </DesktopNavList>
          </DesktopNav>

          <DesktopActions>
            <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
              <img 
                src={mode === 'dark' ? sunSvg : moonSvg}
                alt={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                style={{ width: '20px', height: '20px' }}
              />
            </ThemeToggle>
            <GetStartedButton to="/contact">
              <span>Get Started</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </GetStartedButton>
          </DesktopActions>

          <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
            <HamburgerIcon>
              <HamburgerLine isOpen={isOpen} />
              <HamburgerLine isOpen={isOpen} />
              <HamburgerLine isOpen={isOpen} />
            </HamburgerIcon>
          </MobileMenuButton>

          <MobileNav isOpen={isOpen}>
            <MobileNavContent>
              <MobileNavList>
                {navItems.map((item) => (
                  <MobileNavItem key={item.to}>
                    <MobileNavLink to={item.to} end={item.end} onClick={closeMenu}>
                      {item.label}
                    </MobileNavLink>
                  </MobileNavItem>
                ))}
              </MobileNavList>

              <MobileActions>
                <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
                  <img 
                    src={mode === 'dark' ? sunSvg : moonSvg}
                    alt={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    style={{ width: '24px', height: '24px' }}
                  />
                </ThemeToggle>
                <GetStartedButton to="/contact" onClick={closeMenu}>
                  <span>Get Started</span>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </GetStartedButton>
              </MobileActions>
            </MobileNavContent>
          </MobileNav>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;