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
      departureTime: new Date(2023, 10, 4, 13, 50),
      arrivalTime: new Date(2023, 10, 4, 15, 30),
      aircraftRegistration: 'C-GPWE'
    }, {
      flightNumberPrefix: 'WS',
      flightNumber: 18,
      fromIATAAirportCode: 'YYC',
      toIATAAirportCode: 'LHR',
      departureTime: new Date(2023, 10, 6, 21, 5),
      arrivalTime: new Date(2023, 10, 7, 13, 50),
      aircraftRegistration: 'C-GUDO'
    }]
  }
}
