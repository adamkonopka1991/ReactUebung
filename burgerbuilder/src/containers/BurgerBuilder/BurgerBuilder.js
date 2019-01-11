import React, { Component } from 'react';

import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OderSummary';

//Preise für Zutaten:
const INGREDIENT_PRICES={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};


class BurgerBuilder extends Component {

    state= {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false //true, as soon as Order Now - Button was clicked
    }

    updatePurchaseState(newPrice,updatedIngredients) 
    {
        const ingredients={
            ...updatedIngredients
        };

        

        const sum= Object.keys(ingredients).map(
            igKey =>{
                return ingredients[igKey];
            }).reduce((sum,element)=>{
            return sum=sum+element;
        },0);

        console.log(sum);

        this.setState({
            ingredients: ingredients,
            totalPrice: newPrice,
            purchasable: sum>0});

    }

    addIngredientHandler= (type) => {
        const oldCount= this.state.ingredients[type];
        const updatedCount= oldCount + 1;
        const updatedIngredients= {
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const priceAddition= INGREDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice= oldPrice + priceAddition;
        //this.setState({totalPrice: newPrice, ingredients: updatedIngredients},this.updatePurchaseState);
        //state does not update immediately,so the call of updatePurchase state might yield a wrong result, because this.setState({purchasable: sum>0});
        //might not yield true. Using updatePurchaseState as the second argument guarantees that its called after the state was updated in
        //addIngredient Handler
        
        this.updatePurchaseState(newPrice,updatedIngredients);//setState will be called inUpdatePurchase state because of the reason seen above
    }

    removeIngredientHandler= (type) => {
        const oldCount= this.state.ingredients[type];
        if(oldCount<= 0)
        {
            return;
        }
        const updatedCount= oldCount - 1;
        const updatedIngredients= {
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const priceSubtraction= INGREDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice= oldPrice - priceSubtraction;
        this.updatePurchaseState(newPrice,updatedIngredients);
    }

    purchaseHandler = ()=>
    {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () =>
    {
        this.setState({purchasing: false});
    }

    render(){

        //Check if Less-Butten should be disabled or enabled
        //ie Array of the size of the ingredient array, whereas for each element true or false is assigned 
        const disabledInfo= {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) //achtung: hier wird in key (generelle bei der for-in Schleife)der Schlüssel eines Elements gespeichert!
        {
            disabledInfo[key]= disabledInfo[key]<=0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;