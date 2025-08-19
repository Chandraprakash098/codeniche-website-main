export const theme = {
    mode: 'dark', // This will be overridden by the ThemeContext
    colors: {
      // New color palette from the image
      primary: '#415A77', // Medium Blue/Steel Blue
      primaryLight: '#778DA9', // Light Blue/Dusty Blue
      primaryDark: '#1B263B', // Dark Blue
      secondary: '#0D1B2A', // Very Dark Blue/Almost Black
      secondaryLight: '#1B263B', // Dark Blue
      secondaryDark: '#0D1B2A', // Very Dark Blue/Almost Black
      accent: '#778DA9', // Light Blue/Dusty Blue
      dark: '#0D1B2A', // Very Dark Blue/Almost Black
      light: '#E0E1DD', // Light Gray/Off-White
      gray: '#E0E1DD', // Light Gray/Off-White
      darkGray: '#778DA9', // Light Blue/Dusty Blue
      text: '#1B263B', // Dark Blue for text
      textLight: '#415A77', // Medium Blue for secondary text
      background: '#E0E1DD', // Light Gray/Off-White
      surface: '#ffffff', // Pure white for cards/surfaces
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#415A77', // Medium Blue
    },
    fonts: {
      body: "'Poppins', sans-serif",
      heading: "'Montserrat', sans-serif",
    },
    breakpoints: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px',
    },
    spacing: {
      xxs: '0.25rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '3rem',
      xxxl: '5rem',
    },
    transitions: {
      default: '0.3s ease',
      fast: '0.2s ease',
      slow: '0.5s ease',
    },
    shadows: {
      small: '0 2px 5px rgba(0, 0, 0, 0.1)',
      medium: '0 5px 15px rgba(0, 0, 0, 0.07)',
      large: '0 10px 25px rgba(0, 0, 0, 0.05)',
      xl: '0 15px 35px rgba(0, 0, 0, 0.1)',
    },
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '16px',
      full: '9999px',
    },
  }