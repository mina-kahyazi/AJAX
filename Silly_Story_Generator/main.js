
const btn=document.querySelector("button");
const pp=document.querySelector("p");

btn.addEventListener("click",function(){

    let strText=document.getElementById("customname").value.trim();
    let name="";
    let defaultStr="It was 94 fahrenheit outside, so Willy the Goblin went for a walk."+
                  "When they got to the soup kitchen, they stared in horror for a few moments, "+
                  "then spontaneously combusted. Bob saw the whole thing, "+
                  "but was not surprised — Willy the Goblin weighs 300 pounds, and it was a hot day."

    if(strText!==""){

        name="<b>"+strText+"</b>";
    }
  
    if(document.getElementById("uk").checked==true)
    {
  
        defaultStr=defaultStr.replace("94 fahrenheit","34 Celsius");
        defaultStr=defaultStr.replace("300 pounds","100 kg");
    }
    
    if (name.trim()!=="")
    {
        
    defaultStr=defaultStr.replace("Bob",name);
    }
    pp.innerHTML=defaultStr;
});

