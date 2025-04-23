import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title = 'Sumentor - Платформа для разностороннего развития' }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Платформа Sumentor для курсов разностороннего развития" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex 
        direction="column" 
        minH="100vh"
      >
        <Header />
        <Box as="main" flex="1">
          {children}
        </Box>
        <Footer />
      </Flex>
    </div>
  );
};

export default Layout; 