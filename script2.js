// Arrays con las palabras de la imagen
const firstWords = {
    'A': "Captain", 'B': "Wonder", 'C': "Super", 'D': "Phantom", 'E': "Dark", 'F': "Incredible", 'G': "Professor", 'H': "Iron", 'I': "Hawk", 'J': "Archer", 'K': "Steel", 'L': "Bolt", 'M': "Atomic", 'N': "Torch", 'O': "Space", 'P': "Mega", 'Q': "Turbo", 'R': "Fantastic", 'S': "Invisible", 'T': "Night", 'U': "Silver", 'V': "Aqua", 'W': "Amazing", 'X': "Giant", 'Y': "Rock", 'Z': "Power"
};
const secondWords = ["Shield", "Arrow", "Justice", "Thunder", "Rider", "Falcon", "Ninja", "Spider", "Beast", "Blade", "Hulk", "Doom"];

function generateSuperheroName(name, month) {
    let firstLetter = name.charAt(0).toUpperCase();
    let firstWord = firstWords[firstLetter];
    let secondWord = month;
    let superheroName = firstWord + " " + secondWord;
    return superheroName;
}

// Obtener los elementos del HTML
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const monthInput = document.getElementById("month");
const button = document.getElementById("button");
const result = document.getElementById("result");
const imageContainer = document.getElementById("image-container");

// Añadir un evento al hacer clic en el botón
button.addEventListener("click", function(event) {
    // Evitar que se recargue la página
    event.preventDefault();
    // Obtener el valor del nombre y el mes
    let name = nameInput.value;
    let month = monthInput.value;
    // Comprobar que no estén vacíos
    if (name && month) {
        // Generar el nombre de superhéroe
        let superheroName = generateSuperheroName(name, month);
        // Ocultar elementos
        form.style.display = "none";
        document.querySelector("h1").style.display = "none";
        document.querySelector("h2").style.display = "none";
        // Mostrar el nombre de superhéroe en el párrafo
        result.textContent = "Your superhero name is: " + superheroName;
        // Mostrar imagen proporcionada
        let imagePath = "https://www.mundodeportivo.com/alfabeta/hero/2023/06/mejores-superheroes-que-no-son-de-dc-y-marvel.jpg?width=1200"; // URL de la imagen
        let imageElement = document.createElement("img");
        imageElement.src = imagePath;
        imageElement.classList.add("superhero-image");
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imageElement);
        // Mostrar solo el nombre y la imagen
        result.style.display = "block";
        imageContainer.style.display = "block";
    } else {
        // Mostrar un mensaje de error
        result.textContent = "Please enter your name and the month of your birth";
    }
});


