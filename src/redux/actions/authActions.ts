import { Action } from 'redux';


export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface LoginAction extends Action<typeof LOGIN> {}
export interface LogoutAction extends Action<typeof LOGOUT> {}

export type AuthActionTypes = LoginAction | LogoutAction;

export const login = (): AuthActionTypes => {
  return {
    type: LOGIN,
  };
};

export const logout = (): AuthActionTypes => {
  return {
    type: LOGOUT,
  };
};
