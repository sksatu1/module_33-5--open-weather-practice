
const loadCity = () => {
    const inputField = document.getElementById('input-city');
    const inputText = inputField.value;

    // clear input field -----------
    inputField.value = '';

    // clear error message -----------
    document.getElementById('error-message').innerText = '';

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=d9cf23658f6444a711601c0cdfa602c0`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCity(data))
        .catch(error => errorMessage('input the valid city name'))
}

const errorMessage = message => {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = message;
}

const displayCity = city => {
    console.log(city);

    const cityName = document.getElementById('city-name');
    cityName.innerText = `${city.name}`;

    const displayTemp = document.getElementById('display-temp');
    displayTemp.innerText = `${city.main.temp}`

    // console.log(city.weather[0].main);
    const weatherCondition = document.getElementById('weather-condition');
    weatherCondition.innerHTML = `${city.weather[0].main}`

}