import React, {useState} from 'react';
import {SearchIcon} from '@chakra-ui/icons';

import {
  Button,
  Container,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  FormControl,
  Stack,
  RadioGroup,
} from '@chakra-ui/react';

function CocktailForm({cocktails, setCocktails}) {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [nameField, setNameField] = useState('');

    const [radioField, setRadioField] = useState('1');

    const formSubmit = async (e) => {
      if(nameField.length > 0){
        setLoading(true);
        setError(false);

        let type = radioField == 1 ? "search.php?s=" : "filter.php?i=";
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${type}${nameField}`);

        setLoading(false);

        if(!response.ok){
          console.log(response.message);
          setError(true);
        }

        const data = await response.json();
        
        if(data.drinks){
          setCocktails(data.drinks);
          setError(false);
        } else {
          setCocktails();
        }
        
      } else {
        setError(true);
      }
    }

    return (
            <Container fontSize="15px" border="2px" borderColor="gray.300" borderRadius="5px" maxW="" w="100%" p="1em">
              <form onSubmit={(e) => {
                e.preventDefault();
                formSubmit();
              }}>
                <FormControl mt="1" mb="4">
                  <RadioGroup value={radioField} onChange={setRadioField}>
                    <Stack direction="row">
                      <Radio value="1"><Text fontSize="15px">Search by name</Text></Radio>
                      <Radio value="2"><Text fontSize="15px">Search by ingredient</Text></Radio>
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
                    <Input type="text" placeholder="Search" value={nameField} onChange={(e) => setNameField(e.target.value)} />
                  </InputGroup>
                  <Button 
                    _hover={{
                      background: "orange_dark",
                    }}
                    boxShadow="md" 
                    isLoading={loading}
                    type="submit"
                  >Search</Button>
                </Flex>
                </FormControl>
              </form>
            </Container>
    )
}

export default CocktailForm
