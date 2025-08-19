import styled from 'styled-components'

const StyledSection = styled.section`
  padding: ${({ padding }) => padding || '5rem 0'};
  background-color: ${({ bgColor, theme }) => bgColor ? theme.colors[bgColor] || bgColor : 'transparent'};
  position: relative;
  overflow: hidden;
  
  ${({ bgPattern }) => bgPattern && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${bgPattern});
      opacity: 0.05;
      z-index: 0;
    }
  `}
`

const SectionContainer = styled.div`
  max-width: ${({ fullWidth }) => fullWidth ? '100%' : '1400px'};
  margin: 0 auto;
  padding: ${({ noPadding }) => noPadding ? '0' : '0 2rem'};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ noPadding }) => noPadding ? '0' : '0 1rem'};
  }
`

const Section = ({ 
  children, 
  id, 
  bgColor, 
  padding, 
  bgPattern,
  fullWidth = false,
  noPadding = false,
  ...props 
}) => {
  return (
    <StyledSection 
      id={id} 
      bgColor={bgColor} 
      padding={padding}
      bgPattern={bgPattern}
      {...props}
    >
      <SectionContainer fullWidth={fullWidth} noPadding={noPadding}>
        {children}
      </SectionContainer>
    </StyledSection>
  )
}

export default Section