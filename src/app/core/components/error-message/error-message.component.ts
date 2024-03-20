import { Component, Input } from '@angular/core';
import { ErrorMessagingService, ShowErrorLocationLevel } from '../../services/error-messaging.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-error-message',
	templateUrl: './error-message.component.html',
	styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {
	@Input() location!: ShowErrorLocationLevel
	constructor(private errorMessagingService: ErrorMessagingService, private router: Router) {
		this.onRouteChanged();
	}
	public errorMessage$ = this.errorMessagingService.messages$;
	public isMessages(message: string[] | string) {
		return Array.isArray(message);
	}
	public close() {
		this.errorMessagingService.clearMessage();
	}

	private onRouteChanged() {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.close();
			}
		});
	}
}
