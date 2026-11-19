import { createContext, ReactNode, useContext, useState } from 'react';
import { PokemonListItem } from '../types/pokemon';

type FavoritesContextType = {
    favorites: PokemonListItem[];
    isFavorite: (id: number) => boolean;
    toggleFavorite: (pokemon: PokemonListItem) => void;
};

const FavoritesContext = createContext<FavoritesContextType>({
    favorites: [],
    isFavorite: () => false,
    toggleFavorite: () => { },
});

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const [favorites, setFavorites] = useState<PokemonListItem[]>([]);

    const isFavorite = (id: number) => favorites.some((p) => p.id === id);

    const toggleFavorite = (pokemon: PokemonListItem) => {
        setFavorites((prev) =>
            prev.some((p) => p.id === pokemon.id)
                ? prev.filter((p) => p.id !== pokemon.id)
                : [...prev, pokemon]
        );
    };

    return (
        <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavorites = () => useContext(FavoritesContext);