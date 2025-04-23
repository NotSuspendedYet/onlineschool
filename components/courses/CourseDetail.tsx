import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Button,
  Stack,
  Flex,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { CourseCardProps } from './CourseCard';

interface CourseDetailsProps {
  course: CourseCardProps;
}

// Компонент, отображающий модуль курса
interface ModuleProps {
  title: string;
  lessons: string[];
  index: number;
  key?: any;
}

const CourseModule = ({ title, lessons, index }: ModuleProps) => {
  return (
    <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
      <Heading as="h3" size="md" mb={4}>
        Модуль {index + 1}: {title}
      </Heading>
      <UnorderedList spacing={2}>
        {lessons.map((lesson, i) => (
          <ListItem key={i}>
            <Text>{lesson}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

const CourseDetail: React.FC<CourseDetailsProps> = ({ course }) => {
  // Модули курса (это данные для примера, в реальном приложении они должны приходить с сервера)
  const courseModules = [
    {
      title: 'Введение в курс',
      lessons: ['Обзор курса', 'Необходимые инструменты', 'Настройка рабочего окружения']
    },
    {
      title: 'Основы',
      lessons: ['Базовые концепции', 'Практическое занятие 1', 'Проверка знаний']
    },
    {
      title: 'Продвинутые техники',
      lessons: ['Углубленное изучение', 'Работа над проектом', 'Оптимизация и лучшие практики']
    },
    {
      title: 'Заключение',
      lessons: ['Финальный проект', 'Дополнительные ресурсы', 'Следующие шаги']
    }
  ];

  return (
    <Container maxW="7xl">
      {/* Верхняя секция */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={16}>
        <Box>
          <Box 
            display="inline-block"
            px={3}
            py={1}
            bg="blue.100"
            color="blue.800"
            borderRadius="full"
            mb={4}
          >
            {course.category}
          </Box>
          <Heading 
            as="h1" 
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} 
            mb={4}
          >
            {course.title}
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={6}>
            {course.description}
          </Text>
          
          <SimpleGrid columns={3} spacing={4} mb={8}>
            <Box>
              <Text fontWeight="medium">{course.studentsCount}+ студентов</Text>
            </Box>
            <Box>
              <Text fontWeight="medium">{course.duration}</Text>
            </Box>
            <Box>
              <Text fontWeight="medium">{course.level}</Text>
            </Box>
          </SimpleGrid>
          
          <Button 
            colorScheme="blue" 
            size="lg"
            mb={6}
          >
            Записаться на курс
          </Button>
        </Box>
        
        <Box>
          <Image 
            src={course.image} 
            alt={course.title} 
            borderRadius="lg" 
            boxShadow="lg"
            objectFit="cover"
            height="400px"
            width="100%"
          />
        </Box>
      </SimpleGrid>
      
      {/* Программа курса */}
      <Box mb={16}>
        <Heading as="h2" size="xl" mb={8}>
          Программа курса
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {courseModules.map((module, index) => (
            <CourseModule 
              key={index}
              title={module.title}
              lessons={module.lessons}
              index={index}
            />
          ))}
        </SimpleGrid>
      </Box>
      
      {/* Призыв к действию */}
      <Box 
        p={10} 
        bg="blue.50" 
        borderRadius="xl" 
        textAlign="center"
        mb={16}
      >
        <Heading as="h2" size="xl" mb={4} color="blue.600">
          Готовы начать обучение?
        </Heading>
        <Text fontSize="lg" mb={6} maxW="2xl" mx="auto">
          Присоединяйтесь к тысячам студентов, которые уже изменили свою жизнь с помощью наших курсов.
        </Text>
        <Button 
          colorScheme="blue" 
          size="lg" 
          px={10}
        >
          Записаться на курс
        </Button>
      </Box>
    </Container>
  );
};

export default CourseDetail; 