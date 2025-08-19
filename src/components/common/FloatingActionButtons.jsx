import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaComments, FaArrowUp } from 'react-icons/fa';
import Chatbot from './Chatbot';

const FloatingButtonsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 1000;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    bottom: 16px;
    right: 16px;
    gap: 12px;
  }
`;

const FloatingButton = styled(motion.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ bgColor, theme }) => bgColor || theme.colors.primary};
  color: white;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.large};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  will-change: transform;
  position: relative;
  overflow: hidden;
  font-size: 1.3rem;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%);
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.default};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
  }

  &:hover {
    transform: translateY(-6px) scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.xl}, 0 10px 30px rgba(0,0,0,0.2);
    border-color: rgba(255, 255, 255, 0.3);

    &::before {
      opacity: 1;
    }

    &::after {
      width: 100%;
      height: 100%;
    }
  }

  &:active {
    transform: translateY(-3px) scale(1.05);
  }

  svg {
    font-size: 1.6rem;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 1.2rem;
    
    svg {
      font-size: 1.4rem;
    }
  }
`;

const WhatsAppButton = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  color: white;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.large};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  will-change: transform;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  font-size: 1.3rem;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%);
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.default};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
  }

  &:hover {
    transform: translateY(-6px) scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.xl}, 0 10px 30px rgba(37, 211, 102, 0.3);
    color: white;
    border-color: rgba(255, 255, 255, 0.3);

    &::before {
      opacity: 1;
    }

    &::after {
      width: 100%;
      height: 100%;
    }
  }

  &:active {
    transform: translateY(-3px) scale(1.05);
  }

  svg {
    font-size: 1.6rem;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 1.2rem;
    
    svg {
      font-size: 1.4rem;
    }
  }
`;

const ScrollToTopButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryDark};
  color: white;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.large};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  will-change: transform;
  position: relative;
  overflow: hidden;
  font-size: 1.3rem;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%);
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.default};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
  }

  &:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primaryDark} 0%, ${({ theme }) => theme.colors.primary} 100%);
    transform: translateY(-6px) scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.xl}, 0 10px 30px rgba(0,0,0,0.2);
    border-color: rgba(255, 255, 255, 0.3);

    &::before {
      opacity: 1;
    }

    &::after {
      width: 100%;
      height: 100%;
    }
  }

  &:active {
    transform: translateY(-3px) scale(1.05);
  }

  svg {
    font-size: 1.6rem;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 1.2rem;
    
    svg {
      font-size: 1.4rem;
    }
  }
`;

const ChatbotModal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  max-width: 400px;
  width: 90%;
  text-align: center;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 350px;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  z-index: 1000;
`;

const CloseButton = styled.button`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryDark} 100%);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }
`;

const FloatingActionButtons = ({ 
  showChatbot = true, 
  showWhatsApp = true, 
  compact = false,
  customChatbot = null,
  onChatbotClick = null
}) => {
  const [showChatbotModal, setShowChatbotModal] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);

  const handleChatbotClick = () => {
    if (onChatbotClick) {
      onChatbotClick();
    } else if (customChatbot) {
      setShowChatbotModal(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleScrollVisibility = () => {
      if (window.pageYOffset > 200) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    };

    window.addEventListener('scroll', toggleScrollVisibility);
    return () => window.removeEventListener('scroll', toggleScrollVisibility);
  }, []);

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      y: -6,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      y: -3
    }
  };

  return (
    <>
      <FloatingButtonsContainer>
        {/* Top: Chat button */}
        {showChatbot && !showChatbotModal && (
          customChatbot ? (
            <FloatingButton
              bgColor="#3B82F6"
              onClick={handleChatbotClick}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              aria-label="Open chat"
            >
              <FaComments />
            </FloatingButton>
          ) : (
            <Chatbot compact />
          )
        )}

        {/* Middle: WhatsApp */}
        {showWhatsApp && (
          <WhatsAppButton
            href="https://wa.me/8401901942"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            <FaWhatsapp />
          </WhatsAppButton>
        )}

        {/* Bottom: Scroll to Top */}
        <ScrollToTopButton
          visible={scrollVisible}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          variants={buttonVariants}
          initial="hidden"
          animate={scrollVisible ? "visible" : "hidden"}
          whileHover="hover"
          whileTap="tap"
        >
          <FaArrowUp />
        </ScrollToTopButton>
      </FloatingButtonsContainer>

      {/* Custom Chatbot Modal */}
      <AnimatePresence>
        {showChatbotModal && customChatbot && (
          <>
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <ChatbotModal
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* X button in top right */}
              <button
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'none',
                  border: 'none',
                  color: '#415A77',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  zIndex: 10,
                }}
                aria-label="Close chatbot modal"
                onClick={() => setShowChatbotModal(false)}
              >
                &#10005;
              </button>
              <FaComments style={{ fontSize: "3.5rem", color: "#FF6B6B", marginBottom: "20px", filter: "drop-shadow(0 4px 8px rgba(255,107,107,0.3))" }} />
              <h3 style={{ marginBottom: "15px", textAlign: "center", fontSize: "1.5rem", fontWeight: "600" }}>
                Chat with Us
              </h3>
              <p style={{ textAlign: "center", marginBottom: "25px", color: "#666", lineHeight: "1.6" }}>
                We're here to help! Send us a message and we'll get back to you shortly.
              </p>
            </ChatbotModal>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingActionButtons; 