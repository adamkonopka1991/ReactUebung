import React, { Component } from 'react';
import {connect} from 'react-redux';

import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as actionTypes from '../../store/reducers/actions';






class BurgerBuilder extends Component {

    state= {
        purchasing: false, //true, as soon as Order Now - Button was clicked
        loading: false,
        error: false
    }

    componentDidMount ()
    {
        // axios.get('https://react-my-burger-12aaa.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ingredients: response.data});
        //     })
        //     .catch( error =>{
        //         this.setState({error:true});
        //     });
    }

    updatePurchaseState(ingredients) 
    {
        const sum= Object.keys(ingredients).map(
            igKey =>{
                return ingredients[igKey];
            }).reduce((sum,element)=>{
            return sum=sum+element;
        },0);

        return sum>0;

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
        this.props.history.push('/checkout');
    }

    render(){

        //Check if Less-Butten should be disabled or enabled
        //ie Array of the size of the ingredient array, whereas for each element true or , purchasing: false is assigned 
        const disabledInfo= {
            ...this.props.ings
        };
        for(let key in disabledInfo) //achtung: hier wird in key (generelle bei der for-in Schleife)der Schlüssel eines Elements gespeichert!
        {
            disabledInfo[key]= disabledInfo[key]<=0;
        }

        let orderSummary= null;
        

        

        let burger= this.state.error ? <p>Ingredients cant be loaded</p> : <Spinner />;

        if(this.props.ings!==null)
        {
            burger=(

                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded} 
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        ordered={this.purchaseHandler}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        price={this.props.price}/>
                </Aux>//purchasable: method not in a arrow function.Should be ffired once the component is rerendered
            );

            orderSummary= <OrderSummary 
            ingredients={this.props.ings}
            price={this.props.price}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler} />;
        }

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
                {burger}

                
            </Aux>
        );
    }
}

const mapStateToProps= state =>
{
    return{
        ings: state.ingredients,
        price: state.totalPrice
    };
};

const mapDispatchToProps= dispatch =>
{
    return {
        onIngredientAdded: (ingName)=> dispatch({type:actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName)=> dispatch({type:actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})

    }
}



export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios)); //this works as long all props are passed in withErrorHandler