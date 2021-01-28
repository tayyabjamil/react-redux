import ItemReducer from './reducers/Items'
import ThunkApiReducer from './reducers/thunkApiReducer'
import { createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  namesReducer:ItemReducer,
  apiReducer:ThunkApiReducer  
})

const configureStore =()=>createStore(
    rootReducer,
    applyMiddleware(thunk)
    )
export  default configureStore