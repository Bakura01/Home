document.querySelector(".submit").onclick = async () => {
  let pokemonGen = document.querySelector(".input-pokemon").value;
  let generationLenght = (
    await getPokemonData(`https://pokeapi.co/api/v2/generation/${pokemonGen}`)
  ).pokemon_species.length;
  for (let i = 0; i < generationLenght; i++) {
    let newPokebox = document.createElement("div");
    let pokemonName = document.createElement("p");

    let url = `https://pokeapi.co/api/v2/generation/${pokemonGen}`;
    let pokemonSprite = document.createElement("img");

    pokemonName.innerText = (await getPokemonData(url)).pokemon_species[i].name;
    url = (await getPokemonData(url)).pokemon_species[i].name;
    url = `https://pokeapi.co/api/v2/pokemon/${url}`;
    let newUrl = (await getPokemonData(url)).sprites.front_default;
    pokemonSprite.setAttribute("src", newUrl);
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
