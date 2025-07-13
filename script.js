document.addEventListener('DOMContentLoaded', () => {
    const pokemonForm = document.getElementById('pokemonForm');
    const pokemonAlbum = document.getElementById('pokemonAlbum');

    // Array para almacenar los Pokémon
    let pokemons = [];

    // Función para renderizar los Pokémon
    const renderPokemons = () => {
        pokemonAlbum.innerHTML = pokemons.map(pokemon => `
            <div class="pokemon-card">
                <img src="${pokemon.imageUrl}" alt="${pokemon.name}">
                <h3>${pokemon.name}</h3>
                <p>Tipo: ${pokemon.type}</p>
                <button onclick="deletePokemon('${pokemon.id}')">Liberar</button>
            </div>
        `).join('');
    };

    // Manejador del evento submit del formulario (función flecha)
    pokemonForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que la página se recargue

        const nameInput = document.getElementById('pokemonName');
        const typeInput = document.getElementById('pokemonType');
        const imageInput = document.getElementById('pokemonImage');

        const newPokemon = {
            id: Date.now().toString(), // Genera un ID único para el Pokémon
            name: nameInput.value,
            type: typeInput.value,
            imageUrl: imageInput.value
        };

        pokemons.push(newPokemon); // Agrega el nuevo Pokémon al array
        renderPokemons(); // Vuelve a renderizar el álbum

        // Limpia el formulario
        nameInput.value = '';
        typeInput.value = '';
        imageInput.value = '';
    });

    // Función global para eliminar un Pokémon (llamada desde onclick)
    window.deletePokemon = (idToDelete) => {
        pokemons = pokemons.filter(pokemon => pokemon.id !== idToDelete); // Filtra el Pokémon a eliminar
        renderPokemons(); // Vuelve a renderizar el álbum
    };

    // Renderiza los Pokémon iniciales (el array empieza vacío)
    renderPokemons();
});