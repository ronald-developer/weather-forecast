import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { ErrorMessagingService } from 'src/app/core/services/error-messaging.service';
import { errorHandler } from 'src/app/utils/api-service-catcherror-helper.utils';
import { DirectGeolocationResponse } from './responses/direct-geolocation-response';
import { WeatherForecastResponse } from './responses/weather-forecast-response';

@Injectable({
	providedIn: 'root'
})
export class OpenWeatherMapApiService {
	private readonly url = 'https://api.openweathermap.org';
	private readonly appId = '8f0106c86691b98ec448f3503b3c56a5';
	constructor(private http: HttpClient, private errorMessagingService: ErrorMessagingService) { }

	public getDirectGeocodingByLocationName(locationName?: string) {
		const url = `${this.url}/geo/1.0/direct?limit=10&appid=${this.appId}&q=${locationName}`
		return this.http.get<DirectGeolocationResponse[]>(url).pipe(
			take(1),
			errorHandler(this.errorMessagingService, 'component'),
			tap(() => this.errorMessagingService.clearMessage()));
	}

	public getWeatherByCoordinates(lat: number, lon: number, useMetricUnit: boolean) {
		const unit  = useMetricUnit ? 'metric' : 'imperial'
		const url = `${this.url}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.appId}&units=${unit}`
		return this.http.get<WeatherForecastResponse>(url).pipe(
			take(1),
			errorHandler(this.errorMessagingService, 'component'),
			tap(() => this.errorMessagingService.clearMessage()));
	}
}
