import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './tabs/countries/countries.component';
import { CountryCardComponent } from './tabs/countries/country-card/country-card.component';
import { TabsComponent } from './tabs/tabs.component';
import { PracticeComponent } from './practice/practice.component';

const appRoutes = [
  { path: 'countries', component: TabsComponent, children: [
    { path: ':region', component: CountriesComponent },
    { path: '', redirectTo: 'all', pathMatch: 'full' },
  ]},
  { path: 'practice', component: PracticeComponent },
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryCardComponent,
    TabsComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
