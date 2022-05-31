import {
  LOAD_CHILD_LIST,
  ADD_CHILD,
  DELETE_CHILD,
  SHOW_BARSIDE,
  HIDE_BARSIDE,
  SET_SELECTED_NAV_ITEM_P,
  SET_SELECTED_NAV_ITEM_S
} from 'contants/actionTypes';

import {
  LIST_CHILDS_ITEM,
} from 'contants/common';

const initialState = {
  childList: [],
  showBarside: false,
  selectedNavItemP: null,
  selectedNavItemS: LIST_CHILDS_ITEM 
}

export default (state=initialState, action)=> {
  switch (action.type) {
    case LOAD_CHILD_LIST: 
      return {
        ...state,
        childList: action.payload || []
      }

    case ADD_CHILD:
      return {
        ...state,
        childList: [action.payload, ...state.childList]
      }

    case DELETE_CHILD:
      return {
        ...state,
        childList: state.childList.filter((child)=> {
          console.log(child);
          if(child.id !== action.payload.id) return true;
        })
      }

    case SET_SELECTED_NAV_ITEM_P:
      return {
        ...state,
        selectedNavItemP: action.payload
      }

    case SET_SELECTED_NAV_ITEM_S: 
      return {
        ...state,
        selectedNavItemS: action.payload
      }

    case SHOW_BARSIDE:
      return {
        ...state,
        showBarside: true
      }

    case HIDE_BARSIDE:
      return {
        ...state,
        showBarside: false
      }
      
    default:
      return state;
  }
} 