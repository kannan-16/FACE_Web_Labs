//Trial 1: Add ___ chocolates of ____ color
function addChocolates(color, number) {
    for(let i=0; i<number; i++)
        chocolates.unshift(color);
}

//Trial 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(number) {
    let removedChoco = [];
    for(let i=0; i<number; i++)
        removedChoco.push(chocolates.shift());
    return removedChoco;
}

//Trial 3: Dispense ___ chocolates
function dispenseChocolates(number) {
    let dispensedChoco = [];
    for(let i=0; i<number; i++)
        dispensedChoco.push(chocolates.pop());
    return dispensedChoco;
}

//Trial 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(number, color) {
    let dispensedChoco = [];
    let filteredArray = chocolates.filter(ch => ch===color);
    for(let i=0; i<number; i++)
        dispensedChoco.push(filteredArray.pop());
    return dispensedChoco;
}

//Trial 5: Display ___ chocolates of each color. Return array of numbers [green, red, purple, blue, crimson, silver, pink]
function noOfChocolates() {
    let types = chocolates.filter(e => e.indexOf()==-1);
    let numbers = [];
    for(let i=0; i<types.length; i++) {
        numbers[i] = chocolates.reduce((acc, val) => acc += (val==types[i])?1:0);
    }
    return numbers;
}

//Trial 6: Sort chocolates based on total in each color. Return array of colors
function sortChocolateBasedOnTotal() {
    let numbers = noOfChocolates();
    
}

//Trial 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(noOfChocolates, color, finalColor) {
}

//Trial 8: Change all chocolates of ____ color to ____ color and display total
function changeChocolateColorAllOfxTotal(color, finalColor) {
}

//Quest 1: Remove chocolates of ____ color from the top
function removeChocolatesOfColor(color) {
}

//Quest 2: Dispense 1 rainbow colored colored chocolate for every 3 differently chocolates dispensed
function dispenseRainbowChocolates(noOfChocolates) {
}

//Challenge 1:


//Challenge 2:


var chocolates = ["green","green","green","silver","blue","crimson","purple",
                  "purple","green","pink","blue","red","silver","crimson",
                  "red","green","red","silver","pink","crimson","purple",
                  "crimson","pink","silver","blue","pink","crimson","crimson",
                  "purple","green","pink","blue","red","crimson","silver",
                  "red","purple","red","blue","silver","green","crimson",
                  "purple","green","pink","green","red","silver","crimson",
                  "red","pink","blue","silver","pink","crimson","purple",
                  "red","purple","silver","blue","pink","silver","crimson",
                  "purple","green","blue","blue","red","red","silver"];