import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import * as constants from '../utils/constants';
import spiral from '../../assets/images/golden-spiral.png';
import SpiralSegment from '../components/SpiralSegment';

type DisplayRectangleProps = {
	calcValue: string[];
	selectedSegment: number;
	onPress: (segmentId: number) => void;
};

const DisplayRectangle = ({
	calcValue,
	selectedSegment,
	onPress,
}: DisplayRectangleProps) => {
	return (
		<ImageBackground source={spiral} style={[styles.displayRectangle]}>
			<SpiralSegment
				segmentId={4}
				value={calcValue[4]}
				isSelected={selectedSegment === 4}
				onPress={() => onPress(4)}
			/>
			<View style={styles.container_2_3}>
				<SpiralSegment
					segmentId={3}
					value={calcValue[3]}
					isSelected={selectedSegment === 3}
					onPress={() => onPress(3)}
				/>
				<View style={styles.container_1_2}>
					<SpiralSegment
						segmentId={2}
						value={calcValue[2]}
						isSelected={selectedSegment === 2}
						onPress={() => onPress(2)}
					/>
					<View style={styles.container_0_1}>
						<SpiralSegment
							segmentId={1}
							value={calcValue[1]}
							isSelected={selectedSegment === 1}
							onPress={() => onPress(1)}
						/>
						<SpiralSegment
							segmentId={0}
							value={calcValue[0]}
							isSelected={selectedSegment === 0}
							onPress={() => onPress(0)}
						/>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	displayRectangle: {
		borderWidth: 0,
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
	container_2_3: {
		alignItems: 'flex-end',
	},
	container_1_2: {
		flexDirection: 'row-reverse',
	},
	container_0_1: {
		flexDirection: 'column-reverse',
	},
});

export default DisplayRectangle;
