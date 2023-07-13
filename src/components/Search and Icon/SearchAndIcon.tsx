import CitySearch from "./CitySearch";
import IconWeather from "./IconWeather";

const SearchAndIcon = () => {
    return ( 
        <div className=" flex justify-evenly align-middle w-full h-fit">
            <CitySearch />
            <IconWeather />
        </div>
     );
}
 
export default SearchAndIcon;