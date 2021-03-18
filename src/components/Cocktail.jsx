import React from 'react'

import {
    Box,
    Text,
    Image,
    Grid,
  } from '@chakra-ui/react';

function Cocktail({cocktail}) {
    return (
        <Box key={cocktail.id}>
            <Image w="100%" objectFit='cover' src={cocktail.strDrinkThumb} />
            <Text align="center" mt='1' fontWeight='600' textTransform="uppercase" >{cocktail.strDrink}</Text>
        </Box>
    )
}

export default Cocktail
