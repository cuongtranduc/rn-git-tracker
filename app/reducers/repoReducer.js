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

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOSITORIES:
      const { username, page } = action.payload
      return {
        ...state,
        username,
        page,
        loadMore: false,
        repositories: page === DEFAULT_PAGE ? [] : state.repositories,
        loading: page === DEFAULT_PAGE,
        loadingMore: page !== DEFAULT_PAGE,
      };
    case GET_REPOSITORIES_SUCCESS:
      const { items, total_count } = action.payload;
      const repositories = items.map(repo => ({
        id: repo.id,
        name: repo.name,
        stagazersCount: repo.stargazers_count,
        stargazersUrl: repo.stargazers_url,
        language: repo.language,
      }))
      return {
        ...state,
        repositories: state.repositories.concat(repositories),
        totalRepo: total_count,
        loading: false,
        loadingMore: false,
        error: false,
        loadMore: state.page * REPO_PER_REQUEST < total_count
      }
    case GET_REPOSITORIES_FAIL:
      const { message } = action.payload;
      return {
        ...state,
        loading: false,
        loadingMore: false,
        error: true,
        errorMessage: message,
        loadMore: false
      };
    default:
      return state;
  }
}

export default repoReducer;
