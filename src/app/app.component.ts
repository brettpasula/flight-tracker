import { Component } from '@angular/core';
import IFlight from 'src/data/IFlight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-tracker';
  public flights: IFlight[];

  constructor() { 
    this.flights = [{
      flightNumberPrefix: 'WS',
      flightNumber: 3228,
      fromIATAAirportCode: 'YCD',
      toIATAAirportCode: 'YYC',
      departureDate: new Date(2023, 10, 4),
      aircraftRegistration: 'C-GPWE'
    }, {
      flightNumberPrefix: 'WS',
      flightNumber: 18,
      fromIATAAirportCode: 'YYC',
      toIATAAirportCode: 'LHR',
      departureDate: new Date(2023, 10, 6),
      aircraftRegistration: 'C-GUDO'
    }]
  }
}
