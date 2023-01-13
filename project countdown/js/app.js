const endDate ="09 December 2022 05:24 PM"

document.getElementById("end-date").innerHTML =endDate;
const inputs =document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;//converting diff into seconds
    // console.log(diff);
    //convert into days hours minutes and seconds
    if(diff<0)return;//it used when time is complete so the values does not go in negative values
    inputs[0].value= Math.floor(diff / 3600 / 24); //for days
    inputs[1].value=Math.floor(diff /3600)%24;  //for hours
    inputs[2].value=Math.floor(diff / 60)%60; // for minutes
    inputs[3].value=Math.floor(diff)%60; //for seconds

}

clock()

setInterval(
    () =>{
        clock()
    },1000
)





//1 day - 24hrs
//1hr=60min
// 60min=3600sec