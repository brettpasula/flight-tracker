import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {
  public form: FormGroup = new FormGroup({
    flightNumberPrefix: new FormControl('', Validators.maxLength(2)),
    flightNumber: new FormControl('', Validators.maxLength(4)),
    from: new FormControl('', Validators.maxLength(3)),
    to: new FormControl('', Validators.maxLength(3)),
    departureDate: new FormControl(''),
    aircraftRegistration: new FormControl('')
  });
}
