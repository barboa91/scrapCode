// const yourMoney = 50;
// const catPrice = 100;

// if(yourMoney === catPrice){
//     console.log(`You have just enough money to buy the Cat!`);
// }else if( yourMoney < catPrice){
//     let moneyNeeded = catPrice - yourMoney;
//     console.log(`You cannot buy a cat. You need ${moneyNeeded} more dollars.`)
// }else if (yourMoney > catPrice){
//     let moneyMore = yourMoney-catPrice;
//     console.log(`You can buy a cat. You have ${moneyMore} more dollars than you need, you're rich!`)
// }else{
//     console.log("Not sure how you got here, but you are here.")
// }


const students = [
    'Alice',
    'Andrew',
    'Casey',
    'Damian',
    'Grant',
    'Howie',
    'Wade',
    'Kat',
    'Kimbrad',
    'Kiu',
    'Natasha',
    'Obi',
    'Pedro',
    'Sarah',
    'Scott',
    'Tiffany',
    'Zhe',
  ];

  let hWorld = () => {
      console.log("Hello World");
  }

  let myFunction = () =>{
      console.log("this is my function and i'll cry if i wanna");
  }

  let f100 = () =>{
      for (let i = 1; i< 101; i++){
          console.log(i)
      }
  }

  let arrCount = (arrNum) => {
      let count = 0;
    for (let i = 0 ; i < arrNum.length; i++){
        count = count + arrNum[i];
    }
    console.log(count);
  }

  let listStudent = (stud) =>{
    for (let i = 0 ; i < stud.length; i++){
        console.log(stud[i]);
    }
  }

  let lenOfString = (stringArr) =>{
      pushHere = []
    for (let i = 0 ; i < stringArr.length; i++){
        pushHere.push(stringArr[i].length);
    }
    //return pushHere; // this is for returning the function but if we want to see it in the console we need to log it
    console.log(pushHere);
  }

  let fun7 = (arg1, arg2, arg3) =>{
      console.log(arg1*arg2**arg3);
      //return (arg1*arg2)**arg3;
  }

  let evenCount = () => {
    for (let i = 1; i< 101; i++){
        if  (i%2 ===0){
            console.log(i);
        }
    }

  }
// Fibbo doesnt work yet
//   let fibbo = () =>{        
//     let zNum = 0;
//     let sNum = 1; 
//     let fNum 
//     while (sNum < 500){
//         console.log(sNum);
//         sNum = (sNum-1)
//     }

//   }
  let testArr = [1,3,4,5];
  fun7(1,2,3);



