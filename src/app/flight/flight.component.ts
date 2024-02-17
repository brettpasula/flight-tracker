import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import IFlight from 'src/data/IFlight';
import { FlightService } from 'src/services/flight-service.service';

@Component({
  selector: 'flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
})
export class FlightComponent implements OnInit {
  @Input() flight!: IFlight;
  @Output() flightDeletedEvent = new EventEmitter<string>();
  jetPhotosLink!: string;
  flightRadarTwentyFourLinkForFlight!: string;
  flightRadarTwentyFourLinkForAircraft!: string;
  private _flightRadarTwentyFourBaseLink: string =
    'https://www.flightradar24.com/data/';
  private _flightService;

  constructor() {
    this._flightService = inject(FlightService);
  }

  ngOnInit() {
    this.jetPhotosLink =
      'https://www.jetphotos.com/registration/' +
      this.flight.aircraftRegistration;
    this.flightRadarTwentyFourLinkForFlight =
      this._flightRadarTwentyFourBaseLink +
      'flights/' +
      this.flight.flightNumberPrefix +
      this.flight.flightNumber;
    this.flightRadarTwentyFourLinkForAircraft =
      this._flightRadarTwentyFourBaseLink +
      'aircraft/' +
      this.flight.aircraftRegistration;
  }

  onClickDelete() {
    this._flightService
      .deleteFlight(this.flight.id)
      .subscribe((x) => console.log(x));
    this.flightDeletedEvent.emit(this.flight.id);
  }
}
