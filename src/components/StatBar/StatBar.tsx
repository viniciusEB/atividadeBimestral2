import { Text, View } from 'react-native';
import { statLabels } from '../../utils/format';
import { styles } from './StatBarStyles';

type Props = {
  name: string;
  value: number;
  color: string;
};

export default function StatBar({ name, value, color }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{statLabels[name] ?? name}</Text>
      <Text style={styles.value}>{value}</Text>
      <View style={styles.track}>
        <View
          style={[
            styles.fill,
            { width: `${Math.min((value / 255) * 100, 100)}%`, backgroundColor: color },
          ]}
        />
      </View>
    </View>
  );
}