import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../auxiliary';

const withErrorHandler= (WrappedComponent,axios) =>
{
    return class extends Component{

        state={
            error: null
        }

        componentWillMount () { //not in didmount but in willmount cause we reach out to the web in childcomponent. Interceptors wouldnt then be set up in case interceptors are set in did mount of the wrapping component.
            this.reqInterceptor= axios.interceptors.request.use(req=>{
                this.setState({error:null}); //?Fehler wird bei Anfrage immer gelöscht, sodass nur bei der Antwort der Fehler auftauchen kann
                return req;
            })
            this.resInterceptor= axios.interceptors.response.use(res => res, error=>{
                this.setState({error: error}); //?Fehler komm nur bei Antwort
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }//?otherwise multiple interceptors will be in memory and called every time we reach out to the web.especially important when it comes to routing

        errorConfirmedHandler= () =>
        {
            this.setState({error:null});
        }

        render(){
            return(
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null} {/*modal ist immer präsent. error ist aber nicht immer gesetzt-> null hat keine properties.*/}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
        
        
    }
       
}


export default withErrorHandler;