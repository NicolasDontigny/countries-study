import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { Subject } from 'rxjs';
import { CountriesService } from 'src/app/countries.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.less']
})
export class CountryCardComponent implements OnInit {
  @Input()
  country: Country;
  showCapital = false;
  capitalGuess = '';
  answerCorrect = false;
  clickedCheck = false;
  addToPracticeObservable = new Subject<Country>();
  countriesService: CountriesService;

  constructor(countriesService: CountriesService) {
    this.countriesService = countriesService;
  }

  ngOnInit() {
  }

  showCapitalOn() {
    this.showCapital = true;
  }

  hideCapital() {
    this.showCapital = false;
  }

  checkAnswer() {
    if (this.capitalGuess.toLowerCase() === this.country.capital.toLowerCase()) {
      this.answerCorrect = true;
    } else {
      this.answerCorrect = false;
    }
    this.clickedCheck = true;
  }

  addToPractice() {
    this.countriesService.addToPractice(this.country);
  }

}
