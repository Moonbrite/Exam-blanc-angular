import { Injectable } from '@angular/core';
import {environement} from "../environement/environement";
import {HttpClient} from "@angular/common/http";
import {Voiture} from "../models/voiture";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VoitureService {


  constructor(
    private httpClient:HttpClient
  ) {

  }

  apiUrl: string = environement.apiUrl + "voitures"

  getAll():Observable<Voiture[]>{
    return this.httpClient.get<Voiture[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getOne(id: number):Observable<Voiture>{
    return this.httpClient.get<Voiture>(this.apiUrl + "/" + id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
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

  delete(id: number):Observable<Voiture>{
    return this.httpClient.delete(this.apiUrl + "/"+ id).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  edit(voiture?: Voiture, id?: number ):Observable<Voiture>{
    return this.httpClient.put(this.apiUrl + "/" + id,voiture).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  add(voiture:Voiture):Observable<Voiture>{
    return  this.httpClient.post<Voiture>(this.apiUrl,voiture).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

}
