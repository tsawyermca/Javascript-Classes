//Functions

//Z2 P0
//Function that asks for projected amount of total sales, then displays a profit of 23%

function profitCalc(){
    let sales = prompt("What is the projected amount of sales");
    sales = parseFloat(sales);
    let profitPercent = 0.23;
    let profit = sales * profitPercent;
    profit = profit.toFixed(2);
    console.log(`The expected amount of sales is ${sales} meaning our expected profit is ${profit}`);
}

// profitCalc();

//Z2 P1
//Function that asks for square footage of land and calculates how many acres it is

function landCalc(){
    const acre = 43560;
    let land = parseFloat(prompt("How much Square Footage does your land have?"));
    let acreage = land / acre;
    acreage = acreage.toFixed(2);
    console.log(`${land} square footage is equal to ${acreage} acres`)
}

// landCalc();

//Z2 P2
//Function that asks for the price of 5 items, then displays the subtotal, sales tax, and total of the 5 items.

function itemPrice(){
    let item1 = parseFloat(prompt("What is the cost of the first item?"));
    let item2 = parseFloat(prompt("What is the cost of the second item?"));
    let item3 = parseFloat(prompt("What is the cost of the third item?"));
    let item4 = parseFloat(prompt("What is the cost of the fourth item?"));
    let item5 = parseFloat(prompt("What is the cost of the fifth item?"));

    const taxRate = 0.072;
    let subtotal = item1 + item2 + item3 + item4 + item5;
    let salesTax = subtotal * taxRate;
    let total = subtotal + salesTax;
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`Sales Tax: $${salesTax.toFixed(2)}`);
    console.log(`Total: $${total.toFixed(2)}`);
}

// itemPrice();

//Z2 P3
//Function that calculates distance traveled by a vehicle going 60 mph.

function travelDistance(){
    let speed = 60;
    let time = [5, 8, 12];
    let distances = [];

    for(let i = 0; i < time.length; i++){
        let distance = speed * time[i];
        distances.push(distance);
        console.log(`A vehicle traveling for ${time[i]} hours will have traveled ${distance} miles`);
    }
    
    return distances;
}

// travelDistance();

//Z2 P4
//Function that prompts the user to enter amount of a purchase, it then calculates the total cost by adding state and county sales taxes.

function salesTaxes(){
    let amount = parseFloat(prompt("What is your total amount"));
    let stateTax = 0.04;
    let countyTax = 0.02;
    let stTaxAmount = amount * stateTax;
    let ctTaxAmount = amount * countyTax;
    let total = amount + stTaxAmount + ctTaxAmount;
    console.log(`Price: $${amount.toFixed(2)}`);
    console.log(`State Tax: $${stTaxAmount.toFixed(2)}`);
    console.log(`County Tax: $${ctTaxAmount.toFixed(2)}`);
    console.log(`Total Price: $${total.toFixed(2)}`);
}

// salesTaxes();

//Z2 P5
//Function that prompts the user to enter the number of miles driven and gallons of gas used, then calculates the cars miles per gallon and displays result

function milesPerGallon(){
    let milesDriven = parseFloat(prompt("How many miles have you driven this trip?"));
    let gasUsed = parseFloat(prompt("How many gallons of gas have you used this trip?"));
    let mpg = milesDriven / gasUsed;
    console.log(`Your cars Miles Per Gallon is ${mpg.toFixed(0)}`);
}

// milesPerGallon();

//Z2 P6
//Function that prompts the user for the cost of a meal, then adds sales tax and a tip amount for the total cost

function mealCost(){
    let foodCost = parseFloat(prompt("What is the cost of your meal?"));
    let salesTax = 0.07;
    let tip = parseFloat(prompt("What percentage would you like to tip?"));
    let totalSalesTax = foodCost * salesTax;
    let totalTip = foodCost * (tip * 0.01);
    let totalPrice = foodCost + totalSalesTax + totalTip;
    console.log(`Meal Cost: $${foodCost.toFixed(2)}`);
    console.log(`Sales Tax: $${totalSalesTax.toFixed(2)}`);
    console.log(`Tip: $${totalTip.toFixed(2)}`);
    console.log(`Total: $${totalPrice.toFixed(2)}`);
}

// mealCost();

//Z2 P7
//Function that asks user to give the temperature in celsius then converts it to fahrenheit

function celToFahr(){
    let celsius = parseFloat(prompt("What is the temperature in Celsius?"));
    let fahrenheit = celsius * (9/5) + 32;
    console.log(`${celsius} °C is equal to ${fahrenheit.toFixed(1)} °F`);
}

// celToFahr();

//Z3 P1
//Function that asks the user for a number. If it is a prime number it will return True, otherwise will return False

function isPrime() {
    let n = parseInt(prompt("Enter a number to check if it is prime:"));

    isPrime.lastInput = n;
    
    if (isNaN(n)) {
        console.log("Please enter a valid number.");
        return;
    }
    
    if (n <= 1) {
        console.log(`${n} is not a prime number.`);
        return;
    }
    if (n <= 3) {
        console.log(`${n} ${n === 2 || n === 3 ? "is a prime number." : "is not a prime number."}`);
        return;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        console.log(`${n} is not a prime number.`);
        return;
    }
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            console.log(`${n} is not a prime number.`);
            return;
        }
    }
    
    console.log(`${n} is a prime number.`);
}

// isPrime();

//Z3 P2
//Function that builds off the previous one to display prime numbers between 1 and the the previously entered number

function displayPrimes() {
    let n = isPrime.lastInput;
    
    if (n === undefined || isNaN(n) || n < 1) {
        console.log("No valid number was provided by isPrime. Please run isPrime first.");
        return;
    }
    
    let primes = [];
    
    for (let i = 1; i <= n; i++) {
        if (i <= 1) continue;
        if (i <= 3 && (i === 2 || i === 3)) {
            primes.push(i);
            continue;
        }
        if (i % 2 === 0 || i % 3 === 0) continue;
        
        let isPrimeNumber = true;
        for (let j = 5; j * j <= i; j += 6) {
            if (i % j === 0 || i % (j + 2) === 0) {
                isPrimeNumber = false;
                break;
            }
        }
        if (isPrimeNumber) primes.push(i);
    }
    
    if (primes.length === 0) {
        console.log(`No prime numbers found from 1 to ${n}.`);
    } else {
        console.log(`Prime numbers from 1 to ${n}: ${primes.join(", ")}`);
    }
}

// displayPrimes()

//Z3 P3
//Function that simulates a Rock Paper Scissors game

function rockPaperScissors(){
    let playerChoice = prompt("Let's Play Rock Paper Scissors. Which do you pick?");
    let playerPick;

    if(playerChoice.toLowerCase() === "rock"){
        playerChoice = "Rock"
        playerPick = 1;
    } else if(playerChoice.toLowerCase() === "paper"){
        playerChoice = "Paper"
        playerPick = 2;
    } else if(playerChoice.toLowerCase() === "scissors"){
        playerChoice = "Scissors"
        playerPick = 3;
    } else {
        return console.log("You did not select a valid option");
    }

    let compChoice = Math.floor(Math.random() * 3) + 1;
    let compPick;
    if(compChoice === 1){
        compPick = "Rock";
    } else if(compChoice === 2){
        compPick = "Paper";
    } else if(compChoice === 3){
        compPick = "Scissors";
    }
    
    if ((playerPick === 3 && compChoice === 1) || playerPick < compChoice) {
        console.log(`You selected ${playerChoice}, the computer selected ${compPick}, you lose`);
    } else if ((playerPick === 1 && compChoice === 3) || playerPick > compChoice) {
        console.log(`You selected ${playerChoice}, the computer selected ${compPick}, you win`);
    } else {
        console.log(`You selected ${playerChoice}, the computer selected ${compPick}, it's a draw`);
    }
  
}

// rockPaperScissors();

//Z3 P4
//Functions that function as a slot machine

function getMoneyInput() {
    let input = prompt("How many dollars would you like to insert into the slot machine?");
    let amount = parseFloat(input);
    
    if (isNaN(amount) || amount <= 0) {
        console.log("Please enter a valid number for the amount");
        return null;
    }
    
    return amount;
}

function spinSlots() {
    const symbols = ["🍉", "🍌", "🍒", "💎", "🍊", "🍍", "🍇"];
    const results = [];
    
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        results.push(symbols[randomIndex]);
    }
    
    return results;
}

let jackpot;

function calculateWinnings(amount, results) {
    const [slot1, slot2, slot3] = results;
    
    if (slot1 === slot2 && slot2 === slot3) {
        if (slot1 === "💎") {
            jackpot = true;
            return amount * 777;
        }
        return amount * 3;
    } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
        return amount * 2;
    } else {
        return 0;
    }
}

function playSlotMachine() {
    const amount = getMoneyInput();
    
    if (amount === null) {
        return;
    }
    
    const results = spinSlots();
    
    const winnings = calculateWinnings(amount, results);
    
    console.log(`Slot Results: ${results.join(" | ")}`);
    if(jackpot === true) {
        console.log(`JACKPOT! You won $${winnings.toFixed(2)} 🎉`);
    } else if (winnings > 0) {
        console.log(`Congratulations! You won $${winnings.toFixed(2)} 🎉`);
    } else {
        console.log("Sorry, no matches. You won $0");
    }
    
}

// playSlotMachine();

//Z4 P1
//Function that is a Payroll Program. It prompts the user to enter an employees hourly rate and the number of hours they worked
//hourly rate can only be between 7.50 and 18.25, while hours worked can only be between 0 and 40 hours.

function payCalc(){
    let hourlyPay = parseFloat(prompt("Enter Your Hourly Rate"))
    while(isNaN(hourlyPay) || hourlyPay < 7.5 || hourlyPay > 18.25){
        alert("This is an invalid amount. Hourly pay can only be between $7.50 and $18.25");
        return;
    }

    let hoursWorked = parseFloat(prompt("Enter Your Hours Worked"))
    while(isNaN(hoursWorked) || hoursWorked < 0 || hoursWorked > 40){
        alert("This is an invalid amount. Hours worked can only be between 0 and 40");
        return;
    }

    let grossPay = hourlyPay * hoursWorked;
    console.log(`Hourly Pay Rate: $${hourlyPay}`);
    console.log(`Hours Worked: ${hoursWorked}`);
    console.log(`Gross Pay: $${grossPay.toFixed(2)}`);
}

// payCalc();


//Z4 P2
//Function that does seating in a theater and charges different amounts based on which section

function theaterSeats(){
    let ticketA = 20;
    let ticketB = 15;
    let ticketC = 10;

    let salesA = parseFloat(prompt("How many tickets for Section A were sold?"));
    while(isNaN(salesA) || salesA < 0 || salesA > 300){
        alert("This is an invalid amount");
        return;
    }
    let salesB = parseFloat(prompt("How many tickets for Section B were sold?"));
    while(isNaN(salesB) || salesB < 0 || salesB > 500){
        alert("This is an invalid amount");
        return;
    }
    let salesC = parseFloat(prompt("How many tickets for Section C were sold?"));
    while(isNaN(salesC) || salesC < 0 || salesC > 200){
        alert("This is an invalid amount");
        return;
    }

    let revenueA = salesA * ticketA;
    let revenueB = salesB * ticketB;
    let revenueC = salesC * ticketC;
    let revenueTotal = revenueA + revenueB + revenueC;
    
    if(salesA === 300 && salesB === 500 && salesC === 200){
        console.log(`Full House! We made $${revenueTotal.toFixed(2)} in sales`);
    } else if(salesA === 300 && salesB === 500 && salesC < 200){
        console.log(`Sections A and B sold out. We made $${revenueTotal.toFixed(2)} in sales`);
    } else if(salesA === 300 && salesB < 500 && salesC === 200){
        console.log(`Sections A and C sold out. We made $${revenueTotal.toFixed(2)} in sales`);
    } else if(salesA < 300 && salesB === 500 && salesC === 200){
        console.log(`Sections B and C sold out. We made $${revenueTotal.toFixed(2)} in sales`);
    } else if(salesA === 300 && salesB < 500 && salesC < 200){
        console.log(`Section A sold out. We made $${revenueTotal.toFixed(2)} in sales`);
    } else if(salesA < 300 && salesB === 500 && salesC < 200){
        console.log(`Section B sold out. We made $${revenueTotal.toFixed(2)} in sales`);
    } else if(salesA < 300 && salesB < 500 && salesC === 200){
        console.log(`Section C sold out. We made $${revenueTotal.toFixed(2)} in sales`);
    } else {
        console.log(`We made $${revenueTotal.toFixed(2)} in sales`);
    }
}

// theaterSeats();


//Z4 P3
//Function that serves as a fat gram calculator. Asks user for number of fat grams and calories within a particular food

function fatCalc(){
    let fat = parseInt(prompt("How many grams of Fat are in your food?"));
    while(isNaN(fat)){
        alert("This is an invalid input");
        return;
    }
    let cal = parseInt(prompt("How many calories are in your food?"));
    while(isNaN(cal) || cal > (fat * 9)){
        alert("This is an invalid input");
        return;
    }

    let fatPercent = (fat * 9) / cal;

    if(fatPercent < 0.3){
        console.log(`Your food is ${fatPercent}% fat. This is a low-fat food`)
    } else {
        console.log(`Your food is ${fatPercent}% fat`)
    }
}

// fatCalc();


//Z4 P4
//Function that serves as a speeding violation calculator. It calculates and displays the number of miles over a speed limit that a speeding driver was going. It asks for speed limit and drivers speed

function speedCalc(){
    let speedLimit = parseInt(prompt("What is the speed limit"));
    while(isNaN(speedLimit) || speedLimit < 20 || speedLimit > 70){
        alert("This is an invalid input. The Speed Limit should be between 20 and 70");
        return;
    }

    let driverSpeed = parseInt(prompt("How fast was the driver going"));
    while(isNaN(driverSpeed) || speedLimit > driverSpeed){
        alert("This is an invalid input.")
        return;
    }

    let overLimit = driverSpeed - speedLimit;
    console.log(`The driver was going ${driverSpeed}, that is ${overLimit} over the Speed Limit of ${speedLimit}`);
}

// speedCalc();

//Z4 P5
//Updated Rock Paper Scissors, See above at Z3 P3 as the modifications was already made