import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component
{
    //Can we change the way the children of Modal are updating the way modal itself updates? 
    //-> wrapping element controls the updating of the wrapped element(here:modal controls OrderSummary)
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show!==this.props.show || nextProps.children !== this.props.children;
        //wird nur geupdated wenn sich der show-Zustand von Modal ändert
        //Logisch: Man kann den zustand nicht ändern während modal geöffnet ist,- man muss das modal schließen
        //wenn das modal geöffnet wird, wird wiederum ein rerender getriggert und der Kunde sieht den aktuellen Zustand
        //seiner Bestellung
        //falls sich ein click-Listener ändert z.b. dasdurch dass man diesem eine andere Funktion zuweist muss
        //eine Komponente ebenfalls neu gerendert werden!!
        //auf PureComponent verzichtet da PureComponent mehr Vergleiche durchführen würde als wir hier tun
    }

    componentWillUpdate() {
        console.log('Modal willUpdate');
    }

    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className={classes.Modal}
                    style={
                        {transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'}
                    }>
                    {this.props.children}
                </div>
            </Aux> 
        );
    }
} 



export default Modal;