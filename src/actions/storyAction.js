import { storyService } from '../services';
import { storyActionTypes } from '../constants';
const { UNAUTHORIZED, NOT_FOUND } = require('http-status-codes');

export const resetGetAllStories = () => {
  return {
    type: storyActionTypes.RESET_GET_STORIES,
  };
};

export const getAllStories = ( sort, filter) => async (dispatch, getState) => {
  let response, data, storiesResponseErrorCode, storyError;
  try {
    response = await storyService.getStories( sort, filter);
    data = response.data;
  } catch (e) {
    storiesResponseErrorCode = e.response ? e.response.status : e;
    if (storiesResponseErrorCode === NOT_FOUND) {
      storyError = 'Does not exist';
    } else if (storiesResponseErrorCode === UNAUTHORIZED) {
      storyError = 'Forbidden';
    } else {
      storyError = 'Something went wrong';
    }
  }
  if (storiesResponseErrorCode) {
    dispatch({ type: storyActionTypes.GET_STORIES_FAILURE, payload: { getStoriesError: storyError } });
  } else {
    dispatch({ type: storyActionTypes.GET_STORIES_SUCCESS, payload: data })
  }
}

export const getStoryById = ( storyId) => async (dispatch, getState) => {
  let response, data, storyResponseErrorCode, storyError;
  try {
    response = await storyService.getStoryById( storyId);
    data = response.data;
  } catch (e) {
    storyResponseErrorCode = e.response ? e.response.status : e;
    if (storyResponseErrorCode === NOT_FOUND) {
      storyError = 'Does not exist';
    } else if (storyResponseErrorCode === UNAUTHORIZED) {
      storyError = 'Forbidden';
    } else {
      storyError = 'Something went wrong';
    }
  }
  if (storyResponseErrorCode) {
    dispatch({ type: storyActionTypes.GET_STORY_BY_ID_FAILURE, payload: { storyResponseError: storyError } });
  } else {
    dispatch({ type: storyActionTypes.GET_STORY_BY_ID_SUCCESS, payload: data })
  }
}