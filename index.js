
let inptwether= document.getElementById("inputtxt");
let search =document.getElementById("searchbtn");
let wetherreport= document.querySelector(".wetherdetail")

search.addEventListener('click',()=>{
    let cityname=inptwether.value.toUpperCase();
    findweather(cityname)

})
 async function findweather(names){
    let temp = document.getElementById("temprature")
    let city= document.getElementById("cityname");
    let humidity=document.getElementById("humidity");
    let descripion=document.getElementById("description")
    
    try {
        let res =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${names}&appid=a158c097c981df73e2026850632406ba&units=metric`);
        if(!res.ok){
            throw new Error("city not found");
        }
        else{
            wetherreport.style.display="block"
        }
        let values=  await res.json();
        console.log(values)
          temp.textContent= values.main.temp+" ℃";
          city.textContent= names;
          humidity.textContent =`Humidity: ${values.main.humidity} %`
          descripion.textContent = values.weather[0].description.toUpperCase();
    }
    catch(error){
          wetherreport.style.display="none";
          if(error.message==="city not found"){
            alert("Please enter valid city name !")
          }
          else{
            alert("Please check your network connection")
          }
           
          
          
    }
    


}