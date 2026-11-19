import { PokemonDetails, PokemonListItem } from '../types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getImageUrl = (id: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

export async function getPokemonIndex(): Promise<PokemonListItem[]> {
    const response = await fetch(`${BASE_URL}/pokemon?limit=1025`);
    if (!response.ok) {
        throw new Error('Falha ao carregar a lista');
    }

    const data = await response.json();

    return data.results.map((item: { name: string; url: string }) => ({
        id: Number(item.url.split('/').filter(Boolean).pop()),
        name: item.name,
    }));
}

export async function getPokemonDetails(id: number): Promise<PokemonDetails> {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`);
    if (!response.ok) {
        throw new Error('Falha ao carregar o Pokémon');
    }

    return response.json();
}