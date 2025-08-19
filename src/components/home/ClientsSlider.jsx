// import styled from 'styled-components'
// import Slider from 'react-slick'

// // const ClientsContainer = styled.div`
// //   margin: 0 auto;
// // `

// const ClientsContainer = styled.div`
//   margin: 0 auto;
//   max-width: 1200px;
//   padding: 0 20px;
// `

// // const ClientLogo = styled.div`
// //   padding: 1.5rem;
// //   display: flex !important;
// //   justify-content: center;
// //   align-items: center;
// //   height: 100px;
  
// //   img {
// //     max-width: 80%;
// //     max-height: 80px;
// //     filter: grayscale(100%);
// //     opacity: 0.7;
// //     transition: all ${({ theme }) => theme.transitions.default};
// //   }
  
// //   &:hover img {
// //     filter: grayscale(0%);
// //     opacity: 1;
// //   }
// // `

// const ClientLogo = styled.div`
//   padding: 1.5rem;
//   display: flex !important;
//   justify-content: center;
//   align-items: center;
//   height: 120px;
//   transition: all ${({ theme }) => theme.transitions.default};
  
//   img {
//     max-width: 80%;
//     max-height: 80px;
//     width: auto;
//     height: auto;
//     object-fit: contain;
//     filter: grayscale(100%);
//     opacity: 0.7;
//     transition: all ${({ theme }) => theme.transitions.default};
    
//     @media (max-width: 768px) {
//       max-width: 90%;
//       max-height: 60px;
//     }
//   }
  
//   &:hover {
//     transform: scale(1.05);
    
//     img {
//       filter: grayscale(0%);
//       opacity: 1;
//     }
//   }
// `

// // const ClientsSlider = ({ clients }) => {
// //   const sliderSettings = {
// //     dots: false,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 5,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //     arrows: false,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 4
// //         }
// //       },
// //       {
// //         breakpoint: 768,
// //         settings: {
// //           slidesToShow: 3
// //         }
// //       },
// //       {
// //         breakpoint: 480,
// //         settings: {
// //           slidesToShow: 2
// //         }
// //       }
// //     ]
// //   }

// const ClientsSlider = ({ clients }) => {
//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//     cssEase: 'linear',
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   }
  
//   return (
//     <ClientsContainer>
//       <Slider {...sliderSettings}>
//         {clients.map((client) => (
//           <ClientLogo key={client.id}>
//             <img src={client.logo || "/api/placeholder/200/100"} alt={client.name} />
//           </ClientLogo>
//         ))}
//       </Slider>
//     </ClientsContainer>
//   )
// }

// export default ClientsSlider


import styled from 'styled-components';
import Slider from 'react-slick';

const ClientsSection = styled.section`
  background: ${({ theme }) => theme.colors.background || '#f8f9fa'};
  // margin: 2rem 0;
`

const SectionTitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary || '#333'};
`

const ClientsContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  background: transparent;
  padding: 10px;
  
  .slick-track {
    display: flex;
    align-items: center;
  }
  
  .slick-slide {
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const ClientLogo = styled.div`
  padding: 0.5rem;
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 120px;
  position: relative;
  transition: all ${({ theme }) => theme.transitions.default || '0.3s ease'};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary || '#0066cc'};
    transition: all ${({ theme }) => theme.transitions.default || '0.3s ease'};
    transform: translateX(-50%);
  }
  
  img {
    max-width: 100%;
    max-height: 80px;
    width: auto;
    height: auto;
    object-fit: contain;
    transition: all ${({ theme }) => theme.transitions.default || '0.3s ease'};
    
    @media (max-width: 768px) {
      max-height: 60px;
    }
  }
  
  &:hover {
    transform: translateY(-5px);
    
    &:after {
      width: 60%;
    }
  }
`

const ClientsSlider = ({ clients}) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <ClientsSection>
      <ClientsContainer>
        <Slider {...sliderSettings}>
          {clients.map((client) => (
            <ClientLogo key={client.id}>
              <img 
                src={client.logo || "/api/placeholder/200/100"} 
                alt={`${client.name} logo`} 
                loading="lazy"
              />
            </ClientLogo>
          ))}
        </Slider>
      </ClientsContainer>
    </ClientsSection>
  );
};

export default ClientsSlider;