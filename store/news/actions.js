

export const IS_LOADING = 'IS_LOADING';
export const RESET_DATA = 'RESET_DATA';
export const GET_STORIES_NEW = 'GET_STORIES_NEW';
export const GET_STORIES_NEW_SCUCCESS = 'GET_STORIES_NEW_SCUCCESS';
export const ERROR_MESSAGE = 'ERROR_MESSAGE'

export const GET_STORIES_NEW_PAGINATION = 'GET_STORIES_NEW_PAGINATION'
export const GET_STORIES_NEW_PAGINATION_SUCCESS = 'GET_STORIES_NEW_PAGINATION_SUCCESS'
export const setLoadingAction = value => ({
  type: IS_LOADING,
  value,
});
export const resetDataAction = () => ({
  type: RESET_DATA,
});
export const getStoreiesNewAction = () => ({
  type: GET_STORIES_NEW,
})
export const getStoriesNewSuccessAction = (data) => ({
  type: GET_STORIES_NEW_SCUCCESS,
  data
})
export const setErrorMessageAction = errorMessage => ({
  type: ERROR_MESSAGE,
  errorMessage,
});

export const  getStoreiesPaginationNewAction =  (param) =>({
  type: GET_STORIES_NEW_PAGINATION,
  param,
})
export const  getStoreiesPaginationNewSuccessAction =  (data) =>({
  type: GET_STORIES_NEW_PAGINATION_SUCCESS,
  data,
})