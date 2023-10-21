export const IS_LOADING = 'IS_LOADING';
export const RESET_DATA = 'RESET_DATA';
export const GET_STORIES = 'GET_STORIES';
export const GET_STORIES_SCUCCESS = 'GET_STORIES_SCUCCESS';
export const ERROR_MESSAGE = 'ERROR_MESSAGE'

export const GET_STORIES_PAGINATION = 'GET_STORIES_PAGINATION'
export const GET_STORIES_PAGINATION_SUCCESS = 'GET_STORIES_PAGINATION_SUCCESS'
export const setLoadingAction = value => ({
  type: IS_LOADING,
  value,
});
export const resetDataAction = () => ({
  type: RESET_DATA,
});
export const getStoreiesAction = () => ({
  type: GET_STORIES,
})
export const getStoriesSuccessAction = (data) => ({
  type: GET_STORIES_SCUCCESS,
  data
})
export const setErrorMessageAction = errorMessage => ({
  type: ERROR_MESSAGE,
  errorMessage,
});

export const  getStoreiesPaginationAction =  (param) =>({
  type: GET_STORIES_PAGINATION,
  param,
})
export const  getStoreiesPaginationSuccessAction =  (data) =>({
  type: GET_STORIES_PAGINATION_SUCCESS,
  data,
})