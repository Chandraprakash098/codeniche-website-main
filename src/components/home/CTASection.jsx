import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Section from "../common/Section";
import Button from "../common/Button";

const CTAWrapper = styled.div`
  background: ${({ theme }) => theme.mode === 'dark' 
    ? 'linear-gradient(135deg, #0D1B2A 0%, #1B263B 50%, #0D1B2A 100%)'
    : 'linear-gradient(135deg, #E0E1DD 0%, #ffffff 50%, #E0E1DD 100%)'
  };
  padding: 3rem 0;
  text-align: center;
  color: ${({ theme }) => theme.mode === 'dark' ? 'white' : '#1B263B'};
  position: relative;
  overflow: hidden;
  border: ${({ theme }) => theme.mode === 'dark' 
    ? '1px solid rgba(119, 141, 169, 0.2)' 
    : '1px solid rgba(119, 141, 169, 0.15)'
  };
  box-shadow: ${({ theme }) => theme.mode === 'dark'
    ? '0 15px 35px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
    : '0 15px 35px rgba(119, 141, 169, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
  };
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.mode === 'dark'
      ? 'linear-gradient(135deg, rgba(65, 90, 119, 0.08) 0%, rgba(119, 141, 169, 0.05) 50%, rgba(65, 90, 119, 0.03) 100%)'
      : 'linear-gradient(135deg, rgba(119, 141, 169, 0.03) 0%, rgba(65, 90, 119, 0.02) 50%, rgba(119, 141, 169, 0.01) 100%)'
    };
    pointer-events: none;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
    height: 250px;
    background: ${({ theme }) => theme.mode === 'dark'
      ? 'radial-gradient(circle, rgba(119, 141, 169, 0.08) 0%, rgba(65, 90, 119, 0.04) 50%, transparent 80%)'
      : 'radial-gradient(circle, rgba(119, 141, 169, 0.06) 0%, rgba(65, 90, 119, 0.03) 50%, transparent 80%)'
    };
    border-radius: 50%;
    filter: blur(40px);
    pointer-events: none;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const CTATitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.mode === 'dark' ? '#E0E1DD' : '#415A77'};
  text-shadow: ${({ theme }) => theme.mode === 'dark'
    ? '0 2px 4px rgba(0, 0, 0, 0.3)'
    : '0 2px 4px rgba(255, 255, 255, 0.6)'
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

const CTADescription = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.mode === 'dark' ? '#778DA9' : '#415A77'};
  line-height: 1.7;
  font-weight: 500;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const CTASection = () => {
  return (
    <Section id="cta" padding="0" noPadding fullWidth>
      <CTAWrapper>

        <CTAContent>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business with Technology?
          </CTATitle>

          <CTADescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get in touch with us today to discuss your project requirements and
            discover how we can help you achieve your business goals.
          </CTADescription>

          <CTAButtons
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            
            <Link to="/contact">
              <Button 
                as="span" 
                size="large" 
                variant="secondary"
                style={{ 
                  background: 'linear-gradient(135deg, #415A77 0%, #1B263B 100%)',
                  border: '2px solid #778DA9',
                  color: '#E0E1DD',
                  boxShadow: '0 8px 25px rgba(65, 90, 119, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  padding: '1rem 2rem',
                  transform: 'translateY(0)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 35px rgba(65, 90, 119, 0.4), 0 6px 15px rgba(0, 0, 0, 0.3)'
                  }
                }}
              >
                Contact Us
              </Button>
            </Link>

            <Link to="/services">
              <Button
                as="span"
                size="large"
                variant="outline"
                style={{ 
                  color: "#778DA9", 
                  borderColor: "#778DA9",
                  borderWidth: '2px',
                  background: 'rgba(119, 141, 169, 0.1)',
                  backdropFilter: 'blur(10px)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  padding: '1rem 2rem',
                  transform: 'translateY(0)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(119, 141, 169, 0.2)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(119, 141, 169, 0.3)'
                  }
                }}
              >
                Our Services
              </Button>
            </Link>
          </CTAButtons>
        </CTAContent>
      </CTAWrapper>
    </Section>
  );
};

export default CTASection;

