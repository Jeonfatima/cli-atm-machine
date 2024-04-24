#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 30000;  //Dollar
let myPin = "1234" ;

let pinAnswer = await inquirer.prompt( 
  [
    {
     name : "pin",
     message : "Enter your pin number:",
     type :" input "
    }
  ]
);

if (pinAnswer.pin === myPin){
    console.log("Correct pin code!!!")

    let operationAns = await  inquirer.prompt(
        [
            {
                name : "operation",
                message : " please select option",
                type : "list",
                choices: [ "Withdraw" , "Check balance" , "Transfer cash"]
            }
        ]
    );


   if ( operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name : "amount",
                    message: "How much would you like to withdraw?",
                    type:"list",
                    choices: ["10000" , "5000" , "2000"]
                }
            ]
        );
// =  , -=  , +=
        myBalance -= amountAns.amount

        console.log(`Your remaining balance is ${myBalance}`)
   } else if (operationAns.operation === "Check balance"){
          console.log(" Your current balance is:" + myBalance)
   }
   else if (operationAns.operation === "Transfer cash"){
         let transferAmount = await inquirer.prompt(
            [
                {
                    name : "cashamount",
                    message : "How much would you like to transfer?",
                    type : "number"
                }
            ]
         )
         myBalance -= transferAmount.cashamount
         if (transferAmount.cashamount > 30000){
            console.log("please enter sufficient amount")
            
         }
         else{
    
     console.log(`Your remaining balance is: ${myBalance}`)}
   }

}
else{
    console.log("Incorrect pin")
}