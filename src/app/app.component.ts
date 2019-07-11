import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 
  weather;
  constructor(private weatherService: WeatherService, protected sanitizer: DomSanitizer) {
}

  ngOnInit(){
  }

  getWeather(ville: string) {
    this.weatherService.getWeather(ville)
    .subscribe(
      res => {
        console.log(res);
        this.weather = res
      },
      err => console.log(err)
    )
  }

  submitLocation(ville: HTMLInputElement) {
    
    if(ville.value) {
    this.getWeather(ville.value)
    // je vide le champ de l'input
    ville.value = '';
  } else {
    alert('Enter une ville!');
  }
    // met le cursor sur l'input
    ville.focus();
    return false;
  }
}
