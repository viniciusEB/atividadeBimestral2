import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
    card: {
        width: '48%',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
        padding: 12,
        marginBottom: 12,
    },
    pressed: {
        opacity: 0.7,
    },
    heart: {
        position: 'absolute',
        top: 8,
        right: 12,
        color: colors.primary,
        fontSize: 18,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    id: {
        color: colors.muted,
        fontSize: 12,
        marginTop: 4,
    },
    name: {
        color: colors.text,
        fontSize: 16,
        fontWeight: 'bold',
    },
});