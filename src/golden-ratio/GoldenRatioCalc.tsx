import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { phi } from 'mathjs';

import * as constants from '../utils/constants';
import colors from '../utils/colors';
import SideInput from '../components/SideInput';
import NumberPad from '../components/NumberPad';
import DisplayRectangle from './DisplayRectangle';

type CalcValue = {
	short: string;
	long: string;
	total: string;
};

export enum InputField {
	SHORT = 'short',
	LONG = 'long',
	TOTAL = 'total',
}

const GoldenRatioCalc = () => {
	const [calcValue, setCalcValue] = useState<CalcValue>({
		short: '',
		long: '',
		total: '',
	});
	const [decimals, setDecimals] = useState(5);
	const [inputField, setInputField] = useState(InputField.SHORT);

	useEffect(() => {
		updateCalcValue(getSelectedCalcValue());
	}, [decimals]);

	const numberButtonPress = (text: string) => {
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
		setInputField(InputField.SHORT);
		clearCalcValues();
	};

	const updateCalcValue = (text: string) => {
		if (!text) {
			clearCalcValues();
			return;
		}

		switch (inputField) {
			case InputField.SHORT:
				shortCalcUpdate(text);
				return;
			case InputField.LONG:
				longCalcUpdate(text);
				return;
			case InputField.TOTAL:
				totalCalcUpdate(text);
				return;
			default:
				return;
		}
	};

	const shortCalcUpdate = (short: string) => {
		const shortNum = Number(short);
		const long = formatInput(shortNum * phi);
		const total = formatInput(shortNum * 2 + Number(long) * 2);

		setCalcValue({ short, long, total });
	};

	const longCalcUpdate = (long: string) => {
		const longNum = Number(long);
		const short = formatInput(longNum / phi);
		const total = formatInput(Number(short) * 2 + longNum * 2);

		setCalcValue({ short, long, total });
	};

	const totalCalcUpdate = (total: string) => {
		const totalNum = Number(total);
		const short = formatInput(totalNum / (1 + phi));
		const long = formatInput(Number(short) * phi);

		setCalcValue({ short, long, total });
	};

	const formatInput = (number: number): string => {
		return isNaN(number) ? 'ERROR' : String(number.toFixed(decimals));
	};

	const clearCalcValues = () => {
		setCalcValue({ short: '', long: '', total: '' });
	};

	const getSelectedCalcValue = (): string => {
		return calcValue[inputField];
	};

	return (
		<View style={styles.rectContainer}>
			<DisplayRectangle inputField={inputField}>
				<>
					<SideInput
						pressView={() => setInputField(InputField.SHORT)}
						isSelected={inputField === InputField.SHORT}
						labelText="Short Side"
						value={calcValue.short}
					/>
					<SideInput
						pressView={() => setInputField(InputField.LONG)}
						isSelected={inputField === InputField.LONG}
						labelText="Long Side"
						value={calcValue.long}
					/>
					<SideInput
						pressView={() => setInputField(InputField.TOTAL)}
						isSelected={inputField === InputField.TOTAL}
						labelText="Total"
						value={calcValue.total}
					/>
				</>
			</DisplayRectangle>

			<NumberPad
				buttonPress={(text) => numberButtonPress(text)}
				clearButton={() => clearButtonPress()}
				deleteButton={() => deleteButtonPress()}
				flipCard={() => {}}
				updateDecimals={() => decimalsButtonPress()}
				decimals={decimals}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	rectContainer: {
		// height: constants.RECT_HEIGHT,
		// width: constants.RECT_CONTAINER_WIDTH,
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 10,
	},
});

export default GoldenRatioCalc;
