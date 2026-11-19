import { Text, View } from 'react-native';
import { typeColors } from '../../theme';
import { typeLabels } from '../../utils/format';
import { styles } from './TypeBadgeStyles';

type Props = {
  type: string;
};

export default function TypeBadge({ type }: Props) {
  return (
    <View style={[styles.badge, { backgroundColor: typeColors[type] ?? '#777' }]}>
      <Text style={styles.text}>{typeLabels[type] ?? type}</Text>
    </View>
  );
}