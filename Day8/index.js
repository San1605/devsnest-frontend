window.onload = () => {
// var divs =document.querySelectorAll("box");
// for (let index = 0; index < divs.length; index++) {
//     var div =document.querySelectorAll("box")[0].addEventListener("click",function(){
//     //    var a=this.style.color;
//     //    a="white";
//     document.getElementsByClassName("box")[0].style.background = "lightblue";
// //   div.body.style.background="red"
       
// })}



// var divs = document.querySelectorAll("box");
// for (let index = 0; index < divs.length; index++) {
// var s=document.getElementsByClassName("box")[0].addEventListener("click",function(){
    // document.querySelector("div").style.color="white";
    // })
// }
       


var divs =document.getElementsByClassName("box");
for(var i=0;i<divs.length;i++){
  document.getElementsByClassName("box")[i].addEventListener("click",function () {
this.classList.toggle("white")
    })
   

 }
 var btn =document.getElementById("btn").addEventListener("click",function () {
    window.location.reload("Refresh")
        })
       
    
    }