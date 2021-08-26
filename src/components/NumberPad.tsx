import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

import { Button, IconButton } from './Button';
import ButtonRow from './ButtonRow';
import * as constants from '../utils/constants';
import colors from '../utils/colors';

type NumberPadProps = {
	buttonPress: (number: string) => void;
	deleteButton: () => void;
	clearButton: () => void;
	updateDecimals: () => void;
	decimals: number;
	flipCard: () => void;
};

const NumberPad: React.FC<NumberPadProps> = ({
	buttonPress,
	deleteButton,
	clearButton,
	updateDecimals,
	decimals,
	flipCard,
}) => {
	return (
		<View style={styles.container}>
			<ButtonRow
				numbers={[7, 8, 9]}
				onPress={(value: string) => buttonPress(value)}
			/>

			<ButtonRow
				numbers={[4, 5, 6]}
				onPress={(value: string) => buttonPress(value)}
			/>

			<ButtonRow
				numbers={[1, 2, 3]}
				onPress={(value: string) => buttonPress(value)}
			/>

			<View style={styles.rowContainer}>
				<IconButton onPress={() => buttonPress('.')}>
					<Entypo name="dot-single" color="white" />
				</IconButton>
				<Button onPress={() => buttonPress('0')}>0</Button>
				<IconButton onPress={() => deleteButton()}>
					<Feather name="delete" type="feather" color="white" />
				</IconButton>
			</View>

			<View style={styles.rowContainer}>
				<IconButton onPress={() => updateDecimals()}>
					<Text
						adjustsFontSizeToFit
						numberOfLines={1}
						style={styles.decimalsText}
					>
						Decimals:
					</Text>
					<Text style={styles.decimalsText}>{decimals}</Text>
				</IconButton>
				<Button onPress={() => clearButton()}>Clear</Button>
				<Button onPress={() => flipCard()}>Flip</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: constants.NUMBER_PAD_HEIGHT,
		width: constants.RECT_CONTAINER_WIDTH,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	rowContainer: {
		width: constants.RECT_CONTAINER_WIDTH,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	decimalsText: {
		fontSize: constants.BUTTON_HEIGHT / 4,
		// fontSize: 10,
		fontFamily: 'orbitron',
		color: colors.gb.white,
	},
});

export default NumberPad;
