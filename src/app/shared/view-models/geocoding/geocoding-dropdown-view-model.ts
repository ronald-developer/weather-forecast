export type GeocodingDropdownViewModel<T> = {
	id:number;
	name: string;
	country: string;
	state?: string;
	data: T
}
