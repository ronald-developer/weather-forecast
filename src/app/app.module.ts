import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { environment as env} from "src/environments/environment.development";
import { OPEN_WEATHER_MAP_URL_CONFIG } from './core/injection-tokens/injection-token-configurations';
export const openWeatherApiUrl = `${env.externalApiUrls.openWeatherApi.url}`;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
    CoreModule,
	PageNotFoundComponent
  ],
  providers: [
	{ provide: OPEN_WEATHER_MAP_URL_CONFIG, useValue: { composeUrl: (endpoint: string, token: string = openWeatherApiUrl) => `${token}/${endpoint}` } },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
