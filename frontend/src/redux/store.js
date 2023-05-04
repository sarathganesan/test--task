import thunk from 'redux-thunk'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from './Slices/userSlice'
import usersReducer from './Slices/usersSlice'
const reducer = combineReducers({
    userState: userReducer,
    usersState: usersReducer
    
  

})
 
const store = configureStore({
    reducer,
    middleware :[thunk]
}) 

export default store;