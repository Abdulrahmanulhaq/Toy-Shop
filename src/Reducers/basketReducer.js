import { ADD_PRODUCT_BASKET,GET_NUMBERS_BASKET } from "../Actions/types";

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
        buzzlightyear:{
            name:"Buzz Lightyear",
            tagName:'Buzz Lightyear',
            price:67.47,
            numbers:0,
            inCart:false
        },
        killerrobot:{
            name:"Killer Robot",
            tagName:' Killer Robot',
            price:36.94,
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
        batman:{
            name:"Batman",
            tagName:' Batman',
            price:10,
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
        legobugatti:{
            name:"Lego Technic Buggati Chiron",
            tagName:' Legobugatti',
            price:720,
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
