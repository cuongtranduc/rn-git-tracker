import producer from "immer";

import {
  GET_REPOSITORIES,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_FAIL,
  DEFAULT_PAGE,
  REPO_PER_REQUEST
} from '../constants';

const initialState = {
  username: '',
  repositories: [],
  loading: false,
  loadingMore: false,
  error: false,
  errorMessage: '',
  totalRepo: false,
  loadMore: false,
  page: DEFAULT_PAGE,
};

const repoReducer = (state = initialState, action) =>
  producer(state, draft => {
    switch (action.type) {
      case GET_REPOSITORIES:
        const { username, page } = action.payload

        draft.username = username;
        draft.page = page;
        draft.loadMore = false;
        draft.repositories = page === DEFAULT_PAGE ? [] : state.repositories;
        draft.loading = page === DEFAULT_PAGE;
        draft.loadingMore = page !== DEFAULT_PAGE;

        break;
      case GET_REPOSITORIES_SUCCESS:
        const { items, total_count } = action.payload;
        const repositories = items.map(repo => ({
          id: repo.id,
          name: repo.name,
          stagazersCount: repo.stargazers_count,
          stargazersUrl: repo.stargazers_url,
          language: repo.language,
        }))

        draft.repositories = state.repositories.concat(repositories);
        draft.totalRepo = total_count;
        draft.loading = false;
        draft.loadingMore = false;
        draft.error = false;
        draft.loadMore = state.page * REPO_PER_REQUEST < total_count;

        break;
      case GET_REPOSITORIES_FAIL:
        const { message } = action.payload;

        draft.loading = false;
        draft.loadingMore = false;
        draft.error = true;
        draft.errorMessage = message;
        draft.loadMore = false;

        break;
    }
  });


export default repoReducer;
