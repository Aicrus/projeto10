// This is a shim for web and Android where the tab bar is generally opaque.
import { useTheme } from '@/hooks/ThemeContext';
import { StyleSheet, View } from 'react-native';

export default function TabBarBackground() {
  const { currentTheme } = useTheme();
  
  return (
    <View 
      style={[
        styles.container,
        {
          backgroundColor: currentTheme === 'dark' 
            ? 'rgba(0, 0, 0, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)',
        }
      ]} 
    />
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export function useBottomTabOverflow() {
  return 0;
}
