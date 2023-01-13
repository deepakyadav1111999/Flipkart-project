const getcolor=()=>{
    //hex code
    const randomnumber=Math.floor( Math.random() * 16777215);
    const randomcode = "#" + randomnumber.toString(16);
    document.body.style.backgroundColor =randomcode;
    document.getElementById("color-code").innerText=randomcode;

   // navigator.clipboard.writeText(randomcode);   (to copy the color code to the clipboard)
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

// initial call

getcolor();