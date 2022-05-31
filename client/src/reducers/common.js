import {
  SET_RACE_TIME,
  LOAD_PARENT,
  LOAD_CHILD
} from 'contants/actionTypes';
import { 
  ONE_MINUTE
} from 'contants/common';

const initialState = {
  raceTime: ONE_MINUTE,
  child: {},
  parent: {}
}

export default (state=initialState, action)=> {
  switch (action.type) {
    case SET_RACE_TIME: 
      return {
        ...state,
        raceTime: action.payload 
      }

    case LOAD_PARENT:
      return {
        ...state,
        parent: action.payload || {}
      }

    case LOAD_CHILD:
      return {
        ...state,
        child: action.payload || {}
      }

    default:
      return state;
  }
} 