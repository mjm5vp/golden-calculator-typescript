import React, { useState } from 'react';
import {
	View,
	TouchableWithoutFeedback,
	Image,
	StyleSheet,
} from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Entypo, Feather } from '@expo/vector-icons';

// Images
import goldenImage from './assets/images/goldenImage.png';
import spiral from './assets/images/golden-spiral.png';

// Fonts
import zaio from './assets/fonts/Zaio.ttf';
import orbitron from './assets/fonts/Orbitron-Regular.ttf';
import goldenFont from './assets/fonts/Golden-Ratio-Font.ttf';

// Styles
import * as colors from './src/utils/colors';
import * as constants from './src/utils/constants';

import GoldenRatioCalc from './src/golden-ratio/GoldenRatioCalc';

const cacheImages = (images: string[]) => {
	return images.map((image) => {
		if (typeof image === 'string') {
			const pre = Image.prefetch(image);
			return pre;
		}

		return Asset.fromModule(image).downloadAsync();
	});
};

const cacheFonts = (fonts: any) => {
	return fonts.map((font: any) => Font.loadAsync(font));
};

export default function App() {
	const [isReady, setIsReady] = useState(false);

	const loadAssetsAsync = async () => {
		const imageAssets = cacheImages([goldenImage, spiral]);

		const fontAssets = cacheFonts([
			Entypo.font,
			Feather.font,
			{
				zaio,
				orbitron,
				goldenFont,
			},
		]);

		await Promise.all([...imageAssets, ...fontAssets]);
	};

	if (!isReady) {
		return (
			<AppLoading
				startAsync={loadAssetsAsync}
				onFinish={() => setIsReady(true)}
				onError={console.warn}
			/>
		);
	}
	return (
		<TouchableWithoutFeedback>
			<View style={styles.container}>
				<View style={styles.calc}>
					<GoldenRatioCalc />
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.gb.white,
		justifyContent: 'center',
		alignItems: 'center',
	},
	calc: {
		width: constants.CALC_WIDTH,
		height: constants.CALC_HEIGHT,
		backgroundColor: colors.t4k.c,
		borderColor: colors.gb.black,
		borderWidth: 4,
		borderRadius: 10,
		marginTop: 10,
		shadowColor: colors.gb.black,
		shadowOffset: { height: 10, width: 0 },
		shadowOpacity: 0.6,
		shadowRadius: 2,
		elevation: 10,
	},
});
