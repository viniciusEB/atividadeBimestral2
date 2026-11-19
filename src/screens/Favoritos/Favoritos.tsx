import { FlatList, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import StateMessage from '../../components/StateMessage/StateMessage';
import { useFavorites } from '../../context/FavoritesContext';
import { RootStackParamList } from '../../types/navigation';
import { styles } from './FavoritosStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Favoritos'>;

export default function Favoritos({ navigation }: Props) {
    const { favorites } = useFavorites();

    if (favorites.length === 0) {
        return (
            <StateMessage text="Você ainda não favoritou nenhum Pokémon. Abra um e toque em Favoritar." />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                keyExtractor={(item) => String(item.id)}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <PokemonCard
                        id={item.id}
                        name={item.name}
                        isFavorite
                        onPress={() =>
                            navigation.navigate('Detalhes', { id: item.id, name: item.name })
                        }
                    />
                )}
            />
        </View>
    );
}