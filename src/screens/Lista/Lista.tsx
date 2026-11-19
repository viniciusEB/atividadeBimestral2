import { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import StateMessage from '../../components/StateMessage/StateMessage';
import { useFavorites } from '../../context/FavoritesContext';
import { getPokemonIndex } from '../../services/pokeapi';
import { PokemonListItem } from '../../types/pokemon';
import { RootStackParamList } from '../../types/navigation';
import { styles } from './ListaStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Lista'>;

const PAGE_SIZE = 20;

export default function Lista({ navigation }: Props) {
  const [all, setAll] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const { isFavorite } = useFavorites();

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      setAll(await getPokemonIndex());
    } catch {
      setError('Não foi possível carregar os Pokémon. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [search]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return all.filter((p) => p.name.includes(term));
  }, [all, search]);

  if (loading) {
    return <StateMessage loading text="Carregando Pokémon..." />;
  }

  if (error) {
    return <StateMessage text={error} actionLabel="Tentar novamente" onAction={load} />;
  }

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChangeText={setSearch} />

      <FlatList
        data={filtered.slice(0, visible)}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        onEndReached={() => setVisible((v) => v + PAGE_SIZE)}
        onEndReachedThreshold={0.5}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <PokemonCard
            id={item.id}
            name={item.name}
            isFavorite={isFavorite(item.id)}
            onPress={() =>
              navigation.navigate('Detalhes', { id: item.id, name: item.name })
            }
          />
        )}
        ListEmptyComponent={
          <StateMessage text="Nenhum Pokémon encontrado." />
        }
      />
    </View>
  );
}