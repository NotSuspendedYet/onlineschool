import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiBook, FiUsers, FiAward, FiMonitor } from 'react-icons/fi';

interface FeatureProps {
  title: string;
  text: string;
  icon: any;
  key?: any;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Box
      p={8}
      borderRadius="lg"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="md"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'lg',
      }}
    >
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="brand.blue.primary"
        mb={4}
      >
        <Icon as={icon} w={8} h={8} />
      </Flex>
      <Heading as="h3" size="lg" mb={4} fontWeight="bold">
        {title}
      </Heading>
      <Text color={useColorModeValue('gray.600', 'gray.400')} fontSize="md">
        {text}
      </Text>
    </Box>
  );
};

export default function Features() {
  const features = [
    {
      title: 'Качественные курсы',
      text: 'Все наши курсы разработаны опытными специалистами и регулярно обновляются, чтобы соответствовать самым современным требованиям.',
      icon: FiBook,
    },
    {
      title: 'Опытные преподаватели',
      text: 'Наши преподаватели — это профессионалы с многолетним опытом, которые помогут вам освоить новые навыки.',
      icon: FiUsers,
    },
    {
      title: 'Сертификация',
      text: 'По окончании курса вы получите сертификат, подтверждающий ваши знания и навыки в выбранной области.',
      icon: FiAward,
    },
    {
      title: 'Интерактивное обучение',
      text: 'Практические задания, проекты и интерактивные уроки помогут вам быстрее освоить материал и применить его на практике.',
      icon: FiMonitor,
    },
  ];

  return (
    <Box py={16} bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW="7xl">
        <Box textAlign="center" mb={12}>
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            color="brand.blue.primary"
            mb={4}
          >
            Почему выбирают нас
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="2xl"
            mx="auto"
          >
            Sumentor предлагает только лучшие возможности для вашего обучения и развития
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              text={feature.text}
              icon={feature.icon}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 