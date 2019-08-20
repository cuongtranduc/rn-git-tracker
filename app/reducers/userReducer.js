import produce from "immer";

import {
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
} from '../constants';

const initialState = {
  loading: false,
  stargazers: []
};

const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USERS:
        draft.loading = true;
        draft.stargazers = [];
        break;
      case GET_USERS_SUCCESS:
        draft.loading = false;
        draft.stargazers = action.payload.stargazers;
        break;
      case GET_USERS_FAIL:
        draft.loading = false;
        draft.stargazers = [];
        break;
    }
  });


export default userReducer;
