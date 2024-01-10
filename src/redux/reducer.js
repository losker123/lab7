import { SET_QUESTIONS, SET_INSTALLATIONS, SET_PARTNERS,SET_REVIEWS,SET_SYSTEMS } from './actions'; 
import { combineReducers } from 'redux';
const initialState = {
  questions: [],
  installations: [],
  partners: [],
  reviews: [],
  systems: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case SET_INSTALLATIONS:
      return {
        ...state,
        installations: action.payload,
      };
      case SET_PARTNERS:
      return {
        ...state,
        partners: action.payload,
      };
      case SET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
      case SET_SYSTEMS:
      return {
        ...state,
        systems: action.payload,
      };
    default:
      return state;
  }
};
const rootReducers = combineReducers({
    questions: rootReducer,
    installations: rootReducer,
    partners: rootReducer,
    reviews: rootReducer,
    systems: rootReducer
  });
export default rootReducers;
