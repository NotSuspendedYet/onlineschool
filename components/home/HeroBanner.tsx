import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <Stack
      minH={'90vh'}
      direction={{ base: 'column', md: 'row' }}
      bg="linear-gradient(to right, rgba(187, 222, 251, 0.2), rgba(200, 230, 201, 0.2))"
    >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              color={'brand.blue.primary'}
              fontWeight={700}
            >
              Раскройте ваш потенциал
            </Text>
            <br />
            <Text color={'brand.green.primary'} as={'span'}>
              с Sumentor
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.600'}>
            Наша платформа предлагает курсы разностороннего развития, которые помогут вам освоить
            новые навыки, раскрыть таланты и достичь успеха в любой сфере деятельности.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href="/courses" passHref>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                bg={'brand.blue.primary'}
                color={'white'}
                _hover={{ bg: 'brand.blue.secondary' }}
              >
                Начать обучение
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                bg={'brand.green.light'}
                color={'white'}
                _hover={{ bg: 'brand.green.primary' }}
              >
                Узнать больше
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align={'center'} justify={'center'}>
        <Box
          height={'80%'}
          width={'80%'}
          position={'relative'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          overflow={'hidden'}
        >
          <Image
            alt={'Hero Image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={
              'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
            }
          />
        </Box>
      </Flex>
    </Stack>
  );
} 