import React, { useState } from 'react';
import evilminion from'../Images/evil-minion.jpg';
import buzzlightyear from'../Images/buzz-lightyear.jpg';
import killerrobot from'../Images/killer-robot.jpg';
import babygroot from'../Images/baby-groot.jpg';
import traxxas from'../Images/traxxas.jpg';
import{ connect } from 'react-redux';
import{addBasket} from '../Actions/addActions';         



const Home=(props)=> {
    console.log(props);  
    return(
        <div className="container">
            <div className="image">
                <img src={evilminion} alt="Evil Minion" title='evil minion'/>
                <h3>Evil Minion</h3>
                <h3>$39,08</h3>
                <a onClick={() =>props.addBasket('evilminion')} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={buzzlightyear} alt="Buzz Lightyear" title='buzz lightyear'/>
                <h3>Buzz Lightyear</h3>
                <h3>$67,47</h3>
                <a onClick={() =>props.addBasket('buzzlightyear')} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={killerrobot} alt="Killer Robot" title='killer robot'/>
                <h3>Killer Robot</h3>
                <h3>$36,94</h3>
                <a onClick={() =>props.addBasket('killerrobot')} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={babygroot} alt="Baby Groot" title='baby groot'/>
                <h3>Baby Groot</h3>
                <h3>$42,78</h3>
                <a onClick={() =>props.addBasket('babygroot')} className="addToCart cart4" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={traxxas} alt="Traxxas XO-1" title='Traxxas XO-1'/>
                <h3>Traxxas XO-1</h3>
                <h3>$950</h3>
                <a onClick={() =>props.addBasket('traxxas')} className="addToCart cart5" href="#">Add to Cart</a>
            </div>

        </div>
    );
}
export default connect(null, {addBasket})(Home);