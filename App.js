import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './src/navigation/App';
import { colors } from './src/constants/colors';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" backgroundColor={colors.white} />
      <AppNavigation />
    </SafeAreaProvider>
  );
}


