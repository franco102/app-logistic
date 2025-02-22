import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/routes/StackNavigator'; 
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import Icon from '@react-native-vector-icons/ionicons'
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

function App() {


  return (
    <PaperProvider theme={theme}  >
      <NavigationContainer >
        <StackNavigator/>
      </NavigationContainer> 
    </PaperProvider>
  );
}


export default App;
