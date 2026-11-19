import { Image, Pressable, Text } from 'react-native';
import { getImageUrl } from '../../services/pokeapi';
import { capitalize, formatId } from '../../utils/format';
import { styles } from './PokemonCardStyles';

type Props = {
    id: number;
    name: string;
    isFavorite: boolean;
    onPress: () => void;
};

export default function PokemonCard({ id, name, isFavorite, onPress }: Props) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [styles.card, pressed && styles.pressed]}
        >
            {isFavorite && <Text style={styles.heart}>♥</Text>}
            <Image
                style={styles.image}
                source={{ uri: getImageUrl(id) }}
                resizeMode="contain"
            />
            <Text style={styles.id}>{formatId(id)}</Text>
            <Text style={styles.name}>{capitalize(name)}</Text>
        </Pressable>
    );
}