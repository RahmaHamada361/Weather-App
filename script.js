const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "a0917b7fceb57115030d4c0b6d0573c0"


const searchBox = document.querySelector("input")
const searchBtn = document.querySelector("button")


async function checkweather(city){
   
    const response = await fetch(apiURL +  `${city}` + `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data)
    document.querySelector(".country").innerHTML = data.sys.country
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>°</sup>C"
}



searchBtn.addEventListener("click" , ()=>{
    checkweather(searchBox.value)
})


