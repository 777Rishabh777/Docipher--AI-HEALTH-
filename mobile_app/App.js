import React, { useRef } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const webViewRef = useRef(null);

  // Handle Android back button
  React.useEffect(() => {
    const onBackPress = () => {
      if (webViewRef.current) {
        webViewRef.current.goBack();
        return true; // prevent default behavior (exit app)
      }
      return false;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);

  // Use 10.0.2.2 for Android Emulator to access localhost, 
  // or localhost for iOS simulator, or your LAN IP for physical device.
  const targetUrl = Platform.OS === 'android' ? 'http://10.0.2.2:8000/' : 'http://localhost:8000/';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <WebView 
        ref={webViewRef}
        source={{ uri: targetUrl }} 
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsBackForwardNavigationGestures={true}
        scalesPageToFit={false}
        bounces={false}
        overScrollMode="never"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Match Docipher's dark mode background
  },
  webview: {
    flex: 1,
  },
});
