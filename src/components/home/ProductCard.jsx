import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion,useInView } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import Card from '../common/Card'
import { useRef } from 'react';

const ProductCardWrapper = styled(motion(Card))`
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`

// const ProductImage = styled.div`
//   height: 250px;
//   overflow: hidden;
  
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform ${({ theme }) => theme.transitions.default};
//   }
  
//   ${ProductCardWrapper}:hover & img {
//     transform: scale(1.05);
//   }
// `


const ProductImage = styled.div`
  height: 240px; /* or auto, or any px/rem you want */
  overflow: hidden;

  img {
    width: 100%;       /* Stretch full width */
    height: 100%;      /* Maintain aspect ratio */
    max-height: 240px; /* Limit the max height */
    object-fit: contain; /* or cover, based on your design */
    transition: transform ${({ theme }) => theme.transitions.default};
  }

  ${ProductCardWrapper}:hover & img {
    transform: scale(1.05);
  }
`;


const ProductContent = styled.div`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`

const ProductDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 1.5rem;
  flex-grow: 1;
`

const ProductLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  transition: all ${({ theme }) => theme.transitions.fast};
  margin-top: auto;
  
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

// const ProductCard = ({ product }) => {
//   return (
//     <ProductCardWrapper
//       elevation="medium"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//     >
//       <ProductImage>
//         <img src={product.image || "/api/placeholder/600/400"} alt={product.title} />
//       </ProductImage>
//       <ProductContent>
//         <ProductTitle>{product.title}</ProductTitle>
//         <ProductDescription>{product.description}</ProductDescription>
//         <ProductLink to={product.link || "#"}>
//           Learn More <FaArrowRight />
//         </ProductLink>
//       </ProductContent>
//     </ProductCardWrapper>
//   )
// }


const ProductCard = ({ product }) => {
  const ref = useRef(null); // Add ref
  const isInView = useInView(ref, { once: true }); // Use useInView to control animation

  return (
    <ProductCardWrapper
      ref={ref}
      elevation="medium"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <ProductImage>
        <img src={product.image || "/api/placeholder/600/400"} alt={product.title} />
      </ProductImage>
      <ProductContent>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductLink to={product.link || "#"}>
          Learn More <FaArrowRight />
        </ProductLink>
      </ProductContent>
    </ProductCardWrapper>
  );
};

export default ProductCard