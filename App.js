import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Screens
import DashboardScreen from './src/screens/DashboardScreen';
import AnalysisScreen from './src/screens/AnalysisScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import TradingScreen from './src/screens/TradingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1a237e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Dashboard" 
            component={DashboardScreen}
            options={{ title: 'RemmiaDo - Ana Sayfa' }}
          />
          <Stack.Screen 
            name="Analysis" 
            component={AnalysisScreen}
            options={{ title: 'Analiz ve Tahminler' }}
          />
          <Stack.Screen 
            name="Trading" 
            component={TradingScreen}
            options={{ title: 'İşlem Ekranı' }}
          />
          <Stack.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{ title: 'Ayarlar' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
