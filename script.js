// Temporary storage for attendees
let attendees = [];

// Listen for form submission
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = e.target.name.value.trim();

  if (name) {
    attendees.push(name); // Store the name
    console.log("Current Attendees:", attendees); // Show in console
    alert(`Attendance marked for: ${name}`);
    e.target.reset(); // Clear form
  } else {
    alert("Please enter a name.");
  }
});
