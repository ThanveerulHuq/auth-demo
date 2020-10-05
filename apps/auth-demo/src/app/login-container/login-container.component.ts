import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as Authselectors from '@auth-demo/auth';

@Component({
  selector: 'auth-demo-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit {
  constructor(private router: Router, private _store: Store) {}

  ngOnInit(): void {
    localStorage.clear();
    this._store.select(Authselectors.getToken).subscribe((el) => {
      this.router.navigate(['app', 'success']);
    });
  }
}
