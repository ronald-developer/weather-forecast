import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalDateTimeComponent } from './components/local-date-time/local-date-time.component';
import { BaseComponent } from './components/base/base.component';
import { LoadingUiDirective } from '../core/directives/loading-ui.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		LocalDateTimeComponent,
		BaseComponent,
		LoadingUiDirective
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule
	],
	exports: [
		LocalDateTimeComponent,
		LoadingUiDirective,
		ReactiveFormsModule,
		FormsModule
	]
})
export class SharedModule { }
