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
const loadingElement = document.getElementById('loading');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const modal = document.getElementById('pokemon-modal');
const closeButton = document.querySelector('.close-button');
const pokemonDetails = document.querySelector('.pokemon-details');
const generationFilter = document.getElementById('generation-filter');
const typeFilter = document.getElementById('type-filter');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
const themeToggle = document.querySelector('.theme-toggle');
const backToTopButton = document.querySelector('.back-to-top');
const gridViewButton = document.getElementById('grid-view');
const listViewButton = document.getElementById('list-view');

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

// Configurações adicionais
const POKEMONS_PER_PAGE = 20;
let currentPage = 1;
let allPokemons = [];
let filteredPokemons = [];
let currentView = 'grid';
let currentTheme = 'light';

// Cache para armazenar dados dos Pokémon
const pokemonCache = new Map();

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    setupEventListeners();
    fetchPokemons();
});

// Configuração dos event listeners
function setupEventListeners() {
    // Tema
    themeToggle.addEventListener('click', toggleTheme);
    
    // Busca
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    searchButton.addEventListener('click', handleSearch);
    
    // Filtros
    generationFilter.addEventListener('change', applyFilters);
    typeFilter.addEventListener('change', applyFilters);
    
    // Paginação
    prevPageButton.addEventListener('click', () => changePage(currentPage - 1));
    nextPageButton.addEventListener('click', () => changePage(currentPage + 1));
    
    // Visualização
    gridViewButton.addEventListener('click', () => switchView('grid'));
    listViewButton.addEventListener('click', () => switchView('list'));
    
    // Voltar ao topo
    window.addEventListener('scroll', handleScroll);
    backToTopButton.addEventListener('click', scrollToTop);
}

// Função para carregar o tema salvo
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.body.setAttribute('data-theme', currentTheme);
    }
}

// Função para alternar o tema
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

// Função para buscar Pokémon
async function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm.length < 2) {
        applyFilters();
        return;
    }
    
    filteredPokemons = allPokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    updatePagination();
    displayPokemons();
}

// Função para aplicar filtros
function applyFilters() {
    const generation = generationFilter.value;
    const type = typeFilter.value;
    
    filteredPokemons = allPokemons.filter(pokemon => {
        const matchesGeneration = generation === 'all' || 
            (generation === '1' && pokemon.id <= 151) ||
            (generation === '2' && pokemon.id > 151 && pokemon.id <= 251) ||
            (generation === '3' && pokemon.id > 251 && pokemon.id <= 386) ||
            (generation === '4' && pokemon.id > 386 && pokemon.id <= 493) ||
            (generation === '5' && pokemon.id > 493 && pokemon.id <= 649) ||
            (generation === '6' && pokemon.id > 649 && pokemon.id <= 721) ||
            (generation === '7' && pokemon.id > 721 && pokemon.id <= 809) ||
            (generation === '8' && pokemon.id > 809 && pokemon.id <= 905) ||
            (generation === '9' && pokemon.id > 905);
            
        const matchesType = type === 'all' || 
            pokemon.types.some(t => t.type.name === type);
            
        return matchesGeneration && matchesType;
    });
    
    currentPage = 1;
    updatePagination();
    displayPokemons();
}

// Função para alternar entre visualização em grid e lista
function switchView(view) {
    currentView = view;
    pokemonContainer.className = `${view}-view`;
    gridViewButton.classList.toggle('active', view === 'grid');
    listViewButton.classList.toggle('active', view === 'list');
    displayPokemons();
}

// Função para lidar com o scroll
function handleScroll() {
    const scrollTop = window.pageYOffset;
    backToTopButton.classList.toggle('visible', scrollTop > 300);
}

// Função para rolar até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Função para debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Função para buscar todos os Pokémon
async function fetchPokemons() {
    try {
        loadingElement.style.display = 'flex';
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
        const data = await response.json();
        allPokemons = await Promise.all(
            data.results.map(async (pokemon, index) => {
                const pokemonData = await fetchPokemonData(index + 1);
                return {
                    id: index + 1,
                    name: pokemon.name,
                    ...pokemonData
                };
            })
        );
        filteredPokemons = [...allPokemons];
        updatePagination();
        displayPokemons();
    } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
    } finally {
        loadingElement.style.display = 'none';
    }
}

// Função para buscar dados de um Pokémon específico
async function fetchPokemonData(id) {
    if (pokemonCache.has(id)) {
        return pokemonCache.get(id);
    }
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        const pokemonData = {
            image: data.sprites.other['official-artwork'].front_default,
            types: data.types,
            height: data.height,
            weight: data.weight,
            stats: data.stats,
            abilities: data.abilities
        };
        pokemonCache.set(id, pokemonData);
        return pokemonData;
    } catch (error) {
        console.error(`Erro ao buscar dados do Pokémon ${id}:`, error);
        return null;
    }
}

// Função para exibir os Pokémon
function displayPokemons() {
    const start = (currentPage - 1) * POKEMONS_PER_PAGE;
    const end = start + POKEMONS_PER_PAGE;
    const pokemonsToShow = filteredPokemons.slice(start, end);
    
    pokemonContainer.innerHTML = pokemonsToShow.map(pokemon => `
        <div class="pokemon-card tooltip" data-id="${pokemon.id}">
            <img src="${pokemon.image}" alt="${pokemon.name}" loading="lazy">
            <h3>${pokemon.name}</h3>
            <div class="types">
                ${pokemon.types.map(type => `
                    <span class="type ${type.type.name}">${type.type.name}</span>
                `).join('')}
            </div>
            <div class="tooltip-text">
                <p>Altura: ${pokemon.height / 10}m</p>
                <p>Peso: ${pokemon.weight / 10}kg</p>
                <p>Habilidades: ${pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
            </div>
        </div>
    `).join('');
    
    // Adiciona event listeners para os cards
    document.querySelectorAll('.pokemon-card').forEach(card => {
        card.addEventListener('click', () => showPokemonDetails(card.dataset.id));
    });
}

// Função para atualizar a paginação
function updatePagination() {
    const totalPages = Math.ceil(filteredPokemons.length / POKEMONS_PER_PAGE);
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages;
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
}

// Função para mudar de página
function changePage(newPage) {
    currentPage = newPage;
    updatePagination();
    displayPokemons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para mostrar detalhes do Pokémon
async function showPokemonDetails(id) {
    const pokemon = allPokemons.find(p => p.id === parseInt(id));
    if (!pokemon) return;
    
    const modal = document.getElementById('pokemon-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <div class="pokemon-details">
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <div class="types">
                ${pokemon.types.map(type => `
                    <span class="type ${type.type.name}">${type.type.name}</span>
                `).join('')}
            </div>
            <div class="stats">
                <h3>Estatísticas</h3>
                ${pokemon.stats.map(stat => `
                    <div class="stat">
                        <span class="stat-name">${stat.stat.name}</span>
                        <div class="stat-bar">
                            <div class="stat-value" style="width: ${stat.base_stat}%"></div>
                        </div>
                        <span class="stat-value-text">${stat.base_stat}</span>
                    </div>
                `).join('')}
            </div>
            <div class="info">
                <p><strong>Altura:</strong> ${pokemon.height / 10}m</p>
                <p><strong>Peso:</strong> ${pokemon.weight / 10}kg</p>
                <p><strong>Habilidades:</strong> ${pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    // Adiciona event listener para fechar o modal
    modal.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Fecha o modal ao clicar fora
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
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
initPokedex(); 