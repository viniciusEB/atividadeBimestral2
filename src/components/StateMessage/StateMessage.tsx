import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { colors } from '../../theme';
import { styles } from './StateMessageStyles';

type Props = {
  loading?: boolean;
  text?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function StateMessage({
  loading,
  text,
  actionLabel,
  onAction,
}: Props) {
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color={colors.primary} />}
      {text && <Text style={styles.text}>{text}</Text>}
      {actionLabel && onAction && (
        <Pressable style={styles.button} onPress={onAction}>
          <Text style={styles.buttonText}>{actionLabel}</Text>
        </Pressable>
      )}
    </View>
  );
}