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