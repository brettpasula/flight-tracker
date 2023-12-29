import { Component, Input } from '@angular/core';
import IFlight from 'src/data/IFlight';

@Component({
  selector: 'flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
})
export class FlightComponent {
  @Input() flight!: IFlight;
  jetPhotosLink!: string;
  flightRadarTwentyFourLink!: string;

  ngOnInit() {
    this.jetPhotosLink = "https://www.jetphotos.com/registration/" + this.flight.aircraftRegistration;
    this.flightRadarTwentyFourLink = "https://www.flightradar24.com/data/flights/" + this.flight.flightNumberPrefix + this.flight.flightNumber;

    //var map = leaflet.map('map').setView([51.505, -0.09], 13);
  }
}
