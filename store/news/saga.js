import { takeLatest, put, call, select } from '@redux-saga/core/effects';

import {
    setLoadingAction,
    resetDataAction,
    getStoriesNewSuccessAction,
    setErrorMessageAction,
    GET_STORIES_NEW_PAGINATION,
    getStoreiesPaginationNewSuccessAction,
    GET_STORIES_NEW

  } from './actions';

  import {
    getDetailItem,
    getListNewStories
  } from '../../service/api';

  import * as _ from 'lodash';

  import {  makeSelectPagination } from './selectors'
  import { paginate } from '../../utils'


  function* fetchListStories() {
    try {
      yield put(setLoadingAction(true));
      const response = yield call(getListNewStories);
      const { data } = response
      yield(put(getStoriesNewSuccessAction(data)))
    }
    catch (error) {
      yield put(setErrorMessageAction(error.toString()));
    }
    finally {
      yield put(setLoadingAction(false));
    }
  
  }

  function* fetchPaginationListStories({ param }) {
    try {
        yield put(setLoadingAction(true));
      
        const arraySlice = paginate(param.stories,  10, param.page)
        let arrayData = []
        if ( arraySlice.length > 0)
        {
            for(let i = 0; i < arraySlice.length; i++)
            {
                const response = yield call(getDetailItem, arraySlice[i]);
                if (response && response.data)
                {
                    let storiesData = yield select(makeSelectPagination());
                    if (storiesData.length === 0)
                    {
                        arrayData.push(response.data)
                    }
                    else {
                        const idxTemp = storiesData.findIndex(itm => itm.id === arraySlice[i])
                        if (idxTemp  === -1 )
                        {
                            arrayData.push(response.data)
                        }
                    }
                   
                }
               

            }
            yield put (getStoreiesPaginationNewSuccessAction(arrayData))
            yield put(setLoadingAction(false));
           
        }
        
        
    
      }
      catch (error) {
        yield put(setErrorMessageAction(error.toString()));
        yield put(setLoadingAction(false));
      }
      finally {
        yield put(setLoadingAction(false));
      }

  }

  function* storiesSaga() {
    yield takeLatest(GET_STORIES_NEW, fetchListStories);
    yield takeLatest(GET_STORIES_NEW_PAGINATION, fetchPaginationListStories);
  }
  
  export default storiesSaga;