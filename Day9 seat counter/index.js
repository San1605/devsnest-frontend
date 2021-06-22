window.onload=()=>{
    
var m=0;
var n=0;

    var divs =document.getElementsByClassName("box");
for(var i=0;i<divs.length;i++){
  document.getElementsByClassName("box")[i].addEventListener("click",function () {
// this.classList.toggle("white")
  


    if(  this.classList.contains("white")){
        this.classList.remove("white")
        m+=1;
        if(n>0){
            n-=1;

        }
        document.getElementById("h2").innerHTML=n;
        document.getElementById("h21").innerHTML=56-n; 
    }
    else{
        this.classList.add("white")
        n+=1;
     if(m>0){
         m-=1;

     }

        
        document.getElementById("h21").innerHTML=56-n; 
        document.getElementById("h2").innerHTML=n;
    }
    // document.getElementById("h21").innerHTML=m; 
    // document.getElementById("h2").innerHTML=n ;
})  
  
}


   

}