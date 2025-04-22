// Configurações
const POKEMON_API = 'https://pokeapi.co/api/v2';
const POKEMON_LIMIT = 1025; // Total de Pokémon até a 9ª geração
const MEGA_EVOLUTIONS = {
    'venusaur': { 
        mega: { name: 'Mega Venusaur', sprite: 'venusaur-mega' },
        megaX: null,
        megaY: null
    },
    'charizard': { 
        mega: null,
        megaX: { name: 'Mega Charizard X', sprite: 'charizard-mega-x' },
        megaY: { name: 'Mega Charizard Y', sprite: 'charizard-mega-y' }
    },
    'blastoise': { 
        mega: { name: 'Mega Blastoise', sprite: 'blastoise-mega' },
        megaX: null,
        megaY: null
    },
    'beedrill': { 
        mega: { name: 'Mega Beedrill', sprite: 'beedrill-mega' },
        megaX: null,
        megaY: null
    },
    'pidgeot': { 
        mega: { name: 'Mega Pidgeot', sprite: 'pidgeot-mega' },
        megaX: null,
        megaY: null
    },
    'alakazam': { 
        mega: { name: 'Mega Alakazam', sprite: 'alakazam-mega' },
        megaX: null,
        megaY: null
    },
    'slowbro': { 
        mega: { name: 'Mega Slowbro', sprite: 'slowbro-mega' },
        megaX: null,
        megaY: null
    },
    'gengar': { 
        mega: { name: 'Mega Gengar', sprite: 'gengar-mega' },
        megaX: null,
        megaY: null
    },
    'kangaskhan': { 
        mega: { name: 'Mega Kangaskhan', sprite: 'kangaskhan-mega' },
        megaX: null,
        megaY: null
    },
    'pinsir': { 
        mega: { name: 'Mega Pinsir', sprite: 'pinsir-mega' },
        megaX: null,
        megaY: null
    },
    'gyarados': { 
        mega: { name: 'Mega Gyarados', sprite: 'gyarados-mega' },
        megaX: null,
        megaY: null
    },
    'aerodactyl': { 
        mega: { name: 'Mega Aerodactyl', sprite: 'aerodactyl-mega' },
        megaX: null,
        megaY: null
    },
    'mewtwo': { 
        mega: null,
        megaX: { name: 'Mega Mewtwo X', sprite: 'mewtwo-mega-x' },
        megaY: { name: 'Mega Mewtwo Y', sprite: 'mewtwo-mega-y' }
    },
    'ampharos': { 
        mega: { name: 'Mega Ampharos', sprite: 'ampharos-mega' },
        megaX: null,
        megaY: null
    },
    'scizor': { 
        mega: { name: 'Mega Scizor', sprite: 'scizor-mega' },
        megaX: null,
        megaY: null
    },
    'heracross': { 
        mega: { name: 'Mega Heracross', sprite: 'heracross-mega' },
        megaX: null,
        megaY: null
    },
    'houndoom': { 
        mega: { name: 'Mega Houndoom', sprite: 'houndoom-mega' },
        megaX: null,
        megaY: null
    },
    'tyranitar': { 
        mega: { name: 'Mega Tyranitar', sprite: 'tyranitar-mega' },
        megaX: null,
        megaY: null
    },
    'blaziken': { 
        mega: { name: 'Mega Blaziken', sprite: 'blaziken-mega' },
        megaX: null,
        megaY: null
    },
    'gardevoir': { 
        mega: { name: 'Mega Gardevoir', sprite: 'gardevoir-mega' },
        megaX: null,
        megaY: null
    },
    'mawile': { 
        mega: { name: 'Mega Mawile', sprite: 'mawile-mega' },
        megaX: null,
        megaY: null
    },
    'aggron': { 
        mega: { name: 'Mega Aggron', sprite: 'aggron-mega' },
        megaX: null,
        megaY: null
    },
    'medicham': { 
        mega: { name: 'Mega Medicham', sprite: 'medicham-mega' },
        megaX: null,
        megaY: null
    },
    'manectric': { 
        mega: { name: 'Mega Manectric', sprite: 'manectric-mega' },
        megaX: null,
        megaY: null
    },
    'sharpedo': { 
        mega: { name: 'Mega Sharpedo', sprite: 'sharpedo-mega' },
        megaX: null,
        megaY: null
    },
    'camerupt': { 
        mega: { name: 'Mega Camerupt', sprite: 'camerupt-mega' },
        megaX: null,
        megaY: null
    },
    'altaria': { 
        mega: { name: 'Mega Altaria', sprite: 'altaria-mega' },
        megaX: null,
        megaY: null
    },
    'banette': { 
        mega: { name: 'Mega Banette', sprite: 'banette-mega' },
        megaX: null,
        megaY: null
    },
    'absol': { 
        mega: { name: 'Mega Absol', sprite: 'absol-mega' },
        megaX: null,
        megaY: null
    },
    'glalie': { 
        mega: { name: 'Mega Glalie', sprite: 'glalie-mega' },
        megaX: null,
        megaY: null
    },
    'salamence': { 
        mega: { name: 'Mega Salamence', sprite: 'salamence-mega' },
        megaX: null,
        megaY: null
    },
    'metagross': { 
        mega: { name: 'Mega Metagross', sprite: 'metagross-mega' },
        megaX: null,
        megaY: null
    },
    'latias': { 
        mega: { name: 'Mega Latias', sprite: 'latias-mega' },
        megaX: null,
        megaY: null
    },
    'latios': { 
        mega: { name: 'Mega Latios', sprite: 'latios-mega' },
        megaX: null,
        megaY: null
    },
    'rayquaza': { 
        mega: { name: 'Mega Rayquaza', sprite: 'rayquaza-mega' },
        megaX: null,
        megaY: null
    },
    'lopunny': { 
        mega: { name: 'Mega Lopunny', sprite: 'lopunny-mega' },
        megaX: null,
        megaY: null
    },
    'garchomp': { 
        mega: { name: 'Mega Garchomp', sprite: 'garchomp-mega' },
        megaX: null,
        megaY: null
    },
    'lucario': { 
        mega: { name: 'Mega Lucario', sprite: 'lucario-mega' },
        megaX: null,
        megaY: null
    },
    'abomasnow': { 
        mega: { name: 'Mega Abomasnow', sprite: 'abomasnow-mega' },
        megaX: null,
        megaY: null
    },
    'gallade': { 
        mega: { name: 'Mega Gallade', sprite: 'gallade-mega' },
        megaX: null,
        megaY: null
    },
    'audino': { 
        mega: { name: 'Mega Audino', sprite: 'audino-mega' },
        megaX: null,
        megaY: null
    },
    'diancie': { 
        mega: { name: 'Mega Diancie', sprite: 'diancie-mega' },
        megaX: null,
        megaY: null
    }
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
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');

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
    const pokemonImages = document.querySelector('.pokemon-images');

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
                megaForms.push(hasMega.mega);
            }
            if (hasMega.megaX) {
                megaForms.push(hasMega.megaX);
            }
            if (hasMega.megaY) {
                megaForms.push(hasMega.megaY);
            }

            // Criar container para mega evoluções
            const megaContainer = document.createElement('div');
            megaContainer.className = 'mega-evolutions';
            megaContainer.innerHTML = '<h3>Mega Evolutions</h3>';

            for (const form of megaForms) {
                const megaResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${form.sprite}`);
                if (megaResponse.ok) {
                    const megaData = await megaResponse.json();
                    const megaImage = document.createElement('div');
                    megaImage.className = 'mega-image';
                    
                    megaImage.innerHTML = `
                        <div class="image-container">
                            <h4>${form.name}</h4>
                            <img src="${megaData.sprites.other['official-artwork'].front_default}" 
                                 alt="${form.name}" 
                                 title="${form.name}">
                            <div class="mega-types">
                                ${megaData.types.map(type => `
                                    <span class="type-badge ${type.type.name}">${type.type.name}</span>
                                `).join('')}
                            </div>
                        </div>
                    `;
                    megaContainer.appendChild(megaImage);
                }
            }

            // Adicionar o container de mega evoluções ao modal
            pokemonImages.appendChild(megaContainer);
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

// Controle de música
musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.classList.add('playing');
    } else {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
    }
});

// Inicializar a Pokédex
initPokedex(); 