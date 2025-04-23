import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Avatar,
  HStack,
  VStack,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

interface TestimonialProps {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating?: number;
  courseName?: string;
  key?: string;
}

const Testimonial = ({
  name,
  role,
  content,
  avatar,
  rating = 5,
  courseName,
}: TestimonialProps) => {
  return (
    <Box
      maxW="lg"
      w="full"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="lg"
      rounded="lg"
      p={6}
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
    >
      <Stack spacing={4}>
        <HStack spacing={2} mb={1}>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <Icon
                key={i}
                as={FaStar}
                color={i < rating ? 'yellow.500' : 'gray.300'}
                boxSize={4}
              />
            ))}
        </HStack>
        <Text
          color={useColorModeValue('gray.700', 'white')}
          fontSize="md"
          fontStyle="italic"
        >
          "{content}"
        </Text>
        {courseName && (
          <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')}>
            О курсе: <b>{courseName}</b>
          </Text>
        )}
        <Flex alignItems="center" mt={4}>
          <Avatar
            src={avatar}
            name={name}
            size="md"
            mr={4}
            bg="brand.blue.light"
            color="brand.blue.dark"
          />
          <Stack spacing={0}>
            <Text fontWeight="600" fontSize="md">
              {name}
            </Text>
            <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')}>
              {role}
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default function Testimonials() {
  const testimonials: TestimonialProps[] = [
    {
      id: '1',
      name: 'Алексей Петров',
      role: 'Студент',
      content:
        'Этот курс превзошел все мои ожидания! Материал подается очень структурированно и понятно даже для начинающих. Я смог применить полученные знания уже после первого месяца обучения.',
      avatar: '/images/testimonials/alex.jpg',
      rating: 5,
      courseName: 'Введение в разработку на Python',
    },
    {
      id: '2',
      name: 'Елена Смирнова',
      role: 'UX дизайнер',
      content:
        'Благодаря курсу по графическому дизайну я смогла расширить свои навыки и портфолио. Преподаватели очень отзывчивые и всегда готовы помочь с любыми вопросами.',
      avatar: '/images/testimonials/elena.jpg',
      rating: 4,
      courseName: 'Основы графического дизайна',
    },
    {
      id: '3',
      name: 'Михаил Иванов',
      role: 'Бизнес-аналитик',
      content:
        'Курс английского языка помог мне уверенно проводить международные встречи и переговоры. Акцент на бизнес-лексике оказался очень полезным для моей работы.',
      avatar: '/images/testimonials/mikhail.jpg',
      rating: 5,
      courseName: 'Продвинутый курс английского языка',
    },
  ];

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} py={16}>
      <Container maxW="7xl">
        <Box textAlign="center" mb={12}>
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            color="brand.blue.primary"
            mb={4}
          >
            Отзывы наших студентов
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="2xl"
            mx="auto"
          >
            Узнайте, что говорят студенты о наших курсах и преподавателях
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 