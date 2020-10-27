import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LoginModelModel} from "./login-model.model";

@Injectable({
  providedIn: 'root'
})
export class AuthentecateService {

  urlBase = 'http://127.0.0.1:8000/api/login';
  constructor(private http: HttpClient) { }

  Login(data: LoginModelModel):Observable<any>{
    return this.http.post(this.urlBase,data);
  }

}
