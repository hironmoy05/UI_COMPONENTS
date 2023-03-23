import React from 'react';
import { SafeAreaView, Platform, View } from 'react-native';

// components
import { AppInput } from './src/components';

const App = () => {

  return (
    <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
      {
        Platform.OS === 'ios' ? <SafeAreaView></SafeAreaView> : null
      }
      <AppInput
        name='Name'
      />
    </View>
  );
};

export default App;
