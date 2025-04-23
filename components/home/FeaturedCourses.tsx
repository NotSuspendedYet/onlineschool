import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  SimpleGrid,
  Badge,
  Flex,
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  studentsCount: number;
  duration: string;
  level: string;
  key?: string;
}

const CourseCard = ({
  title,
  description,
  image,
  category,
  studentsCount,
  duration,
  level,
}: CourseCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={useColorModeValue('white', 'gray.800')}
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
    >
      <Box position="relative">
        <Image src={image} alt={title} height="200px" width="100%" objectFit="cover" />
        <Badge
          position="absolute"
          top="4"
          right="4"
          colorScheme="blue"
          fontSize="0.8em"
          borderRadius="full"
          px="3"
          py="1"
        >
          {category}
        </Badge>
      </Box>

      <Box p="6">
        <Heading fontSize="xl" fontWeight="bold" mb={2} noOfLines={2}>
          {title}
        </Heading>
        <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.400')} mb={4} noOfLines={3}>
          {description}
        </Text>

        <Stack direction="row" spacing={4} mb={4}>
          <Flex align="center">
            <Text fontSize="sm" fontWeight="bold" color={useColorModeValue('gray.600', 'gray.400')}>
              {studentsCount}+ студентов
            </Text>
          </Flex>
          <Flex align="center">
            <Text fontSize="sm" fontWeight="bold" color={useColorModeValue('gray.600', 'gray.400')}>
              {duration}
            </Text>
          </Flex>
          <Flex align="center">
            <Text fontSize="sm" fontWeight="bold" color={useColorModeValue('gray.600', 'gray.400')}>
              {level}
            </Text>
          </Flex>
        </Stack>

        <Button
          colorScheme="blue"
          variant="outline"
          size="sm"
          rightIcon={<FiArrowRight />}
          width="full"
        >
          Подробнее
        </Button>
      </Box>
    </Box>
  );
};

export default function FeaturedCourses() {
  const featuredCourses: CourseCardProps[] = [
    {
      id: '1',
      title: 'Введение в разработку на Python',
      description:
        'Изучите основы программирования на Python. Этот курс идеально подходит для начинающих и охватывает все базовые концепции языка.',
      image: '/images/courses/python.jpg',
      category: 'Программирование',
      studentsCount: 1432,
      duration: '8 недель',
      level: 'Начинающий',
    },
    {
      id: '2',
      title: 'Основы графического дизайна',
      description:
        'Освойте принципы дизайна, цветовую теорию и композицию. Научитесь работать с Adobe Photoshop и Illustrator.',
      image: '/images/courses/design.jpg',
      category: 'Дизайн',
      studentsCount: 852,
      duration: '10 недель',
      level: 'Начинающий',
    },
    {
      id: '3',
      title: 'Продвинутый курс английского языка',
      description:
        'Поднимите свой уровень английского до Advanced (C1). Курс фокусируется на свободном общении и профессиональной лексике.',
      image: '/images/courses/english.jpg',
      category: 'Языки',
      studentsCount: 1205,
      duration: '12 недель',
      level: 'Продвинутый',
    },
    {
      id: '4',
      title: 'Финансовая грамотность и инвестиции',
      description:
        'Научитесь управлять личными финансами, создавать бюджет и инвестировать в различные активы для достижения финансовой независимости.',
      image: '/images/courses/finance.jpg',
      category: 'Финансы',
      studentsCount: 943,
      duration: '6 недель',
      level: 'Средний',
    },
    {
      id: '5',
      title: 'Основы маркетинга в социальных сетях',
      description:
        'Изучите стратегии продвижения в Instagram, Facebook и других платформах. Научитесь создавать контент, который привлекает аудиторию.',
      image: '/images/courses/marketing.jpg',
      category: 'Маркетинг',
      studentsCount: 1120,
      duration: '8 недель',
      level: 'Начинающий',
    },
    {
      id: '6',
      title: 'Введение в искусственный интеллект',
      description:
        'Познакомьтесь с основами ИИ и машинного обучения. Узнайте, как алгоритмы ИИ применяются в различных сферах жизни.',
      image: '/images/courses/ai.jpg',
      category: 'Технологии',
      studentsCount: 785,
      duration: '9 недель',
      level: 'Средний',
    },
  ];

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
              id={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
              category={course.category}
              studentsCount={course.studentsCount}
              duration={course.duration}
              level={course.level}
            />
          ))}
        </SimpleGrid>

        <Flex justify="center" mt={12}>
          <Button
            size="lg"
            colorScheme="blue"
            rightIcon={<FiArrowRight />}
            _hover={{
              transform: 'translateX(5px)',
            }}
          >
            Посмотреть все курсы
          </Button>
        </Flex>
      </Container>
    </Box>
  );
} 