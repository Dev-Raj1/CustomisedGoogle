//Google Serach Function

const GoogleUrl = "https://www.google.com/search?q=";
const Gquery = document.getElementById("g-search");
const GqueryBtn = document.getElementById("g-search-submit");

const gSearchFunc =(e)=>{
    e.preventDefault()
    const Url = GoogleUrl+Gquery.value; //using Gquery.value to get input value
    if(Gquery.value==""){
        window.alert("Empty search query")
        return;
    }
    else{
        window.open(Url)
    }
    Gquery.value=""; //reset the value of search query 
}

GqueryBtn.addEventListener("click", gSearchFunc);

// rain function

const rain = () =>{
    const amount =500;
    const section = document.querySelector(".rain-sec")
    let i = 0;
    while(i<amount){
        let drop = document.createElement("span")
        drop.classList.add("rains")
        let size = Math.random()*5
        let posX = Math.floor(Math.random()*window.innerWidth)

        let delay = Math.random()*-10
        let duration = Math.random()*10

        drop.style.width = 0.2+size+'px'
        drop.style.left = posX+"px"
        drop.style.animationDelay = delay+'s'
        drop.style.animationDuration = duration+'s'
        section.appendChild(drop);
        i++
    }
}
rain()