import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Rtodo } from './redusers/Rtodo';


const reduser = combineReducers({
    todos: Rtodo

})
 const middleware = [thunk]



const store = createStore (
    reduser, composeWithDevTools(
        applyMiddleware(...middleware)
        
      )
    
)
export default store