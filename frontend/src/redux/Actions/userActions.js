import { newProductFail, newProductRequest,newProductSuccess } from "../Slices/userSlice";
import axios from 'axios'
import { adminCreateProductRequest, adminProductsFail, adminProductsRequest, adminProductsSuccess, userFail, userRequest, userSuccess } from "../Slices/usersSlice";
export const createNewuser = productData => async (dispatch) => {

    try {  
        dispatch(newProductRequest()) 
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        } 
        const { data }  =  await axios.post(`/auth/new/user`,productData,config);
        dispatch(newProductSuccess(data))
    } catch (error) {
        //handle error
        dispatch(newProductFail(error.response.data.message))
    }
    
}


export const fetchUsers = () => async (dispatch) => {
    try {
      dispatch(userRequest());
      const { data } = await axios.get('/auth/users');
      dispatch(userSuccess(data.users));
    } catch (error) {
      dispatch(userFail(error.message));
    }
  };