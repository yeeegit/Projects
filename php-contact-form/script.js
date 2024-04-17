const form = document.getElementById("contactForm");
const formStatus = form.querySelector(".button-area span");
const sendButton = form.querySelector("button[type='submit']");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  formStatus.innerText = "Sending...";
  sendButton.disabled = true;
  sendButton.style.backgroundColor = "grey";

  try {
    const formData = new FormData(form);
    const response = await fetch("action.php", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const responseData = await response.text();
      formStatus.innerText = responseData;
    } else {
      console.error("Failed to submit form:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    sendButton.disabled = false;
    sendButton.style.backgroundColor = "";
  }
});
