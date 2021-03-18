import React, {useState, useEffect} from 'react';
import {
    Box,
    Button,
    Text,
    Image,
    Progress,
    Skeleton
  } from '@chakra-ui/react';


function Random() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    useEffect(() => {
        getCocktail();
    }, [])

    const getCocktail = async () => {
        setLoading(true);
        setError(false);
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        if(!response.ok){
            const message = "An error: " + response.status;
            setError(true);
            setLoading(false);
            console.log(message);
        }
        const data = await response.json();
        if(data){
            setLoading(false);
            setError(true);
            const cocktail = data.drinks[0];
            setData(cocktail);
        }
        
    }

    return (
        <Box w={{sm:"40%", md:"20%"}} mr="1">
            <Text fontSize='1.1em' mb="2">Random cocktail</Text>
            {
                loading && <Progress mb="2" isIndeterminate />
            }
            {data && 
            <>
                {loading && <Skeleton height="100px" ></Skeleton>}
                <Image objectFit="cover" h="200px" src={data.strDrinkThumb} />
                <Text fontSize="md" mt="3" mb="4" fontWeight="600">{data.strDrink}</Text>
                <Text fontSize="sm" >{data.strCategory}</Text>
                <Text fontSize="sm" mt="3" mb="3" lineHeight='1.3' >{data.strInstructions}</Text>
                <Text fontSize="sm" >{data.strAlcoholic}</Text>
                <Button 
                    isLoading={loading}
                    _hover={{
                    background: "orange_dark",
                    }}
                    boxShadow="md" 
                    mt="3" 
                    w="100%"
                    onClick={() => {getCocktail()}}
                >Get a new one</Button>
            </>}
            {error && error}
        </Box>
    )
}

export default Random
