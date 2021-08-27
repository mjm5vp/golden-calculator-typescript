import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import { InputField } from '../golden-ratio/GoldenRatioCalc';

import * as constants from '../utils/constants';
import * as Haptics from 'expo-haptics';

type SprialSegmentProps = {
	inputField: InputField;
	isSelected: boolean;
	value: string;
	onPress: () => void;
};

const SpiralSegment = ({
	inputField,
	isSelected,
	value,
	onPress,
}: SprialSegmentProps) => {
	const [segmentStyle, setSegmentStyle] = useState<ViewStyle>();
	const [inputStyle, setInputStyle] = useState<ViewStyle>();

	useEffect(() => {
		switch (inputField) {
			case InputField.SHORT:
				setSegmentStyle(styles.shortSegment);
				setInputStyle(styles.shortInput);
				return;
			case InputField.LONG:
				setSegmentStyle(styles.longSegment);
				setInputStyle(styles.longInput);
				return;
			case InputField.TOTAL:
				setSegmentStyle(styles.totalSegment);
				setInputStyle(styles.totalInput);
				return;
			default:
				return;
		}
	}, []);

	const pressSegment = () => {
		Haptics.selectionAsync();
		onPress();
	};

	return (
		<TouchableOpacity
			onPress={pressSegment}
			style={[segmentStyle, isSelected ? styles.selected : null]}
		>
			<View style={[styles.baseInput, inputStyle]}>
				<Text>{value}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {},
	selected: {
		backgroundColor: 'rgba(255,220,115, .5)',
	},
	shortSegment: {
		width: constants.SHORT_SEGMENT_LENGTH,
		height: constants.SHORT_SEGMENT_LENGTH,
	},
	longSegment: {
		width: constants.LONG_SEGMENT_LENGTH,
		height: constants.LONG_SEGMENT_LENGTH,
	},
	totalSegment: {
		width: constants.RECT_HEIGHT,
		height: constants.RECT_HEIGHT,
	},
	shortInput: {},
	longInput: {},
	totalInput: {},
	baseInput: {},
});

export default SpiralSegment;
