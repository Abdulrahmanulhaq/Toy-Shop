import { ADD_PRODUCT_BASKET,GET_NUMBERS_BASKET,INCREASE_QUANTITY,DECREASE_QUANTITY,CLEAR_PRODUCT } from "../Actions/types";

const initialState= {
    basketNumbers:0,
    cartCost:0,
    products:{
        evilminion:{
            name:"Evil Minion",
            tagName:'evilminion',
            price:39.08,
            numbers:0,
            inCart:false
        },
        babygroot:{
            name:"Baby Groot",
            tagName:'babygroot',
            price:42.78,
            numbers:0,
            inCart:false
        },
        traxxas:{
            name:"Traxxas XO-1",
            tagName:'traxxas',
            price:950,
            numbers:0,
            inCart:false
        },
        biglogo:{
            name:"Lego Technic Car Transporter",
            tagName:'biglogo',
            price:600,
            numbers:0,                                                                                                      
            inCart:false
        },
        legocar3:{
            name:"Lego Aston Martin DB5",
            tagName:'legocar3',
            price:420,
            numbers:0,                                                                                                      
            inCart:false
        },
        legocar4:{
            name:"Lego Ferrari F8",
            tagName:'legocar4',
            price:390,
            numbers:0,                                                                                                      
            inCart:false
        },
         legocharger:{
            name:"Lego Mustang",
            tagName:'legocharger',
            price:420,
            numbers:0,                                                                                                      
            inCart:false
         },
         legododge:{
            name:"Lego Technic Dodge Charger",
            tagName:'legododge',
            price:520,
            numbers:0,                                                                                                      
            inCart:false
         },
         legofigure2:{
            name:"Lego Gamer",
            tagName:'legofigure2',
            price:8,
            numbers:0,                                                                                                      
            inCart:false
         },
         legoporsche:{
            name:"Lego Technic Porsche 911 RSR",
            tagName:'legoporsche',
            price:711,
            numbers:0,                                                                                                      
            inCart:false
         },
         legostarwars:{
            name:"Lego Anakins Jedi Interceptor",
            tagName:'legostarwars',
            price:390,
            numbers:0,                                                                                                      
            inCart:false
         },
         minecraftlego:{
            name:"Lego Minecraft Creeper and Cat",
            tagName:'minecraftlego',
            price:96,
            numbers:0,                                                                                                      
            inCart:false
         },
         minionlego:{
            name:"Lego Minion Robot",
            tagName:'minionlego',
            price:106,
            numbers:0,                                                                                                      
            inCart:false
         },
         nerf3:{
            name:"Nerf N-Strike Elite Infinus",
            tagName:'nerf3',
            price:650,
            numbers:0,                                                                                                      
            inCart:false
         },
         nerf4:{
            name:"Nerf Rival Nemesis MXVII-10K",
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
