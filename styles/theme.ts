import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      blue: {
        primary: '#1E88E5',
        secondary: '#64B5F6',
        light: '#BBDEFB',
      },
      green: {
        primary: '#4CAF50',
        light: '#8BC34A',
        lighter: '#C8E6C9',
      },
    },
    text: {
      primary: '#333333',
      secondary: '#757575',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: '12px',
      },
      variants: {
        primary: {
          bg: 'brand.blue.primary',
          color: 'white',
          _hover: {
            bg: 'brand.blue.secondary',
          },
        },
        secondary: {
          bg: 'brand.green.light',
          color: 'white',
          _hover: {
            bg: 'brand.green.primary',
          },
        },
        outline: {
          border: '2px solid',
          borderColor: 'brand.blue.primary',
          color: 'brand.blue.primary',
        },
      },
    },
    Heading: {
      baseStyle: {
        color: 'text.primary',
      },
    },
    Card: {
      baseStyle: {
        p: '6',
        bg: 'white',
        borderRadius: '12px',
        boxShadow: 'md',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'translateY(-5px)',
          boxShadow: 'lg',
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'text.primary',
      },
    },
  },
});

export default theme; 