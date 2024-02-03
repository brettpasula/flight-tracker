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
  flightRadarTwentyFourLinkForFlight!: string;
  flightRadarTwentyFourLinkForAircraft!: string;
  private flightRadarTwentyFourBaseLink: string = "https://www.flightradar24.com/data/"

  ngOnInit() {
    this.jetPhotosLink = "https://www.jetphotos.com/registration/" + this.flight.aircraftRegistration;
    this.flightRadarTwentyFourLinkForFlight = this.flightRadarTwentyFourBaseLink + "flights/" + this.flight.flightNumberPrefix + this.flight.flightNumber;
    this.flightRadarTwentyFourLinkForAircraft = this.flightRadarTwentyFourBaseLink + "aircraft/" + this.flight.aircraftRegistration;
  }
}
