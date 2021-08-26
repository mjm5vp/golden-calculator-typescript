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

type SideInputProps = {
	labelText: string;
	pressView: () => {};
	highlightStyle: ViewStyle;
	value: string;
};

const SideInput = ({
	labelText,
	pressView,
	highlightStyle,
	value,
}: SideInputProps) => {
	return (
		<View style={styles.sideInputContainer}>
			<Text style={styles.labelText}>{labelText}</Text>
			<View style={styles.elevationInput}>
				<TouchableOpacity onPress={pressView}>
					<View style={[styles.textInput, highlightStyle]}>
						<Text allowFontScaling style={styles.text} numberOfLines={3}>
							{value}
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	elevationInput: {
		borderTopWidth: 0,
		elevation: 10,
	},
	sideInputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 30,
		marginRight: 30,
	},
	textInput: {
		width: constants.TEXT_INPUT_WIDTH,
		height: constants.TEXT_INPUT_HEIGHT,
		justifyContent: 'center',
		shadowOffset: { height: 1, width: 0 },
		shadowColor: colors.gb.black,
		shadowOpacity: 1.0,
		// borderWidth: 2,
		// borderColor: colors.t4k.c,
		// borderRadius: 2
	},
	labelText: {
		fontSize: constants.TEXT_INPUT_HEIGHT / 3 - 2,
		fontWeight: '200',
		fontFamily: 'goldenFont',
		color: colors.gb.black,
		// textShadowOffset: { height: 1, width: 1 },
		// textShadowColor: colors.gb.white,
		// textShadowRadius: 2
	},
	text: {
		fontSize: constants.TEXT_INPUT_HEIGHT / 3 - 2,
		fontWeight: '800',
		fontFamily: 'zaio',
		color: colors.gb.darkestGold,
	},
});

export default SideInput;
