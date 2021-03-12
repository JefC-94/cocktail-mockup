import cocktailjpg from './images/cocktail.jpg';

import React from 'react';
import {
  ChakraProvider,
  Heading,
  Center,
  Box,
  Container,
  Flex,
  Text,
  Divider,
  Image,
  Input,
  Button,
  Grid,
  InputGroup,
  InputLeftElement,
  Radio,
  FormControl,
  Stack,
  RadioGroup,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex height="100vh" width="100vw" direction="column">
        <Container>
          <Heading as="h1" size="xl" m='5' align="center">Cocktails 4 Life</Heading>
        </Container>
        <Container flex="1" p="0" border="0" borderColor="white" w="95%" maxW="1000px" minH='600px'>
          <Flex border="0" borderColor="white">
          <Box w="75%">
            <Container border="2px" borderColor="gray.300" borderRadius="5px" maxW="" w="100%" p="1em">
              <form>
                <FormControl mb="4">
                  <RadioGroup>
                    <Stack direction="row">
                      <Radio colorScheme="green" value="1">Search by name</Radio>
                      <Radio colorScheme="green" value="2">Search by ingredient</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
                <Flex>
                  <InputGroup mr="1em">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<p>0</p>}
                    />
                    <Input type="text" placeholder="Search" />
                  </InputGroup>
                  <Button isLoading={false} >Search</Button>
                </Flex>
              </form>
            
            </Container>
            <Grid mt="1em" templateColumns="repeat(4,1fr)" gap={6}>
              <Box h="200px">
                <Image boxSize="160px" objectFit='cover' src={cocktailjpg} />
                <Center mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Center>
              </Box>
              <Box h="200px">
                <Image boxSize="160px" objectFit='cover' src={cocktailjpg} />
                <Center mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Center>
              </Box>
              <Box h="200px">
                <Image boxSize="160px" objectFit='cover' src={cocktailjpg} />
                <Center mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Center>
              </Box>
              <Box h="200px">
                <Image boxSize="160px" objectFit='cover' src={cocktailjpg} />
                <Center mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Center>
              </Box>
              <Box h="200px">
                <Image boxSize="160px" objectFit='cover' src={cocktailjpg} />
                <Center mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Center>
              </Box>
              <Box h="200px">
                <Image boxSize="160px" objectFit='cover' src={cocktailjpg} />
                <Center mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Center>
              </Box>
              <Box h="200px">
                <Image boxSize="160px" objectFit='cover' src={cocktailjpg} />
                <Center mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Center>
              </Box>
              <Box h="200px">
                <Image boxSize="160px" objectFit='cover' src={cocktailjpg} />
                <Center mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Center>
              </Box>
            </Grid> 
          </Box>
        <Divider w="2em" />
          <Box w="25%" bg="green">
            <Text >Joe</Text>
          </Box>
        </Flex> 
        </Container>
        <Center m='4'>© 2021 - cocktails4life</Center>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
