import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        padding: 20,
        gap: 12,
    },
    imageCircle: {
        width: '60%',
        maxWidth: 240,
        aspectRatio: 1,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '85%',
        height: '85%',
    },
    id: {
        color: colors.muted,
        fontSize: 14,
    },
    name: {
        color: colors.text,
        fontSize: 30,
        fontWeight: 'bold',
    },
    types: {
        flexDirection: 'row',
        gap: 10,
    },
    infoRow: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: colors.surface,
        borderRadius: 16,
        paddingVertical: 16,
    },
    infoItem: {
        flex: 1,
        alignItems: 'center',
        gap: 2,
    },
    infoValue: {
        color: colors.text,
        fontSize: 20,
        fontWeight: 'bold',
    },
    infoLabel: {
        color: colors.muted,
        fontSize: 12,
    },
    section: {
        width: '100%',
        gap: 8,
    },
    sectionTitle: {
        color: colors.text,
        fontSize: 18,
        fontWeight: 'bold',
    },
    abilities: {
        color: colors.muted,
        fontSize: 15,
    },
    stats: {
        gap: 10,
    },
    favButton: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: colors.primary,
        marginTop: 8,
    },
    favButtonActive: {
        backgroundColor: colors.primary,
    },
    favText: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
    },
    favTextActive: {
        color: colors.text,
    },
});