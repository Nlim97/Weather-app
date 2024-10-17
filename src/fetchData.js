

export async function fetchWeatherData(cityName){
    const apiKey = process.env.WEATHER_API_KEY

    const weatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName},UK?key=${apiKey}`)
    const parsedWeatherData = await weatherData.json()

    return parsedWeatherData
}