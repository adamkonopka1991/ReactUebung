import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class Checkout extends Component {

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
                    ingredients={this.props.ings}
                    onCheckoutCancelled={()=>this.purchaseSubmitHandler(false)}
                    onCheckoutContinued={()=>this.purchaseSubmitHandler(true)} />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData} />
                    {/*render -> history-Object ist nicht verfügbar! -> wrap ContactData with withRouter or pass props manually*/}
            </div>
        );
    }
}


const mapStateToProps = state =>
{
    return {
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);