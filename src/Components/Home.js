import React, { useState } from 'react';
import evilminion from'../Images/evil-minion-2.jpg';
import babygroot from'../Images/baby-groot.jpg';
import traxxas from'../Images/traxxas.jpg';
import biglogo from'../Images/big-logo.jpg';
import legocar3 from'../Images/lego-car-3.jpg';
import legocar4 from'../Images/lego-car-4.jpg';
import legocharger from'../Images/lego-charger.jpg';
import legododge from'../Images/lego-dodge.jpg';
import legofigure2 from'../Images/lego-figure-2.jpg';
import legoporsche from'../Images/lego-porsche.jpg';
import legostarwars from'../Images/Lego-star-wars.jpg';
import minecraftlego from'../Images/minecraft-lego.jpg';
import minionlego from'../Images/minion-lego.jpg';
import nerf3 from'../Images/nerf-3.jpg';
import nerf4 from'../Images/nerf-4.jpg.jpg';
import stroomtrooper from'../Images/stroom-trooper.jpg';
import{ connect } from 'react-redux';
import{addBasket} from '../Actions/addActions';         



const Home=(props)=> {
    console.log(props);  
    return(
        <div className="container">
          <div className="image">
                <img src={legocar3} alt="Lego Aston Martin DB5" title='Lego Aston Martin DB5'/>
                <h3>Lego Aston Martin DB5</h3>
                <h3>$420</h3>
                <a onClick={() =>props.addBasket('legocar3')} className="addToCart cart1" >Add to Cart</a>
           </div>
           <div className="image">
                <img src={legoporsche} alt="Lego Technic Porsche 911 RSR" title='Lego Technic Porsche 911 RSR'/>
                <h3>Lego Technic Porsche 911 RSR</h3>
                <h3>$711</h3>
                <a onClick={() =>props.addBasket('legoporsche')} className="addToCart cart2" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={traxxas} alt="Traxxas XO-1" title='Traxxas XO-1'/>
                <h3>Traxxas XO-1</h3>
                <h3>$950</h3>
                <a onClick={() =>props.addBasket('traxxas')} className="addToCart cart3" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={biglogo} alt="Lego Technic Car Transporter" title='Lego Technic Car Transporter'/>
                <h3>Lego Technic Car Transporter</h3>
                <h3>$600</h3>
                <a onClick={() =>props.addBasket('biglogo')} className="addToCart cart4" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={legocar4} alt="Lego Ferrari F8" title='Lego Ferrari F8'/>
                <h3>Lego Ferrari F8</h3>
                <h3>$390</h3>
                <a onClick={() =>props.addBasket('legocar4')} className="addToCart cart5" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={legocharger} alt="Lego Mustang" title='Lego Mustang'/>
                <h3>Lego Mustang</h3>
                <h3>$420</h3>
                <a onClick={() =>props.addBasket('legocharger')} className="addToCart cart6" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={legododge} alt="Lego Technic Dodge Charger" title='Lego Technic Dodge Charger'/>
                <h3>Lego Technic Dodge Charger</h3>
                <h3>$520</h3>
                <a onClick={() =>props.addBasket('legododge')} className="addToCart cart7" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={legofigure2} alt="Lego Gamer" title='Lego Gamer'/>
                <h3>Lego Gamer</h3>
                <h3>$8</h3>
                <a onClick={() =>props.addBasket('legofigure2')} className="addToCart cart8" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={legostarwars} alt="Lego Anakins Jedi Interceptor" title='Lego Anakins Jedi Interceptor'/>
                <h3>Lego Anakins Jedi Interceptor</h3>
                <h3>$390</h3>
                <a onClick={() =>props.addBasket('legostarwars')} className="addToCart cart9" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={minecraftlego} alt="Lego Minecraft Creeper and Cat" title='Lego Minecraft Creeper and Cat'/>
                <h3>Lego Minecraft Creeper and Cat</h3>
                <h3>$96</h3>
                <a onClick={() =>props.addBasket('minecraftlego')} className="addToCart cart10" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={minionlego} alt="Lego Minion Robot" title='Lego Minion Robot'/>
                <h3>Lego Minion Robot</h3>
                <h3>$106</h3>
                <a onClick={() =>props.addBasket('minionlego')} className="addToCart cart11" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={nerf3} alt="Nerf N-Strike Elite Infinus" title='Nerf N-Strike Elite Infinus'/>
                <h3>Nerf N-Strike Elite Infinus</h3>
                <h3>$650</h3>
                <a onClick={() =>props.addBasket('nerf3')} className="addToCart cart12" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={nerf4} alt="Nerf Rival Nemesis MXVII-10K" title='Nerf Rival Nemesis MXVII-10K'/>
                <h3>Nerf Rival Nemesis MXVII-10K</h3>
                <h3>$850</h3>
                <a onClick={() =>props.addBasket('nerf4')} className="addToCart cart13" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={evilminion} alt="Evil Minion" title='evil minion'/>
                <h3>Evil Minion</h3>
                <h3>$39,08</h3>
                <a onClick={() =>props.addBasket('evilminion')} className="addToCart cart14" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={babygroot} alt="Baby Groot" title='baby groot'/>
                <h3>Baby Groot</h3>
                <h3>$42,78</h3>
                <a onClick={() =>props.addBasket('babygroot')} className="addToCart cart15" >Add to Cart</a>
            </div>
            <div className="image">
                <img src={stroomtrooper} alt="Stroom Trooper" title='Stroom Trooper'/>
                <h3>Stroom Trooper</h3>
                <h3>$350</h3>
                <a onClick={() =>props.addBasket('stroomtrooper')} className="addToCart cart16" >Add to Cart</a>
            </div>
           
        </div>
    );
}
export default connect(null, {addBasket})(Home);