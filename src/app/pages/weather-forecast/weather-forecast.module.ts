import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { WeatherForecastRoutingModule } from './weather-forecast-routing.module';
import { WeatherForecastComponent } from './weather-forecast.component';


@NgModule({
	declarations: [
		WeatherForecastComponent
	],
	imports: [
		CommonModule,
		WeatherForecastRoutingModule,
		SharedModule
	]
})
export class WeatherForecastModule { }
