// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object: var student = { name: "David Rayy", sclass: "VI", rollno: 12 }; 
// Sample Output: name, sclass, rollno



//      function student(names,sclass,rollno){
//               this.first=names;
//               this.sclass=sclass;
//               this.rollno=rollno;
//     }


// var student1= new student("David Rayy",6,12);
// console.log(student1)

// ---------------------------------------------------------------------------------------------------------------------------------


// 2. Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property.
//  Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

//      function student(names,sclass,rollno){
//               this.first=names;
//               this.sclass=sclass;
//               this.rollno=rollno;
//     }


// var student1= new student("David Rayy",6,12);
// console.log(student1)

// delete student1.rollno;
// console.log(student1)


// ----------------------------------------------------------------------------------------------------------------


// 3. Write a JavaScript program to get the length of a JavaScript object.  
// Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

//      function student(names,sclass,rollno){
//               this.first=names;
//               this.sclass=sclass;
//               this.rollno=rollno;
//     }


// var student1= new student("David Rayy",6,12);

// var lobject =Object.keys(student1).length;
// console.log(lobject)

// var count=0;
// for(key in student1){
//     if(student1.hasOwnProperty(key)){
//          count++;
//     }
// }
// console.log(count)


// ---------------------------------------------------------------------------------------------------------------------------



// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
//  var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
//  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
//  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]

// function library(author,title,readingStatus){
//     this.author=author;
//     this.title=title;
//     this.readingStatus=readingStatus;
// }

// var person1= new library('Bill Gates', 'The Road Ahead',  true );
// var person2= new library('Suzanne Collins', 'Mockingjay: The Final Book of The Hunger Games',  false );
// var person3 =new library('Steve Jobs','Walter Isaacson', false);


// console.log(person1.readingStatus);
// console.log(person1.title)

// --------------------------------------------------------------------------------------------------------------------------------------

//  5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
//  Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. 
//  Try To Attempt : Difficult Level Increased 

// function volume(radius,height){
//     this.volume=volume;
//     this.height=height;
//     var v=Math.PI*radius*radius*height;
//     var vl = v.toFixed(4);
//     console.log(vl)
    
// }

// var cylinder =new volume(7,10)



// --------------------------------------------------------------------------------------------------------------------------------------


//  6. Write a JavaScript program to sort an array of JavaScript objects.  
//  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
//  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
//   { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
//    Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" },
//     [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" },
//      [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

// --------------------------------------------------------------------------------------------------------------------------------------

// function library(title,author,libraryID){
//          this.title=title;
//          this.author=author;
//          TouchList.libraryID=libraryID
// }


















