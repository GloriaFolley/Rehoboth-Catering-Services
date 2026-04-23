function sendToWhatsApp(event) {
  event.preventDefault();

  // Collect form data
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const eventType = document.getElementById("event").value;
  const date = document.getElementById("date").value;
  const people = Number(document.getElementById("people").value);
  const requirements = document.getElementById("requirements").value.trim();

  // Basic validation
  if (!name || !phone || !email || !eventType || !date || !requirements) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!people || people <= 0) {
    alert("Please enter a valid number of people.");
    return;
  }

  // Build WhatsApp message
  const message = `*Rehoboth Catering Booking Request*

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}

🎉 Event Type: ${eventType}
📅 Event Date: ${date}
👥 Expected People: ${people}

📝 Requirements:
${requirements}
`;

  const url = "https://wa.me/233571636986?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
