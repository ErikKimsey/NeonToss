import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Landing extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Landing</Text>
				<Button title="Go to Details" onPress={() => this.props.navigation.navigate('Toss')} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
