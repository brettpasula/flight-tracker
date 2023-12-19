import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IFlight from 'src/data/IFlight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private _baseUrl = 'http://localhost:3000/';
  private _httpClient: HttpClient;

  constructor() {
    this._httpClient = inject(HttpClient);
  }

  getAllFlights() {
    return this._httpClient.get<IFlight[]>(
      this._baseUrl + 'flights'
    );
  }

  addFlight(flight: IFlight): Observable<IFlight> {
    return this._httpClient.post<IFlight>(
      this._baseUrl + 'flights',
      flight
    );
  }
}
