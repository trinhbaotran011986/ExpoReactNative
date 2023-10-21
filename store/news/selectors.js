import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNewStories = state => state.StoriesNewScreen || initialState;
const makeSelectErrorMessage = () => createSelector(
    selectNewStories,
    storiesNewState => storiesNewState.errorMessage,
  );

  const makeSelectSuccessMessage = () => createSelector(
    selectNewStories,
    storiesNewState => storiesNewState.successMessage,
  );
  
  const makeSelectIsLoading = () => createSelector(
    selectNewStories,
    storiesNewState => storiesNewState.isLoading,
  );

  const makeSelectStories = () => createSelector(
    selectNewStories,
    storiesNewState => storiesNewState.storiesNew,
  );
  const makeSelectPagination = () => createSelector(
    selectNewStories,
    storiesNewState => storiesNewState.storiesNewData,
  );

  export {
    selectNewStories,
    makeSelectErrorMessage,
    makeSelectSuccessMessage,
    makeSelectIsLoading,
    makeSelectStories,
    makeSelectPagination
  };