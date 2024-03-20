import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, finalize, of, switchMap, tap } from 'rxjs';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { OpenWeatherMapApiService } from 'src/app/services-api/open-weather-map-api/open-weather-map-api.service';
import { DirectGeolocationResponse } from 'src/app/services-api/open-weather-map-api/responses/direct-geolocation-response';
import { GeocodingDropdownViewModel } from 'src/app/shared/view-models/geocoding/geocoding-dropdown-view-model';

@Component({
	selector: 'app-weather-forecast',
	templateUrl: './weather-forecast.component.html',
	styleUrl: './weather-forecast.component.scss'
})
export class WeatherForecastComponent extends BaseComponent {
	public useMetricUnit = true;
	public form = new FormGroup({
		id: new FormControl(0),
		locationName: new FormControl(''),
	});

	public locationWeatherForecast$ =
		this.form.get('id')?.valueChanges.pipe(
			tap(() => this.loading(true)),
			switchMap(id => this.getWeatherByLocationCoord(id)));

	constructor(
		private openWeatherMapApiService: OpenWeatherMapApiService) {
		super();
	}

	public geocodingDropdownViewModel: GeocodingDropdownViewModel<DirectGeolocationResponse>[] = [];

	public search() {
		this.loading(true);
		const locationName = this.form.get('locationName')?.value ?? '';
		this.openWeatherMapApiService.getDirectGeocodingByLocationName(locationName).pipe(
			catchError(() => this.geocodingDropdownViewModel = []),
			finalize(() => this.form.get('id')?.setValue(0)))
			.subscribe((response: DirectGeolocationResponse[]) => this.geocodingDropdownViewModel = this.mapDirectGeocodingResponseToDropdownGeocoding(response));
	}

	private mapDirectGeocodingResponseToDropdownGeocoding(response: DirectGeolocationResponse[]): GeocodingDropdownViewModel<DirectGeolocationResponse>[] {
		return response.map((data, index) => {
			const model: GeocodingDropdownViewModel<DirectGeolocationResponse> = {
				id: index + 1,
				name: data.name,
				country: data.country,
				state: data.state,
				data: data
			};
			return model;
		});
	}

	private getWeatherByLocationCoord(id: number | null) {
		const geoLocation = this.geocodingDropdownViewModel.find(x => x.id == id);
		if (geoLocation) {
			return this.openWeatherMapApiService.getWeatherByCoordinates(geoLocation.data.lat, geoLocation.data.lon, this.useMetricUnit).pipe(finalize(() => this.loading(false)));
		}
		return of(null).pipe(tap(() => this.loading(false)));
	}

	public get temperatureUnit() {
		return this.useMetricUnit ? 'C' : 'F';
	}

	public resetFilters() {
		this.search();
	}
}
