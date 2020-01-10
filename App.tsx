import React from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView} from 'react-native';
function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        style={{flex: 1}}
        source={{uri: 'http://mycrm.bizofficer.com/'}}
        // source={{uri: 'https://www.google.com/'}}
      />
    </SafeAreaView>
  );
}

export default App;
