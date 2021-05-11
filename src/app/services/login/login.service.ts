import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$;
  }

  public login(): void {
    this.isLoggedIn$.next(true);
  }

  public logout(): void {
    this.isLoggedIn$.next(false);
  }
}
