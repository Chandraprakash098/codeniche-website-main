import styled from 'styled-components'
import { motion } from 'framer-motion'

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const FeatureItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 0 0;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all ${({ theme }) => theme.transitions.default};
  
  // &:hover {
  //   box-shadow: ${({ theme }) => theme.shadows.medium};
  //   transform: translateY(-5px);
  // }
`

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1.6;
`

const FeaturesList = ({ features }) => {
  return (
    <FeaturesContainer>
      {features.map((feature, index) => (
        <FeatureItem
          key={feature.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <FeatureIcon>
            {feature.icon}
          </FeatureIcon>
          <FeatureTitle>{feature.title}</FeatureTitle>
          <FeatureDescription>{feature.description}</FeatureDescription>
        </FeatureItem>
      ))}
    </FeaturesContainer>
  )
}

export default FeaturesList