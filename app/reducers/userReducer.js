import {
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
} from '../constants';

const initialState = {
  loading: false,
  stargazers: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        loading: true,
        stargazers: []
      }
    case GET_USERS_SUCCESS:
      return {
        loading: false,
        stargazers: action.payload.stargazers
      }
    case GET_USERS_FAIL:
      return {
        loading: false,
        stargazers: []
      }
    default:
      return state
  }
}

export default userReducer;
