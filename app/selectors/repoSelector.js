import { createSelector } from "reselect";

const repoState = state => state.repo;

const selectRepositories = createSelector(
  repoState,
  repo => repo.repositories
);

const selectLoading = createSelector(
  repoState,
  repo => repo.loading
);

const selectLoadingMore = createSelector(
  repoState,
  repo => repo.loadingMore
);

const selectUsername = createSelector(
  repoState,
  repo => repo.username
);

const selectCurrentPage = createSelector(
  repoState,
  repo => repo.page
);

const selectTotalRepo = createSelector(
  repoState,
  repo => repo.totalRepo
);

const selectLoadMore = createSelector(
  repoState,
  repo => repo.loadMore
);

export {
  selectRepositories,
  selectLoading,
  selectLoadingMore,
  selectUsername,
  selectCurrentPage,
  selectTotalRepo,
  selectLoadMore
}
