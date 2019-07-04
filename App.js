import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Landing from './screens/Landing';
import Toss from './screens/Toss';

const RootStack = createStackNavigator(
	{
		Home: Landing,
		Toss: Toss
	},
	{
		initialRouteName: 'Home'
	}
);

const AppContainer = createAppContainer(RootStack);

class App extends Component {
	render() {
		return <AppContainer />;
	}
}

export default App;
