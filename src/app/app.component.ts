import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Study World Countries';
  countriesService: CountriesService;

  constructor(countriesService: CountriesService) {
    this.countriesService = countriesService;
  }

  ngOnInit() {
    this.countriesService.fetchCountries();
  }
}
