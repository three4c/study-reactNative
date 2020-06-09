import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MemoListScreen from './src/screens/MemoListScreen';

const App = createStackNavigator({
  Home: {
    screen: MemoListScreen,
    navigationOptions: {
      headerTitle: 'MEMOT',
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
});

export default createAppContainer(App);
