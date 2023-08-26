
let Colapsale = document.getElementsByClassName("Colapsable");
console.log(Colapsale)


for (let i = 0; i < Colapsale.length; i++) {
    Colapsale[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let contenido = this.nextElementSibling;
        if (contenido.style.display === "block") {
            contenido.style.display = "none";
        } else{
            contenido.style.display = "block";
        }
    });
}
