async function showWeather(){
    a = placename.value

    placename.value = ""



    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + a;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0765337edemsh6600b541d090c2bp1c49e1jsn34b69b0a04b5',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    


    



    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        cityName.innerHTML = a
        temp.innerHTML ="Tempurature: " + result.temp + " degree C"
        hum.innerHTML ="Humidity: " + result.humidity + " %"
        feels.innerHTML ="Feels Like: " + result.feels_like + " degree C"




    } catch (error) {
        console.error(error);
    }
    
}

