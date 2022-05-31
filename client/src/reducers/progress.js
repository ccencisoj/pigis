import {
  SET_CURRENT_STEP,
  RESTART_PREPARING_RACE_PAGE
} from 'contants/actionTypes';

import {
  STEP1
} from 'contants/common';

const initialState = {
  prevStep: null,
  currentStep: null
};  

export default (state=initialState, action)=> {
  switch (action.type) {  
    case SET_CURRENT_STEP:
      return {
        ...state,
        prevStep: state.currentStep,
        currentStep: action.payload,
      }

    case RESTART_PREPARING_RACE_PAGE:
      return {
        ...state,
        prevStep: null,
        currentStep: STEP1,
      }

    default:
      return state;
  }
}