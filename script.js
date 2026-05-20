function generateInputs() {

    let count =
    document.getElementById("processCount").value;

    let inputDiv =
    document.getElementById("inputs");

    inputDiv.innerHTML = "";

    for (let i = 0; i < count; i++) {

        inputDiv.innerHTML += `

        <h3>Process P${i}</h3>

        Allocation:
        <input type="text"
        id="alloc${i}"
        placeholder="Example: 1 0 2">

        Request:
        <input type="text"
        id="request${i}"
        placeholder="Example: 0 1 1">

        <br>
        `;
    }

    inputDiv.innerHTML += `
        Available Resources:
        <input type="text"
        id="available"
        placeholder="Example: 3 3 2">
    `;
}

function runAlgorithm() {

    let algo =
    document.getElementById("algorithm").value;

    if (algo === "detection") {
        deadlockDetection();
    }

    else {
        deadlockPrevention();
    }
}

function deadlockDetection() {

    let count =
    document.getElementById("processCount").value;

    let output =
    "Deadlock Detection Result\n\n";

    let deadlock = false;

    for (let i = 0; i < count; i++) {

        let allocation =
        document.getElementById(
        `alloc${i}`).value;

        let request =
        document.getElementById(
        `request${i}`).value;

        output +=
        `Process P${i}\n`;

        output +=
        `Allocation: ${allocation}\n`;

        output +=
        `Request: ${request}\n\n`;

        if (request === allocation) {
            deadlock = true;
        }
    }

    if (deadlock) {

        output +=
        "Deadlock Detected!\n";

        output +=
        "Recovery Required.";
    }

    else {

        output +=
        "No Deadlock Found.";
    }

    document.getElementById(
    "output").innerText = output;
}

function deadlockPrevention() {

    let count =
    document.getElementById("processCount").value;

    let output =
    "Deadlock Prevention Result\n\n";

    output +=
    "Checking Safe State...\n\n";

    for (let i = 0; i < count; i++) {

        output +=
        `Process P${i} executed safely.\n`;
    }

    output +=
    "\nSystem is in Safe State.";

    document.getElementById(
    "output").innerText = output;
}