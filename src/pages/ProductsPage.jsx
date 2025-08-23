import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider, css } from "styled-components";
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

// Responsive breakpoints
const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

// Media query helper
const respondTo = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// Styled Components with improved responsiveness
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

  ${respondTo.sm`
    padding: 4rem 1rem;
  `}

  ${respondTo.xs`
    padding: 3rem 0.75rem;
  `}
`;

const ProductCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  padding: 0 1rem;

  ${respondTo.sm`
    gap: 0.75rem;
    margin-bottom: 2rem;
  `}
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
  white-space: nowrap;

  &:hover {
    background: ${({ active, theme }) => (active ? theme.accentHover : theme.border)};
    transform: translateY(-2px);
  }

  ${respondTo.sm`
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  `}

  ${respondTo.xs`
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  `}
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  ${respondTo.md`
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  `}

  ${respondTo.sm`
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  `}
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

  ${respondTo.md`
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  `}

  ${respondTo.sm`
    border-radius: 1rem;
    margin-bottom: 2.5rem;
  `}
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

  ${respondTo.sm`
    padding: 1.5rem;
    
    img {
      border-radius: 0.75rem;
    }
  `}

  ${respondTo.xs`
    padding: 1rem;
  `}
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

  ${respondTo.md`
    padding: 2.5rem;
  `}

  ${respondTo.sm`
    padding: 2rem;
    
    h3 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 1rem;
    }
  `}

  ${respondTo.xs`
    padding: 1.5rem;
    
    h3 {
      font-size: 1.35rem;
    }
    
    p {
      font-size: 0.95rem;
    }
  `}
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

  ${respondTo.sm`
    border-radius: 1rem;
  `}
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

  ${respondTo.sm`
    height: 200px;
    
    img {
      width: 40%;
    }
  `}

  ${respondTo.xs`
    height: 180px;
    
    img {
      width: 45%;
    }
  `}
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

  ${respondTo.sm`
    padding: 0.3rem 0.8rem;
    font-size: 0.75rem;
    top: 0.75rem;
    right: 0.75rem;
  `}
`;

const ProductContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  ${respondTo.sm`
    padding: 1.25rem;
  `}

  ${respondTo.xs`
    padding: 1rem;
  `}
`;

const ProductTitle = styled.h3`
  font-size: clamp(1.3rem, 2.5vw, 1.5rem);
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.text};
  font-weight: 700;

  ${respondTo.sm`
    font-size: 1.25rem;
  `}

  ${respondTo.xs`
    font-size: 1.15rem;
    margin-bottom: 0.6rem;
  `}
`;

const ProductDescription = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: clamp(0.9rem, 2vw, 1rem);
  flex: 1;

  ${respondTo.sm`
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
  `}

  ${respondTo.xs`
    font-size: 0.9rem;
    margin-bottom: 1rem;
  `}
`;

const ProductFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem 1.25rem;

  ${respondTo.lg`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${respondTo.md`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${respondTo.sm`
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem 1rem;
    margin-bottom: 1.25rem;
  `}

  ${respondTo.xs`
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem 0.8rem;
  `}

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

    ${respondTo.sm`
      font-size: 0.85rem;
      
      svg {
        font-size: 0.9rem;
        margin-right: 0.5rem;
      }
    `}

    ${respondTo.xs`
      font-size: 0.8rem;
      
      svg {
        font-size: 0.85rem;
        margin-right: 0.4rem;
      }
    `}
  }
`;

// const ComparisonSection = styled.div`
//   margin-top: 5rem;
//   padding: 3rem;
//   background: ${({ theme }) => theme.secondaryBackground};
//   border-radius: 1.5rem;
//   box-shadow: 0 5px 15px ${({ theme }) => theme.shadow};

//   ${respondTo.md`
//     padding: 2.5rem;
//     margin-top: 4rem;
//   `}

//   ${respondTo.sm`
//     padding: 2rem 1.5rem;
//     margin-top: 3.5rem;
//     border-radius: 1rem;
//   `}

//   ${respondTo.xs`
//     padding: 1.5rem 1rem;
//     margin-top: 3rem;
//   `}
// `;


const ComparisonSection = styled.div`
  margin-top: 5rem;
  padding: 3rem;
  background: ${({ theme }) => theme.secondaryBackground};
  border-radius: 1.5rem;
  box-shadow: 0 5px 15px ${({ theme }) => theme.shadow};
  overflow: hidden;

  ${respondTo.md`
    padding: 2.5rem;
    margin-top: 4rem;
  `}

  ${respondTo.sm`
    padding: 2rem 1.5rem;
    margin-top: 3.5rem;
    border-radius: 1rem;
  `}

  ${respondTo.xs`
    padding: 1.5rem 1rem;
    margin-top: 3rem;
  `}
`;


// const ComparisonTable = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   overflow-x: auto;
//   margin: 2rem auto 0;
//   background: ${({ theme }) => theme.cardBackground};
//   border-radius: 1rem;
//   box-shadow: 0 5px 15px ${({ theme }) => theme.shadow};

//   ${respondTo.sm`
//     border-radius: 0.75rem;
//     margin: 1.5rem auto 0;
//   `}

//   table {
//     width: 100%;
//     min-width: 650px;
//     border-collapse: separate;
//     border-spacing: 0;

//     ${respondTo.sm`
//       min-width: 550px;
//     `}

//     ${respondTo.xs`
//       min-width: 450px;
//     `}

//     th,
//     td {
//       padding: 1rem;
//       text-align: center;
//       border-bottom: 1px solid ${({ theme }) => theme.border};
//       font-size: clamp(0.85rem, 2vw, 0.95rem);
      
//       ${respondTo.sm`
//         padding: 0.8rem;
//       `}
      
//       ${respondTo.xs`
//         padding: 0.7rem;
//         font-size: 0.8rem;
//       `}
//     }

//     th {
//       background: ${({ theme }) => theme.accent};
//       color: ${({ theme }) => theme.buttonText};
//       font-weight: 600;
      
//       ${respondTo.xs`
//         font-size: 0.85rem;
//       `}
//     }

//     th:first-child {
//       text-align: left;
//       background: ${({ theme }) => theme.accentHover};
//     }

//     td:first-child {
//       text-align: left;
//       font-weight: 500;
//       color: ${({ theme }) => theme.text};
//     }

//     tr:nth-child(even) td {
//       background: ${({ theme }) => theme.gray};
//     }
//     tr:nth-child(odd) td {
//       background: ${({ theme }) => theme.cardBackground};
//     }

//     tr:hover td {
//       background: ${({ theme }) => theme.tableHighlight};
//     }

//     td:not(:first-child) {
//       color: #10b981;
//       font-weight: 600;
//     }
//   }
// `;

const ComparisonTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem auto 0;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 1rem;
  box-shadow: 0 5px 15px ${({ theme }) => theme.shadow};
  overflow-x: auto;

  ${respondTo.sm`
    border-radius: 0.75rem;
    margin: 1.5rem auto 0;
    display: block;
    overflow-x: visible;
  `}

  table {
    width: 100%;
    min-width: 650px;
    border-collapse: collapse;

    ${respondTo.sm`
      min-width: 100%;
      display: block;
    `}

    th,
    td {
      padding: 1rem;
      text-align: center;
      border-bottom: 1px solid ${({ theme }) => theme.border};
      font-size: clamp(0.85rem, 2vw, 0.95rem);
      
      ${respondTo.sm`
        padding: 0.8rem;
        display: block;
        text-align: left;
        border-bottom: none;
      `}
      
      ${respondTo.xs`
        padding: 0.7rem;
        font-size: 0.8rem;
      `}
    }

    thead {
      ${respondTo.sm`
        display: none;
      `}
      
      th {
        background: ${({ theme }) => theme.accent};
        color: ${({ theme }) => theme.buttonText};
        font-weight: 600;
        
        ${respondTo.xs`
          font-size: 0.85rem;
        `}
      }

      th:first-child {
        text-align: left;
        background: ${({ theme }) => theme.accentHover};
      }
    }

    tbody {
      ${respondTo.sm`
        display: block;
      `}
      
      tr {
        ${respondTo.sm`
          display: block;
          margin-bottom: 1rem;
          padding: 1rem;
          border: 1px solid ${({ theme }) => theme.border};
          border-radius: 0.5rem;
          background: ${({ theme }) => theme.cardBackground};
          box-shadow: 0 2px 8px ${({ theme }) => theme.shadow};
        `}
        
        &:nth-child(even) {
          background: ${({ theme }) => theme.tableHighlight};
          
          ${respondTo.sm`
            background: ${({ theme }) => theme.cardBackground};
          `}
        }
        
        &:hover {
          background: ${({ theme }) => theme.tableHighlight};
          
          ${respondTo.sm`
            background: ${({ theme }) => theme.cardBackground};
            transform: translateY(-2px);
            box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
          `}
        }
        
        td:first-child {
          text-align: left;
          font-weight: 500;
          color: ${({ theme }) => theme.text};
          
          ${respondTo.sm`
            font-weight: 700;
            font-size: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid ${({ theme }) => theme.border};
            margin-bottom: 0.5rem;
          `}
        }

        td:not(:first-child) {
          color: #10b981;
          font-weight: 600;
          
          ${respondTo.sm`
            &::before {
              content: "Available: ";
              font-weight: normal;
              color: ${({ theme }) => theme.text};
              margin-right: 0.5rem;
            }
          `}
        }
      }
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

  ${respondTo.md`
    padding: 3.5rem 1.5rem;
    margin-top: 4rem;
  `}

  ${respondTo.sm`
    padding: 3rem 1rem;
    margin-top: 3.5rem;
    border-radius: 1rem;
  `}

  ${respondTo.xs`
    padding: 2.5rem 0.75rem;
    margin-top: 3rem;
  `}
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

  ${respondTo.sm`
    line-height: 1.7;
    
    &:before {
      top: -1.5rem;
      left: -1rem;
    }

    &:after {
      bottom: -2.5rem;
      right: -1rem;
    }
  `}

  ${respondTo.xs`
    font-size: 1rem;
    
    &:before,
    &:after {
      font-size: 2.5rem;
    }
    
    &:before {
      top: -1.25rem;
      left: -0.5rem;
    }

    &:after {
      bottom: -2rem;
      right: -0.5rem;
    }
  `}
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

  ${respondTo.xs`
    margin-top: 1.5rem;
    
    h4 {
      font-size: 1.1rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  `}
`;

const CTASection = styled.div`
  background: ${({ theme }) => theme.gradient};
  padding: 4rem 2rem;
  border-radius: 1.5rem;
  text-align: center;
  margin-top: 5rem;
  box-shadow: 0 15px 30px ${({ theme }) => theme.shadow};
  position: relative;

  ${respondTo.md`
    padding: 3.5rem 1.5rem;
    margin-top: 4rem;
  `}

  ${respondTo.sm`
    padding: 3rem 1rem;
    margin-top: 3.5rem;
    border-radius: 1rem;
  `}

  ${respondTo.xs`
    padding: 2.5rem 0.75rem;
    margin-top: 3rem;
  `}
`;

const CTATitle = styled.h2`
  color: ${({ theme }) => theme.buttonText};
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1.5rem;
  font-weight: 700;

  ${respondTo.sm`
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  `}

  ${respondTo.xs`
    font-size: 1.5rem;
    margin-bottom: 1rem;
  `}
`;

const CTADescription = styled.p`
  color: ${({ theme }) => theme.buttonText};
  max-width: 800px;
  margin: 0 auto 2rem;
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.7;

  ${respondTo.sm`
    font-size: 1rem;
    margin: 0 auto 1.5rem;
  `}

  ${respondTo.xs`
    font-size: 0.95rem;
    margin: 0 auto 1.25rem;
  `}
`;

const ModuleDetailsSection = styled.div`
  margin: 5rem auto;
  width: 90%;
  max-width: 1200px;

  ${respondTo.lg`
    width: 95%;
  `}

  ${respondTo.md`
    margin: 4rem auto;
    width: 100%;
    padding: 0 1rem;
  `}

  ${respondTo.sm`
    margin: 3.5rem auto;
  `}

  ${respondTo.xs`
    margin: 3rem auto;
  `}
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

  ${respondTo.lg`
    grid-template-columns: repeat(3, minmax(170px, 1fr));
  `}

  ${respondTo.md`
    grid-template-columns: repeat(2, minmax(160px, 1fr));
    gap: 0.875rem;
  `}

  ${respondTo.sm`
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  `}

  ${respondTo.xs`
    grid-template-columns: 1fr;
    gap: 0.6rem;
  `}
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  svg {
    font-size: 1.1rem;
    color: ${({ active, theme }) => (active ? theme.buttonText : theme.iconColor)};
    flex-shrink: 0;
  }

  &:hover {
    background: ${({ active, theme }) => (active ? theme.accentHover : theme.border)};
    transform: translateY(-2px);
  }

  ${respondTo.md`
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    
    svg {
      font-size: 1rem;
    }
  `}

  ${respondTo.sm`
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    
    svg {
      font-size: 0.95rem;
    }
  `}

  ${respondTo.xs`
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    justify-content: flex-start;
    
    svg {
      font-size: 1rem;
    }
  `}
`;

const ModuleContent = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 10px 20px ${({ theme }) => theme.shadow};

  ${respondTo.md`
    padding: 2rem;
    border-radius: 1.25rem;
  `}

  ${respondTo.sm`
    padding: 1.5rem;
    border-radius: 1rem;
  `}

  ${respondTo.xs`
    padding: 1.25rem;
  `}

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

    ${respondTo.sm`
      font-size: 1.4rem;
    `}

    ${respondTo.xs`
      font-size: 1.25rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
    `}
  }

  p {
    color: ${({ theme }) => theme.secondaryText};
    margin-bottom: 2rem;
    line-height: 1.8;
    font-size: clamp(1rem, 2vw, 1.1rem);

    ${respondTo.sm`
      font-size: 1rem;
      margin-bottom: 1.5rem;
    `}

    ${respondTo.xs`
      font-size: 0.95rem;
      margin-bottom: 1.25rem;
    `}
  }
`;

const FeatureGrid = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  ${respondTo.lg`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${respondTo.md`
    gap: 1.25rem;
  `}

  ${respondTo.sm`
    grid-template-columns: 1fr;
    gap: 1rem;
  `}

  ${respondTo.xs`
    gap: 0.875rem;
  `}
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
    margin-bottom: 0;
  }

  &:hover {
    transform: translateY(-5px);
    background: ${({ theme }) => theme.cardBackground};
    box-shadow: 0 10px 20px ${({ theme }) => theme.shadow};
  }

  ${respondTo.md`
    padding: 1.25rem;
    
    h4 {
      font-size: 1.1rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  `}

  ${respondTo.sm`
    padding: 1.25rem;
    
    h4 {
      font-size: 1.05rem;
    }
  `}

  ${respondTo.xs`
    padding: 1rem;
    border-radius: 0.75rem;
    
    h4 {
      font-size: 1rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
      
      svg {
        margin-right: 0;
      }
    }
    
    p {
      font-size: 0.85rem;
    }
  `}
`;

const FixedButtonsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 1rem;
  z-index: 1000;

  ${respondTo.sm`
    bottom: 16px;
    right: 16px;
    gap: 0.75rem;
  `}

  ${respondTo.xs`
    bottom: 12px;
    right: 12px;
    gap: 0.5rem;
  `}
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

  ${respondTo.sm`
    width: 50px;
    height: 50px;
    font-size: 1.6rem;
  `}

  ${respondTo.xs`
    width: 46px;
    height: 46px;
    font-size: 1.5rem;
  `}
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

  ${respondTo.sm`
    width: 50px;
    height: 50px;
    font-size: 1.6rem;
  `}

  ${respondTo.xs`
    width: 46px;
    height: 46px;
    font-size: 1.5rem;
  `}
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