import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SigninForm} from "../../model/signin-form";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private URL_API = environment.URL_API;

  constructor(private http: HttpClient) { }

  public login(signinForm: SigninForm): Observable<any>{
    return this.http.post(`${this.URL_API}/signin`, signinForm);
  }
}
