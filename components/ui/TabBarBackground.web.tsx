import { useTheme } from '@/hooks/ThemeContext';
import { StyleSheet, View } from 'react-native';

export default function TabBarBackground() {
  const { currentTheme } = useTheme();
  
  return (
    <View style={styles.container}>
      <style>
        {`
          .tab-bar-blur {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            background-color: ${currentTheme === 'dark' 
              ? 'rgba(0, 0, 0, 0.75)' 
              : 'rgba(255, 255, 255, 0.75)'};
          }
        `}
      </style>
      <div className="tab-bar-blur" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
}); 