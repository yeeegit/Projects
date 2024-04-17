let imgBox = document.getElementById("img-box");
let qrCode = document.getElementById("qr-code");
let qrText = document.getElementById("qr-text");

const qrButton = document.getElementById("qr-button");
qrButton.addEventListener("click", QRgenerator);

function QRgenerator() {
  if (qrText.value.length > 0) {
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1111);
  }
}
