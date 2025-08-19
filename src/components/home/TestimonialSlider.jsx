// import { useState } from 'react'
// import styled from 'styled-components'
// import Slider from 'react-slick'
// import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

// const TestimonialContainer = styled.div`
//   position: relative;
//   max-width: 1100px;
//   margin: 4rem auto;
//   padding: 2rem;
// `

// const TestimonialCard = styled.div`
//   background: ${({ theme }) => theme.colors.white};
//   border-radius: 1rem;
//   box-shadow: 0 10px 30px rgba(0,0,0,0.1);
//   padding: 3rem 2rem 2.5rem;
//   position: relative;
//   text-align: center;
//   min-height: 320px;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `

// const QuoteIcon = styled.div`
//   position: absolute;
//   top: -25px;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   background-color: ${({ theme }) => theme.colors.primary};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-size: 1.5rem;
//   box-shadow: 0 5px 15px rgba(0,0,0,0.2);
// `

// const TestimonialText = styled.p`
//   font-size: 1.1rem;
//   line-height: 1.8;
//   margin-top: 2rem;
//   color: ${({ theme }) => theme.colors.text};
//   font-style: italic;
// `

// const TestimonialAuthor = styled.div`
//   margin-top: 2rem;
// `

// const AuthorName = styled.h4`
//   font-size: 1.2rem;
//   font-weight: 700;
//   margin-bottom: 0.25rem;
//   color: ${({ theme }) => theme.colors.primary};
// `

// const AuthorPosition = styled.p`
//   color: ${({ theme }) => theme.colors.darkGray};
//   font-size: 0.9rem;
// `

// const StarsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 1rem 0;

//   svg {
//     margin: 0 3px;
//   }
// `

// const SliderArrow = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 10;
//   width: 45px;
//   height: 45px;
//   border-radius: 50%;
//   background-color: ${({ theme }) => theme.colors.white};
//   color: ${({ theme }) => theme.colors.primary};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0 4px 10px rgba(0,0,0,0.15);
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.primary};
//     color: white;
//   }

//   &.prev {
//     left: -30px;
//   }

//   &.next {
//     right: -30px;
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `

// const TestimonialSlider = ({ testimonials }) => {
//   const [sliderRef, setSliderRef] = useState(null)

//   const renderStars = (rating) => {
//     return [...Array(5)].map((_, i) => (
//       <FaStar key={i} size={16} color={i < rating ? '#ffc107' : '#e4e5e9'} />
//     ))
//   }

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 6000,
//     arrows: false,
//     adaptiveHeight: true
//   }

//   return (
//     <TestimonialContainer>
//       <SliderArrow className="prev" onClick={() => sliderRef?.slickPrev()}>
//         <FaChevronLeft />
//       </SliderArrow>

//       <Slider ref={setSliderRef} {...sliderSettings}>
//         {testimonials.map((testimonial) => (
//           <div key={testimonial.id}>
//             <TestimonialCard>
//               <QuoteIcon><FaQuoteLeft /></QuoteIcon>
//               <TestimonialText>"{testimonial.text}"</TestimonialText>
//               <StarsContainer>{renderStars(testimonial.rating)}</StarsContainer>
//               <TestimonialAuthor>
//                 <AuthorName>{testimonial.name}</AuthorName>
//                 <AuthorPosition>{testimonial.position}, {testimonial.company}</AuthorPosition>
//               </TestimonialAuthor>
//             </TestimonialCard>
//           </div>
//         ))}
//       </Slider>

//       <SliderArrow className="next" onClick={() => sliderRef?.slickNext()}>
//         <FaChevronRight />
//       </SliderArrow>
//     </TestimonialContainer>
//   )
// }

// export default TestimonialSlider



import { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonialContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%);
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  text-align: center;
  min-height: 350px;
  transition: all 0.3s ease-in-out;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4a90e2, #50e3c2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-top: 2.5rem;
  color: ${({ theme }) => theme.colors.textDark};
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  margin-top: 2rem;
`;

const AuthorName = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const AuthorPosition = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.95rem;
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;

  svg {
    margin: 0 3px;
  }
`;

const SliderArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  &.prev {
    left: -60px;
  }

  &.next {
    right: -60px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 1024px) {
    left: -30px;
    right: -30px;
  }
`;

const TestimonialSlider = ({ testimonials }) => {
  const [sliderRef, setSliderRef] = useState(null);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        size={18}
        color={i < rating ? '#f4c430' : '#e4e5e9'}
      />
    ));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
    customPaging: () => (
      <div
        style={{
          width: '10px',
          height: '10px',
          background: '#d3d3d3',
          borderRadius: '50%',
          display: 'inline-block',
        }}
      ></div>
    ),
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <TestimonialContainer>
      <SliderArrow
        className="prev"
        onClick={() => sliderRef?.slickPrev()}
      >
        <FaChevronLeft />
      </SliderArrow>

      <Slider ref={setSliderRef} {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <QuoteIcon>
              <FaQuoteLeft />
            </QuoteIcon>
            <TestimonialText>"{testimonial.text}"</TestimonialText>
            <StarsContainer>{renderStars(testimonial.rating)}</StarsContainer>
            <TestimonialAuthor>
              <AuthorName>{testimonial.name}</AuthorName>
              <AuthorPosition>
                {testimonial.position}, {testimonial.company}
              </AuthorPosition>
            </TestimonialAuthor>
          </TestimonialCard>
        ))}
      </Slider>

      <SliderArrow
        className="next"
        onClick={() => sliderRef?.slickNext()}
      >
        <FaChevronRight />
      </SliderArrow>
    </TestimonialContainer>
  );
};

export default TestimonialSlider;
