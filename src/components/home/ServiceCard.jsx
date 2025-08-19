import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "../common/Card";

const ServiceCardWrapper = styled(motion(Card))`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  font-size: 1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary}10;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ServiceTitle = styled.h3`
  display: flex;
  gap: 1.5rem;
  align-items: baseline;  
  font-size: 1.25rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ServiceLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.default};
  }

  &:hover:after {
    width: 100%;
  }
`;

const ServiceCard = ({ service }) => {
  return (
    <ServiceCardWrapper
      elevation="medium"
      hover="lift"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card.Body>
        <ServiceTitle>
          <IconWrapper>
            {service.icon}
          </IconWrapper>
          {service.title}
        </ServiceTitle>
        <ServiceDescription>{service.description}</ServiceDescription>
        <ServiceLink to={`/services#${service.id}`}>Learn More</ServiceLink>
      </Card.Body>
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
