import { getWeatherData } from './weather'

const renderWeather = () => {
    getWeatherData('Kampala')
}

export { renderWeather }