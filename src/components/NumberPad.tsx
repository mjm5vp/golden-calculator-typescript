import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

import { Button, IconButton } from './Button';
import * as constants from '../utils/constants';
import colors from '../utils/colors';
import { column } from 'mathjs';

type NumberPadProps = {
	buttonPress: (number: string) => void;
	deleteButton: () => void;
	clearButton: () => void;
	updateDecimals: () => void;
	decimals: number;
};

const NumberPad: React.FC<NumberPadProps> = ({
	buttonPress,
	deleteButton,
	clearButton,
	updateDecimals,
	decimals,
}) => {
	return (
		<View style={styles.container}>
			{[
				[7, 8, 9],
				[4, 5, 6],
				[1, 2, 3],
			].map((row: number[], i: number) => {
				return (
					<View style={styles.rowContainer} key={i}>
						{row.map((num: number) => {
							return (
								<Button key={num} onPress={() => buttonPress(String(num))}>
									{num}
								</Button>
							);
						})}
					</View>
				);
			})}

			<View style={styles.rowContainer}>
				<IconButton onPress={() => buttonPress('.')}>
					<Entypo
						name="dot-single"
						color="white"
						size={constants.BUTTON_FONT_SIZE}
					/>
				</IconButton>
				<Button onPress={() => buttonPress('0')}>0</Button>
				<IconButton onPress={() => deleteButton()}>
					<Feather
						name="delete"
						type="feather"
						color="white"
						size={constants.BUTTON_FONT_SIZE}
					/>
				</IconButton>
			</View>

			<View style={styles.rowContainer}>
				<IconButton onPress={() => updateDecimals()}>
					<View style={styles.decimalsContainer}>
						<Text adjustsFontSizeToFit style={styles.decimalsText}>
							Decimals:
						</Text>
						<Text style={styles.decimalsText}>{decimals}</Text>
					</View>
				</IconButton>
				<Button onPress={() => clearButton()}>Clear</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: constants.NUMBER_PAD_HEIGHT,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	rowContainer: {
		flexDirection: 'row',
	},
	decimalsContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	decimalsText: {
		fontSize: constants.BUTTON_HEIGHT / 4,
		marginTop: 5,
		fontFamily: 'orbitron',
		color: colors.gb.white,
	},
});

export default NumberPad;
