import React, { useState, useEffect } from 'react';
import {
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
	ViewStyle,
	Text,
	View,
} from 'react-native';
import { CalcValue, InputField } from './GoldenRatioCalc';

import * as constants from '../utils/constants';
import colors from '../utils/colors';
import spiral from '../../assets/images/golden-spiral.png';
import SpiralSegment from '../components/SpiralSegment';

type DisplayRectangleProps = {
	inputField: InputField;
	calcValue: CalcValue;
	onPress: (inputField: InputField) => void;
	children: React.ReactNode;
};

const DisplayRectangle = ({
	inputField,
	calcValue,
	onPress,
	children,
}: DisplayRectangleProps) => {
	const [borderStyle, setBorderStyle] = useState<ViewStyle>(
		styles.defaultStyle
	);

	useEffect(() => {
		switch (inputField) {
			case InputField.SHORT:
				setBorderStyle(styles.shortStyle);
				return;
			case InputField.LONG:
				setBorderStyle(styles.longStyle);
				return;
			case InputField.TOTAL:
				setBorderStyle(styles.totalStyle);
				return;
			default:
				return;
		}
	}, [inputField]);

	return (
		<ImageBackground
			source={spiral}
			style={[styles.displayRectangle, borderStyle]}
		>
			<SpiralSegment
				inputField={InputField.TOTAL}
				isSelected={inputField === InputField.TOTAL}
				value={calcValue.total}
				onPress={() => onPress(InputField.TOTAL)}
			/>
			<View style={styles.longShortContainer}>
				<SpiralSegment
					inputField={InputField.LONG}
					isSelected={inputField === InputField.LONG}
					value={calcValue.long}
					onPress={() => onPress(InputField.LONG)}
				/>
				<SpiralSegment
					inputField={InputField.SHORT}
					isSelected={inputField === InputField.SHORT}
					value={calcValue.short}
					onPress={() => onPress(InputField.SHORT)}
				/>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	longShortContainer: {
		alignItems: 'flex-end',
	},
	displayRectangle: {
		borderWidth: 0,
		borderRadius: 5,
		height: constants.RECT_HEIGHT,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		flexDirection: 'row',
		shadowOffset: { height: 1, width: 0 },
		shadowColor: 'black',
		shadowOpacity: 1.0,
		width: constants.RECT_WIDTH,
	},
	defaultStyle: {
		borderColor: colors.gb.black,
	},
	shortStyle: {
		borderRightColor: constants.borderHighlight,
	},
	longStyle: {
		borderTopColor: constants.borderHighlight,
	},
	totalStyle: {
		borderColor: constants.borderHighlight,
	},
});

export default DisplayRectangle;
