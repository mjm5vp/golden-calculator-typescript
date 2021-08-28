import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { phi } from 'mathjs';

import NumberPad from '../components/NumberPad';
import DisplayRectangle from './DisplayRectangle';

const GoldenRatioCalc = () => {
	const [calcValue, setCalcValue] = useState(['', '', '5.1', '', '']);
	const [decimals, setDecimals] = useState(1);
	const [selectedSegment, setSelectedSegment] = useState(2);

	useEffect(() => {
		updateCalcValue(getSelectedCalcValue());
	}, [decimals]);

	const numberButtonPress = (text: string) => {
		if (text === '.' && getSelectedCalcValue().includes('.')) {
			return;
		}
		const newText = getSelectedCalcValue() + text;

		updateCalcValue(newText);
	};

	const deleteButtonPress = () => {
		const sideText = getSelectedCalcValue();
		const newText = sideText.substring(0, sideText.length - 1);

		updateCalcValue(newText);
	};

	const decimalsButtonPress = () => {
		setDecimals(decimals === 10 ? 0 : decimals + 1);
	};

	const clearButtonPress = () => {
		setCalcValue(['', '', '', '', '']);
	};

	const updateCalcValue = (text: string) => {
		if (!text) {
			clearButtonPress();
			return;
		}

		let newCalcValue = [];
		newCalcValue[selectedSegment] = Number(text);

		for (let i = selectedSegment + 1; i < calcValue.length; i++) {
			newCalcValue[i] = newCalcValue[i - 1] * phi;
		}

		for (let i = selectedSegment - 1; i >= 0; i--) {
			newCalcValue[i] = newCalcValue[i + 1] / phi;
		}
		setCalcValue(
			newCalcValue.map((num: number, i: number) =>
				i === selectedSegment ? text : formatInput(num)
			)
		);
	};

	const formatInput = (number: number): string => {
		return isNaN(number) ? 'ERROR' : String(number.toFixed(decimals));
	};

	const getSelectedCalcValue = (): string => {
		return calcValue[selectedSegment];
	};

	return (
		<View style={styles.rectContainer}>
			<DisplayRectangle
				calcValue={calcValue}
				selectedSegment={selectedSegment}
				onPress={(segmentId: number) => setSelectedSegment(segmentId)}
			/>

			<NumberPad
				buttonPress={(text) => numberButtonPress(text)}
				clearButton={() => clearButtonPress()}
				deleteButton={() => deleteButtonPress()}
				updateDecimals={() => decimalsButtonPress()}
				decimals={decimals}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	rectContainer: {
		alignItems: 'center',
		justifyContent: 'space-around',
		flex: 1,
		marginTop: 10,
		marginBottom: 10,
	},
});

export default GoldenRatioCalc;
