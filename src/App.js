import cocktailjpg from './images/cocktail.jpg';
import { createBreakpoints } from "@chakra-ui/theme-tools"

import React from 'react';
import {
  ChakraProvider,
  Heading,
  Center,
  Box,
  Button,
  Container,
  Flex,
  Text,
  Divider,
  Image,
  Input,
  Grid,
  InputGroup,
  InputLeftElement,
  Radio,
  FormControl,
  Stack,
  RadioGroup,
} from '@chakra-ui/react';

import {SearchIcon} from '@chakra-ui/icons';
import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    orange: '#FBD38D',
    orange_dark: '#F6AD55'
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        solid: {
          background: "orange",
          border: "none",
        },
        outline: {
          background: "none",
          border: "2px solid orange",
        }
      },
      defaultProps : {
        variant: "solid"
      }
    //Tried to get hover in here as well, but not working and not explained in docs how to do it
    },
    Divider: {
      baseStyle: {
        size: "2px",
        background: "black",
      }
    }
  }
})

const breakpoints = createBreakpoints({
  sm: "600px",
  md: "900px",
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex height="100vh" width="100vw" direction="column">
        <Container>
          <Heading as="h1" size="xl" m='5' align="center">Cocktails 4 Life</Heading>
        </Container>
        <Container flex="1" p="0" w="95%" maxW="1200px">
          <Flex direction="row">
          <Box w={{sm: "60%", md: "80%"}} position="relative">
            <Text backgroundColor="white" position="absolute" top="-3" left="4" pl="3" pr="3" fontSize="16px">Search 4 Cocktails</Text>
            <Container border="2px" borderColor="gray.300" borderRadius="5px" maxW="" w="100%" p="1em">
              <form>
                <FormControl mt="1" mb="4">
                  <RadioGroup>
                    <Stack direction="row">
                      <Radio value="1">Search by name</Radio>
                      <Radio value="2">Search by ingredient</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                <Flex>
                  <InputGroup mr="1em">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<SearchIcon />}
                    />
                    <Input type="text" placeholder="Search" />
                  </InputGroup>
                  <Button 
                    _hover={{
                      background: "orange_dark",
                    }}
                    boxShadow="md" 
                    isLoading={false}
                  >Search</Button>
                </Flex>
                </FormControl>
              </form>
            
            </Container>
            <Grid mt="1em" templateColumns={{sm: "repeat(2,1fr)", md: "repeat(4,1fr)" }} templateRows="repeat(2, auto)" gap='8'>
              <Box>
                <Image w="100%" objectFit='cover' src={cocktailjpg} />
                <Text align="center" mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Text>
              </Box>
              <Box>
                <Image w="100%" objectFit='cover' src={cocktailjpg} />
                <Text align="center" mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Text>
              </Box>
              <Box>
                <Image w="100%" objectFit='cover' src={cocktailjpg} />
                <Text align="center" mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Text>
              </Box>
              <Box>
                <Image w="100%" objectFit='cover' src={cocktailjpg} />
                <Text align="center" mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Text>
              </Box>
              <Box>
                <Image w="100%" objectFit='cover' src={cocktailjpg} />
                <Text align="center" mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Text>
              </Box>
              <Box>
                <Image w="100%" objectFit='cover' src={cocktailjpg} />
                <Text align="center" mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Text>
              </Box>
              <Box>
                <Image w="100%" objectFit='cover' src={cocktailjpg} />
                <Text align="center" mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Text>
              </Box>
              <Box>
                <Image w="100%" objectFit='cover' src={cocktailjpg} />
                <Text align="center" mt='1' fontWeight='600' textTransform="uppercase" >Cocktail Name</Text>
              </Box>
            </Grid> 
          </Box>
        {/*<Divider ml="1em" mr="1em" orientation="vertical" h="100%" /> should be height of flexbox but chrome calculates height to 0; */}
          <Box w="1px" backgroundColor='gray.400' mr="1em" ml="1em" opacity="0.6"></Box>
          <Box w={{sm:"40%", md:"20%"}} mr="1">
            <Text fontSize='1.1em' mb="2">Random cocktail</Text>
            <Image objectFit="cover" src={cocktailjpg} />
            <Text fontSize="md" mt="3" mb="4" fontWeight="600">Margarita on the rocks</Text>
            <Text fontSize="sm" >Some text</Text>
            <Text fontSize="sm" mt="3" mb="3" lineHeight='1.3' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada, urna nec congue gravida, leo ante mollis erat, at mattis dui nibh vitae ex. Aliquam maximus lorem tristique nisi luctus volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus.</Text>
            <Text fontSize="sm" >Some text</Text>
            <Button 
              _hover={{
                background: "orange_dark",
              }}
              boxShadow="md" 
              mt="3" 
              w="100%"
            >Get a new one</Button>
          </Box>
        </Flex> 
        </Container>
        <Divider mt="4" orientation="horizontal" borderColor="gray.400" maxW="1200px" ml="auto" mr="auto" />
        <Center p="1em">© 2021 - cocktails4life</Center>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
