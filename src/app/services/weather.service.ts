import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// cleapi: "e15bb8a9e3608aecd3b743a8c14e9804"

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'e15bb8a9e3608aecd3b743a8c14e9804';
  URI: string = '';

  constructor(private http: HttpClient) { 
    
    this.URI = `http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&lang=fr&q=`;
  }

  getWeather(ville: string) {
    return this.http.get(`${this.URI}${ville}`);
  }

}
