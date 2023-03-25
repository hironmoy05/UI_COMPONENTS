import React from 'react';
import { Platform, SafeAreaView, View } from 'react-native';

// components
import { ComponentsScreen } from './src/screens';
import { AppProvider } from './src/store/themeContext';

const App = () => {

  return (
    <AppProvider>
      <View style={ { flex: 1 } }>
        {
          Platform.OS === 'ios' ? <SafeAreaView></SafeAreaView> : null
        }
        <ComponentsScreen />
      </View>
    </AppProvider>
  );
};

export default App;
