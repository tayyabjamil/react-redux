import {ADD_ITEM} from '../types';
const initialState = {
  nameArray: [],
};
const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        nameArray: state.nameArray.concat({name:action.newitem}),
      };
    default:
      return state;
  }
};
export default ItemReducer;
