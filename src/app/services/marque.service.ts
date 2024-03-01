import { Injectable } from '@angular/core';
import {catchError, Observable, retry, throwError} from "rxjs";
import {Voiture} from "../models/voiture";
import {Marque} from "../models/marque";
import {HttpClient} from "@angular/common/http";
import {environement} from "../environement/environement";

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  constructor(
    private httpClient:HttpClient
  ) {

  }

  apiUrl: string = environement.apiUrl + "marques"

  getAll():Observable<Marque[]>{
    return this.httpClient.get<Marque[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: any){
    let errorMessage = "";
    if(error.error instanceof ErrorEvent){
      errorMessage =error.error.message;
    }else {
      errorMessage = `Error Code ${error.status}\nMessage : ${error.message}`
    }
    window.alert(errorMessage)
    return throwError(errorMessage)
  }
}
