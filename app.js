document.getElementById('play').addEventListener("click",()=>{
    reproducir(document.getElementById("texto").value);
});
function reproducir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}