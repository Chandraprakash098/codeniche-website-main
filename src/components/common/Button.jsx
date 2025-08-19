// import styled, { css } from 'styled-components'

// const ButtonStyles = css`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   padding: ${({ size }) => 
//     size === 'small' ? '0.5rem 1rem' : 
//     size === 'large' ? '1rem 2.5rem' : 
//     '0.75rem 1.5rem'};
//   font-size: ${({ size }) => 
//     size === 'small' ? '0.875rem' : 
//     size === 'large' ? '1.125rem' : 
//     '1rem'};
//   font-weight: 500;
//   border-radius: ${({ theme }) => theme.borderRadius.medium};
//   transition: all ${({ theme }) => theme.transitions.fast};
//   position: relative;
//   overflow: hidden;
//   z-index: 1;
  
//   ${({ variant, theme }) => {
//     switch (variant) {
//       case 'outline':
//         return css`
//           background: transparent;
//           color: ${theme.colors.primary};
//           border: 2px solid ${theme.colors.primary};
          
//           &:hover {
//             background: ${theme.colors.primary};
//             color: white;
//           }
//         `;
//       case 'secondary':
//         return css`
//           background: ${theme.colors.secondary};
//           color: white;
          
//           &:hover {
//             background: ${theme.colors.secondaryDark};
//             transform: translateY(-3px);
//             box-shadow: ${theme.shadows.medium};
//           }
//         `;
//       case 'ghost':
//         return css`
//           background: transparent;
//           color: ${theme.colors.primary};
          
//           &:hover {
//             background: rgba(67, 97, 238, 0.1);
//           }
//         `;
//       case 'text':
//         return css`
//           background: transparent;
//           color: ${theme.colors.text};
//           padding: 0;
          
//           &:hover {
//             color: ${theme.colors.primary};
//           }
//         `;
//       default: // primary
//         return css`
//           background: ${theme.colors.primary};
//           color: white;
          
//           &:hover {
//             background: ${theme.colors.primaryDark};
//             transform: translateY(-3px);
//             box-shadow: ${theme.shadows.medium};
//           }
          
//           &::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: -100%;
//             width: 100%;
//             height: 100%;
//             background: linear-gradient(
//               90deg,
//               transparent,
//               rgba(255, 255, 255, 0.2),
//               transparent
//             );
//             transition: left 0.7s ease;
//             z-index: -1;
//           }
          
//           &:hover::before {
//             left: 100%;
//           }
//         `;
//     }
//   }}
  
//   ${({ disabled, theme }) => 
//     disabled && 
//     css`
//       opacity: 0.6;
//       cursor: not-allowed;
//       box-shadow: none;
      
//       &:hover {
//         transform: none;
//         box-shadow: none;
//       }
//     `
//   }
  
//   ${({ fullWidth }) => 
//     fullWidth && 
//     css`
//       width: 100%;
//     `
//   }
// `

// const StyledButton = styled.button`${ButtonStyles}`
// const StyledAnchor = styled.a`${ButtonStyles}`

// const Button = ({ 
//   children, 
//   variant = 'primary', 
//   size = 'medium', 
//   disabled = false,
//   fullWidth = false,
//   as,
//   ...props 
// }) => {
//   if (as === 'a') {
//     return (
//       <StyledAnchor
//         variant={variant}
//         size={size}
//         disabled={disabled}
//         fullWidth={fullWidth}
//         {...props}
//       >
//         {children}
//       </StyledAnchor>
//     )
//   }
  
//   return (
//     <StyledButton
//       variant={variant}
//       size={size}
//       disabled={disabled}
//       fullWidth={fullWidth}
//       {...props}
//     >
//       {children}
//     </StyledButton>
//   )
// }

// export default Button

import styled, { css } from 'styled-components';

const ButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) =>
    size === 'small' ? '0.75rem 1.25rem' :
    size === 'large' ? '1.125rem 2.75rem' :
    '0.875rem 1.75rem'};
  font-size: ${({ size }) =>
    size === 'small' ? '0.9rem' :
    size === 'large' ? '1.2rem' :
    '1rem'};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  letter-spacing: 0.5px;
  border: none;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'outline':
        return css`
          background: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          
          &:hover {
            background: ${theme.colors.primary};
            color: white;
            transform: translateY(-3px);
            box-shadow: ${theme.shadows.medium};
          }
        `;
      case 'secondary':
        return css`
          background: ${theme.colors.secondary};
          color: white;
          
          &:hover {
            background: ${theme.colors.secondaryDark};
            transform: translateY(-3px);
            box-shadow: ${theme.shadows.medium};
          }
        `;
      case 'ghost':
        return css`
          background: transparent;
          color: ${theme.colors.primary};
          box-shadow: none;
          
          &:hover {
            background: rgba(67, 97, 238, 0.1);
            transform: translateY(-2px);
          }
        `;
      case 'text':
        return css`
          background: transparent;
          color: ${theme.colors.text};
          padding: 0;
          box-shadow: none;
          
          &:hover {
            color: ${theme.colors.primary};
          }
        `;
      default: // primary
        return css`
          background: ${theme.colors.primary};
          color: white;
          
          &:hover {
            background: ${theme.colors.primaryDark};
            transform: translateY(-3px);
            box-shadow: ${theme.shadows.medium};
          }
          
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.3),
              transparent
            );
            transition: left 0.5s ease;
            z-index: -1;
          }
          
          &:hover::before {
            left: 100%;
          }
        `;
    }
  }}
  
  ${({ disabled, theme }) =>
    disabled &&
    css`
      opacity: 0.65;
      cursor: not-allowed;
      box-shadow: none;
      
      &:hover {
        transform: none;
        box-shadow: none;
      }
    `
  }
  
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `
  }
`;

const StyledButton = styled.button`${ButtonStyles}`;
const StyledAnchor = styled.a`${ButtonStyles}`;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  as,
  ...props
}) => {
  if (as === 'a') {
    return (
      <StyledAnchor
        variant={variant}
        size={size}
        disabled={disabled}
        fullWidth={fullWidth}
        {...props}
      >
        {children}
      </StyledAnchor>
    );
  }
  
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;