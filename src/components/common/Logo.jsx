import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme, scrolled }) => scrolled ? theme.colors.primary : theme.colors.light};
  transition: color ${({ theme }) => theme.transitions.default};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Logo = ({ scrolled = true }) => {
  return (
    <LogoContainer>
      <LogoText scrolled={scrolled}>
        Code<span>Niche</span>
      </LogoText>
    </LogoContainer>
  )
}

export default Logo