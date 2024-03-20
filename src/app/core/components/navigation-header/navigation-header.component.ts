import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OpenWeatherMapApiService } from 'src/app/services-api/open-weather-map-api/open-weather-map-api.service';
import { WeatherForecastResponse } from 'src/app/services-api/open-weather-map-api/responses/weather-forecast-response';

@Component({
	selector: 'app-navigation-header',
	templateUrl: './navigation-header.component.html',
	styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit, AfterViewInit {
	public currentWeatherForecast$!: Observable<WeatherForecastResponse>;

	constructor(private router: Router,
		private openWeatherMapApiService: OpenWeatherMapApiService) { }

	ngAfterViewInit(): void {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position: GeolocationPosition)=>{
				this.currentWeatherForecast$ = this.openWeatherMapApiService.getWeatherByCoordinates(position.coords.latitude, position.coords.longitude, true);
			});
		} else {
			console.log("Geolocation is not supported by this browser.");
		}
	}

	ngOnInit(): void {
	}

	nav(path: string) {
		this.router.navigate(["/" + path]);
	}
}
