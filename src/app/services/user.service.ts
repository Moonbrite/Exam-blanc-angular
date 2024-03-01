import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {environement} from "../environement/environement";
import {AuthRequest} from "../models/auth-request";
import {AuthResponse} from "../models/auth-response";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient:HttpClient,
    private router:Router,
  ) {

  }

  apiAuth:string =environement.apiUrl+"auth"

  login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(this.apiAuth, authRequest).pipe(
      retry(1),
      catchError(this.handleLoginError)
    );
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(["/login"])
  }

  private handleLoginError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new ErrorEvent(error.error["message"]));
  }

}
