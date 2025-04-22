// Configurações
const POKEMON_API = 'https://pokeapi.co/api/v2';
const POKEMON_LIMIT = 1025; // Total de Pokémon até a 9ª geração
const MEGA_EVOLUTIONS = [
    'mega-venusaur', 'mega-charizard-x', 'mega-charizard-y', 'mega-blastoise',
    'mega-beedrill', 'mega-pidgeot', 'mega-alakazam', 'mega-slowbro',
    'mega-gengar', 'mega-kangaskhan', 'mega-pinsir', 'mega-gyarados',
    'mega-aerodactyl', 'mega-mewtwo-x', 'mega-mewtwo-y', 'mega-ampharos',
    'mega-scizor', 'mega-heracross', 'mega-houndoom', 'mega-tyranitar',
    'mega-blaziken', 'mega-sceptile', 'mega-swampert', 'mega-gardevoir',
    'mega-sableye', 'mega-mawile', 'mega-aggressor', 'mega-medicham',
    'mega-manectric', 'mega-sharpedo', 'mega-camerupt', 'mega-altaria',
    'mega-banette', 'mega-absol', 'mega-glalie', 'mega-salamence',
    'mega-metagross', 'mega-latias', 'mega-latios', 'mega-rayquaza',
    'mega-lopunny', 'mega-garchomp', 'mega-lucario', 'mega-abomasnow',
    'mega-gallade', 'mega-audino', 'mega-diancie'
];

// Elementos do DOM
const pokemonContainer = document.getElementById('pokemon-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const modal = document.getElementById('pokemon-modal');
const closeButton = document.querySelector('.close-button');
const pokemonDetails = document.querySelector('.pokemon-details');
const generationFilter = document.getElementById('generation-filter');

// Cores para os tipos de Pokémon
const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
};

// Função para buscar Pokémon da API
async function fetchPokemon() {
    try {
        const response = await fetch(`${POKEMON_API}/pokemon?limit=${POKEMON_LIMIT}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
        return [];
    }
}

// Função para buscar detalhes de um Pokémon específico
async function fetchPokemonDetails(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar detalhes do Pokémon:', error);
        return null;
    }
}

// Função para criar o card de um Pokémon
function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.className = 'pokemon-card';
    
    // Verifica se é uma mega evolução
    const isMega = MEGA_EVOLUTIONS.includes(pokemon.name);
    const megaBadge = isMega ? '<span class="mega-badge">MEGA</span>' : '';
    
    card.innerHTML = `
        ${megaBadge}
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <div class="pokemon-types">
            ${pokemon.types.map(type => `
                <span class="type-badge" style="background-color: ${typeColors[type.type.name]}">
                    ${type.type.name}
                </span>
            `).join('')}
        </div>
    `;

    card.addEventListener('click', () => showPokemonDetails(pokemon));
    return card;
}

// Função para mostrar os detalhes de um Pokémon
function showPokemonDetails(pokemon) {
    const statsHTML = pokemon.stats.map(stat => `
        <div class="stat">
            <span>${stat.stat.name}: ${stat.base_stat}</span>
            <div class="stat-bar">
                <div class="stat-fill" style="width: ${(stat.base_stat / 255) * 100}%"></div>
            </div>
        </div>
    `).join('');

    // Verifica se é uma mega evolução
    const isMega = MEGA_EVOLUTIONS.includes(pokemon.name);
    const megaBadge = isMega ? '<span class="mega-badge">MEGA EVOLUTION</span>' : '';

    pokemonDetails.innerHTML = `
        ${megaBadge}
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <div class="pokemon-types">
            ${pokemon.types.map(type => `
                <span class="type-badge" style="background-color: ${typeColors[type.type.name]}">
                    ${type.type.name}
                </span>
            `).join('')}
        </div>
        <div class="pokemon-stats">
            ${statsHTML}
        </div>
    `;

    modal.style.display = 'block';
}

// Função para inicializar a Pokédex
async function initPokedex() {
    const pokemons = await fetchPokemon();
    const pokemonDetails = await Promise.all(
        pokemons.map(pokemon => fetchPokemonDetails(pokemon.url))
    );

    pokemonDetails.forEach(pokemon => {
        if (pokemon) {
            const card = createPokemonCard(pokemon);
            pokemonContainer.appendChild(card);
        }
    });
}

// Função para buscar Pokémon por nome
async function searchPokemon() {
    const searchTerm = searchInput.value.toLowerCase();
    const pokemons = await fetchPokemon();
    const filteredPokemons = pokemons.filter(pokemon => 
        pokemon.name.includes(searchTerm)
    );

    pokemonContainer.innerHTML = '';
    const pokemonDetails = await Promise.all(
        filteredPokemons.map(pokemon => fetchPokemonDetails(pokemon.url))
    );

    pokemonDetails.forEach(pokemon => {
        if (pokemon) {
            const card = createPokemonCard(pokemon);
            pokemonContainer.appendChild(card);
        }
    });
}

// Event Listeners
searchButton.addEventListener('click', searchPokemon);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchPokemon();
    }
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Inicializar a Pokédex
initPokedex(); 