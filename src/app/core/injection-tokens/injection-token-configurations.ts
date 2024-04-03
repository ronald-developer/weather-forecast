import { InjectionToken } from "@angular/core";
import { ApiTokenConfig } from "./api-token-config";

export const OPEN_WEATHER_MAP_URL_CONFIG = new InjectionToken<ApiTokenConfig>('OPEN_WEATHER_MAP_URL_CONFIG');
