// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store/index.js';
import PointsTableScreen from './src/screens/PointsTable.jsx';

import MatchesScreen from './src/screens/Matches.jsx';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Points Table" component={PointsTableScreen} />
          <Stack.Screen name="Matches" component={MatchesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
