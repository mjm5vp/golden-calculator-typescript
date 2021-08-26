import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import math from 'mathjs';

import * as constants from '../utils/constants';
import SideInput from '../components/SideInput';
import NumberPad from '../components/NumberPad';

type CalcValue = {
    short: string,
    long: string,
    total: string,
}

const GoldenRatioCalc = () => {
    const [calcValue, setCalcValue] = useState<CalcValue>({short: '', long: '', total: ''});
    const [decimals, setDecimals] = useState(5);
    const [inputField, setInputField] useState(null);

	// componentWillMount() {
	// 	this.clearHighlights();
	// 	this.clearBorders();
	// 	this.pressView('shortStyles');
	// }

	const pressView = (sideStyles: string) => {
		clearHighlights();
		clearBorders();
		// this.setState(styles[sideStyles]);
	};

	const clearBorders = () => {
		// this.setState(styles.clearBorders);
	};

	const clearHighlights = () => {
		// this.setState(styles.clearHighlights);
	};

	const buttonPress = (text: string) => {
		return inputField ? buttonFunction(inputField, text ) : null;
	};

	const buttonFunction = (inputField: string, text: string) => {
		const func = `${inputField}TextChange`;
		const newText = calcValue[inputField] + text;

		return newText !== '' ? window[func](newText) : setAllToEmptyString();
	};

	const deleteButton = () => {
		return inputField ? deleteFunction(inputField) : null;
	};

	const deleteFunction = (inputField: string) => {
		const func = `${inputField}TextChange`;
		const side = calcValue[inputField];
		const newText = side.substring(0, side.length - 1);

		return newText !== '' ? window[func](newText) : setAllToEmptyString();
	};

	const shortTextChange = (short: string) => {
		const shortNum = Number(short);
		const long = formatInput(shortNum * math.phi);
		const total = formatInput(shortNum * 2 + long * 2);

		setCalcValue({ short, long, total });
	};

	const longTextChange = (long: string) => {
		const longNum = Number(long);
		const short = formatInput(longNum / math.phi);
		const total = formatInput(short * 2 + longNum * 2);

		setCalcValue({ short, long, total });
	};

	const totalTextChange = (total: string) => {
		const totalNum = Number(total);
		const short = formatInput(totalNum / (1 + math.phi));
		const long = formatInput(short * math.phi);

		setCalcValue({ short, long, total });
	};

	const updateDecimals = () => {
		setDecimals(decimals === 10 ? 0 : decimals + 1);

        if (!calcValue.short) {
            setAllToEmptyString()
        } else {
            selectUpdateOninputField();
        }
	};

	const selectUpdateOninputField = () => {
		const func = `${inputField}TextChange`;
		const text = calcValue[inputField];

		return inputField ? eval(func)(text) : null;
	};

	const formatInput = (number: number) => {
		return isNaN(number)
			? 'ERROR'
			: String(number.toFixed(decimals));
	};

	const clearButton = () => {
		setInputField(null);
		setAllToEmptyString();
		clearHighlights();
		clearBorders();
		pressView('shortStyles');
	};

	const setAllToEmptyString = () => {
		setCalcValue({ short: '', long: '', total: '' });
	};

	render() {
		const {
			borderTopColor,
			borderRightColor,
			borderLeftColor,
			borderBottomColor,
		} = this.state;
		const borderStyles = {
			borderTopColor,
			borderRightColor,
			borderLeftColor,
			borderBottomColor,
		};

		const shortHighlight = { backgroundColor: this.state.shortHighlight };
		const longHighlight = { backgroundColor: this.state.longHighlight };
		const totalHighlight = { backgroundColor: this.state.totalHighlight };

		return (
			<View>
				<View style={[styles.rectContainer]}>
					<View style={[styles.constRect, borderStyles]}>
						<SideInput
							pressView={() => this.pressView('shortStyles')}
							highlightStyle={shortHighlight}
							labelText="Short Side"
							value={this.state.short}
						/>
						<SideInput
							pressView={() => this.pressView('longStyles')}
							highlightStyle={longHighlight}
							labelText="Long Side"
							value={this.state.long}
						/>
						<SideInput
							pressView={() => this.pressView('totalStyles')}
							highlightStyle={totalHighlight}
							labelText="Total"
							value={this.state.total}
						/>
					</View>
				</View>

				<NumberPad
					buttonPress={(text) => this.buttonPress(text)}
					clearButton={() => this.clearButton()}
					deleteButton={() => this.deleteButton()}
					flipCard={this.props.flipCard}
					updateDecimals={() => this.updateDecimals()}
					decimals={this.state.decimals}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	shortStyles: {
		inputField: 'short',
		borderRightColor: constants.borderHighlight,
		shortHighlight: constants.highlight,
	},
	longStyles: {
		inputField: 'long',
		borderTopColor: constants.borderHighlight,
		longHighlight: constants.highlight,
	},
	totalStyles: {
		inputField: 'total',
		borderTopColor: constants.borderHighlight,
		borderRightColor: constants.borderHighlight,
		borderLeftColor: constants.borderHighlight,
		borderBottomColor: constants.borderHighlight,
		totalHighlight: constants.highlight,
	},
	clearBorders: {
		borderTopColor: constants.borderColor,
		borderRightColor: constants.borderColor,
		borderLeftColor: constants.borderColor,
		borderBottomColor: constants.borderColor,
	},
	clearHighlights: {
		shortHighlight: constants.inputColor,
		longHighlight: constants.inputColor,
		totalHighlight: constants.inputColor,
	},
	containerView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	formInputContainer: {
		width: '50%',
	},
	rectContainer: {
		height: constants.RECT_HEIGHT,
		width: constants.RECT_CONTAINER_WIDTH,
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 10,
	},
	constRect: {
		justifyContent: 'space-around',
		borderWidth: 8,
		borderRadius: 5,
		shadowOffset: { height: 1, width: 0 },
		shadowColor: 'black',
		shadowOpacity: 1.0,
		width: constants.RECT_WIDTH,
		height: constants.RECT_HEIGHT,
		backgroundColor: colors.rectBackground,
	},
	sideInputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 30,
		marginRight: 30,
	},
	elevationInput: {
		borderTopWidth: 0,
		elevation: 10,
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

export default GoldenRatioCalc;
