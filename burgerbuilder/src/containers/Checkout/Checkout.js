import React, {Component} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';


class Checkout extends Component {
    state={
        ingredients:{
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    purchaseSubmitHandler= (cont) =>
    {
        if(cont==true)
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
            </div>
        );
    }
}

export default Checkout;