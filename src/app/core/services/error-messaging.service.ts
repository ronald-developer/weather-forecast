import { Injectable } from "@angular/core";
import { pluck, Subject, throwError } from "rxjs";
import { CoreModule } from "../core.module";
import { HttpErrorResponse } from "@angular/common/http";

/**
 * Severity of the error, also used to calculate the bootstrap class to use
 */
export type Severity = 'warning' | 'critical';

/**
 * global -> main layout
 * component -> within the container/component block
 */
export type ShowErrorLocationLevel = 'global' | 'component'

/**
 * @message Actual error message, could be an error or list of errors
 * @httpErrorResponse The error response returned from the http call
 * @title General error message
 * @showErrorLocationLevel Location of the error message to be shown (global => within the layout content, component => within the component)
 */
export type ErrorMessage = {
	message: string[] | string,
	httpErrorResponse: unknown,
	severity: Severity,
	showErrorLocationLevel: ShowErrorLocationLevel
	title?: string
}


@Injectable({
	providedIn: 'root'
})
export class ErrorMessagingService {
	private errorMessage = new Subject<ErrorMessage | null>();
	public messages$ = this.errorMessage.asObservable();
	public setMessage(errorMessage: ErrorMessage) {
		if (!errorMessage.message) {
			const response: HttpErrorResponse = errorMessage.httpErrorResponse as HttpErrorResponse;
			errorMessage.message = response.error['message'];
		}
		this.errorMessage.next(errorMessage);
		return throwError(() => errorMessage.httpErrorResponse);
	}

	public clearMessage() {
		this.errorMessage.next(null);
	}
}
