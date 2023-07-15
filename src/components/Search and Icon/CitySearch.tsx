import { useEffect, useState, useRef } from "react";
import { useCityContext } from "../../utils/hooks/cityContext";
import { cityInformationObject, createNewCityObject } from "../../utils/hooks/cityContext";
import { useTransitionContext } from "../../utils/hooks/transitionContext";
import { useFirstRenderContext } from "../../utils/hooks/firstRenderContext";

const firstRenderDelay = 700;

const CitySearch = () => {

    // STATE DECLARATIONS\\
    const cityContextObject = useCityContext();
    const transitionContextObject = useTransitionContext();
    const firsRenderContextObject = useFirstRenderContext();
    const [inputCity, setInputCity] = useState('');
    const [fetchedCity, setFetchedCity] = useState<cityInformationObject|null>(null); //Maybe change to ref, will see
    const [debouncedInputRef, setdebouncedInputRef] = useState<string>('');
    const [isRefFocused, setIsRefFocused] = useState<boolean>(false)

    // REF DECLARATIONS\\
    const inputRef = useRef<null|HTMLInputElement>(null)

    //EVENT HANDLERS\\
    const handleInputCity = async (e : React.ChangeEvent<HTMLInputElement>) => {

        setInputCity(e.target.value)
        // Do not fetch new data if user just backspaces or the new letter he types happens to be the next letter of already fetched city name
        if(e.target.value[e.target.value.length-1] === fetchedCity?.name[e.target.value.length-1]) return
        if(e.target.value.length < inputCity.length) return

        const newCity = await createNewCityObject(e.target.value)

        if(!newCity) return
        setFetchedCity(newCity);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(!fetchedCity) return

        if(e.key === "Enter"){
            e.preventDefault()
            setInputCity(fetchedCity.name)
            inputRef.current?.blur()
            if(firsRenderContextObject?.firstRender){
                firsRenderContextObject.setFirstRender(false)
                setTimeout(() => {
                    cityContextObject?.setCityContextObject(fetchedCity);
                }, firstRenderDelay)
                return
            }
            cityContextObject?.setCityContextObject(fetchedCity);
            
        }

        if(e.key === "Tab" || e.key === "ArrowUp" || e.key === "ArrowDown"){
            e.preventDefault()
            setInputCity(fetchedCity.name)
        }
    }


    const handleBlur = () => {
        if(fetchedCity?.name) setInputCity(fetchedCity?.name)
        if(firsRenderContextObject?.firstRender) setIsRefFocused(false)
        // setFetchedCity(null);
    }

    const handleFocus = () => {
        if(firsRenderContextObject?.firstRender) setIsRefFocused(true)
    }
    
    // USEEFFECTS \\
    // Debounce  for setting cityContext. Simple and clean implementation, gotta admit.
    useEffect(() => {

                // Test whether input does not contain only whitespaces
        // Here additionally because this useEffect "observes" inputCity state

        // Actual debounce
        const updateDebounce = setTimeout(() => {
            if(!/^\s*$/.test(inputCity)) setdebouncedInputRef(inputCity)
          }, 1500);
      
        return () => clearTimeout(updateDebounce)
    },[inputCity])


    // Use cityContext after the debounce time, if fetched city name and input are the same
    // Should make for good UX imo
    useEffect(() => {
        if(!fetchedCity) return
        
        if(fetchedCity?.name.toLowerCase() === debouncedInputRef.toLowerCase()){
            if(firsRenderContextObject?.firstRender){
                firsRenderContextObject.setFirstRender(false)
                setTimeout(() => {
                    cityContextObject?.setCityContextObject(fetchedCity);
                }, firstRenderDelay)
                return
            }
            // Update cityContext here
            cityContextObject?.setCityContextObject(fetchedCity);
        }
    },[debouncedInputRef])


    return ( 
        <div className="w-full h-20 [caret-color:transparent] [caret-color:white]">
            <form className="w-full h-full relative inline-block from-neutral-900" action="none" placeholder="Test" onSubmit={(e) => { handleSubmit(e) }}>
                <input 
                    ref={inputRef} 
                    value={inputCity} 
                    onChange={(e) => {handleInputCity(e)}} 
                    onKeyDown={(e) => {handleKeyDown(e)}} 
                    onBlur={() => {handleBlur()}} 
                    onFocus={() => {handleFocus()}}
                    className={`capitalize bg-transparent text-white text-3xl w-full outline-none hover:text-gray-300 focus:text-white transition-all ease-in-out duration-300 ${(firsRenderContextObject?.firstRender && !isRefFocused && inputCity === '') ? '[caret-color:transparent]' : '[caret-color:white]'}`}
                />
                {(firsRenderContextObject?.firstRender && !isRefFocused && inputCity === '') ? <span className="absolute top-0 left-0 z-10 select-none h-[45%] w-[1px] bg-white animate-blink"></span>: ''}
                <div className="absolute top-0 z-10 select-none pointer-events-none">
                    {/* Gonna have to clean this one up later*/}
                    <p className="capitalize text-3xl inline-block opacity-0 whitespace-pre">{fetchedCity?.name == null ? inputCity : fetchedCity?.name.slice(0,inputCity.length).toLowerCase() === inputCity.toLowerCase() ? inputCity : inputCity }</p>

                    <p className="inline text-gray-300 text-3xl capitalize">{fetchedCity?.name == null ? '' : fetchedCity?.name.slice(0,inputCity.length).toLowerCase() === inputCity.toLowerCase() ? fetchedCity.name.slice(inputCity.length) : '' }</p>
                </div>
                <div className={`text-gray-200 ${transitionContextObject?.transition}-animation`}>{cityContextObject?.city?.country ?? ''}</div>
            </form>
            
            
        </div>
     );
}
 
export default CitySearch;