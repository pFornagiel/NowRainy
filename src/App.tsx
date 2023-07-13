import BlobBakcground from './components/BlobBackground/BlobBackground'
import { WeatherContextProvider } from './utils/hooks/weatherContext'
import { CityContextProvider } from './utils/hooks/cityContext'
import { TransitionContextProvider } from './utils/hooks/transitionContext'
import { FirstRenderContextProvider } from './utils/hooks/firstRenderContext'
import SearchAndIcon from './components/Search and Icon/SearchAndIcon';
import Temperature from './components/Temperature/Temperature';
import HourlyWeather from './components/Hourly Weather/HourlyWeather'

function App() {

  return (

    <FirstRenderContextProvider>
    <WeatherContextProvider>
    <TransitionContextProvider>
    <CityContextProvider>
      <BlobBakcground >   
        <SearchAndIcon/>
        <Temperature/>
        <HourlyWeather/>
      </BlobBakcground>
    </CityContextProvider>
    </TransitionContextProvider>
    </WeatherContextProvider>
    </FirstRenderContextProvider>
  )
}

export default App
