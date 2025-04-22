// Configurações
const POKEMON_API = 'https://pokeapi.co/api/v2';
const POKEMON_LIMIT = 1025; // Total de Pokémon até a 9ª geração
const MEGA_EVOLUTIONS = {
    'venusaur': { mega: true, megaX: false, megaY: false },
    'charizard': { mega: false, megaX: true, megaY: true },
    'blastoise': { mega: true, megaX: false, megaY: false },
    'beedrill': { mega: true, megaX: false, megaY: false },
    'pidgeot': { mega: true, megaX: false, megaY: false },
    'alakazam': { mega: true, megaX: false, megaY: false },
    'slowbro': { mega: true, megaX: false, megaY: false },
    'gengar': { mega: true, megaX: false, megaY: false },
    'kangaskhan': { mega: true, megaX: false, megaY: false },
    'pinsir': { mega: true, megaX: false, megaY: false },
    'gyarados': { mega: true, megaX: false, megaY: false },
    'aerodactyl': { mega: true, megaX: false, megaY: false },
    'mewtwo': { mega: false, megaX: true, megaY: true },
    'ampharos': { mega: true, megaX: false, megaY: false },
    'scizor': { mega: true, megaX: false, megaY: false },
    'heracross': { mega: true, megaX: false, megaY: false },
    'houndoom': { mega: true, megaX: false, megaY: false },
    'tyranitar': { mega: true, megaX: false, megaY: false },
    'blaziken': { mega: true, megaX: false, megaY: false },
    'gardevoir': { mega: true, megaX: false, megaY: false },
    'mawile': { mega: true, megaX: false, megaY: false },
    'aggron': { mega: true, megaX: false, megaY: false },
    'medicham': { mega: true, megaX: false, megaY: false },
    'manectric': { mega: true, megaX: false, megaY: false },
    'sharpedo': { mega: true, megaX: false, megaY: false },
    'camerupt': { mega: true, megaX: false, megaY: false },
    'altaria': { mega: true, megaX: false, megaY: false },
    'banette': { mega: true, megaX: false, megaY: false },
    'absol': { mega: true, megaX: false, megaY: false },
    'glalie': { mega: true, megaX: false, megaY: false },
    'salamence': { mega: true, megaX: false, megaY: false },
    'metagross': { mega: true, megaX: false, megaY: false },
    'latias': { mega: true, megaX: false, megaY: false },
    'latios': { mega: true, megaX: false, megaY: false },
    'rayquaza': { mega: true, megaX: false, megaY: false },
    'lopunny': { mega: true, megaX: false, megaY: false },
    'garchomp': { mega: true, megaX: false, megaY: false },
    'lucario': { mega: true, megaX: false, megaY: false },
    'abomasnow': { mega: true, megaX: false, megaY: false },
    'gallade': { mega: true, megaX: false, megaY: false },
    'audino': { mega: true, megaX: false, megaY: false },
    'diancie': { mega: true, megaX: false, megaY: false }
};

// Configurações da API
const POKEMON_TCG_API_KEY = 'b1c0a7e0-7b1a-4b1a-8b1a-4b1a8b1a4b1a'; // Substitua esta chave pela sua chave real
const POKEMON_TCG_API_URL = 'https://api.pokemontcg.io/v2';

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
    const isMega = MEGA_EVOLUTIONS[pokemon.name];
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
async function showPokemonDetails(pokemon) {
    const modal = document.getElementById('pokemon-modal');
    const pokemonName = document.getElementById('pokemon-name');
    const pokemonTypes = document.getElementById('pokemon-types');
    const pokemonStats = document.getElementById('pokemon-stats');
    const pokemonOfficial = document.getElementById('pokemon-official');
    const pokemonShiny = document.getElementById('pokemon-shiny');
    const pokemonCard = document.getElementById('pokemon-card');

    // Mostrar modal
    modal.style.display = 'block';

    // Verificar se o Pokémon tem mega evolução
    const hasMega = MEGA_EVOLUTIONS[pokemon.name];
    const megaBadge = hasMega ? '<span class="mega-badge">MEGA EVOLUTION</span>' : '';

    // Nome do Pokémon com badge de mega evolução
    pokemonName.innerHTML = `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} ${megaBadge}`;

    // Tipos do Pokémon
    pokemonTypes.innerHTML = pokemon.types.map(type => 
        `<span class="type-badge ${type.type.name}">${type.type.name}</span>`
    ).join('');

    // Estatísticas do Pokémon
    pokemonStats.innerHTML = pokemon.stats.map(stat => `
        <div class="stat">
            <span class="stat-name">${stat.stat.name}:</span>
            <div class="stat-bar">
                <div class="stat-fill" style="width: ${(stat.base_stat / 255) * 100}%"></div>
            </div>
            <span class="stat-value">${stat.base_stat}</span>
        </div>
    `).join('');

    // Imagem oficial (usando a imagem de alta qualidade)
    pokemonOfficial.src = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
    pokemonOfficial.alt = `Imagem oficial de ${pokemon.name}`;
    pokemonOfficial.title = `Imagem oficial de ${pokemon.name}`;

    // Imagem shiny
    pokemonShiny.src = pokemon.sprites.other['official-artwork'].front_shiny || pokemon.sprites.front_shiny;
    pokemonShiny.alt = `Versão shiny de ${pokemon.name}`;
    pokemonShiny.title = `Versão shiny de ${pokemon.name}`;

    // Mostrar indicador de carregamento para a carta
    pokemonCard.src = 'images/loading.svg';
    pokemonCard.alt = 'Carregando carta...';
    pokemonCard.title = 'Buscando carta mais rara...';

    // Buscar carta TCG
    try {
        const response = await fetch(`${POKEMON_TCG_API_URL}/cards?q=name:${pokemon.name}&orderBy=-rarity`, {
            headers: {
                'X-Api-Key': POKEMON_TCG_API_KEY
            }
        });
        
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
            // Pegar a primeira carta (mais rara)
            const card = data.data[0];
            pokemonCard.src = card.images.large;
            pokemonCard.alt = `Carta TCG de ${pokemon.name} - ${card.rarity}`;
            
            // Adicionar tooltip com informações detalhadas da carta
            const cardInfo = [
                `Raridade: ${card.rarity}`,
                `Série: ${card.set.name}`,
                `Número: ${card.number}/${card.set.printedTotal}`,
                card.marketPrices?.latest ? `Preço: $${card.marketPrices.latest}` : ''
            ].filter(Boolean).join('\n');
            
            pokemonCard.title = cardInfo;
        } else {
            pokemonCard.src = 'images/no-card.svg';
            pokemonCard.alt = 'Carta não disponível';
            pokemonCard.title = 'Nenhuma carta encontrada para este Pokémon.';
        }
    } catch (error) {
        console.error('Erro ao buscar carta TCG:', error);
        pokemonCard.src = 'images/no-card.svg';
        pokemonCard.alt = 'Erro ao carregar carta';
        pokemonCard.title = 'Erro ao carregar carta. Tente novamente mais tarde.';
    }

    // Buscar imagens da mega evolução se disponível
    if (hasMega) {
        try {
            const megaForms = [];
            if (hasMega.mega) {
                megaForms.push(`${pokemon.name}-mega`);
            }
            if (hasMega.megaX) {
                megaForms.push(`${pokemon.name}-mega-x`);
            }
            if (hasMega.megaY) {
                megaForms.push(`${pokemon.name}-mega-y`);
            }

            for (const form of megaForms) {
                const megaResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${form}`);
                if (megaResponse.ok) {
                    const megaData = await megaResponse.json();
                    const megaImages = document.createElement('div');
                    megaImages.className = 'mega-images';
                    
                    const formName = form.split('-').pop().toUpperCase();
                    megaImages.innerHTML = `
                        <div class="image-container">
                            <h3>Mega Evolution ${formName}</h3>
                            <img src="${megaData.sprites.other['official-artwork'].front_default}" 
                                 alt="Mega ${pokemon.name} ${formName}" 
                                 title="Mega ${pokemon.name} ${formName}">
                        </div>
                    `;
                    document.querySelector('.pokemon-images').appendChild(megaImages);
                }
            }
        } catch (error) {
            console.error('Erro ao buscar mega evolução:', error);
        }
    }
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

// Event listener para o filtro de geração
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado');
    const generationFilter = document.getElementById('generation-filter');
    
    if (generationFilter) {
        console.log('Filtro de geração encontrado');
        generationFilter.addEventListener('change', (e) => {
            console.log('Geração selecionada:', e.target.value);
            filterByGeneration(e.target.value);
        });
    } else {
        console.error('Filtro de geração não encontrado');
    }
    
    // Inicializar o contador
    updatePokemonCount();
});

// Função para filtrar Pokémon por geração
function filterByGeneration(generation) {
    console.log('Filtrando por geração:', generation);
    const pokemonCards = document.querySelectorAll('.pokemon-card');
    const pokemonContainer = document.getElementById('pokemon-container');
    
    console.log('Total de cards:', pokemonCards.length);
    
    // Adicionar classe de loading ao container
    pokemonContainer.classList.add('loading');
    
    // Definir os intervalos de cada geração
    const genRanges = {
        '1': { start: 1, end: 151 },
        '2': { start: 152, end: 251 },
        '3': { start: 252, end: 386 },
        '4': { start: 387, end: 493 },
        '5': { start: 494, end: 649 },
        '6': { start: 650, end: 721 },
        '7': { start: 722, end: 809 },
        '8': { start: 810, end: 905 },
        '9': { start: 906, end: 1025 }
    };
    
    // Usar setTimeout para dar tempo da animação de loading aparecer
    setTimeout(() => {
        let visibleCount = 0;
        pokemonCards.forEach(card => {
            const pokemonId = parseInt(card.dataset.id);
            let showCard = true;
            
            if (generation !== 'all') {
                const range = genRanges[generation];
                showCard = pokemonId >= range.start && pokemonId <= range.end;
            }
            
            // Adicionar animação de fade
            if (showCard) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease-in-out';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        console.log('Pokémon visíveis:', visibleCount);
        
        // Remover classe de loading
        pokemonContainer.classList.remove('loading');
        
        // Atualizar contador de Pokémon visíveis
        updatePokemonCount();
    }, 100);
}

// Função para atualizar o contador de Pokémon visíveis
function updatePokemonCount() {
    const visibleCount = document.querySelectorAll('.pokemon-card[style*="display: block"]').length;
    const totalCount = document.querySelectorAll('.pokemon-card').length;
    const counter = document.querySelector('.pokemon-counter');
    
    if (!counter) {
        const newCounter = document.createElement('div');
        newCounter.className = 'pokemon-counter';
        document.querySelector('.filters').appendChild(newCounter);
    }
    
    document.querySelector('.pokemon-counter').textContent = 
        `Mostrando ${visibleCount} de ${totalCount} Pokémon`;
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