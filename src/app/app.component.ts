import { Component, inject } from '@angular/core';
import IFlight from 'src/data/IFlight';
import { FlightService } from 'src/services/flight-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-tracker';
  public flights?: IFlight[];
  private _flightService: FlightService;

  constructor() { 
    this._flightService = inject(FlightService);
  }

  ngOnInit() { 
    this._flightService.getAllFlights().subscribe((flights) => { 
      this.flights = flights;
    })
  }
}
