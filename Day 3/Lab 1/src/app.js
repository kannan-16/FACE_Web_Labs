var chocolates = [  
    "green","green","green","silver","blue","crimson","purple","red","crimson","purple",
    "purple","green","pink","blue","red","silver","crimson","purple","silver","silver",
    "red","green","red","silver","pink","crimson","purple","green","red","silver",
    "crimson","pink","silver","blue","pink","crimson","crimson","crimson","red","purple",
    "purple","green","pink","blue","red","crimson","silver","purple","purple","purple",
    "red","purple","red","blue","silver","green","crimson","silver","blue","crimson",
    "purple","green","pink","green","red","silver","crimson","blue","green","red",
    "red","pink","blue","silver","pink","crimson","purple","green","red","blue",
    "red","purple","silver","blue","pink","silver","crimson","silver","blue","purple",
    "purple","green","blue","blue","red","red","silver","purple","silver","crimson"
];

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
    for(let i=0; i<number; i++) {
        let indexOf = chocolates.lastIndexOf(color);
        chocolates.splice(indexOf,1);
    }
}

//Trial 5: Display ___ chocolates of each color. Return array of numbers [green, red, purple, blue, crimson, silver, pink]
function noOfChocolates() {
    let types = chocolates.filter(e => e.indexOf()==-1);
    let numbers = [];
    for(let i=0; i<types.length; i++) {
        numbers[i] = chocolates.reduce((acc, val) => acc += (val==types[i])?1:0, 0);
    }
    return numbers;
}

//Trial 6: Sort chocolates based on total in each color. Return array of colors
function sortChocolateBasedOnTotal() {
    numbers = noOfChocolates();
    var chocolateCount = {
        "green": numbers[0],
        "red": numbers[1],
        "purple": numbers[2],
        "blue": numbers[3],
        "crimson": numbers[4],
        "silver": numbers[5],
        "pink": numbers[6]
    }
    chocolates = chocolates.sort((a,b) => {
        if(chocolateCount[a] < chocolateCount[b]) {
            temp = a;
            a = b;
            b = temp;
        }
    });
    console.log(chocolates);
}
sortChocolateBasedOnTotal();

//Trial 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(noOfChocolates, color, finalColor) {
    let chocChanged = 0;
    chocolates.map(e => {
        if(ch==color) {
            chocChanged++;
            if(chocChanged<=noOfChocolates)
                return finalColor;
            else
                break;
        }
        else {
            return e;
        }
    });
}

//Trial 8: Change all chocolates of ____ color to ____ color and display total of the changed color
function changeChocolateColorAllOfxTotal(color, finalColor) {
    return chocolates.map(e => (e==color)?finalColor:color).reduce((acc,val) => acc+=(val==finalColor)?1:0);
}

//Challenge 1: Remove chocolates of ____ color from the top
function removeChocolatesOfColor(color) {
    for(let i = 0; i < chocolates.length; i++){ 
        if (chocolates[i] === color) {
          arr.splice(i, 1);
          break;
        }
    }
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(noOfChocolates) {
    dispenseChocolates = dispenseChocolates(noOfChocolates);
    let frequency = [dispenseChocolates.length];  
    let visited = -1;  
    
    for(let i = 0; i < dispenseChocolates.length; i++){  
        let count = 1;  
        for(let j = i+1; j < dispenseChocolates.length; j++){  
            if(dispenseChocolates[i] == dispenseChocolates[j]){  
                count++;
                frequency[j] = visited; 
            }  
        }  
        if(frequency[i] != visited)  
            frequency[i] = count;
    }

    let rainbowChocolates = 0;
    for(let i = 0; i < frequency.length; i++){  
        if(frequency[i] != visited && frequency[i]%3 == 0)  {
            rainbowChocolates += frequency[i]/3;
        }  
    }
    return rainbowChocolates;
}

//Judgement 1: 


//Judgement 2: