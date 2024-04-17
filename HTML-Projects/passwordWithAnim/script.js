let state = false;
const eyeWrapper = document.getElementById("eye-wrapper");

function toggleState() {
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        eyeWrapper.style.boxShadow = "0 0 0 0 #fff";
        document.getElementById("open").style.display = "none";
        document.getElementById("close").style.display = "block";
        state = false;
    } else {
        document.getElementById("password").setAttribute("type", "text");
        eyeWrapper.style.boxShadow = "0 0 0 25em #fff";
        document.getElementById("open").style.display = "block";
        document.getElementById("close").style.display = "none";
        
        state = true;
    }
}

eyeWrapper.addEventListener("click", toggleState);
