const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

displayedImage.setAttribute("filter","brightness(0)");
/* Looping through images */
let i=1;
for(i=1;i<6;i++){

    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic"+i+".jpg");
    newImage.setAttribute('onclick', "showPic(this);");
    thumbBar.appendChild(newImage);
  

}

function showPic(img){
    
    displayedImage.src=img.src;

}




/* Wiring up the Darken/Lighten button */

btn.setAttribute("onclick","setLight();");

function setLight(){
    
   let cName=btn.getAttribute("class");

    if ( cName=="dark")
    {
        btn.innerText="Lighten";
        btn.setAttribute("class","light");
       /* document.querySelector(".displayed-img").style.filter="brightness(0.5)";*/
        overlay.style.backgroundColor="rgba(0,0,0,0.5)";
    
   
    }
    
    else if (cName!=="dark")
        {

            btn.innerText="Darken";
            btn.setAttribute("class","dark");
          /*  document.querySelector(".displayed-img").style.filter="brightness(1.5)";*/
            overlay.style.backgroundColor="rgba(0,0,0,0)";
    
        }
    }
   