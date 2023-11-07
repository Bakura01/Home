document.querySelector(".submit").onclick = async () => {
  let pokemonGen = document.querySelector(".input-pokemon").value;
  let genIdEnd = (
    await getPokemonData(`https://pokeapi.co/api/v2/generation/${pokemonGen}`)
  ).pokemon_species.length;

  for (let i = 0; i < genIdEnd; i++) {
    let url = `https://pokeapi.co/api/v2/generation/${pokemonGen}`;
    let newPokebox = document.createElement("div");
    let pokemonName = document.createElement("p");
    let pokemonSprite = document.createElement("img");

    /* get the path to the sprite of the pokemon */
    pokemonName.innerText = (await getPokemonData(url)).pokemon_species[i].name;
    let urlToPokemon = (await getPokemonData(url)).pokemon_species[i].url;
    let urlToSprite = (await getPokemonData(urlToPokemon)).varieties[0].pokemon
      .url;
    let newUrl = (await getPokemonData(urlToSprite)).sprites.front_default;

    pokemonSprite.setAttribute("src", newUrl);
    /* get the elements into the website */
    document.querySelector(".pokemon-list").appendChild(newPokebox);
    newPokebox.appendChild(pokemonSprite);
    newPokebox.appendChild(pokemonName);
  }
};

async function getPokemonData(url) {
  let responseFromServer = await fetch(url);
  let output = await responseFromServer.json();
  return output;
}
document.querySelector(".reset").onclick = () => {
  let body = document.querySelector("body");
  document.querySelector(".pokemon-list").remove();
  let newList = document.createElement("section");
  newList.setAttribute("class", "pokemon-list");
  body.appendChild(newList);
};
