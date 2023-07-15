// Weather quotes arrays
const sunnyWeatherSentences = [
    "Shining as brightly as ever",
    "It's a perfect day to soak up some sun",
    "Clear skies and abundant sunshine",
    "Enjoy the warmth of the sun today",
    "A perfect day for stargazing with only few clouds dotting the sky",
  ];

  const clearWeatherSentences = [
    "The sky is a canvas of clear blue",
    "Bask in the warmth of the sun on this clear day!",
    "Smile with clear skies and abundant sunshine!",
    "Enjoy the crystal-clear sky today!",
  ];
  

  const partlyCloudySentences = [
    "The sky is partly cloudy with patches of sunshine",
    "A mix of sun and clouds makes for a dreamy day",
    "Enjoy the pleasant balance of sun and clouds today",
    "A picturesque cloudy backdrop to the sunshine",
    "A partly cloudy day - perfect for outdoor activities",
  ];
  
  const overcastSentences = [
    "The sky is completely covered in clouds today",
    "It's an overcast day with no sign of sunshine",
    "Today the clouds have taken over the sky",
    "A blanket of gray clouds hangs overhead",
    "The weather is overcast, but it's a great day for cozy indoor activities",
  ];
  
  const foggySentences = [
    "Thick fog has descended, reducing visibility significantly",
    "The air is filled with a mysterious fog",
    "A dense fog blankets the surroundings, giving a sense of calm and serenity",
    "Visibility is low due to the heavy fog that envelops the area",
    "It's a foggy day, so take it slow and stay safe on the roads",
  ];
  
  const drizzleSentences = [
    "A gentle drizzle falls from the sky, creating a soothing ambiance",
    "It's a day of light drizzle, perfect for a cozy indoor activity",
    "The air is filled with a mist as the drizzle continues",
    "Enjoy the refreshing touch of the drizzle on your skin",
    "It's a drizzly day, but don't let it dampen your spirits!",
  ];
  
  const rainySentences = [
    "Raindrops fall from the sky, creating a rhythmic melody",
    "It's a rainy day, perfect for staying cozy indoors",
    "The sound of rain soothes the soul as it taps against the windows",
    "Umbrellas are out as the rain showers the earth",
    "Don't forget your umbrella!",
  ];
  
  const snowySentences = [
    "Snowflakes gently fall from the sky, covering the ground in a white blanket",
    "Building snowmen and having snowball fights today!",
    "Enjoy the winter wonderland!",
    "Enjoy the beauty of the snow-covered landscape on this chilly day",
    "Snowflakes fill the air",
  ];
  
  const showerSentences = [
    "A sudden shower has arrived bringing refreshment",
    "It's a day of passing showers, bringing moments of rain followed by breaks of sunshine",
    "The sky opens up with a brief shower washing away the dust",
    "Enjoy the rhythmic pitter-patter of raindrops during the passing shower",
    "It's a showery day, so keep your umbrella handy!",
  ];
  
  const thunderstormSentences = [
    "The sky rumbles with thunder as the storm rolls in",
    "Flashes of lightning illuminate the dark sky during ",
    "Remember to stay safe and don't let the weather ruin your mood!",
    "Stay indoors and seek shelter during the thunderstorm",
    "It's a stormy day with thunder and lightning, so stay safe and cozy indoors!",
  ];
  
const getRandomSentence = (weatherCode:number) => {
    let weatherArray:string[];
    switch (weatherCode) {
        case 0:
          weatherArray = sunnyWeatherSentences;
          break;
        case 1:
          weatherArray = clearWeatherSentences;
          break;
        case 2:
          weatherArray = partlyCloudySentences;
          break;
        case 3:
          weatherArray = overcastSentences;
          break;
        case 4:
          weatherArray = foggySentences;
          break;
        case 5:
          weatherArray = drizzleSentences;
          break;
        case 6:
          weatherArray = rainySentences;
          break;
        case 7:
          weatherArray = snowySentences;
          break;
        case 8:
          weatherArray = showerSentences;
          break;
        case 9:
          weatherArray = thunderstormSentences;
          break;
        default:
          weatherArray = [''];
          break;
      }
      const randomIndex = Math.floor(Math.random() * weatherArray.length);
      return weatherArray[randomIndex];
}
  
export {getRandomSentence}