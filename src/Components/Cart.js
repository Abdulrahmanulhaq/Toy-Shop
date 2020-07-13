import React, { Fragment } from 'react' 
import{productQuantity,clearProduct} from '../Actions/productQuantity.js';
import{ connect } from 'react-redux';
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

function Cart({basketProps,productQuantity,clearProduct}){
    console.log (basketProps);

    let productsInCart=[];
    
    Object.keys(basketProps.products).forEach( function(item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart){
            productsInCart.push(basketProps.products[item]) 
        }
        console.log(productsInCart);
    });
   //const productImages=[evilminion,babygroot,traxxas,biglogo,legocar3,legocar4,legocharger,legododge,legofigure2,legoporsche,legostarwars,minecraftlego,minionlego,nerf3,nerf4,stroomtrooper
    
    const productImages=(product) => {
    
        if(product.tagName==='evilminion') {
            return evilminion;
        } 

        
        
       
        else if(product.tagName==='babygroot'){
            return babygroot;
        }else if(product.tagName==='traxxas'){
            return traxxas;
        }else if(product.tagName==='biglogo'){
            return biglogo;
        }else if(product.tagName==='legocar3'){
            return legocar3;
        }else if(product.tagName==='legocar4'){
            return legocar4;
        }else if(product.tagName==='legocharger'){
            return legocharger;
        }else if(product.tagName==='legododge'){
            return legododge;
        }else if(product.tagName==='legofigure2'){
            return legofigure2;
        }else if(product.tagName==='legoporsche'){
            return legoporsche;
        }else if(product.tagName==='legostarwars'){
            return legostarwars;
        }else if(product.tagName==='minecraftlego'){
            return minecraftlego;
        }else if(product.tagName==='minionlego'){
            return minionlego;
        }else if(product.tagName==='nerf3'){
            return nerf3;
        }else if(product.tagName==='nerf4'){
            return nerf4;
        }else if(product.tagName==='stroomtrooper'){
            return stroomtrooper;     
        }
    }

    productsInCart=productsInCart.map( (product,index)=>{
        console.log("My product is");
        console.log(product);
        return(
            <Fragment key={index}>
                
                 <div className="product"><ion-icon onClick={()=>clearProduct(product.tagName)}name="close-circle-outline"></ion-icon><img src={productImages(product)} alt={product.name}/>
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price},00</div>
                <div className="quantity">
                    <ion-icon onClick={()=>productQuantity('decrease',product.tagName)}className="decrease"name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                    <ion-icon onClick={()=>productQuantity('increase',product.tagName)}className="increase"name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers * product.price},00</div>
            </Fragment>
        )
    });
    return (
        <div className="container-products">
        <div className="product-header">
            <h5 className="product-title">PRODUCT</h5>
            <h5 className="price sm-hide">PRICE</h5>
            <h5 className="quantity">QUANTITY</h5>
            <h5 className="total">TOTAL</h5>
        </div>
        <div className="product">
            {productsInCart}
        </div>
        <div className="basketTotalContainer">
            <h4 className="basketTotalTitle">Basket Total</h4>
            <h4 className="basketTotal">${basketProps.cartCost},00</h4>
        </div>
    </div>
    )

}
const mapStateToProps=state=>({
    basketProps:state.basketState 
});
export default connect( mapStateToProps,{productQuantity,clearProduct})(Cart);