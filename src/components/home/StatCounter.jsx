import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const StatItem = styled(motion.div)`
  text-align: center;
  color: white;
  padding: 1rem;
`

const StatValue = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`

const StatLabel = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`

const StatCounter = ({ stats }) => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })
    
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])
  
  return (
    <StatsContainer ref={containerRef}>
      {stats.map((stat, index) => (
        <StatItem
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <StatValue>
            {isVisible ? (
              <CountUp end={stat.value} duration={2} />
            ) : (
              0
            )}
            {stat.suffix}
          </StatValue>
          <StatLabel>{stat.label}</StatLabel>
        </StatItem>
      ))}
    </StatsContainer>
  )
}

// CountUp Component
const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const timerRef = useRef(null)
  
  useEffect(() => {
    const startTime = Date.now()
    const endTime = startTime + duration * 1000
    
    const updateCount = () => {
      const now = Date.now()
      const remaining = Math.max(endTime - now, 0)
      const progress = 1 - remaining / (duration * 1000)
      
      countRef.current = Math.floor(end * progress)
      setCount(countRef.current)
      
      if (progress < 1) {
        timerRef.current = requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }
    
    timerRef.current = requestAnimationFrame(updateCount)
    
    return () => {
      if (timerRef.current) {
        cancelAnimationFrame(timerRef.current)
      }
    }
  }, [end, duration])
  
  return <>{count}</>
}

export default StatCounter