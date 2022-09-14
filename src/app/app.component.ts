import { WeatherData } from './models/weather.models';
import { Component,OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private weatherService:WeatherService){}

  weatherdata?:WeatherData;
  cityName:string="ankara";

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName="";
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName="";

  }
  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next:(response)=>{
        this.weatherdata=response;
        console.log(response);

      }
    });
  }

}
