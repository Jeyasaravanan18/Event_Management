document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Attendance marked for: " + e.target.name.value);
});
