import * as actionTypes from '../actions/types'

      export const Rtodo = (state = [], action) => {

        switch (action.type) {
            case actionTypes.ADD_TODO:
                return [action.payload, ...state]
            case actionTypes.GET_ALL_TODO:
                return action.payload
            case actionTypes.TOGGLE_DONE_TODO:
              return state.map(todo =>todo._id === action.payload._id?{...todo,Done: !todo.Done}: todo)
            case actionTypes.EDIT_TODO:
              return state.map(todo =>todo._id === action.payload._id?{...todo,data: action.payload.data}: todo)
            case actionTypes.DELETE_TODO:   
              return state.filter(todo =>todo._id === action.payload._id)
  default:
    return state;  
    
  }
}

