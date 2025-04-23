import React from 'react';
import Layout from '../../components/common/Layout';
import { Box, Heading, SimpleGrid, Text, Container } from '@chakra-ui/react';
import CourseCard, { CourseCardProps } from '../../components/courses/CourseCard';
import CoursesFilter from '../../components/courses/CoursesFilter';
import { allCourses } from '../../data/courses';

export default function Courses() {
  const [filteredCourses, setFilteredCourses] = React.useState<CourseCardProps[]>(allCourses);

  return (
    <Layout title="Курсы - Sumentor">
      <Box py={16} bg="gray.50">
        <Container maxW="7xl">
          <Box textAlign="center" mb={12}>
            <Heading
              as="h1"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight="bold"
              color="brand.blue.primary"
              mb={4}
            >
              Наши курсы
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              maxW="2xl"
              mx="auto"
              mb={8}
            >
              Выберите интересующий вас курс из списка доступных
            </Text>

            <CoursesFilter 
              courses={allCourses} 
              onFilterChange={setFilteredCourses} 
            />
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {filteredCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                {...course}
              />
            ))}
          </SimpleGrid>

          {filteredCourses.length === 0 && (
            <Box textAlign="center" py={8}>
              <Text fontSize="lg">Курсы не найдены. Попробуйте изменить параметры поиска.</Text>
            </Box>
          )}
        </Container>
      </Box>
    </Layout>
  );
} 