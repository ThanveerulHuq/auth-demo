import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as AuthActions from './auth.actions';
import { AuthEntity } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface State extends EntityState<AuthEntity> {
  token?: string; // which Auth record has been selected
  loading: boolean; // has the Auth list been loaded
  error?: string | null; // last known error (if any)
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const authAdapter: EntityAdapter<AuthEntity> = createEntityAdapter<
  AuthEntity
>();

export const initialState: State = authAdapter.getInitialState({
  // set initial required properties
  error: '',
  token: null,
  loading: true,
});

const authReducer = createReducer(
  initialState,
  on(AuthActions.Login, (state) => ({ ...state, loading: true })),
  on(AuthActions.LoginSuccess, (state, { token }) => ({
    ...state,
    token,
    loading: true,
  })),
  on(AuthActions.LoginFail, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
