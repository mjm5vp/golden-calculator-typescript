import React, { useState, useEffect } from 'react';
import {
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
	ViewStyle,
	Text,
} from 'react-native';
import { InputField } from './GoldenRatioCalc';

import * as constants from '../utils/constants';
import colors from '../utils/colors';
import spiral from '../../assets/images/golden-spiral.png';

type DisplayRectangleProps = {
	inputField: InputField;
	children: React.ReactNode;
};

const DisplayRectangle = ({ inputField, children }: DisplayRectangleProps) => {
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
			<TouchableOpacity style={styles.longButton}></TouchableOpacity>
			<TouchableOpacity style={styles.totalButton}></TouchableOpacity>
			{/* {children} */}
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	longButton: {
		width: constants.RECT_WIDTH / 1.618 - 12,
		height: constants.RECT_HEIGHT - 12,
		backgroundColor: 'rgba(255,220,115, .5)',
	},
	totalButton: {
		width: constants.RECT_WIDTH / 1.618 - 12,
		height: constants.RECT_HEIGHT - 12,
		backgroundColor: 'rgba(255,220,115, .5)',
	},
	displayRectangle: {
		borderWidth: 12,
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
