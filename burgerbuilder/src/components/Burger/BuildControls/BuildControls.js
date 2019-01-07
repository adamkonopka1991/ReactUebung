import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

//?gibt es nicht einen praktischeren weg, sodass die Anpassung des Ingredient- Array automatisch zu einer Anpassung
//des controls- Objekts führt?
const controls= [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls= (props) => (
    <div className={classes.BuildControls}>

        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>

        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}

        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}>ORDER NOW</button>

    </div>
);

export default buildControls;