import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';



@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  private baseUrl:any;

  public save(vendor: Vendor) {
    return this.http.post<Vendor>(this.baseUrl, vendor);
  }

  constructor(private http:HttpClient) {
    this.baseUrl = 'http://localhost:8080/api/vendor';
   }

  public getAll(): Observable<Vendor[]>{
    return this.http.get<Vendor[]>(this.baseUrl);
  }
}
