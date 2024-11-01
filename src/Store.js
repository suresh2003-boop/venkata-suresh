import { configureStore, createSlice } from "@reduxjs/toolkit";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import { Action } from "@remix-run/router";
import App from "./App";



const productsSlice = createSlice({

    name :"products",
    initialState:{
        Veg:[
            {name:"tomato",price:100.0},
            {name:"potato",price:150.0},
            {name:"onion",price:450.0},
            {name:"carrot",price:900.0}
        ],
        NonVeg:[
            {name:"chicken",price:450.0},
            {name:"mutton",price:900.0},
            {name:"fish",price:250.0},
            {name:"Eggs",price:180.0}

        ]
    },
    reducers:{}
});



const cartSlice = createSlice({


    name:'cart',
    initialState:[],
    reducers:{
         addToCart: (state, action) => {
        const existingItem = state.find(item => item.name === action.payload.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.push({ ...action.payload, quantity: 1 });
            }
        },





        increment: (state, action) => {
            const existingItem = state.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } 
               
            },







            decrement: (state, action) => {
                const existingItem = state.find(item => item.name === action.payload.name);
                if (existingItem&&existingItem.quantity>1) {
                    existingItem.quantity -= 1;
                } 
                else{
                    return state.filter(item=>item.name!== action.payload.name )
                }
                   
                },






                remove: (state, action) => {
                    const existingItem = state.find(item => item.name === action.payload.name);
                    if (existingItem) {
                       
                        return state.filter(item=>item.name!== action.payload.name )
                    }
                       
                    },



                    
                           



    },
})

export const{ addToCart,increment,decrement,remove,} = cartSlice.actions;



 const store =configureStore({
    reducer:{products:productsSlice.reducer,
        cart: cartSlice.reducer,
    }

});


export default store;






