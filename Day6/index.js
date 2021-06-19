// Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True

// solution

// var s='w3resource';
// var r=[1, 2, 4, 0];
// console.log(Array.isArray(s));
// console.log(Array.isArray(r));

// -------------------------------------------------------------------------------------------------------------------------


// Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]


  
//  var s= [1, 2, 4, 0];
// spread operator

// var r=[1, 2, [4, 0]];
// var q={...s}
// console.log(q)
// var w={...r}
// console.log(w)

// slice

// var q=s.slice()
// console.log(q)

// -------------------------------------------------------------------------------------------------------------------------------

// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []



// var a=[7,9,0,-2];
//  function pass(a,n) {
//      if(!n){
//          console.log(a.slice(0,1));
//      }
//      else if(n<0){
//          a=[]
//          console.log(a);
//      }
//      else{
//         console.log(a.slice(0,n));
//      }

// }

// pass([7, 9, 0, -2]);
// pass([],3);
// pass([7, 9, 0, -2],3);
// pass([7, 9, 0, -2],6);
// pass([7, 9, 0, -2],-3);




// ---------------------------------------------------------------------------------------------------------------------
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
 


// var a= ["Red", "Green", "White", "Black"];

// var b=a.join(",");
//  var b=a.join("+");
// var b=a.toString();
// console.log(b);

// ---------------------------------------------------------------------------------------------------------------------------


// Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )



// var items;
// var q=1;
// var m;
// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// for (let i = 0; i < arr1.length; i++) {
//     m=0;
//     for(let j=0;j<arr1.length;j++){

       
//         if(arr1[i]==arr1[j]){
//             m++;
//         }
      

//     }

//     if(m>q){
//         q=m;
//         items=arr1[i];
//     }

// }
// console.log(items,q);