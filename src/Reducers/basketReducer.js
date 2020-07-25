import { ADD_PRODUCT_BASKET,GET_NUMBERS_BASKET,INCREASE_QUANTITY,DECREASE_QUANTITY,CLEAR_PRODUCT } from "../Actions/types";

const initialState= {
    basketNumbers:0,
    cartCost:0,
    products:{
        evilminion:{
            name:"LeBron 17",
            tagName:'evilminion',
            price:39.08,
            numbers:0,
            inCart:false
        },
        babygroot:{
            name:"Nike Air Max Plus 3",
            tagName:'babygroot',
            price:42.78,
            numbers:0,
            inCart:false
        },
        traxxas:{
            name:"Air Jordan IX Retro",
            tagName:'traxxas',
            price:950,
            numbers:0,
            inCart:false
        },
        biglogo:{
            name:"Women's Air Jordan I High OG",
            tagName:'biglogo',
            price:600,
            numbers:0,                                                                                                      
            inCart:false
        },
        legocar3:{
            name:"Lebron 17 Monstars",
            tagName:'legocar3',
            price:420,
            numbers:0,                                                                                                      
            inCart:false
        },
        legocar4:{
            name:"Air Jordan III Retro U",
            tagName:'legocar4',
            price:390,
            numbers:0,                                                                                                      
            inCart:false
        },
         legocharger:{
            name:"KYRIE 6 Trophies",
            tagName:'legocharger',
            price:420,
            numbers:0,                                                                                                      
            inCart:false
         },
         legododge:{
            name:"KD 12 Don C",
            tagName:'legododge',
            price:520,
            numbers:0,                                                                                                      
            inCart:false
         },
         legofigure2:{
            name:"Nike Mag",
            tagName:'legofigure2',
            price:8,
            numbers:0,                                                                                                      
            inCart:false
         },
         legoporsche:{
            name:"Specjalna edycja Air Jordan 34",
            tagName:'legoporsche',
            price:711,
            numbers:0,                                                                                                      
            inCart:false
         },
         legostarwars:{
            name:"PG4 Gatorade ASW",
            tagName:'legostarwars',
            price:390,
            numbers:0,                                                                                                      
            inCart:false
         },
         minecraftlego:{
            name:"All Star Pro BB Pack",
            tagName:'minecraftlego',
            price:96,
            numbers:0,                                                                                                      
            inCart:false
         },
         minionlego:{
            name:"Jordan Why Not Zer0.3",
            tagName:'minionlego',
            price:106,
            numbers:0,                                                                                                      
            inCart:false
         },
         nerf3:{
            name:"Nike Mercurial Superfly 7 Elite CR7 Safari FG",
            tagName:'nerf3',
            price:650,
            numbers:0,                                                                                                      
            inCart:false
         },
         nerf4:{
            name:"Nike Air Max 270 G",
            tagName:'nerf4',
            price:850,
            numbers:0,                                                                                                      
            inCart:false
         },
         stroomtrooper:{
            name:"Stroom Trooper",
            tagName:'stroomtrooper',
            price:350,
            numbers:0,                                                                                                      
            inCart:false
         }
    }
};
export default(state=initialState, action)=>{
    let productSelected="";
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            productSelected={...state.products[action.payload]}
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);
            return{
                ...state,
                basketNumbers:state.basketNumbers+1,
                cartCost:state.cartCost+state.products[action.payload].price,
                products:{
                    ...state.products,
                    [action.payload]:productSelected    
                }
            }
        case GET_NUMBERS_BASKET:
            return{
                ...state
            }
        case INCREASE_QUANTITY:
            productSelected={...state.products[action.payload]}
            productSelected.numbers+=1;
            return{
                ...state,
                basketNumbers:state.basketNumbers+1,
                cartCost:state.cartCost+state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]:productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected={...state.products[action.payload]}
            let newCartCost=0;
            let newBasketNumbers =0;
            if(productSelected.numbers===0){
                productSelected.numbers=0;
                newCartCost=state.cartCost;
                newBasketNumbers=state.basketNumbers
            }else{
                productSelected.numbers-=1;
                newCartCost=state.cartCost-state.products[action.payload].price
                newBasketNumbers=state.basketNumbers-1
            }
            return{
                ...state,
                basketNumbers:newBasketNumbers,
                cartCost:newCartCost,
                products: {
                    ...state.products,
                    [action.payload]:productSelected
                }
            }
        case CLEAR_PRODUCT:
            productSelected={...state.products[action.payload]}
            let numbersBackup=productSelected.numbers;
            productSelected.numbers=0;                                                                                                      
            productSelected.inCart=false;
            return{
                ...state,
                basketNumbers:state.basketNumbers-numbersBackup,
                cartCost:state.cartCost-(numbersBackup*productSelected.price),
                products: {
                    ...state.products,
                    [action.payload]:productSelected
                }
            }
        default:
            return state;
        }
    }
