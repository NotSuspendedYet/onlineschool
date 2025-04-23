import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/common/Layout';
import { Box, Heading, Text, Container, Button } from '@chakra-ui/react';
import CourseDetail from '../../components/courses/CourseDetail';
import { allCourses } from '../../data/courses';

export default function CourseDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Находим курс по ID (slug)
  const course = allCourses.find(course => course.id === slug);

  if (!course) {
    return (
      <Layout title="Курс не найден - Sumentor">
        <Container maxW="7xl" py={20}>
          <Heading mb={4}>Курс не найден</Heading>
          <Text mb={6}>Извините, запрашиваемый курс не существует или был перемещен.</Text>
          <Button 
            colorScheme="blue" 
            onClick={() => router.push('/courses')}
          >
            Вернуться к списку курсов
          </Button>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout title={`${course.title} - Sumentor`}>
      <Box bg="gray.50" py={12}>
        <CourseDetail course={course} />
      </Box>
    </Layout>
  );
} 