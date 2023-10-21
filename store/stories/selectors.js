import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectStories = state => state.StoriesScreen || initialState;
const makeSelectErrorMessage = () => createSelector(
    selectStories,
    storiesState => storiesState.errorMessage,
  );

  const makeSelectSuccessMessage = () => createSelector(
    selectStories,
    storiesState => storiesState.successMessage,
  );
  
  const makeSelectIsLoading = () => createSelector(
    selectStories,
    storiesState => storiesState.isLoading,
  );

  const makeSelectStories = () => createSelector(
    selectStories,
    storiesState => storiesState.stories,
  );
  const makeSelectPagination = () => createSelector(
    selectStories,
    storiesState => storiesState.storiesData,
  );

  export {
    selectStories,
    makeSelectErrorMessage,
    makeSelectSuccessMessage,
    makeSelectIsLoading,
    makeSelectStories,
    makeSelectPagination
  };