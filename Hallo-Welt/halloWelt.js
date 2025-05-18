let button = document.getElementById("btn");
let hwElement;

button.addEventListener("click", function() {
    if(!hwElement) {
        hwElement = document.createElement("h2");
        hwElement.innerText = "Mache das Beste aus dem Tag!";
        document.body.appendChild(hwElement);


        setTimeout(function name() {
            hwElement.remove();
            hwElement = null;
        }, 3000);
    }
});
