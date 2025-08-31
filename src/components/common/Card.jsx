import styled from 'styled-components'
import { forwardRef } from 'react'; // Add this import

const CardContainer = styled.div`
  background-color: ${({ theme, bgColor }) => bgColor ? bgColor : theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme, elevation }) => 
    elevation === 'high' ? theme.shadows.large :
    elevation === 'medium' ? theme.shadows.medium :
    theme.shadows.small};
  transition: all ${({ theme }) => theme.transitions.default};
  height: ${({ height }) => height || 'auto'};
  
  &:hover {
    transform: ${({ hover }) => hover === 'lift' ? 'translateY(-10px)' : 'none'};
    box-shadow: ${({ theme, hover }) => hover === 'lift' ? theme.shadows.xl : theme.shadows.medium};
  }
`

const CardHeader = styled.div`
  padding: ${({ noPadding }) => noPadding ? '0' : '1.5rem 1.5rem 0'};
`

const CardBody = styled.div`
  padding: ${({ noPadding }) => noPadding ? '0' : '1.5rem'};
`

const CardFooter = styled.div`
  padding: ${({ noPadding }) => noPadding ? '0' : '0 1.5rem 1.5rem'};
  display: flex;
  justify-content: ${({ align }) => align || 'flex-start'};
  align-items: center;
`

// const Card = ({
//   children,
//   bgColor,
//   elevation = 'low',
//   hover,
//   height,
//   className,
//   ...props
// }) => {
//   return (
//     <CardContainer 
//       bgColor={bgColor}
//       elevation={elevation}
//       hover={hover}
//       height={height}
//       className={className}
//       {...props}
//     >
//       {children}
//     </CardContainer>
//   )
// }


const Card = forwardRef(({ children, bgColor, elevation = 'low', hover, height, className, ...props }, ref) => {
  return (
    <CardContainer 
      $bgColor={bgColor} // Use transient props
      $elevation={elevation}
      $hover={hover}
      $height={height}
      className={className}
      ref={ref}
      {...props}
    >
      {children}
    </CardContainer>
  );
});

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card