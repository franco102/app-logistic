import 'react-native-gesture-handler'; 
import {Platform, StatusBar, Text} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottomTabsNavigator } from './presentation/routes/BottomTabsNAvigator';
import Menu from './presentation/routes/Menu';
import {useData, ThemeProvider, TranslationProvider} from './presentation/hooks/example';
import { useEffect } from 'react';
function App()  { 
  const {isDark, theme, setTheme} = useData();

  /* set the status bar based on isDark constant */
  useEffect(() => {
    Platform.OS === 'android' && StatusBar.setTranslucent(true);
    StatusBar.setBarStyle(isDark ? 'light-content' : 'dark-content');
    return () => {
      StatusBar.setBarStyle('default');
    };
  }, [isDark]);

  // load custom fonts
  // const [fontsLoaded] = useFonts({
  //   'OpenSans-Light': theme.assets.OpenSansLight,
  //   'OpenSans-Regular': theme.assets.OpenSansRegular,
  //   'OpenSans-SemiBold': theme.assets.OpenSansSemiBold,
  //   'OpenSans-ExtraBold': theme.assets.OpenSansExtraBold,
  //   'OpenSans-Bold': theme.assets.OpenSansBold,
  // });

  // if (fontsLoaded) {
  //   const hideSplash = async () => {
  //     // await SplashScreen.hideAsync();
  //   };
  //   hideSplash();
  // }

  // if (!fontsLoaded) {
  //   return null;
  // }
  console.log(theme)
  const navigationTheme = {
    ...DefaultTheme,
    dark: isDark,
    colors: {
      ...DefaultTheme.colors,
      border: 'rgba(0,0,0,0)',
      // text: String(theme.colors.text),
      // card: String(theme.colors.card),
      // primary: String(theme.colors.primary),
      // notification: String(theme.colors.primary),
      // background: String(theme.colors.background),
    },
  };


  return (
    <TranslationProvider>
      <ThemeProvider theme={theme} setTheme={setTheme}>
        <NavigationContainer theme={navigationTheme}>
          <Menu /> 
        </NavigationContainer>
      </ThemeProvider>
    </TranslationProvider>
  );
}
 

export default App;
