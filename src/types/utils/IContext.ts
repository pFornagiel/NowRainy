import { weatherInformationObject } from "./IWeatherInformation"

interface cityInformationObject {
  name: string,
  country: string,
  lat: number,
  log: number
}

interface cityContextObject {
  city: cityInformationObject | null,
  setCityContextObject: (cityInformation: cityInformationObject) => void
}

interface firstRenderContextObject {
  firstRender: boolean,
  setFirstRender: React.Dispatch<React.SetStateAction<boolean>>
}

type transitionName = "entry" | "exit"

interface transitionContextObject {
  transition: transitionName,
  setTransition: React.Dispatch<React.SetStateAction<transitionName>>
}

interface weatherContextObject {
  weatherObject: null | weatherInformationObject,
  setWeatherObject: (weatheData: any) => void
}


interface Props {
  children: React.ReactNode
}

export type {cityContextObject, cityInformationObject, firstRenderContextObject, transitionContextObject, transitionName, weatherContextObject, Props}