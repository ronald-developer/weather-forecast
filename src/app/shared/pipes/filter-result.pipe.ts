import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterResult',
	standalone: true
})
export class FilterResultPipe<T> implements PipeTransform {

	transform(value: T[], filterBy: keyof T, filterValue: any): T[] {
		return value.filter(x => x[filterBy] === filterValue);
	}

}
