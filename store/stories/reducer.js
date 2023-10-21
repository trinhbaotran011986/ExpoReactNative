import {
    IS_LOADING,
    RESET_DATA,
    GET_STORIES_SCUCCESS,
    GET_STORIES_PAGINATION_SUCCESS
  } from './actions';

  export const initialState = {  
    errorMessage: '',
    successMessage: '',
    isLoading: false,
    stories: [],
    storiesData: []
  };

  const storiesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_STORIES_SCUCCESS:
          return {
            ...state,
            stories: action.data,
          };

        case GET_STORIES_PAGINATION_SUCCESS:
            return {
              ...state,
              storiesData: [...state.storiesData, ...action.data]
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