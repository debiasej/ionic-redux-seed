import { ActionReducerMap } from '@ngrx/store'

import * as fromApp from './app.reducer'

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducersMap: ActionReducerMap<any> = {
  app: fromApp.reducer
}
