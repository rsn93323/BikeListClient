import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public testbreaks: BikeListing[] = [];

  constructor(http: HttpClient) {
    http.get<BikeListing[]>(environment.baseUrl + 'BikeList/GetBikeList').subscribe(result => {
      this.testbreaks = result;
    }, error => console.error(error));
  }
}

interface BikeListing {
  date: string;
  lowEndPrice: number;
  highEndPrice: number;
  bikes: string;
}
