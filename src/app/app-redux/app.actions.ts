import { Action } from '@ngrx/store'

export const ActionTypes = {
  UPDATE_THEME: '[App] UPDATE_THEME',
  UPDATE_THEME_SUCCESS: '[App] UPDATE_THEME_SUCCESS',
  UPDATE_THEME_ERROR: '[App] UPDATE_THEME_ERROR'
}

export class UpdateThemeAction implements Action {
  type = ActionTypes.UPDATE_THEME

  constructor(public payload: any) {}
}

export class UpdateThemeSuccessAction implements Action {
  type = ActionTypes.UPDATE_THEME_SUCCESS

  constructor(public payload: any) {}
}

export class UpdateThemeErrorAction implements Action {
  type = ActionTypes.UPDATE_THEME_ERROR

  constructor(public payload: any) {}
}

export type Actions =
  | UpdateThemeAction
  | UpdateThemeSuccessAction
  | UpdateThemeErrorAction
