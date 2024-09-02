async function showWeather() {
    // Get the city name from input
    const cityName = placename.value;

    // Clear the input field
    placename.value = "";

    // Construct the API URL with the city name
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
    
    // Define the request options
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '26f1b4fc4bmsh68511c51af77464p12739bjsn9b9f9f28038a',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        // Fetch the weather data
        const response = await fetch(url, options);
        const result = await response.json();

        // Log the result to the console
        console.log(result);

        // Update the UI with the fetched data
        cityNameDisplay.innerHTML = cityName;
        temp.innerHTML = `Temperature: ${result.temp}°C`;
        hum.innerHTML = `Humidity: ${result.humidity}%`;
        feels.innerHTML = `Feels Like: ${result.feels_like}°C`;

    } catch (error) {
        // Handle any errors
        console.error(error);
    }
}
