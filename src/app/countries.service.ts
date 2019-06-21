import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/subject';
import 'rxjs/add/operator/map';
import { Country } from './models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  http: Http;
  countries = [];
  countriesChanged = new Subject<void>();
  addToPracticeObservable = new Subject<void>();
  practiceCountries = [];

  constructor(http: Http) {
    this.http = http;
  }

  fetchCountries() {
    this.http.get('https://restcountries.eu/rest/v2/all')
      .map(
        (response: any) => {
          const countries = response.json()
          const finalCountries = countries.map((country: Country) => {
            if (!country.capital) {
              country.capital = 'No Capital';
            }
            return { name: country.name, capital: country.capital, region: country.region, flag: country.flag }
          });

          return finalCountries;
        }
      )
      .subscribe(
        (data) => {
          this.countries = data;
          this.countriesChanged.next();

          const regions = [];
          data.forEach((country: Country) => {
            if (regions.findIndex((region) => region === country.region) === -1) {
              regions.push(country.region);
            }
          });
        }
      );
  }

  getCountries(region: string) {
    const capitalizedRegion = this.capitalize(region);
    if (capitalizedRegion === 'All') {
      return this.countries;
    } else if (capitalizedRegion === 'None') {
      return this.countries.filter(
        (country: Country) => country.region === ''
      )
    } else {
      return this.countries.filter(
        (country: Country) => country.region === capitalizedRegion
      );
    }
  }

  addToPractice(country) {
    this.practiceCountries.push(country);
    this.addToPracticeObservable.next();
  }

  private capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
}
