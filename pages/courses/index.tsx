import React from 'react';
import Layout from '../../components/common/Layout';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

export default function Courses() {
  return (
    <Layout title="Курсы - Sumentor">
      <Box maxW="container.xl" mx="auto" p={8}>
        <Heading as="h1" mb={6}>Наши курсы</Heading>
        <Text mb={8}>Выберите интересующий вас курс из списка доступных</Text>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {/* Здесь будет список курсов */}
        </SimpleGrid>
      </Box>
    </Layout>
  );
} 