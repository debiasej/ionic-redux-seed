import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store'
import { localStorageSync } from 'ngrx-store-localstorage'
import { environment } from '@environments/environment'
import { storage } from '../shared/global/global-ref.service'

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze'

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

import * as fromApp from './app.reducer'

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  app: fromApp.State
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer
}

export function storageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    // State keys to sync with localStorage
    keys: ['app'],
    // Pull initial state from localStorage on startup

    rehydrate: true,
    storage: storage(),
    // Keep this set to false (default) for now – I ran into strange behaviour when it was set to true
    // TODO: Once we have time we might want to investigate properly
    removeOnUndefined: false,
    storageKeySerializer: key => `${environment.version}_${key}`
  })(reducer)
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze, storageSyncReducer]
  : [storageSyncReducer]
