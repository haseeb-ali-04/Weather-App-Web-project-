const Submitbtn = document.getElementById("submitBtn")
const value  =  document.getElementById("input")
const CityName = document.getElementById("CityName")
const temperature = document.getElementById("temp")
const min_temp = document.getElementById("min_temp")
const max_temp = document.getElementById("max_temp")
const getInfo =  async () =>{

    let InpValue = value.value
    if (InpValue === "") {
        CityName.innerHTML = `<b style="color:red">Enter Some Value</b>`
        document.getElementById("input").value = ""

    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${InpValue}&units=metric&appid=1adf1279d1c27a819f35083d76899179`
            let response  = await fetch(url)
            let data = await response.json()
            let realData = await [data]
            if (realData[0].sys.country === undefined) {
                CityName.innerText = `Temperature in ${realData[0].name} :`
            }else{CityName.innerText = `Temperature in ${realData[0].name}, ${realData[0].sys.country} :`}
            console.log(realData[0].weather[0].main)
            if (realData[0].weather[0].main === "Clouds") {
                temperature.innerHTML = `${realData[0].main.temp}°C <i class="fas fa-cloud" style=" 
                color: grey;
                display: flex;
                align-items: center;
                margin-left: 8px;"></i>`
            }else if (realData[0].weather[0].main === "Clear") {
                temperature.innerHTML = `${realData[0].main.temp}°C <i class="fas fa-sun" style=" 
                color: yellow;
                display: flex;
                align-items: center;
                margin-left: 8px;"></i>`
            }else if (realData[0].weather[0].main === "Rain") {
                temperature.innerHTML = `${realData[0].main.temp}°C <i class="fas fa-cloud-rain" style=" 
                color: #3381f7;
                display: flex;
                align-items: center;
                margin-left: 8px;"></i>`
            }else {
                temperature.innerHTML = `${realData[0].main.temp}°C <i class="fas fa-sun" style=" 
                color: yellow;
                display: flex;
                align-items: center;
                margin-left: 8px;"></i>`
            }
            min_temp.innerText = `${realData[0].main.temp_min}°C`
            max_temp.innerText = `${realData[0].main.temp_max}°C`
            document.getElementById("input").value = ""
        } catch {
            CityName.innerHTML = `<b style="color:red">Enter Valid Name</b>`
        document.getElementById("input").value = ""
            
        }
    }

}



Submitbtn.addEventListener('click', getInfo)