import axios from 'axios';

import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from '../constants';

function getstargazers(stargazersUrl) {
  return (dispatch) => {
    dispatch({
      type: GET_USERS
    });
    axios.get(`${stargazersUrl}`)
      .then((response) => {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: {
            stargazers: response.data
          }
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_USERS_FAIL
        });
      });
  };
}


export {
  getstargazers
}
