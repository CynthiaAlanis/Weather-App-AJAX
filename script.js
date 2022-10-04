const weatherBtn = document.querySelector('button')
const inputBox = document.querySelector('input')
const titleH2= document.querySelector('h2')
const feels_like = document.getElementById('feels_like')
const main_temp = document.getElementById('main_temp')
const city_name = document.getElementById('city_name')
description = document.getElementById('description')
weatherBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(inputBox.value)
  fetch('https://api.openweathermap.org/data/2.5/weather?q= ${inputBox.value} &appid=2732583bcad10262beebc98b6a9eea06')
  .then((res) => res.json())
  .then((data)=> {
  city_name.innerText="Current City: " + data.name
  main_temp.innerText="Temperature outside: " + data.main.temp + "F"
  feels_like.innerText="Feels Like: " + data.main.feels_like + "F"
  description.innerText="Weather: " + data.weather[0].description
  })
  .catch((err) => console.log(err));
})