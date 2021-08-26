import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { InputField } from './GoldenRatioCalc';

import * as constants from '../utils/constants';
import colors from '../utils/colors';

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

	return <View style={[styles.displayRectangle, borderStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
	displayRectangle: {
		backgroundColor: colors.rectBackground,
		borderWidth: 8,
		borderRadius: 5,
		height: constants.RECT_HEIGHT,
		justifyContent: 'space-around',
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
