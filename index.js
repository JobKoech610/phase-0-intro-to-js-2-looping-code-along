// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
//   debugger;
}
*/

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


// const newArray =[];

// function writeCards(names,event){
//     for (let i=0; i<names.length; i++){
//        const text= `"Thank you, ${names[i]} for the wonderful ${event} gift!"`;
//        newArray.push(text);
//     }

//     return newArray; 

// }
// function writeCards(names, event) {
//     const messages = [];
  
//     for (let i = 0; i < names.length; i++) {
//       const message = `"Thank you, ${names[i]}, for the wonderful ${event} gift!"`;
//       messages.push(message);
//     }
  
//     return messages;
//   }
// writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(names, event){
  const messages = [];
  for (let i = 0;
      i < names.length;
      i++) {
  messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
      }
      return messages;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")


//Assignment

function countDown(num){
while(num>=0){
    console.log(num);
    num--;
}
}
countDown(10);
