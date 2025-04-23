import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Badge,
  Flex,
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export interface CourseCardProps {
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
  id,
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

        <Link href={`/courses/${id}`} passHref>
          <Button
            as="a"
            colorScheme="blue"
            variant="outline"
            size="sm"
            rightIcon={<FiArrowRight />}
            width="full"
          >
            Подробнее
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CourseCard; 