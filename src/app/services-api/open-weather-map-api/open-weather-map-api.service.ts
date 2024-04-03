import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { ErrorMessagingService } from 'src/app/core/services/error-messaging.service';
import { errorHandler } from 'src/app/utils/api-service-catcherror-helper.utils';
import { DirectGeolocationResponse } from './responses/direct-geolocation-response';
import { WeatherForecastResponse } from './responses/weather-forecast-response';
import { ApiUrlService } from 'src/app/core/services/api-url.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
	providedIn: 'root'
})
export class OpenWeatherMapApiService {
	private readonly appId = environment.externalApiUrls.openWeatherApi.appId;

	constructor(
		private apiUrlService: ApiUrlService,
		private http: HttpClient,
		private errorMessagingService: ErrorMessagingService) { }


	private getOpenWeatherMapUrl(endpoint: string) {
		return this.apiUrlService.getOpenWeatherMapUrl(endpoint);
	}

	public getDirectGeocodingByLocationName(locationName?: string) {
		const endpoint = `geo/1.0/direct?limit=10&appid=${this.appId}&q=${locationName}`
		const url = this.getOpenWeatherMapUrl(endpoint);

		return this.http.get<DirectGeolocationResponse[]>(url).pipe(
			take(1),
			errorHandler(this.errorMessagingService, 'component'),
			tap(() => this.errorMessagingService.clearMessage()));
	}

	public getWeatherByCoordinates(lat: number, lon: number, useMetricUnit: boolean) {
		const unit = useMetricUnit ? 'metric' : 'imperial';
		const endpoint = `data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.appId}&units=${unit}`;
		const url = this.getOpenWeatherMapUrl(endpoint);

		return this.http.get<WeatherForecastResponse>(url).pipe(
			take(1),
			errorHandler(this.errorMessagingService, 'component'),
			tap(() => this.errorMessagingService.clearMessage()));
	}
}
