import { ADD_PRODUCT_BASKET,GET_NUMBERS_BASKET } from "../Actions/types";

const initialState= {
    basketNumbers:0,
    cartCost:0,
    products:{
        evilminion:{
            name:"Evil Minion",
            price:39.08,
            numbers:0,
            inCart:false
        },
        buzzlightyear:{
            name:"Buzz Lightyear",
            price:67.47,
            numbers:0,
            inCart:false
        },
        killerrobot:{
            name:"Killer Robot",
            price:36.94,
            numbers:0,
            inCart:false
        },
        babygroot:{
            name:"Baby Groot",
            price:42.78,
            numbers:0,
            inCart:false
        },
        traxxas:{
            name:"Traxxas XO-1",
            price:950,
            numbers:0,
            inCart:false
        },
    }
};
export default(state=initialState, action)=>{
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            let addQuantity={...state.products[action.payload]}
            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
            return{
                ...state,
                basketNumbers:state.basketNumbers+1,
                cartCost:state.cartCost+state.products[action.payload].price,
                products:{
                    ...state.products,
                    [action.payload]:addQuantity    
                }
            }
        case GET_NUMBERS_BASKET:
            return{
                ...state
            }
        default:
            return state;
    }
}