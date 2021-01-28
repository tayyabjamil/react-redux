import { FETCH_DATA } from '../types'
import { DATA_SUCCESS } from '../types'
import { DATA_FALIURE} from '../types'
import axios from 'axios'
export const fetchData = () =>{
    return {type:FETCH_DATA}
}
 
export const dataSuccess = (data) =>{
    return {type:DATA_SUCCESS,payload:data}
}
 
export const dataFaliure = (error) =>{
    return {type:DATA_FALIURE,payload:error}
}
export const callApi = ()=>{
   
    return (dispatch)=>{
        dispatch(fetchData(true))
       
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
          const users = response.data
           dispatch(dataSuccess(users))
    
        })
        .catch(function (error) {
        dispatch(dataFaliure(error))
        });
    }
}