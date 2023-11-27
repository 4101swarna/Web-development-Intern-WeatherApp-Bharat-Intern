async function showWeather(){
    setTimeout(() => {
        placename.value = ""
    }, 200);
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+placename.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);




    } catch (error) {
        console.error(error);
    }
    
}