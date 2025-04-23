import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/common/Layout';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function CourseDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout title={`Курс ${slug} - Sumentor`}>
      <Box maxW="container.xl" mx="auto" p={8}>
        <Heading as="h1" mb={6}>Детали курса: {slug}</Heading>
        <Text>Подробная информация о курсе будет здесь</Text>
      </Box>
    </Layout>
  );
} 