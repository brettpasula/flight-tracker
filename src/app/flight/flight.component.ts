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

  ngOnInit() { 
    this.jetPhotosLink = "https://www.jetphotos.com/registration/" + this.flight.aircraftRegistration;
  }
}
