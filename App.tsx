import React from 'react';
import { SafeAreaView, Platform, View } from 'react-native';

// components
import { AppInput } from './src/components';
import { AppProvider } from './src/store/themeContext';

const App = () => {

  return (
    <AppProvider>
      <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
        {
          Platform.OS === 'ios' ? <SafeAreaView></SafeAreaView> : null
        }
        <AppInput
          name='Name'
          keyboardType='default'
          keyboardAppearance='dark'
        />
      </View>
    </AppProvider>
  );
};

export default App;
