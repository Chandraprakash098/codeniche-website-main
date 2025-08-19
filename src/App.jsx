import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Layouts
import MainLayout from './layouts/MainLayout'

// Pages
import Home from './pages/Home'
import About from './pages/AboutPage'
import Services from './pages/ServicesPage'
import Products from './pages/ProductsPage'

import Portfolio from './pages/PortfolioPage'
import Contact from './pages/ContactPage'
import { theme } from "./styles/theme";
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function AppContent() {
  const { mode } = useTheme();
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  // Create theme object with current mode
  const currentTheme = {
    ...theme,
    mode,
  };

  return (
    <StyledThemeProvider theme={currentTheme}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          {/* <Route path="schoolvriksh" element={<SchoolVriksh />} /> */}
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact/>} />
          {/* <Route path="careers" element={<Careers />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </StyledThemeProvider>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App