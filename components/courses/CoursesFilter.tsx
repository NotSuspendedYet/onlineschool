import React from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { CourseCardProps } from './CourseCard';

interface CoursesFilterProps {
  courses: CourseCardProps[];
  onFilterChange: (filteredCourses: CourseCardProps[]) => void;
}

const CoursesFilter: React.FC<CoursesFilterProps> = ({ courses, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [categoryFilter, setCategoryFilter] = React.useState('');
  const [levelFilter, setLevelFilter] = React.useState('');

  // Получаем уникальные категории и уровни для фильтров
  const categories = Array.from(new Set(courses.map(course => course.category)));
  const levels = Array.from(new Set(courses.map(course => course.level)));

  // Фильтрация курсов при изменении параметров
  React.useEffect(() => {
    const filteredCourses = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter ? course.category === categoryFilter : true;
      const matchesLevel = levelFilter ? course.level === levelFilter : true;
      
      return matchesSearch && matchesCategory && matchesLevel;
    });
    
    onFilterChange(filteredCourses);
  }, [searchTerm, categoryFilter, levelFilter, courses, onFilterChange]);

  return (
    <Stack spacing={4}>
      <Text fontWeight="medium" mb={2}>Фильтры</Text>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={4}
        mb={4}
        justify="center"
      >
        <InputGroup maxW={{ base: '100%', md: '300px' }}>
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.300" />
          </InputLeftElement>
          <Input 
            placeholder="Найти курс..." 
            value={searchTerm}
            onChange={(e: any) => setSearchTerm(e.target.value)}
            bg="white"
          />
        </InputGroup>
        
        <Box as="select"
          placeholder="Категория"
          value={categoryFilter}
          onChange={(e: any) => setCategoryFilter(e.target.value)}
          maxW={{ base: '100%', md: '200px' }}
          bg="white"
          height="40px"
          borderRadius="md"
          border="1px solid"
          borderColor="gray.200"
          px={3}
        >
          <option value="">Категория</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </Box>
        
        <Box as="select"
          placeholder="Уровень" 
          value={levelFilter}
          onChange={(e: any) => setLevelFilter(e.target.value)}
          maxW={{ base: '100%', md: '200px' }}
          bg="white"
          height="40px"
          borderRadius="md"
          border="1px solid"
          borderColor="gray.200"
          px={3}
        >
          <option value="">Уровень</option>
          {levels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </Box>
      </Flex>
    </Stack>
  );
};

export default CoursesFilter; 