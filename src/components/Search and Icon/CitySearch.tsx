import { useEffect, useState, useRef } from "react";
import { useCityContext } from "../../utils/hooks/cityContext";
import { cityInformationObject, createNewCityObject } from "../../utils/hooks/cityContext";
import { useTransitionContext } from "../../utils/hooks/transitionContext";
import { useFirstRenderContext } from "../../utils/hooks/firstRenderContext";

const firstRenderDelay = 700;

const CitySearch = () => {

    // STATE DECLARATIONS \\
    const cityContextObject = useCityContext();
    const transitionContextObject = useTransitionContext();
    const firsRenderContextObject = useFirstRenderContext();
    const [inputCity, setInputCity] = useState('');
    const [fetchedCity, setFetchedCity] = useState<cityInformationObject | null>(null); //Maybe change to ref, will see
    const [debouncedInputRef, setdebouncedInputRef] = useState<string>('');
    const [isRefFocused, setIsRefFocused] = useState<boolean>(false)

    // REF DECLARATIONS \\
    const inputRef = useRef<null | HTMLInputElement>(null)
    // Dynamic font sizing for input
    const fontSizeRef = useRef<string>('30px')

    //EVENT HANDLERS \\
    const handleInputCity = async (e: React.ChangeEvent<HTMLInputElement>) => {

        setInputCity(e.target.value)
        fontSizeRef.current = calculateFontSize(e.target.value)
        // Do not fetch new data if user just backspaces or the new letter he types happens to be the next letter of already fetched city name
        if (e.target.value[e.target.value.length - 1] === fetchedCity?.name[e.target.value.length - 1]) return
        if (e.target.value.length < inputCity.length) return
        // If the input is lesser than two characters, straight up set fetched city to null and adjust font instantly for better ux
        if (e.target.value.length < 2) {
            setFetchedCity(null);
            fontSizeRef.current = '30px'
            return
        }

        const newCity = await createNewCityObject(e.target.value)
        if (e.target.value[e.target.value.length - 1] !== newCity?.name[e.target.value.length - 1]) return
        if (!newCity) return
        setFetchedCity(newCity);
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!fetchedCity) return

        if (e.key === "Enter") {
            e.preventDefault()
            setInputCity(fetchedCity.name)
            inputRef.current?.blur()
            fontSizeRef.current = calculateFontSize(fetchedCity.name)
            if (firsRenderContextObject?.firstRender) {
                firsRenderContextObject.setFirstRender(false)
                setTimeout(() => {
                    cityContextObject?.setCityContextObject(fetchedCity);
                }, firstRenderDelay)
                return
            }
            cityContextObject?.setCityContextObject(fetchedCity);
        }

        if (e.key === "Tab" || e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault()
            setInputCity(fetchedCity.name)
            fontSizeRef.current = calculateFontSize(fetchedCity.name)
        }
    }


    const handleBlur = () => {
        if (fetchedCity?.name) setInputCity(fetchedCity?.name)
        if (firsRenderContextObject?.firstRender) setIsRefFocused(false)
    }


    const handleFocus = () => {
        if (firsRenderContextObject?.firstRender) setIsRefFocused(true)
    }

    // Dynamic font sizing for input
    const calculateFontSize = (input: string) => {
        const baseFontSize = 30;
        const maxLength = 10;
        let fontSize = baseFontSize;
        if (input.length > maxLength) {
            fontSize = Math.round(baseFontSize - Math.log(((input.length / maxLength) * 2.5)) * (input.length / maxLength) * 2.5)
        }
        if (fontSize < 18) fontSize = 18
        return `${fontSize}px`
    }

    // USEEFFECTS \\
    // Debounce for setting cityContext
    useEffect(() => {

        const updateDebounce = setTimeout(() => {
            //  Match strings that do not consist entirely of whitespace characters
            if (!/^\s*$/.test(inputCity)) setdebouncedInputRef(inputCity)
        }, 1500);

        return () => clearTimeout(updateDebounce)

    }, [inputCity])


    // Use cityContext after the debounce time if fetched city name and input are the same
    // Should make for good UX imo
    useEffect(() => {
        if (!fetchedCity) return
        if (fetchedCity?.name.toLowerCase() !== debouncedInputRef.toLowerCase()) return
        if (firsRenderContextObject?.firstRender) {
            firsRenderContextObject.setFirstRender(false)
            setTimeout(() => {
                cityContextObject?.setCityContextObject(fetchedCity);
            }, firstRenderDelay)
            return
        }
        cityContextObject?.setCityContextObject(fetchedCity);
    }, [debouncedInputRef])


    // RETURNED JSX \\

    // {fontSize: '30px', lineHeight: '2.25rem'} simulates font-3xl in tailwind
    return (
        <div className="w-full h-20">
            <form className=" w-full h-full relative inline-block from-neutral-900" action="none" placeholder="Test" onSubmit={(e) => { handleSubmit(e) }}>
                {/* Searach Bar */}
                <input
                    ref={inputRef}
                    value={inputCity}
                    onChange={(e) => { handleInputCity(e) }}
                    onKeyDown={(e) => { handleKeyDown(e) }}
                    onBlur={() => { handleBlur() }}
                    onFocus={() => { handleFocus() }}
                    className={` text-transition overflow-ellipsis bg-transparent text-white w-full outline-none hover:text-gray-300 focus:text-white transition-[opacity] ease-in-out duration-300 ${(firsRenderContextObject?.firstRender && !isRefFocused && inputCity === '') ? '[caret-color:transparent]' : '[caret-color:white]'} top-0`}
                    style={{ fontSize: fontSizeRef.current, lineHeight: '2.25rem' }}
                />
                {/* Blinker, visible only before first input */}
                {(firsRenderContextObject?.firstRender && !isRefFocused && inputCity === '') ? <span className="absolute top-0 left-0 z-10 select-none h-[45%] w-[1px] bg-white animate-blink"></span> : ''}

                {/* Div containing spans, which hint the city when user types */}
                {/* I may have overengineered this one, but it works fine so far */}
                <div className="absolute top-0 left-0 z-10 select-none pointer-events-none w-full overflow-ellipsis whitespace-nowrap inline-flex">

                    {/* "Gonna have to clean this one up later"
                        who am i kidding*/}

                    {/* Invisible first inline, which matches the input exactly */}
                    <span
                        className="text-transition inline opacity-0 whitespace-pre-wrap "
                        style={{ fontSize: fontSizeRef.current, lineHeight: '2.25rem' }}
                    >
                        {`${inputCity}`}
                    </span>

                    {/* Visible second inline, which hints the rest of the city name */}
                    <span
                        className=" text-transition inline text-gray-300  whitespace-pre w-full truncate flex-1 top-0 relative "
                        style={{ fontSize: fontSizeRef.current, lineHeight: '2.25rem' }}
                    >
                        {fetchedCity?.name == null ? '' : fetchedCity?.name.slice(0, inputCity.length).toLowerCase() === inputCity.toLowerCase() ? fetchedCity.name.slice(inputCity.length) : ''}
                    </span>

                </div>

                {/* Country name below search bar */}
                <div className={ `text-gray-200 text-lg ${transitionContextObject?.transition}-animation`}>{cityContextObject?.city?.country ?? ''}</div>
            </form>


        </div>
    );
}

export default CitySearch;