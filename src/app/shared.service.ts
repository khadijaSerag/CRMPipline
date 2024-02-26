import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _HttpClient:HttpClient) { }

  get(url: any): Observable<any> {
    return this._HttpClient.get<any>(url);
}
}
