import { Inject, Injectable } from '@angular/core';
import { ApiTokenConfig } from '../injection-tokens/api-token-config';
import { OPEN_WEATHER_MAP_URL_CONFIG } from '../injection-tokens/injection-token-configurations';

@Injectable({
	providedIn: 'root'
})
export class ApiUrlService {

	constructor(@Inject(OPEN_WEATHER_MAP_URL_CONFIG) private apiConfig: ApiTokenConfig) { }
	public getOpenWeatherMapUrl(endpoint: string) {
		return this.apiConfig.composeUrl(endpoint)
	}
}
