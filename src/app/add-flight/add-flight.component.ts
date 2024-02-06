import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import IFlight from 'src/data/IFlight';
import { FlightService } from 'src/services/flight-service.service';

@Component({
  selector: 'add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css'],
})
export class AddFlightComponent {
  private _flightService: FlightService;
  private _router: Router;
  form: FormGroup;
  flightNumberPrefix: FormControl<string | null>;
  flightNumber: FormControl<Number | null>;
  fromAirport: FormControl<string | null>;
  toAirport: FormControl<string | null>;
  departureDate: FormControl<Date | null>;
  aircraftRegistration: FormControl<string | null>;

  constructor() {
    this._flightService = inject(FlightService);
    this._router = inject(Router);

    this.flightNumberPrefix = new FormControl('', [
      Validators.required,
      Validators.maxLength(2),
    ]);
    this.flightNumber = new FormControl(null, [
      Validators.required,
      Validators.maxLength(4),
    ]);
    this.fromAirport = new FormControl(null, [
      Validators.required,
      Validators.maxLength(3),
    ]);
    this.toAirport = new FormControl(null, [
      Validators.required,
      Validators.maxLength(3),
    ]);
    this.departureDate = new FormControl(null, [Validators.required]);
    this.aircraftRegistration = new FormControl(null, [Validators.required]);

    this.form = new FormGroup([
      this.flightNumberPrefix,
      this.flightNumber,
      this.fromAirport,
      this.toAirport,
      this.departureDate,
      this.aircraftRegistration,
    ]);
  }

  onSubmit() {
    let flight: IFlight = { 
      flightNumberPrefix: this.flightNumberPrefix.value as string,
      flightNumber: this.flightNumber.value as number,
      fromIATAAirportCode: this.fromAirport.value as string,
      toIATAAirportCode: this.toAirport.value as string,
      departureDate: this.departureDate.value as Date, 
      aircraftRegistration: this.aircraftRegistration.value as string,
    }
    this._flightService.addFlight(flight).subscribe({
      error: (error) => console.error(error),
      complete: () => this._router.navigate(['/']),
    });
  }
}
