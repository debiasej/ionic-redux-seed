import { Injectable } from '@angular/core'

/*
 * Why do we need this?
 * Glad you asked: https://medium.com/@laco0416/access-to-global-variables-in-angular-2-b2c395eac1d8
 *
 * tl;dr: Accessing `window` directly will break server-side rendering because node doesn't know about `window`
 * TODO: Refactor to make it SSR-friendly
 */

@Injectable()
export abstract class GlobalRefService {
  abstract nativeGlobal: any
}

@Injectable()
export class BrowserGlobalRefService extends GlobalRefService {
  nativeGlobal: any = window
}

export const storage = (): Storage => {
  return sessionStorage || window.sessionStorage
}
