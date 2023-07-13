import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { useTransitionContext } from "./transitionContext";
import { useWeatherContext, fetchWeatherData } from "./weatherContext";
import axios from "axios";

interface cityInformationObject{
    name: string,
    country: string,
    lat: number,
    log: number
}

interface cityContextObject {
    city: cityInformationObject | null,
    setCityContextObject: (cityInformation: cityInformationObject) => void
}

interface Props {
    children: React.ReactNode
  }

// UTILITIES USED TO WORK WITH THE HOOk

const fetchCityName = async (name: string) => {
    try{
        return await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1&language=en&format=json`);
    } catch(error){
        console.log(error)
        return error
    }
}

// Mainly to be used with the CitySearch.tsx form, the logic behind setting CityContext is defined there
const createNewCityObject = async (name: string) : Promise<cityInformationObject | null> => {
    const fetchResult : any = await fetchCityName(name);
    
    // fetchResult may be an Error or a json object sent by the geographic API
    // If there are no matching names for query, the fetchResult.data.results is an empty array
    // To handle both cases above, this funciton will return *null* in both these cases, keep that in mind when designing logic of setting the CityContext 
    // TODO find a way to type this 
    if( fetchResult instanceof Error ){
        console.log(fetchResult);
        return null
    }

    if(!fetchResult.data.results){
        return null
    }

    const cityObject = fetchResult.data.results[0];
    return {name: cityObject.name, country: cityObject.country, lat: cityObject.latitude, log: cityObject.longitude}

}

// HOOK FUNCTIONS \\

const CityContext = React.createContext<cityContextObject|null>(null);

const useCityContext = () => {
    return useContext(CityContext)
}

const CityContextProvider = ({children} : Props) => {
    const [city, setCity] = useState<cityInformationObject|null>(null);
    const transitionContextObject = useTransitionContext();
    const weatherContextObject = useWeatherContext();
    // Handle weather changes and transition

    // Handles both setting the actual cityContext, changing weather based on this city and toggling transitionContext
    // useEffect, which toggles the transitionContext again after weatherInformation is fetched happens to be in blobBackground.tsx (may consider moving here, to have all transition and fetching logic together, but shall see)
    const setCityContextObject = (cityInformation: cityInformationObject) => {
    
        if(cityInformation === null) return
        
        if(city === null){
            transitionContextObject?.setTransition('exit')
            setTimeout(() => {
                setCity(cityInformation)
            },500)
            return
        }
    
        if(cityInformation.name === city?.name){
            return
        }
        transitionContextObject?.setTransition('exit')
        setTimeout(() => {
            // Setting a new city
            setCity(cityInformation)
        }, 500)
    }

    // Whenever city of search changes, change the weather as well and toggle the transition context
    useEffect(() => {
        if(!city) return
        (async () => {
            const weatherData = await fetchWeatherData(city.lat, city.log)
            console.log(weatherData)
            weatherContextObject?.setWeatherObject(weatherData)
            transitionContextObject?.setTransition('entry')
        })()
    }, [city])


    // LOGGING \\
    // useEffect(() => {
    //     console.log(weatherContextObject?.weatherObject)
    // }, [weatherContextObject?.weatherObject])

    return ( 
        <CityContext.Provider value={{city, setCityContextObject}}>
            { children }
        </CityContext.Provider>
     );
}

export {useCityContext, CityContextProvider, createNewCityObject}
export type {cityInformationObject}