import React from 'react';
import Cocktail from './Cocktail';

import {
    Grid,
  } from '@chakra-ui/react';

function CocktailGrid({cocktails}) {
    return (
        <>
        {cocktails &&
            <Grid mt="1em" templateColumns={{sm: "repeat(2,1fr)", md: "repeat(4,1fr)" }} templateRows="repeat(2, auto)" gap='8'>
                {cocktails.map(cocktail => <Cocktail key={cocktail.idDrink} cocktail={cocktail} /> )}
            </Grid>
        }
        </>
    )
}

export default CocktailGrid
