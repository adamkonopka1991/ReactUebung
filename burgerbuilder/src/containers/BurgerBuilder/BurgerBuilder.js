import React, { Component } from 'react';

import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

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
        purchasing: false, //true, as soon as Order Now - Button was clicked
        loading: false
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
        this.setState({purchasing:  false});
    }

    purchaseContinueHandler= () =>
    {
        //alert("You continue!");a
        this.setState({loading: true})
        const order= {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice, //calculate your price in the backend to make surethat the user isnt manipulating the code!!!
            customer:{
                name: 'Adam Konopka',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '34234',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response =>{
                this.setState({loading: false, purchasing: false});
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false});
            });
    }

    render(){

        //Check if Less-Butten should be disabled or enabled
        //ie Array of the size of the ingredient array, whereas for each element true or , purchasing: false is assigned 
        const disabledInfo= {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) //achtung: hier wird in key (generelle bei der for-in Schleife)der Schlüssel eines Elements gespeichert!
        {
            disabledInfo[key]= disabledInfo[key]<=0;
        }


        let orderSummary= <OrderSummary 
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler} />;

        if(this.state.loading)
        {
            orderSummary= <Spinner />
        }


        return (
            <Aux>
                {/*wird nur rerendert wenn show sich ändert */}
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>{/*wenn nicht gezeigt muss das Modal auch nicht rerendered werden*/}
                    {orderSummary}
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

export default withErrorHandler(BurgerBuilder);