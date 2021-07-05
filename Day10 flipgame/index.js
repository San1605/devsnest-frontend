window.onload=()=>{
    const cards = document.querySelectorAll('.flip-card-inner');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
  
    function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
  
      this.classList.add('flip');
  
      if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
      }
  
      secondCard = this;
      lockBoard = true;
  
      checkForMatch();
    }
  
    function checkForMatch() {
 
      let isMatch = firstCard.className === secondCard.className;
      isMatch ? disableCards() : unflipCards();
    }
  
    function disableCards() {
 
setTimeout(() => {
    firstCard.classList.add("hide")
  secondCard.classList.add("hide")

    resetBoard();
  }, 1000);
    }
  
    function unflipCards() {
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
  
        resetBoard();
      }, 1000);
    }
  
    function resetBoard() {
      [hasFlippedCard, lockBoard] = [false, false];
      [firstCard, secondCard] = [null, null];
    }
  
   function shuffle() {
     cards.forEach(card => {
       let ramdomPos = Math.floor(Math.random() * 12);
       card.style.order = ramdomPos;
     });
   };
  
    cards.forEach(card => card.addEventListener('click', flipCard));


}






// var memory_array = ['A','A','B','B','C', 'C', 'D','D','E','E','F','F','G','G','H','H','I','I', 'J','J','K','K','L','L'];
// var memory_values = [];
// var memory_tile_ids = [];
// var tiles_flipped = 0;

// Array.prototype.memory_tile_shuffle = function(){
//   var i = this.length, j, temp;
  
//   while(--i > 0) {
//     j = Math.floor(Math.random() * (i+1));
//     temp = this[j];
//     this[j] = this[i];
//     this[i] = temp;
//   }
// }

// function newBoard(){
//   tiles_flipped = 0;
//   var output = '';
//   memory_array.memory_tile_shuffle();
//   for (var i=0; i< memory_array.length; i++){
//     output += '<div id="tile_'+i+'" onClick="memoryFlipTiles(this,\''+memory_array[i]+'\')"></div>';
//   }
//   document.getElementById('memory_board').innerHTML = output;
// }

// function memoryFlipTiles(tile, val) {
//   if (tile.innerHTML == "" && memory_values.length < 2){
//     tile.style.background = "#FFF";
//     tile.innerHTML = val;
    
//     if(memory_values.length == 0) {
//       memory_values.push(val);
//       memory_tile_ids.push(tile.id);
//     } else if (memory_values.length == 1) {
//       memory_values.push(val);
//       memory_tile_ids.push(tile.id);
//       if (memory_values[0] == memory_values[1]) {
//         tiles_flipped +=2;
//         //clear arrays
//          memory_values = [];
//          memory_tile_ids = [];
        
//          if(tiles_flipped == memory_array.length){
//             alert("Board cleared");
//             document.getElementById('memory_board').innerHTML = "";
//             newBoard();
//           }
//       } else {
//         function flip2back(){
//           // Flip the 2 tiles back
//           var tile_1 = document.getElementById(memory_tile_ids[0]);
//           var tile_2 = document.getElementById(memory_tile_ids[1]);
          
//           tile_1.style.background = 'lightsteelblue';
//           tile_1.innerHTML = "";
          
//           tile_2.style.background = 'lightsteelblue';
//           tile_2.innerHTML = "";
          
//           //clear arrays
//          memory_values = [];
//          memory_tile_ids = [];
//         }
//         setTimeout(flip2back, 500);
//       }
//     }
//   }
// }
