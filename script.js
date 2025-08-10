let registeredRolls = new Set();

document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let event = document.getElementById("event").value;
    let roll = document.getElementById("roll").value.trim();
    let name = document.getElementById("name").value.trim();
    let dept = document.getElementById("dept").value.trim();
    let message = document.getElementById("message");

    if (!event || !roll || !name || !dept) {
        message.textContent = "Please fill all fields.";
        message.className = "error";
        return;
    }

    if (registeredRolls.has(roll)) {
        message.textContent = "This Roll No has already registered for an event!";
        message.className = "error";
    } else {
        registeredRolls.add(roll);
        message.textContent = "Registration successful for " + event;
        message.className = "success";
    }
});
