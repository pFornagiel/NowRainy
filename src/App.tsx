import BlobBackground from './components/BlobBackground/BlobBackground'
import { WeatherContextProvider, TransitionContextProvider, FirstRenderContextProvider, CityContextProvider } from './utils/hooks/contextProviders';
import SearchAndIcon from './components/Search and Icon/SearchAndIcon';
import Temperature from './components/Temperature/Temperature';
import HourlyWeather from './components/Hourly Weather/HourlyWeather'
import Forecast from './components/Forecast/Forecast'
import RandomSentence from './components/RandomSentence/RandomSentence'

function App() {

  return (

    <FirstRenderContextProvider>
    <WeatherContextProvider>
    <TransitionContextProvider>
    <CityContextProvider>
      <BlobBackground >   
        <SearchAndIcon/>
        <Temperature/>
        <RandomSentence />
        <HourlyWeather/>
        <Forecast />
      </BlobBackground>
    </CityContextProvider>
    </TransitionContextProvider>
    </WeatherContextProvider>
    </FirstRenderContextProvider>
  )
}

export default App
