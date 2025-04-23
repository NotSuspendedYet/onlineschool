import React from 'react';
import Layout from '../components/common/Layout';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Profile() {
  return (
    <Layout title="Профиль - Sumentor">
      <Box maxW="container.xl" mx="auto" p={8}>
        <Heading as="h1" mb={6}>Ваш профиль</Heading>
        <Text>Страница профиля пользователя</Text>
      </Box>
    </Layout>
  );
} 