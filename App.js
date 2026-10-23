import { StatusBar } from 'expo-status-bar';
import { BackHandler, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import { useRef, useEffect } from 'react';

const SITE_URL = 'https://mario-ny5v.onrender.com'; // رابط Render تاعك

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    if (Platform.OS !== 'android') return;
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (ref.current) ref.current.goBack();
      return true;
    });
    return () => sub.remove();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#070808' }}>
        <StatusBar style="light" />
        <WebView
          ref={ref}
          source={{ uri: SITE_URL }}
          style={{ backgroundColor: '#070808' }}
          javaScriptEnabled
          domStorageEnabled
          sharedCookiesEnabled
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}