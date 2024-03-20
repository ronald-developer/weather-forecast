import { CloudsModel } from "../models/clouds-model";
import { CoordModel } from "../models/coord-model";
import { MainModel } from "../models/main-model";
import { SysModel } from "../models/sys-model";
import { WeatherModel } from "../models/weather-model";
import { WindModel } from "../models/wind-model";

export interface WeatherForecastResponse {
	coord: CoordModel;
	weather: WeatherModel[];
	base: string;
	main: MainModel;
	visibility: number;
	wind: WindModel;
	clouds: CloudsModel;
	dt: number;
	sys: SysModel;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}
