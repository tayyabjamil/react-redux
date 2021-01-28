import { FETCH_DATA } from '../types'
import { DATA_SUCCESS } from '../types'
import { DATA_FALIURE} from '../types'
const initialState = {
  loading: false,
  users:[],
  error:''
};
const ThunkApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading:true 
    };
      case DATA_SUCCESS:
        return {
          ...state,
          loading:false,
          users:action.payload,
          error:''
        };
        case DATA_FALIURE:
            return {
              ...state,
              loading:false,
              users:[],
              error:action.payload.message
              };
          
      default:
      return state;
  }
};
export default ThunkApiReducer;
