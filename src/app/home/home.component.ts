import { Component, inject } from '@angular/core';
import IFlight from 'src/data/IFlight';
import { FlightService } from 'src/services/flight-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
