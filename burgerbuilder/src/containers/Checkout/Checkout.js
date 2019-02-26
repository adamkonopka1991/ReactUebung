import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class Checkout extends Component {
    state={
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount() //so before we render the child components,thus ingredients will be loaded before Route with ContactData will be loaded.
    {
        const query= new URLSearchParams(this.props.location.search);
        const ingredients= {};
        let price= 0;
        for(let param of query.entries())
        {
            //['salad'], ['1']
            if(param[0]==='price')
            {
                price= param[1];
            }
            else
            {
                ingredients[param[0]]= +param[1];
            }
            
        }

        this.setState({ingredients:ingredients, totalPrice: price});
    }

    purchaseSubmitHandler= (cont) =>
    {
        if(cont===true)
        {
            this.props.history.push('/checkout/contact-data');
        }

        else
        {
            this.props.history.goBack();
        }
    }
    


    render()
    {


        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    onCheckoutCancelled={()=>this.purchaseSubmitHandler(false)}
                    onCheckoutContinued={()=>this.purchaseSubmitHandler(true)} />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props)=>(<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)} />
                    {/*render -> history-Object ist nicht verfügbar! -> wrap ContactData with withRouter or pass props manually*/}
            </div>
        );
    }
}

export default Checkout;