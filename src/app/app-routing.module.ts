import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBodyContentComponent } from './core/components/main-body-content/main-body-content.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
	},
	{
		path: 'weather-forecast', loadChildren: () => import('./pages/weather-forecast/weather-forecast.module').then((m) => m.WeatherForecastModule)
	},
	{
		path: 'page-not-found',
		component: PageNotFoundComponent
	},
	{
		path: '**',
		redirectTo: 'page-not-found',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
