function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
    document.getElementById("outputText").classList.add("show-text");
    document.getElementById("copyButton").style.display = "block";
}

function decryptText() {
    let inputText = document.getElementById("inputText").value;
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
    document.getElementById("outputText").classList.add("show-text");
    document.getElementById("copyButton").style.display = "none";
}

function copyText() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Texto copiado: " + outputText.value);
}

document.getElementById("year").textContent = new Date().getFullYear() +" Jairo Moises soler";

