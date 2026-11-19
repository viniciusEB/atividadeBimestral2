import { TextInput, View } from 'react-native';
import { colors } from '../../theme';
import { styles } from './SearchBarStyles';

type Props = {
    value: string;
    onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: Props) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Buscar Pokémon..."
                placeholderTextColor={colors.muted}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    );
}