import { createBreakpoints } from "@chakra-ui/theme-tools"

import React, {useState} from 'react';
import Random from './components/Random';
import CocktailForm from './components/CocktailForm';
import CocktailGrid from './components/CocktailGrid';

import {
  ChakraProvider,
  Heading,
  Center,
  Box,
  Container,
  Flex,
  Text,
  Divider,
} from '@chakra-ui/react';

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
  const [cocktails, setCocktails] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <Flex height="100vh" width="100vw" direction="column">
        
        <Container>
          <Heading as="h1" size="xl" m='5' align="center">Cocktails 4 Life</Heading>
        </Container>
        
        <Container flex="1" p="0" w="95%" maxW="1200px">
          <Flex direction="row">
          <Box w={{sm: "60%", md: "80%"}} position="relative">
            <Text backgroundColor="white" position="absolute" top="-3" left="4" pl="3" pr="3" fontSize="15px">Search 4 Cocktails</Text>
            <CocktailForm setCocktails={setCocktails} />
            <CocktailGrid cocktails={cocktails} /> 
            {!cocktails && <p>No cocktails found</p>}
          </Box>
        
        {/*<Divider ml="1em" mr="1em" orientation="vertical" h="100%" /> should be height of flexbox but chrome calculates height to 0; */}
          <Box w="1px" backgroundColor='gray.400' mr="1em" ml="1em" opacity="0.6"></Box>
          
          <Random />
          </Flex>
        </Container>
        
        <Divider mt="4" orientation="horizontal" borderColor="gray.400" maxW="1200px" ml="auto" mr="auto" />
        
        <Center p=".5em">© 2021 - cocktails4life</Center>
      
      </Flex>
    </ChakraProvider>
  );
}

export default App;
