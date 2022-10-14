const joke = document.getElementById("joke");
const button = document.getElementById("joke-btn");
const requestJoke = async function() {
    const result = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await result.json();
    joke.innerHTML = data.type === "twopart" ? `${data.setup} <strong> ${data.delivery}</strong>` : data.setup;
    console.log(data);
};
button.addEventListener("click", ()=>{
    requestJoke();
});
requestJoke();

//# sourceMappingURL=index.672d4772.js.map
