import { createFeatureSelector, createSelector } from '@ngrx/store'

import * as appActions from './app.actions'

export interface State {
  theme: string
  lang: string
}

const initialState: State = {
  theme: 'default-theme',
  lang: 'es'
}

export function reducer(
  state = initialState,
  action: appActions.Actions
): State {
  switch (action.type) {
    case appActions.ActionTypes.UPDATE_THEME_SUCCESS:
      return Object.assign({}, state, { theme: action.payload.theme })

    default:
      return state
  }
}

/**
 * App selector
 */
export const getAppState = createFeatureSelector<State>('app')

export const getTheme = createSelector(getAppState, state => state.theme)

// EXPORT APP ACTIONS
export * from './app.actions'
