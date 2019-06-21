import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/countries.service';
import { Country } from 'src/app/models/country.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.less']
})
export class CountriesComponent implements OnInit {
  countriesService: CountriesService;
  countries = [];
  activatedRoute: ActivatedRoute;
  chosenRegion = 'all';

  constructor(countriesService: CountriesService, activatedRoute: ActivatedRoute) {
    this.countriesService = countriesService;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit() {
    this.countriesService.countriesChanged.subscribe(
      () => {
        this.countries = this.countriesService.getCountries(this.chosenRegion);
      }
    );

    this.activatedRoute.params.subscribe(
      (params) => {
        this.countries = this.countriesService.getCountries(params.region);
        this.chosenRegion = params.region;
      }
    );
  }

}
