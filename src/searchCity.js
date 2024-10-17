import { fetchWeatherData } from "./fetchData"

export const searchCity = () => {
    const searchForm = document.querySelector("#city")
 
 
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const input = document.querySelector("#city-name")
        const cityName = input.value

        fetchWeatherData(cityName).then(data => {
            console.log(data)
        }).catch(error => {
            console.log(error)
        })

    })
 }