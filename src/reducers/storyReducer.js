import { storyActionTypes } from '../constants';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; //To use session storage
// import { createWhitelistFilter } from 'redux-persist-transform-filter';

const persistConfig = {
    key: 'story',
    storage: storage,
    timeout: null,
    whitelist: ['storyList'],   //This is to make sure that I am persisting only storyList in local storage. So that I dont need to call api of all stories every time I hit the refresh button.
    // transforms: [
    //   createWhitelistFilter('auth', ['session']),
    // ],
};

const initState = {storyList: []};

const storyReducer = (state = initState, action) => {
    switch (action.type) {
        case storyActionTypes.RESET_GET_STORIES:
            return {
                ...state,
                storyIdList: null,
            }
        case storyActionTypes.GET_STORIES_SUCCESS:
            return {
                ...state,
                storyIdList: action.payload,
            }
        case storyActionTypes.GET_STORIES_FAILURE:
            return {
                ...state,
            }
        case storyActionTypes.GET_STORY_BY_ID_SUCCESS:
            return {
                ...state,
                storyList: [ ...state.storyList, action.payload],
            }
        case storyActionTypes.GET_STORY_BY_ID_FAILURE:
            return {
                ...state,
            }
            case storyActionTypes.SORT_STORIES:
                return 
                
        default:
            return state
    }
};

const persistStoryReducer = persistReducer(persistConfig, storyReducer);
export default persistStoryReducer;
