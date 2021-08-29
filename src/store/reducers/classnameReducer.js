import {OK_HIDDEN, NO_HIDDEN} from '../actions/actionTypes';

const initialState = {
    classname: 'upload-overlay hidden'
  }
  
  export default function classnameReducer(state = initialState, action) {
  
    switch(action.type) {
      case OK_HIDDEN:
        return {
            classname: 'upload-overlay hidden'
        }
        case NO_HIDDEN:
          return {
            classname: 'upload-overlay'
        }
    
      default: {
        return state
      }  
    }
  }