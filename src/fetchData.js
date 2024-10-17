
export async function fetchWeatherData(cityName){
    const apiKey = "XQUJ4S2ER8546CLR2EJYUXW8Y"

    const weatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName},UK?key=${apiKey}`)
    const parsedWeatherData = await weatherData.json()

    return parsedWeatherData
}