import { gravityDependencies } from 'mathjs';
import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ViewStyle,
} from 'react-native';
import colors from '../utils/colors';
import * as constants from '../utils/constants';
import * as Haptics from 'expo-haptics';

type SideInputProps = {
	labelText: string;
	pressView: () => void;
	isSelected: boolean;
	value: string;
};

const SideInput = ({
	labelText,
	pressView,
	isSelected = false,
	value,
}: SideInputProps) => {
	const onPress = () => {
		Haptics.selectionAsync();
		pressView();
	};

	return (
		<View style={styles.sideInputContainer}>
			<Text style={styles.labelText}>{labelText}</Text>
			<TouchableOpacity
				onPress={onPress}
				style={[styles.input, isSelected ? styles.selected : null]}
			>
				<Text allowFontScaling style={styles.text} numberOfLines={3}>
					{value}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	sideInputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 30,
	},
	labelText: {
		fontSize: constants.TEXT_INPUT_HEIGHT / 3 - 2,
		fontWeight: '200',
		fontFamily: 'goldenFont',
		color: colors.gb.black,
	},
	input: {
		backgroundColor: colors.gb.black,
		width: constants.TEXT_INPUT_WIDTH,
		height: constants.TEXT_INPUT_HEIGHT,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		shadowOffset: { height: 1, width: 0 },
		shadowColor: colors.gb.black,
		shadowOpacity: 1.0,
	},
	text: {
		fontSize: constants.TEXT_INPUT_HEIGHT / 3 - 2,
		fontWeight: '800',
		fontFamily: 'zaio',
		color: colors.gb.darkestGold,
	},
	selected: {
		backgroundColor: constants.highlight,
		borderColor: colors.gb.black,
		borderWidth: 0.5,
	},
});

export default SideInput;
