import styled from 'styled-components'

const HeadingContainer = styled.div`
  text-align: ${({ align }) => align || 'center'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '1rem'};
  max-width: ${({ maxWidth }) => maxWidth || '800px'};
  margin-left: ${({ align }) => align === 'left' ? '0' : 'auto'};
  margin-right: ${({ align }) => align === 'right' ? '0' : 'auto'};
`

const SubHeading = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme, subColor }) => subColor ? (theme.colors[subColor] || subColor) : theme.colors.primary};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  position: relative;
`

const MainHeading = styled.h2`
  font-size: ${({ size }) => size || '2.5rem'};
  font-weight: 700;
  color: ${({ theme, color }) => color ? theme.colors[color] || color : theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-family: ${({ theme }) => theme.fonts.heading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const HeadingBar = styled.div`
  height: 4px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : '50px'};
  background-color: ${({ theme }) => theme.colors.primary};
  margin: ${({ align }) => 
    align === 'center' ? '0 auto 1.5rem' : 
    align === 'right' ? '0 0 1.5rem auto' : 
    '0 auto 1.5rem 0'};
  display: ${({ hideBar }) => hideBar ? 'none' : 'block'};
`

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const SectionHeading = ({ 
  subHeading, 
  heading, 
  description, 
  align = 'center',
  size,
  color,
  subColor,
  hideBar = false,
  fullWidthBar = false,
  marginBottom,
  maxWidth,
  children
}) => {
  return (
    <HeadingContainer align={align} marginBottom={marginBottom} maxWidth={maxWidth}>
      {subHeading && <SubHeading subColor={subColor}>{subHeading}</SubHeading>}
      {heading && <MainHeading size={size} color={color}>{heading}</MainHeading>}
      <HeadingBar align={align} hideBar={hideBar} fullWidth={fullWidthBar} />
      {description && <Description>{description}</Description>}
      {children}
    </HeadingContainer>
  )
}

export default SectionHeading