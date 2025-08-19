// src/data/homeData.js

import desimg from '../assets/images/desimg.png';
import ijananiLogo from '../assets/images/ijanani.png';
import lp from '../assets/images/lp.png';
import onsathi from '../assets/images/onlinesathi.png';
import smart from '../assets/images/smartblock.png';
import uddan from '../assets/images/udaantrai.png';

export const servicesData = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and web apps built with modern technologies.',
      icon: '🌐',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'iOS and Android apps with native or hybrid solutions.',
      icon: '📱',
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps services.',
      icon: '☁️',
    },
    // Add more services as needed
  ];
  
  export const featuresData = [
    {
      id: 1,
      title: 'Expert Team',
      description: 'A passionate team with deep domain knowledge.',
      icon: '👨‍💻',
    },
    {
      id: 2,
      title: 'Agile Process',
      description: 'Iterative development and rapid delivery.',
      icon: '⚙️',
    },
    {
      id: 3,
      title: 'Client Focused',
      description: 'Solutions tailored to your unique business needs.',
      icon: '🎯',
    },
  ];
  
  export const productsData = [
    {
      id: 1,
      title: 'SkoolVriksh',
      description: 'Comprehensive school management platform.',
      image: desimg,
      link: '/schoolvriksh',
    },
    // {
    //   id: 2,
    //   title: 'InvoicePro',
    //   description: 'Automated invoicing and accounting tool.',
    //   image: '/images/products/invoicepro.jpg',
    //   link: '/invoicepro',
    // },
  ];
  


export const testimonials = [
    {
      id: 1,
      name: 'Mahil Maurya',
      position: 'Manager',
      company: 'TechTrend Solutions',
      text: 'CodeNiche transformed our business with their innovative software solutions. Highly professional and reliable!',
      rating: 5,
      avatar: '/images/testimonials/michael.jpg',
    },
    {
      id: 2,
      name: 'Chandra',
      position: 'Software Developer',
      company: 'Codeniche Sofstudio PVT LTD',
      text: 'SKoolVriksh has made school management a breeze. The support team is exceptional!',
      rating: 4.5,
      avatar: '/images/testimonials/sarah.jpg',
    },
    {
      id: 3,
      name: 'Vasudev Badola',
      position: 'Android Developer',
      company: 'NextGen Retail',
      text: 'Their e-commerce platform exceeded our expectations. Great collaboration and timely delivery.',
      rating: 5,
      avatar: '/images/testimonials/david.jpg',
    },
    {
      id: 4,
      name: 'Nilam Dhuri',
      position: 'UI/UX Designer',
      company: 'GreenLeaf Corp',
      text: 'The mobile app development was top-notch. Would definitely work with them again!',
      rating: 4,
      avatar: '/images/testimonials/emily.jpg',
    }
  ];
  
  // export const clients = [
  //   ijananiLogo,
  //   '/images/clients/client2.png',
  //   '/images/clients/client3.png',
  //   '/images/clients/client4.png',
  // ];

  export const clients = [
    {
      id: 1,
      logo: ijananiLogo,
      name: "Ijanani"
    },
    {
      id: 2,
      logo: lp,
      name: "lp"
    },
    {
      id: 3,
      logo: onsathi,
      name: "online Sathi"
    },
    {
      id: 4,
      logo: smart,
      name: "Samart"
    },
    {
      id: 5,
      logo: uddan,
      name: "Uddan Computer"
    }
  ];
  
  export const projectsData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack solution for a fashion brand.',
      image: '/images/projects/ecommerce.jpg',
    },
    {
      id: 2,
      title: 'Learning Management System',
      description: 'Custom LMS for online education.',
      image: '/images/projects/lms.jpg',
    },
  ];
  
  export const statsData = [
    {
      id: 1,
      label: 'Projects Completed',
      value: 120,
    },
    {
      id: 2,
      label: 'Happy Clients',
      value: 85,
    },
    {
      id: 3,
      label: 'Awards Won',
      value: 10,
    },
    {
      id: 4,
      label: 'Years in Business',
      value: 5,
    },
  ];
  
  export const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Web Development Trends in 2025',
      excerpt: 'Stay ahead of the curve with these upcoming web trends...',
      image: '/images/blog/trends.jpg',
      date: 'April 10, 2025',
      author: 'Admin',
      link: '/blog/web-trends-2025',
    },
    {
      id: 2,
      title: 'Why Choose Custom Software Over Off-the-Shelf?',
      excerpt: 'Understand the benefits of custom-built software solutions...',
      image: '/images/blog/custom-vs-off.jpg',
      date: 'March 25, 2025',
      author: 'Team CodeNiche',
      link: '/blog/custom-software',
    },
  ];
  