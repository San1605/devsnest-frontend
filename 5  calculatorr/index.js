window.onload = () => {

  var screen = document.getElementById("screen");
  var buttons = document.querySelectorAll("button");


  var screenvalue = '';

  for (var i = 0; i < buttons.length; i++) {

    var button = document.querySelectorAll("button")[i].addEventListener("click", function () {

      var buttonhtml = this.innerHTML;
      // console.log(buttonhtml)
if(buttonhtml=="="){
  screen.value=eval(screenvalue)
}
else if(buttonhtml=="C"){
  screenvalue="";
  screen.value=screenvalue;
}
else{
  screenvalue+=buttonhtml;
  screen.value=screenvalue
}
    })
  }

}
