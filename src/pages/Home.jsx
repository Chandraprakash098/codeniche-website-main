import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import mob from "../assets/images/mobimg1.png";
import ijanani from '../assets/images/ijanani.png';
import { useTheme } from "../contexts/ThemeContext";

import Section from "../components/common/Section";
import Button from "../components/common/Button";
import SectionHeading from "../components/common/SectionHeading";
import Hero from "../components/home/Hero";
import ServiceCard from "../components/home/ServiceCard";
import FeaturesList from "../components/home/FeaturesList";
import ProductCard from "../components/home/ProductCard";
import TestimonialSlider from "../components/home/TestimonialSlider";
import ClientsSlider from "../components/home/ClientsSlider";
import StatCounter from "../components/home/StatCounter";
import CTASection from "../components/home/CTASection";
import BlogPreview from "../components/home/BlogPreview";
import FloatingActionButtons from "../components/common/FloatingActionButtons";
import Card from "../components/common/Card";

import {
  servicesData,
  featuresData,
  productsData,
  testimonials,
  clients,
  statsData,
  blogPosts,
} from "../data/homeData";


const lightTheme = {
  colors: {
    primary: "#2563EB", // Vibrant blue
    primaryDark: "#1D4ED8",
    secondary: "#06B6D4", // Cyan
    accent: "#EC4899", // Pink
    text: "#374151", // Dark gray
    textLight: "#6B7280", // Medium gray
    headingColor: "#111827", // Almost black
    white: "#FFFFFF",
    lightGray: "#F3F4F6",
    background: "#F9FAFB",
    gray: "#E5E7EB",
    cardBackground: "#FFFFFF",
    light: "#FFFFFF",
    success: "#10B981", // Green
    warning: "#F59E0B", // Amber
    error: "#EF4444", // Red
  },
  borderRadius: {
    large: "12px",
    medium: "8px",
    small: "4px",
  },
  shadows: {
    small: "0 1px 3px rgba(0, 0, 0, 0.1)",
    medium: "0 4px 6px rgba(0, 0, 0, 0.1)",
    large: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
  },
  transitions: {
    default: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  },
  spacing: {
    section: "6rem",
    compactSection: "4rem",
  },
  mode: "light",
};

const darkTheme = {
  colors: {
    primary: "#3B82F6",
    primaryDark: "#2563EB",
    secondary: "#22D3EE",
    accent: "#F472B6",
    text: "#E5E7EB",
    textLight: "#9CA3AF",
    headingColor: "#F9FAFB",
    white: "#1F2937",
    lightGray: "#374151",
    background: "#111827",
    gray: "#1F2937",
    cardBackground: "#1E293B",
    light: "#334155",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
  },
  borderRadius: lightTheme.borderRadius,
  shadows: {
    small: "0 1px 3px rgba(0, 0, 0, 0.3)",
    medium: "0 4px 6px rgba(0, 0, 0, 0.3)",
    large: "0 10px 15px rgba(0, 0, 0, 0.3)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.3)",
  },
  transitions: lightTheme.transitions,
  spacing: lightTheme.spacing,
  mode: "dark",
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      delay: 0.2
    },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Styled components
const FloatingButtonsContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1000;
  align-items: flex-end;

  @media (max-width: 768px) {
    bottom: 16px;
    right: 16px;
  }
`;

const ThemeToggle = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.large};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.spring};
  will-change: transform;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.1);
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    background: ${({ theme }) => theme.colors.primaryDark};

    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  svg {
    font-size: 1.8rem;
  }
`;

const WhatsAppButton = styled.a`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: white;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.large};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.spring};
  will-change: transform;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.1);
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.xl};

    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  svg {
    font-size: 1.8rem;
  }
`;

const ChatbotButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, #0891b2);
  color: ${({ theme }) => theme.colors.white};
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.large};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.spring};
  will-change: transform;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.1);
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.xl};

    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  svg {
    font-size: 1.4rem;
  }
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const CompactSection = styled(Section)`
  padding: ${({ theme }) => theme.spacing.compactSection} 0;
  background-color: ${({ theme, bgColor }) => 
    bgColor === "gray" ? theme.colors.gray : theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color ${({ theme }) => theme.transitions.default},
              color ${({ theme }) => theme.transitions.default};

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionDivider = styled.div`
  height: 4px;
  width: 80px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  margin: 0 auto;
  border-radius: 4px;
`;

const ProductHighlightSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all ${({ theme }) => theme.transitions.default};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(${({ theme }) => theme.mode === 'light' ? '245, 245, 245' : '30, 41, 59'}, 0.8),
      rgba(${({ theme }) => theme.mode === 'light' ? '255, 255, 255' : '15, 23, 42'}, 0.9)
    );
    z-index: -1;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const ProductContent = styled(motion.div)`
  h2 {
    font-size: 2.25rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.headingColor};
    line-height: 1.2;
    transition: color ${({ theme }) => theme.transitions.default};
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    transition: color ${({ theme }) => theme.transitions.default};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const FeatureGrid = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    li {
      background-color: ${({ theme }) => theme.colors.light};
      padding: 0.75rem;
      border-radius: ${({ theme }) => theme.borderRadius.small};
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      transition: all ${({ theme }) => theme.transitions.default};
      box-shadow: ${({ theme }) => theme.shadows.small};

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.medium};
        background-color: ${({ theme }) => theme.colors.primary}10;
      }

      .feature-icon {
        color: ${({ theme }) => theme.colors.primary};
        margin-right: 8px;
        font-size: 1rem;
        flex-shrink: 0;
      }
    }
  }
`;

const ProductImage = styled(motion.div)`
  position: relative;
  img {
    max-width: 100%;
    max-height: 500px;
    height: auto;
    object-fit: contain;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transition: all ${({ theme }) => theme.transitions.default};
    transform-style: preserve-3d;
    will-change: transform;
  }

  &:hover img {
    transform: perspective(1000px) rotateY(5deg) rotateX(5deg) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.xl}, 0 0 30px rgba(0, 0, 0, 0.1);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const TestimonialSliderWrapper = styled(motion.div)`
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-top: 2rem;
  padding: 1rem 0;
`;

const TestimonialCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  min-width: 320px;
  height: 240px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 1rem;
  transition: all ${({ theme }) => theme.transitions.default};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  will-change: transform;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
    border-color: ${({ theme }) => theme.colors.primary}30;
  }

  .quote-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${({ theme }) => theme.colors.primary}20;
    font-size: 2rem;
    opacity: 0.7;
  }
`;

const TestimonialContent = styled.div`
  margin-bottom: 1rem;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  font-size: 1rem;
  overflow: auto;
  max-height: 120px;
  padding-right: 0.5rem;
  transition: color ${({ theme }) => theme.transitions.default};

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGray};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: border-color ${({ theme }) => theme.transitions.default};
`;

const AuthorAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  background-color: ${(props) => props.bgColor || "#4F46E5"};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const AuthorInfo = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
    color: ${({ theme }) => theme.colors.headingColor};
    transition: color ${({ theme }) => theme.transitions.default};
  }

  p {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin: 0;
    transition: color ${({ theme }) => theme.transitions.default};
  }
`;

const RatingStars = styled.div`
  display: flex;
  margin-top: 0.25rem;

  svg {
    color: #f59e0b;
    font-size: 0.9rem;
    margin-right: 2px;
  }
`;

const StatsSection = styled(Section)`
  padding: 4rem 0;
  background: #0077b6;
  transition: background-color ${({ theme }) => theme.transitions.default};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  transition: all ${({ theme }) => theme.transitions.default};
  overflow-x: hidden;
`;

// Utility functions
const getInitial = (name) => {
  return name && typeof name === "string" ? name.charAt(0).toUpperCase() : "A";
};

const getColorFromInitial = (initial) => {
  const colors = [
    "#2563EB",
    "#EC4899",
    "#10B981",
    "#F59E0B",
    "#06B6D4",
    "#8B5CF6",
    "#EF4444",
    "#14B8A6",
    "#F97316",
    "#6366F1",
  ];
  const index = initial.charCodeAt(0) % colors.length;
  return colors[index];
};

const Home = () => {
  const { mode } = useTheme();
  const controls = useAnimation();
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const renderRatingStars = (rating) => {
    const validRating = Math.min(Math.max(rating || 5, 1), 5);
    return Array.from({ length: validRating }, (_, i) => (
      <AiFillStar key={i} />
    ));
  };

  useEffect(() => {
    const sliderWidth = sliderRef.current
      ? sliderRef.current.scrollWidth / 2
      : 0;
    if (sliderWidth > 0) {
      controls.start({
        x: -sliderWidth,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: testimonials.length * 3,
            ease: "linear",
          },
        },
      });
    }
    return () => controls.stop();
  }, [controls, testimonials.length]);

  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      const sliderWidth = sliderRef.current
        ? sliderRef.current.scrollWidth / 2
        : 0;
      controls.start({
        x: -sliderWidth,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: testimonials.length * 3,
            ease: "linear",
          },
        },
      });
    }
  }, [isPaused, controls, testimonials.length]);

  const currentTheme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Helmet>
        <title>CodeNiche SoftStudio | Innovative Software Solutions & Development Services</title>
        <meta name="description" content="CodeNiche SoftStudio provides cutting-edge software development, web applications, mobile apps, and digital solutions to help businesses grow and succeed in the digital age." />
        <meta name="keywords" content="software development, web development, mobile apps, digital solutions, custom software, SaaS development, CodeNiche SoftStudio" />
        <meta property="og:title" content="CodeNiche SoftStudio | Innovative Software Solutions" />
        <meta property="og:description" content="Transform your business with our custom software solutions, web applications, and mobile apps tailored to your needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codenichesoftstudio.com" />
        <meta property="og:image" content="https://codenichesoftstudio.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CodeNiche SoftStudio | Innovative Software Solutions" />
        <meta name="twitter:description" content="Transform your business with our custom software solutions, web applications, and mobile apps tailored to your needs." />
        <meta name="twitter:image" content="https://codenichesoftstudio.com/twitter-card.jpg" />
        <link rel="canonical" href="https://codenichesoftstudio.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "CodeNiche SoftStudio",
              "url": "https://codenichesoftstudio.com",
              "logo": "https://codenichesoftstudio.com/logo.png",
              "description": "Innovative software solutions and development services",
              "offers": {
                "@type": "Offer",
                "price": "Varies",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              }
            }
          `}
        </script>
      </Helmet>
      
      <PageContainer>
        <Hero />

        {/* Services Section */}
        <CompactSection id="services" bgColor="gray">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <SectionHeading
              subHeading="What We Do"
              heading="Our Comprehensive Services"
              description="We deliver cutting-edge solutions tailored to your business needs"
              align="center"
            />
            <SectionDivider />
            <ServicesGrid
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {servicesData.map((service) => (
                <motion.div key={service.id} variants={fadeInUp}>
                  <ServiceCard service={service} compact />
                </motion.div>
              ))}
            </ServicesGrid>
            <motion.div
              style={{ textAlign: "center", marginTop: "4rem" }}
              variants={fadeInUp}
            >
              <Link to="/services" aria-label="View all our services">
                <Button
                  as="span"
                  style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore All Services <FaArrowRight style={{ marginLeft: "8px" }} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </CompactSection>

        {/* Features Section */}
        <CompactSection id="features">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <SectionHeading
              subHeading="Why Choose Us"
              heading="Our Competitive Advantages"
              description="Discover what sets us apart from the competition"
              align="center"
            />
            <SectionDivider />
            <FeaturesList features={featuresData} compact />
          </motion.div>
        </CompactSection>

        {/* Product Highlight Section */}
        <CompactSection id="products" bgColor="gray">
          <ProductHighlightSection
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={scaleUp}
          >
            <ProductContent variants={fadeInUp}>
              <SectionHeading
                subHeading="Featured Product"
                heading="SkoolVriksh - School Management System"
                description="Comprehensive school management system to streamline administration, enhance communication, and improve educational outcomes"
                align="left"
                compact
              />
              <FeatureGrid>
                <ul>
                  {[
                    "Student Management System",
                    "Automated Attendance Tracking",
                    "Comprehensive Exam Management",
                    "Online Fee Collection",
                    "Digital Library System",
                    "Transport Management",
                    "Parent-Teacher Communication",
                    "Automated Reports & Analytics",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <FaCheckCircle className="feature-icon" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </FeatureGrid>
              <ButtonGroup>
                <Link to="/products/skoolvriksh" aria-label="Learn more about SkoolVriksh">
                  <Button 
                    as="span" 
                    small
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </Button>
                </Link>
                <Link to="/contact" aria-label="Request a demo of SkoolVriksh">
                  <Button 
                    as="span" 
                    variant="outline" 
                    small
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Demo
                  </Button>
                </Link>
              </ButtonGroup>
            </ProductContent>
            <ProductImage variants={fadeInUp}>
              <img 
                src={mob} 
                alt="SkoolVriksh Dashboard - School Management Software" 
                loading="lazy"
              />
            </ProductImage>
          </ProductHighlightSection>
        </CompactSection>

        {/* Stats Section */}
        <StatsSection id="stats">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <StatCounter stats={statsData} compact />
          </motion.div>
        </StatsSection>

        {/* Testimonials Section */}
        <CompactSection id="testimonials" bgColor="gray">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <SectionHeading
              subHeading="Client Testimonials"
              heading="What Our Clients Say"
              description="Hear from businesses that have transformed with our solutions"
              align="center"
              compact
            />
            <SectionDivider />
            <TestimonialSliderWrapper
              onMouseEnter={handlePause}
              onMouseLeave={handleResume}
              onTouchStart={handlePause}
              onTouchEnd={handleResume}
            >
              <motion.div
                ref={sliderRef}
                animate={controls}
                initial={{ x: 0 }}
                style={{ display: "flex" }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => {
                  const initial = getInitial(testimonial.name);
                  const bgColor = getColorFromInitial(initial);
                  return (
                    <TestimonialCard
                      key={`${testimonial.id}-${index}`}
                      variants={fadeInUp}
                    >
                      <IoMdQuote className="quote-icon" />
                      <TestimonialContent>{testimonial.text}</TestimonialContent>
                      <TestimonialAuthor>
                        <AuthorAvatar bgColor={bgColor}>{initial}</AuthorAvatar>
                        <AuthorInfo>
                          <h4>{testimonial.name}</h4>
                          <p>
                            {testimonial.position}, {testimonial.company}
                          </p>
                          <RatingStars>
                            {renderRatingStars(testimonial.rating)}
                          </RatingStars>
                        </AuthorInfo>
                      </TestimonialAuthor>
                    </TestimonialCard>
                  );
                })}
              </motion.div>
            </TestimonialSliderWrapper>
          </motion.div>
        </CompactSection>

        {/* Clients Section */}
        <CompactSection id="clients">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <SectionHeading
              subHeading="Our Esteemed Clients"
              heading="Trusted By Industry Leaders"
              description="We partner with businesses of all sizes to deliver exceptional results"
              align="center"
              compact
            />
            <SectionDivider />
            <ClientsSlider clients={clients} compact />
          </motion.div>
        </CompactSection>

        {/* CTA Section */}
        <CTASection compact />

        {/* Floating action buttons */}
        <FloatingActionButtons showChatbot={true} showWhatsApp={true}/>
      </PageContainer>
    </ThemeProvider>
  );
};

export default Home;