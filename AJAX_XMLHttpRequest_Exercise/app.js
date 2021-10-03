document.getElementById('button').addEventListener('click', loadData);

function loadData()
{

const xhr=new XMLHttpRequest();

xhr.open("GET",'data.txt',true);

xhr.onreadystatechange=function(){

    if (this.status===200 && this.readyState===4){

        console.log(this.responseText);

        document.getElementById("output").innerHTML=this.responseText;
        

    } 

}
xhr.onerror=()=>{

    console.log('Request error...');
   

}

xhr.send();

}


