// create a new manager using createManager Function

let manager1 = createManager("Alex Ferguson", 78, "Manchester FC", 27);

// Populate the manager section usnig the new manager

document.getElementById("manager-name").textContent = manager1[0];
document.getElementById("manager-age").textContent = manager1[1];
document.getElementById("manager-team").textContent = manager1[2];
document.getElementById("manager-trophies").textContent = manager1[3];

// Populate the manager
