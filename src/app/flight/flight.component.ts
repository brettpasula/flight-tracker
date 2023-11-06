import { Component, Input } from '@angular/core';
import IFlight from 'src/data/IFlight';

@Component({
  selector: 'flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
})
export class FlightComponent {
  @Input() flight!: IFlight;
}
