document.getElementById('display-Btn').addEventListener('click',function(){
    const numCount = document.getElementById('input-1').value;
    const selectedPokemonType = document.getElementById('type-selection').value;

    document.querySelector('.displaycard').innerHTML = '';
    document.getElementById('input-1').value = " ";
    document.getElementById('type-selection').selectedIndex = 0;

    fetchPokemonData(numCount,selectedPokemonType);
})

async function fetchPokemonData(numCount,type){
    console.log(numCount)
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const selectedType = await response.json()

    const allPokemon = selectedType.pokemon.slice(0,numCount);
    const displayCardContainer = document.querySelector('.displaycard');


    for(let pokemon of allPokemon){
        const pokemonsURL = pokemon.pokemon.url;

        const pokemonResponse = await fetch(pokemonsURL);
        const pokemonData = await pokemonResponse.json();

        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${pokemonData.sprites.front_default}" alt = "${pokemonData.name}">
        <h3>${pokemonData.name}</h3>
        <p>TYPE: ${type}</p>`;

        displayCardContainer.appendChild(card)
    }

}