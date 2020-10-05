import { createAction, props } from '@ngrx/store';

export const Login = createAction(
  '[Auth Page] Login',
  props<{ username: string; password: string }>()
);
export const LoginSuccess = createAction(
  '[Auth API] Login Success',
  props<{ token: string }>()
);
export const LoginFail = createAction(
  '[Auth API] Login Fail',
  props<{ error: string }>()
);
