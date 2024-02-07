import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';
import IFlight from 'src/data/IFlight';

@Component({
  selector: 'flight-map',
  templateUrl: './flight-map.component.html',
  styleUrls: ['./flight-map.component.css'],
})
export class FlightMapComponent implements AfterViewInit {
  private map!: L.Map;
  @Input() flight!: IFlight;

  ngAfterViewInit(): void {
    this.map = L.map('map-' + this.flight.id, {
      center: [39, -98],
      zoom: 3,
    });

    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }).addTo(this.map);
  }
}
