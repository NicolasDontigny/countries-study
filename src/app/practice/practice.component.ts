import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../models/country.model';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.less']
})
export class PracticeComponent implements OnInit {
  practiceCountries: Country[];
  countriesService: CountriesService;

  constructor(countriesService: CountriesService) {
    this.countriesService = countriesService;
    this.practiceCountries = [];
    console.log('practice');
  }

  ngOnInit() {
    this.countriesService.addToPracticeObservable.subscribe(
      (country: any) => {
        console.log(this.practiceCountries);
        this.practiceCountries.push(country);
      }
    );
  }

}
