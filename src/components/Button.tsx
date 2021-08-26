import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as constants from '../utils/constants';
import colors from '../utils/colors';
import * as Haptics from 'expo-haptics';

type ButtonProps = {
	onPress: () => void;
	children: React.ReactNode;
};

const Button = ({ onPress, children }: ButtonProps) => {
	const { buttonStyle, textStyle } = styles;

	const onButtonPress = () => {
		Haptics.impactAsync();
		onPress();
	};

	return (
		<TouchableOpacity onPress={onButtonPress} style={buttonStyle}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const IconButton = ({ onPress, children }: ButtonProps) => {
	const { elevation, buttonStyle, viewStyle } = styles;
	return (
		<View style={elevation}>
			<Button onPress={onPress} children={children} />
		</View>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		backgroundColor: colors.gb.black,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: colors.gb.white,
		width: constants.BUTTON_WIDTH,
		height: constants.BUTTON_HEIGHT,
		marginLeft: 5,
		marginRight: 5,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: colors.gb.black,
		shadowOffset: { height: 10, width: 0 },
		shadowOpacity: 0.6,
		shadowRadius: 2,
	},
	textStyle: {
		color: colors.gb.white,
		fontSize: constants.BUTTON_HEIGHT / 3,
		fontFamily: 'orbitron',
	},
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	elevation: {
		borderTopWidth: 0,
		elevation: 5,
	},
});

export { Button, IconButton };
