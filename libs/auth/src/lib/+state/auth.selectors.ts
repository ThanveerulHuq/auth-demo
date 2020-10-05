import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AUTH_FEATURE_KEY,
  State,
  AuthPartialState,
  authAdapter,
} from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const getAuthState = createFeatureSelector<AuthPartialState, State>(
  AUTH_FEATURE_KEY
);

const { selectAll, selectEntities } = authAdapter.getSelectors();

export const getAuthLoading = createSelector(
  getAuthState,
  (state: State) => state.loading
);

export const getAuthError = createSelector(
  getAuthState,
  (state: State) => state.error
);

export const getAllAuth = createSelector(getAuthState, (state: State) =>
  selectAll(state)
);

export const getAuthEntities = createSelector(getAuthState, (state: State) =>
  selectEntities(state)
);

export const getToken = createSelector(
  getAuthState,
  (state: State) => state.token
);
