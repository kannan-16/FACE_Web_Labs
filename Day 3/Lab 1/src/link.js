//while (true) {
console.log(chocolates);
console.log("CHOCOLATE DISPENSER");
console.log(" 1. Add");
console.log(" 2. Remove");
console.log(" 3. Dispense");
console.log(" 4. Dispense (color)");
console.log(" 5. Count");
console.log(" 6. Sort (count)");
console.log(" 7. Change color");
console.log(" 8. Change color (all)");
console.log(" 9. Remove (color)");
console.log("10. Dispense (rainbow)");
var choice = prompt("Enter choice");
switch (Number(choice)) {
    case 1:
        var color = prompt("Enter color");
        var count = prompt("Enter count");
        addChocolates(chocolates, color, count);
        break;
    case 2:
        var number = prompt("Enter number");
        console.log("Chocolates removed: " + removeChocolates(chocolates, number));
        break;
    case 3:
        var number = prompt("Enter number");
        console.log("Chocolates dispensed: " + dispenseChocolates(chocolates, number));
        break;
    case 4:
        var color = prompt("Enter color");
        var number = prompt("Enter count");
        console.log("Chocolates dispensed: " + dispenseChocolatesOfColor(chocolates, number, color));
        break;
    case 5:
        var count = noOfChocolates(chocolates);
        console.log("Green: " + count[0] + " Red: " + count[1] + " Purple: " + count[2] + " Blue: " + count[3] + " Crimson: " + count[4] + " Silver: " + count[5] + " Pink: " + count[6]);
        break;
    case 6:
        sortChocolateBasedOnCount(chocolates);
        break;
    case 7:
        var count = prompt("Number of chocolates to change");
        var currentColor = prompt("Current color");
        var finalColor = prompt("Desired color");
        changeChocolateColor(chocolates, count, currentColor, finalColor);
        break;
    case 8:
        var currentColor = prompt("Current color");
        var finalColor = prompt("Desired color");
        changeChocolateColorAllOfxCount(chocolates, currentColor, finalColor);
        break;
    case 9:
        var color = prompt("Color to be removed");
        console.log("Chocolate removed: " + removeChocolateOfColor(chocolates, color));
        break;
    case 10:
        var count = prompt("Chocolates to dispense");
        console.log("Rainbow chocolates dispensed: " + count);
        break;
}
//}
console.log(chocolates);