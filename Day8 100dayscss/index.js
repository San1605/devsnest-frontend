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
    //   to amke many divs

for(var i=0;i<700;i++){
   var box= document.createElement("div");
    var x= document.getElementsByClassName("container");
    x[0].appendChild(box)
    box.classList.add("box")
}




var divs =document.getElementsByClassName("box");
for(var i=0;i<divs.length;i++){
  document.getElementsByClassName("box")[i].addEventListener("click",function () {
this.classList.toggle("white")
    })
   

 }
 var btn =document.getElementById("btn").addEventListener("click",function () {
    window.location.reload("Refresh")
        })
       
        var y= document.getElementsByClassName("container");
        var frames=[1];
  for(var i=0;i<y.length;i++)
{
    y[i].addEventListener("click",function () {
        frames.push(this);
          frames[i].classList.add("white")
    })
}
console.log(frames)


















    }