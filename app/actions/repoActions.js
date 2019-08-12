import axios from 'axios';

import {
  GET_REPOSITORIES,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_FAIL,
  BASE_URL,
  REPO_PER_REQUEST,
  DEFAULT_PAGE
} from '../constants';

function getRepositories(username = '', page = DEFAULT_PAGE) {
  return (dispatch) => {
    dispatch({
      type: GET_REPOSITORIES,
      payload: {
        username,
        page
      }
    });
    axios.get(`${BASE_URL}/search/repositories?q=user:${username}&page=${page}&per_page=${REPO_PER_REQUEST}`)
      .then((response) => {
        dispatch(getRepoSuccess(response));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(getRepoFail(error.response));
        }
      });
  };
}

function getRepoSuccess({ data }) {
  return {
    type: GET_REPOSITORIES_SUCCESS,
    payload: {
      total_count: data.total_count,
      items: data.items
    }
  }
}

function getRepoFail({ message }) {
  return {
    type: GET_REPOSITORIES_FAIL,
    payload: {
      message
    }
  }
}

export {
  getRepositories
}
