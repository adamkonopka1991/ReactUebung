import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger= (props) => {

    let transformedIngredients= Object.keys(props.ingredients).map(
        (igKey) =>{
            return[...Array(props.ingredients[igKey])].map((_,i)=>{
                return<BurgerIngredient key={igKey + i} type={igKey}/>
            });
        }
    ).reduce((prevval,currval)  =>{
        return prevval.concat(currval); //concatinates the nested arrays into one array
    },[]);
   
    //[...Array(props.ingredients[igKey])] is equal to new Array(2).fill(undefined).map(). turns empty elements into elements filled wit h undefined.
    //Array(2) yields [ "", ""] and [...Array(2)] yields ["undefined","undefined"].
    /* What are we actually doing here: firstly we extract the keys of our ingredient-Object into an array. On this array
       we then apply the map method where we map the keys to something. For each key We then apply the map method on an array we constructed.
       This constructed arrray is an array of the length equal to the quantitiy each arraykey (ingredient) holds as a value. I.e. for each igkey we return an array of the 
       length of its value -> arrays nested in an array. Each of theses nested arrays has the BurgerIngredient -Component as
       elements. */
    
    if(transformedIngredients.length===0)
    {
        transformedIngredients= <p>Please start adding ingredients!</p>;
    }   
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>    
        </div>
    );
}

export default burger;