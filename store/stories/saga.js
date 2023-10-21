import { takeLatest, put, call, select } from '@redux-saga/core/effects';

import {
    GET_STORIES,
    setLoadingAction,
    resetDataAction,
    getStoriesSuccessAction,
    setErrorMessageAction,
    GET_STORIES_PAGINATION,
    getStoreiesPaginationSuccessAction

  } from './actions';

  import {
    getListTopStories,
    getDetailItem
  } from '../../service/api';

  import * as _ from 'lodash';

  import {  makeSelectPagination } from './selectors'
  import { paginate } from '../../utils'


  function* fetchListStories() {
    try {
      yield put(setLoadingAction(true));
      const response = yield call(getListTopStories);
      const { data } = response
      yield(put(getStoriesSuccessAction(data)))
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
            yield put (getStoreiesPaginationSuccessAction(arrayData))
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
    yield takeLatest(GET_STORIES, fetchListStories);
    yield takeLatest(GET_STORIES_PAGINATION, fetchPaginationListStories);
  }
  
  export default storiesSaga;