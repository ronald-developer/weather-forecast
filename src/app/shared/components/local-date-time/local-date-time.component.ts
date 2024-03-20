import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-local-date-time',
	templateUrl: './local-date-time.component.html',
	styleUrl: './local-date-time.component.scss'
})
export class LocalDateTimeComponent implements OnInit {
	localDateTime: string = '';

	constructor() { }

	ngOnInit(): void {
		this.updateLocalDateTime();
		setInterval(() => this.updateLocalDateTime(), 1000);
	}

	updateLocalDateTime() {
		const now = new Date();
		const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
		this.localDateTime = now.toLocaleDateString(undefined, options);
	}
}
