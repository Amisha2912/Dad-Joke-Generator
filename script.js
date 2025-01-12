const btn=document.querySelector("#submit");
const viewJoke=document.querySelector("#joke-generator");
const apiURL="https://api.api-ninjas.com/v1/dadjokes";
const apiKEY="ixPGEE+oL2BKNg1tjIU1Ew==3bBFNWyaKSfiELHw";



const get={
    headers:{'X-API-Key':'ixPGEE+oL2BKNg1tjIU1Ew==3bBFNWyaKSfiELHw'},
    method:'GET'
}
async function generateJoke(){
    viewJoke.innerHTML="Updating....";
    try{
        let response =await fetch(apiURL,get);
        let data = await response.json();
        // console.log(data[0].joke);
        renderJoke(data);
    }
    catch{
        viewJoke.innerHTML="An error happened, try again later";
    }
}

// generateJoke();

let renderJoke=(data =>{
    viewJoke.innerHTML=data[0].joke;
    viewJoke.classList.add("fade");
});

btn.addEventListener("click",()=>{
    generateJoke();
});
