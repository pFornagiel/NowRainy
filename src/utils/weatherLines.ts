// Weather quotes arrays
const sunnyWeatherSentences = [
  "Shining as brightly as ever!",
  "It's a perfect day to soak up some sun",
  "Clear skies and abundant sunshine",
  "Enjoy the warmth of the sun today",
  "A perfect day for stargazing!",
];

const clearWeatherSentences = [
  "The sky is a canvas of clear blue",
  "Time to bask in the warmth of the sun!",
  "Smile with clear skies and abundant sunshine!",
  "Enjoy the crystal-clear sky today!",
];


const partlyCloudySentences = [
  "The sky is partly cloudy with patches of sunshine",
  "A dreamy day of both sun and clouds",
  "Enjoy the pleasant mix of sun and clouds!",
  "A day perfect for outdoor activities!",
];

const overcastSentences = [
  "The sky is completely covered in clouds today",
  "The clouds have taken over the sky",
  "A blanket of gray clouds hangs overhead",
  "A great day for indoor activities!",
];

const foggySentences = [
  "Thick fog has descended, reducing visibility",
  "A dense fog blankets the surroundings",
  "Visibility is low due to the heavy fog",
  "Take it slow and stay safe on the roads",
];

const drizzleSentences = [
  "Gentle drizzle falls from the sky",
  "A light drizzle - perfect for indoor activities",
  "The air is filled with a mist as the drizzle continues",
  "Enjoy the refreshing touch of the drizzle",
  "Don't let the drizzle dampen your spirits!",
];

const rainySentences = [
  "Nothing better rhythmic melody of rain",
  "Rainy day perfect for staying cozy indoors",
  "Raindrops tapping against the windows",
  "Don't forget your umbrella!",
];

const snowySentences = [
  "Snowflakes gently falling from the sky",
  "Building snowmen and having snowball fights today!",
  "Enjoy the winter wonderland!",
  "Enjoy the beauty of the snow-covered landscape!",
];

const showerSentences = [
  "Make sure to take an umbrella!",
  "Except moments of rain followed by sunshine",
  "The sky opens up with a brief shower washing away the dust",
  "It's a showery day, so keep your umbrella handy!",
];

const thunderstormSentences = [
  "The sky rumbles with thunder as the storm rolls in",
  "Flashes of lightning illuminate the dark sky",
  "Remember to stay safe during the storm!",
  "Stay indoors and seek shelter during the thunderstorm",
];

const getRandomSentence = (weatherCode: number) => {
  let weatherArray: string[];
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

export default getRandomSentence