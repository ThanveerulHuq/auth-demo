import { Directive, HostListener, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AuthActions from '../+state/auth.actions';
import { User } from '../models/user';

@Directive({
  selector: '[loginForm]',
})
export class LoginFormDirective {
  constructor(private view: ViewContainerRef, private _store: Store) {}

  @HostListener('submit', ['$event'])
  onSubmit(event: Event) {
    event.preventDefault();
    const formElem = this.view.element.nativeElement;
    const usernameField = formElem.querySelector('input[name="username"]');
    const passwordField = formElem.querySelector('input[name="password"]');
    if (!usernameField) throw new Error('username field not Exist');
    if (!passwordField) throw new Error('password field not Exist');
    console.log('form submitter');
    const user: User = {
      username: usernameField.value,
      password: passwordField.value,
    };
    this._store.dispatch(AuthActions.Login(user));
  }
}
