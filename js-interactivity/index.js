console.log("Hello World");

let message = document.querySelector("#message");

function addMovie(event){
    event.preventDefault();
    let inputField = document.querySelector("input");

    if(inputField.value !== "") {
        let movie = document.createElement("li");
        let  movieTitle = document.createElement("span");
    
        movieTitle.textContent = inputField.value;
        movieTitle.addEventListener("click", crossOffMovie)
        movie.appendChild(movieTitle);

        let deleteBtn = document.createElement("button");

        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", deleteMovie);

        movie.appendChild(deleteBtn);

        document.querySelector("ul").appendChild(movie);
        inputField.value = "";
    }
}

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = `${event.target.parentNode.children[0].textContent} will never be watched again.`;
    revealMessage();
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked");
    if(event.target.classList.contains("checked")) {
        message.textContent = `${event.target.textContent} was a good movie.`;
    } else {
        message.textContent = `${event.target.textContent} will be watched again.`;
    }
    revealMessage();
}

function revealMessage() {
    message.classList.remove("hide");
    console.log(message.classList)
    setTimeout(() => {message.classList.add("hide")}, 2000);
    console.log(message.classList)
}

document.querySelector("form").addEventListener("submit", addMovie);