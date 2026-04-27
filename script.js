function sendToWhatsApp(e){
  e.preventDefault();

  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const event = document.getElementById("event");
  const date = document.getElementById("date");
  const people = document.getElementById("people");
  const msg = document.getElementById("msg");
  const otherEvent = document.getElementById("otherEvent");

  const eventType = (event.value === "Other" && otherEvent.value.trim() !== "")
    ? otherEvent.value
    : event.value;

  const text = `
Booking Request:
------------------------
Name: ${name.value}
Phone: ${phone.value}
Event: ${eventType}
Date: ${date.value}
Guests: ${people.value}
Details: ${msg.value}
`;

  window.open(
    "https://wa.me/233571636986?text=" + encodeURIComponent(text),
    "_blank"
  );
}
