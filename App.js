import React from 'react';
import {StatusBar, View} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './app/store';
import HomeScreen from './app/screens/Home';
import UserSCreen from './app/screens/Users';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Users: {
    screen: UserSCreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.projectName} Stagazer List`,
      headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    })
  }
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <AppContainer />
    </View>
  </Provider>
);

export default App;

console.disableYellowBox = true;
