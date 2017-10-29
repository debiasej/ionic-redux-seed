import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { IonicPage, NavController, NavParams } from 'ionic-angular'

import * as appStore from '@app-redux/app.reducer'
import * as appActions from '@app-redux/app.actions'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  theme$: Observable<string>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: Store<appStore.State>
  ) {}

  ionViewDidLoad() {
    this.theme$ = this.store.select(appStore.getTheme)
  }

  // Send an action to change the app theme
  changeTheme(theme) {
    this.store.dispatch(
      new appActions.UpdateThemeSuccessAction({ theme: theme })
    )
  }
}
