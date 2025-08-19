import { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from 'react-icons/fa'

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`

const FilterButton = styled.button`
  padding: 0.6rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => active ? 'white' : theme.colors.text};
  font-weight: 500;
  transition: all ${({ theme }) => theme.transitions.fast};
  border: 1px solid ${({ active, theme }) => active ? theme.colors.primary : theme.colors.darkGray}30;
  
  &:hover {
    background-color: ${({ active, theme }) => active ? theme.colors.primaryDark : theme.colors.gray};
  }
`

const ProjectsGrid = styled.div`
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

const ProjectCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  height: 300px;
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.default};
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`

const ProjectOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 2rem 1.5rem 1.5rem;
  transform: translateY(60px);
  transition: transform ${({ theme }) => theme.transitions.default};
  
  ${ProjectCard}:hover & {
    transform: translateY(0);
  }
`

const ProjectCategory = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
`

const ProjectTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const ProjectLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  opacity: 0.9;
  transition: opacity ${({ theme }) => theme.transitions.fast};
  
  svg {
    margin-left: 0.5rem;
  }
  
  &:hover {
    opacity: 1;
  }
`

const ProjectsShowcase = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('all')

  // Ensure safe mapping and filtering by handling undefined categories
  const categories = [
    'all',
    ...new Set(
      projects
        .map(project => project.category?.toLowerCase())
        .filter(Boolean)
    ),
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(
          project =>
            project.category?.toLowerCase() === activeFilter
        )

  return (
    <ProjectsContainer>
      <FilterContainer>
        {categories.map((category, index) => (
          <FilterButton
            key={index}
            active={activeFilter === category}
            onClick={() => setActiveFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterButton>
        ))}
      </FilterContainer>

      <ProjectsGrid>
        <AnimatePresence>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectImage
                src={project.image || '/api/placeholder/600/400'}
                alt={project.title}
              />
              <ProjectOverlay>
                <ProjectCategory>{project.category || 'Uncategorized'}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLink to={`/portfolio/${project.id}`}>
                  View Project <FaExternalLinkAlt />
                </ProjectLink>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectsGrid>
    </ProjectsContainer>
  )
}

export default ProjectsShowcase
