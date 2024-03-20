import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingUiComponent } from './components/loading-ui/loading-ui.component';
import { MainBodyContentComponent } from './components/main-body-content/main-body-content.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';


@NgModule({
	declarations: [
		NavigationHeaderComponent,
		MainBodyContentComponent,
		ErrorMessageComponent,
		LoadingUiComponent

	],
	imports: [
		CommonModule,
		SharedModule,
	],
	exports: [
		NavigationHeaderComponent,
		MainBodyContentComponent
	]
})
export class CoreModule { }
