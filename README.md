# weather-forecast

Angular app for weather forecast that utilizes the api's provided in https://openweathermap.org/

Run `npm install`
then
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

The app have two routes: home and weather-forecast.
1. Home route - nothing in here
2. Weather forecast route - in this page you can search a location by city name.
	1. Input any city name, click search
		1.1 It will give you a second filter for state (state dropdown), select any then it will show the weather forecast for that city and state
	2. There is an option to change the temperature unit of measure(metric or imperial). Toggling that will reset the selected state, therefore you need to select a state again.
	3. Error handling is in place: try search by nothing (empty string. It will result to bad request) 
3. Sidebar navigation - displays the weather forecast for your current location, you should allow app to accept track your current location(there will be a popup for that).
4. Responsiveness - Resize the browser
5. I noticed that there is a bug on chrome that: when you click the input text and focus out or click anywhere, it will keep on focusing. If you encounter this, you can run chrome in incognito or try it on another browser.
