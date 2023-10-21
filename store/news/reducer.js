import {
    IS_LOADING,
    RESET_DATA,
    GET_STORIES_NEW_SCUCCESS,
    GET_STORIES_NEW_PAGINATION_SUCCESS
  } from './actions';

  export const initialState = {  
    errorMessage: '',
    successMessage: '',
    isLoading: false,
    storiesNew: [],
    storiesNewData: []
  };

  const storiesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_STORIES_NEW_SCUCCESS:
          return {
            ...state,
            storiesNew: action.data,
          };

        case GET_STORIES_NEW_PAGINATION_SUCCESS:
            return {
              ...state,
              storiesNewData: [...state.storiesNewData, ...action.data]
        };
        case IS_LOADING:
          return {
            ...state,
            isLoading: action.value,
          };
        case RESET_DATA:
          return {
            ...state,
            errorMessage: '',
            successMessage: '',
            isLoading: false,
            stories: []
          };
       
        default:
          return state;
      }
  }
  export default storiesReducer;