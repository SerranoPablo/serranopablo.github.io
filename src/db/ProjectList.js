import TodoImage from '../images/Checklist.svg';
import QuestionImage from '../images/Question.svg';
import WeatherImage from '../images/Weather.svg';

const ProjectList = [
 {
  id: 0,
  title: "ToDo App",
  position: "left",
  image: TodoImage,
  text: "Simple To Do App where you can add tasks and then tick them off or delete them.",
  linkWeb: "https://serranopablo.github.io/todo/",
  linkGH: "https://github.com/SerranoPablo/todo"
 },
 {
  id: 1,
  title: "Weather App",
  position: "right",
  image: WeatherImage,
  text: "Shows the current weather of different cities using the API OpenWeatherMap.org ",
  linkWeb: "https://serranopablo.github.io/weather-app/",
  linkGH: "https://github.com/SerranoPablo/weather-app"
 },
 {
  id: 2,
  title: "Hangman App",
  position: "left",
  image: QuestionImage,
  text: "Answer correctly the question before your man is hung.",
  linkWeb: "https://serranopablo.github.io/hangman/",
  linkGH: "https://github.com/SerranoPablo/hangman"
 }
];

export default ProjectList;