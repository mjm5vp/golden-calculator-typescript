import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import * as constants from '../utils/constants';
import * as colors from '../utils/colors';
import * as Haptics from 'expo-haptics';

type SprialSegmentProps = {
	segmentId: number;
	isSelected: boolean;
	value: string;
	onPress: () => void;
};

const SpiralSegment = ({
	segmentId,
	isSelected,
	value,
	onPress,
}: SprialSegmentProps) => {
	const pressSegment = () => {
		Haptics.selectionAsync();
		onPress();
	};

	return (
		<TouchableOpacity
			onPress={pressSegment}
			style={[
				styles.baseSegment,
				segmentStyles[segmentId].segment,
				isSelected ? styles.selected : null,
			]}
		>
			<Text
				numberOfLines={3}
				allowFontScaling
				style={[styles.baseText, segmentStyles[segmentId].text]}
			>
				{value}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	selected: {
		backgroundColor: constants.highlight,
	},
	baseSegment: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
	},
	baseText: {
		color: colors.gb.darkestGold,
		fontFamily: 'zaio',
		fontWeight: '800',
	},
});

const segment0Styles = StyleSheet.create({
	segment: {
		height: constants.SEGMENT_LENGTH_0,
		width: constants.SEGMENT_LENGTH_0,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	text: {
		fontSize: constants.TEXT_INPUT_0_FONT_SIZE,
		lineHeight:
			constants.TEXT_INPUT_0_FONT_SIZE * constants.LINE_HEIGHT_MULTIPLIER,
	},
});

const segment1Styles = StyleSheet.create({
	segment: {
		height: constants.SEGMENT_LENGTH_1,
		width: constants.SEGMENT_LENGTH_1,
	},
	text: {
		fontSize: constants.TEXT_INPUT_1_FONT_SIZE,
		lineHeight:
			constants.TEXT_INPUT_1_FONT_SIZE * constants.LINE_HEIGHT_MULTIPLIER,
		marginLeft: '25%',
		marginBottom: '25%',
	},
});

const segment2Styles = StyleSheet.create({
	segment: {
		height: constants.SEGMENT_LENGTH_2,
		width: constants.SEGMENT_LENGTH_2,
	},
	text: {
		fontSize: constants.TEXT_INPUT_2_FONT_SIZE,
		lineHeight:
			constants.TEXT_INPUT_2_FONT_SIZE * constants.LINE_HEIGHT_MULTIPLIER,
		marginRight: '25%',
		marginBottom: '25%',
	},
});

const segment3Styles = StyleSheet.create({
	segment: {
		height: constants.SEGMENT_LENGTH_3,
		width: constants.SEGMENT_LENGTH_3,
	},
	text: {
		fontSize: constants.TEXT_INPUT_3_FONT_SIZE,
		lineHeight:
			constants.TEXT_INPUT_3_FONT_SIZE * constants.LINE_HEIGHT_MULTIPLIER,
		marginRight: '25%',
		marginTop: '25%',
	},
});

const segment4Styles = StyleSheet.create({
	segment: {
		height: constants.SEGMENT_LENGTH_4,
		width: constants.SEGMENT_LENGTH_4,
	},
	text: {
		fontSize: constants.TEXT_INPUT_4_FONT_SIZE,
		lineHeight:
			constants.TEXT_INPUT_4_FONT_SIZE * constants.LINE_HEIGHT_MULTIPLIER,
		marginLeft: '25%',
		marginTop: '25%',
	},
});

const segmentStyles = [
	segment0Styles,
	segment1Styles,
	segment2Styles,
	segment3Styles,
	segment4Styles,
];

export default SpiralSegment;
