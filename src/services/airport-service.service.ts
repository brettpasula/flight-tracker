import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import IAirport from 'src/data/IAirport';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private _baseUrl = 'http://localhost:3000/';
  private _httpClient: HttpClient;

  constructor() {
    this._httpClient = inject(HttpClient);
   }

   getAirportByIATACode(IATAAirportCode: string) { 
    return this._httpClient.get<IAirport[]>(this._baseUrl + 'airports?IATAAirportCode=' + IATAAirportCode);
   }
}
