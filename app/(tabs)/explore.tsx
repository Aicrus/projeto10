import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SPACING } from '@/constants/DesignSystem';

export default function ConfigScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Configurações</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
  },
}); 