import React, { useState } from 'react';
import {
	View,
	TouchableWithoutFeedback,
	Image,
	StyleSheet,
	Text,
} from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Entypo, Feather } from '@expo/vector-icons';

// Images
import goldenImage from './assets/images/goldenImage.png';
import title from './assets/images/title.png';

// Fonts
import zaio from './assets/fonts/Zaio.ttf';
import orbitron from './assets/fonts/Orbitron-Regular.ttf';
import goldenFont from './assets/fonts/Golden-Ratio-Font.ttf';

// Styles
import colors from './src/utils/colors';
import * as constants from './src/utils/constants';

import NumberPad from './src/components/NumberPad';

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
		const imageAssets = cacheImages([
			goldenImage,
			title,
			'https://s3.amazonaws.com/golden-calculator-video/golden-calculator.png',
		]);

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
				<NumberPad
					buttonPress={() => {}}
					deleteButton={() => {}}
					clearButton={() => {}}
					updateDecimals={() => {}}
					decimals={1}
					flipCard={() => {}}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.background,
	},
});
