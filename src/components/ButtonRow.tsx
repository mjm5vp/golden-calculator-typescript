import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as constants from '../utils/constants';
import { Button, IconButton } from './Button';

type ButtonRowProps = {
	numbers: number[];
	onPress: (value: string) => void;
};

const ButtonRow: React.FC<ButtonRowProps> = ({ numbers, onPress }) => {
	return (
		<View style={styles.rowContainer}>
			{numbers.map((num: number) => {
				return <Button onPress={() => onPress(String(num))}>{num}</Button>;
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	rowContainer: {
		width: constants.RECT_CONTAINER_WIDTH,
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

export default ButtonRow;
