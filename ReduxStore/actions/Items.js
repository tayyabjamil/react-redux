import { ADD_ITEM } from '../types'

export const addName = (item) =>{
    return {type:ADD_ITEM,newitem:item}
}
 