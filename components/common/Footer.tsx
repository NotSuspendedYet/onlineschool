import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Heading,
  ButtonGroup,
  IconButton,
  Input,
  Button,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg="gray.50"
      color="gray.700"
      mt="auto"
      borderTop="1px"
      borderColor="gray.200"
      py={10}
    >
      <Container as={Stack} maxW={'6xl'}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Компания</ListHeader>
            <Link href={'/about'}>О нас</Link>
            <Link href={'/blog'}>Блог</Link>
            <Link href={'/contact'}>Связаться с нами</Link>
            <Link href={'/careers'}>Вакансии</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Поддержка</ListHeader>
            <Link href={'/help'}>Центр помощи</Link>
            <Link href={'/faq'}>Частые вопросы</Link>
            <Link href={'/terms'}>Условия использования</Link>
            <Link href={'/privacy'}>Политика конфиденциальности</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Курсы</ListHeader>
            <Link href={'/courses/programming'}>Программирование</Link>
            <Link href={'/courses/languages'}>Языки</Link>
            <Link href={'/courses/business'}>Бизнес</Link>
            <Link href={'/courses/art'}>Искусство</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Подписаться на новости</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Ваш email'}
                bg="white"
                border={1}
                borderColor="gray.300"
                _focus={{
                  borderColor: 'brand.blue.primary',
                }}
              />
              <Button
                bg="brand.blue.primary"
                color="white"
                _hover={{
                  bg: 'brand.blue.secondary',
                }}
              >
                Отправить
              </Button>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.200',
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.200',
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Text
            fontWeight="bold"
            fontSize="xl"
            color="brand.blue.primary"
          >
            Sumentor
          </Text>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © {new Date().getFullYear()} Sumentor. Все права защищены
        </Text>
      </Box>
    </Box>
  );
} 