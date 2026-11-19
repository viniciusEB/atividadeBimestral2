import { useCallback, useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import StateMessage from '../../components/StateMessage/StateMessage';
import StatBar from '../../components/StatBar/StatBar';
import TypeBadge from '../../components/TypeBadge/TypeBadge';
import { useFavorites } from '../../context/FavoritesContext';
import { getImageUrl, getPokemonDetails } from '../../services/pokeapi';
import { typeColors } from '../../theme';
import { PokemonDetails } from '../../types/pokemon';
import { RootStackParamList } from '../../types/navigation';
import { capitalize, formatId } from '../../utils/format';
import { styles } from './DetalhesStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Detalhes'>;

export default function Detalhes({ route }: Props) {
    const { id } = route.params;
    const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { isFavorite, toggleFavorite } = useFavorites();

    const load = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            setPokemon(await getPokemonDetails(id));
        } catch {
            setError('Não foi possível carregar os detalhes.');
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        load();
    }, [load]);

    if (loading) {
        return <StateMessage loading text="Carregando..." />;
    }

    if (error || !pokemon) {
        return <StateMessage text={error} actionLabel="Tentar novamente" onAction={load} />;
    }

    const mainType = pokemon.types[0]?.type.name;
    const accent = typeColors[mainType] ?? '#777';
    const favorite = isFavorite(pokemon.id);

    return (
        <ScrollView contentContainerStyle={styles.content}>
            <View style={[styles.imageCircle, { backgroundColor: accent }]}>
                <Image
                    style={styles.image}
                    source={{ uri: getImageUrl(pokemon.id) }}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.id}>{formatId(pokemon.id)}</Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>

            <View style={styles.types}>
                {pokemon.types.map((t) => (
                    <TypeBadge key={t.type.name} type={t.type.name} />
                ))}
            </View>

            <View style={styles.infoRow}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoValue}>{pokemon.height / 10} m</Text>
                    <Text style={styles.infoLabel}>Altura</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoValue}>{pokemon.weight / 10} kg</Text>
                    <Text style={styles.infoLabel}>Peso</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Habilidades</Text>
                <Text style={styles.abilities}>
                    {pokemon.abilities
                        .map((a) => capitalize(a.ability.name) + (a.is_hidden ? ' (oculta)' : ''))
                        .join(', ')}
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Status base</Text>
                <View style={styles.stats}>
                    {pokemon.stats.map((s) => (
                        <StatBar
                            key={s.stat.name}
                            name={s.stat.name}
                            value={s.base_stat}
                            color={accent}
                        />
                    ))}
                </View>
            </View>

            <Pressable
                style={[styles.favButton, favorite && styles.favButtonActive]}
                onPress={() => toggleFavorite({ id: pokemon.id, name: pokemon.name })}
            >
                <Text style={[styles.favText, favorite && styles.favTextActive]}>
                    {favorite ? '♥ Favoritado' : '♡ Favoritar'}
                </Text>
            </Pressable>
        </ScrollView>
    );
}