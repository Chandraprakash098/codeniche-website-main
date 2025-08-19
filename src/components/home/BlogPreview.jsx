import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa'

const BlogContainer = styled.div`
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

const BlogCard = styled(motion.article)`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`

const BlogImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.default};
  }
  
  ${BlogCard}:hover & img {
    transform: scale(1.05);
  }
`

const BlogContent = styled.div`
  padding: 1.5rem;
`

const BlogMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.darkGray};
`

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`

const BlogTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  
  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const BlogExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  svg {
    margin-left: 0.5rem;
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    
    svg {
      transform: translateX(5px);
    }
  }
`

const BlogPreview = ({ posts }) => {
  return (
    <BlogContainer>
      {posts.map((post, index) => (
        <BlogCard
          key={post.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <BlogImage>
            <img src={post.image || "/api/placeholder/600/400"} alt={post.title} />
          </BlogImage>
          
          <BlogContent>
            <BlogMeta>
              <MetaItem>
                <FaCalendarAlt /> {post.date}
              </MetaItem>
              <MetaItem>
                <FaUser /> {post.author}
              </MetaItem>
            </BlogMeta>
            
            <BlogTitle>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </BlogTitle>
            
            <BlogExcerpt>{post.excerpt}</BlogExcerpt>
            
            <ReadMoreLink to={`/blog/${post.id}`}>
              Read More <FaArrowRight />
            </ReadMoreLink>
          </BlogContent>
        </BlogCard>
      ))}
    </BlogContainer>
  )
}

export default BlogPreview