import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: {},
      
        isProductCreated: false,
        isProductDeleted: false,
        
        
    },
    reducers: {
        productRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        productSuccess(state, action){
            return {
                ...state,
                loading: false,
                user: action.payload.user
            }
        },
        productFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },

 
 
        clearError(state, action) {
           return{ ...state,
            error: null
           }
        },
        clearProduct(state, action) {
            return{ ...state,
                user : {}
            }
        },
        // reducers for admin creating new product
        newProductRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        newProductSuccess(state, action){
            return {
                ...state,
                loading: false,
                //  check postman "Create new product" request getting "product" in response
                user: action.payload.user,
                isProductCreated: true,
            }
        },
        newProductFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload,
                isProductCreated:false
            }
        },
        clearProductCreated(state, action) {
            return {
                ...state,
                isProductCreated: false
            }
        },
           
    }
});

const { actions, reducer } = userSlice;

export const { 
    productRequest, 
    productSuccess, 
    productFail,

    clearError,
   
    clearProduct,
    newProductRequest,
    newProductFail,
    newProductSuccess,
    clearProductCreated,
   
   
   
} = actions;

export default reducer;