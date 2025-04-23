import React from 'react';
import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import CourseCard from '../courses/CourseCard';
import { allCourses } from '../../data/courses';

export default function FeaturedCourses() {
  // Отображаем только первые 6 курсов в блоке "Популярные курсы"
  const featuredCourses = allCourses.slice(0, 6);

  return (
    <Box py={16} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="7xl">
        <Box textAlign="center" mb={12}>
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            color="brand.blue.primary"
            mb={4}
          >
            Популярные курсы
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="2xl"
            mx="auto"
          >
            Открой новые возможности с нашими самыми популярными и высоко оцененными курсами
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {featuredCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              {...course}
            />
          ))}
        </SimpleGrid>

        <Flex justify="center" mt={12}>
          <Link href="/courses" passHref>
            <Button
              as="a"
              size="lg"
              colorScheme="blue"
              rightIcon={<FiArrowRight />}
              _hover={{
                transform: 'translateX(5px)',
              }}
            >
              Посмотреть все курсы
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
} 