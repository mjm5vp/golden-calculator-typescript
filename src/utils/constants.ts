import { Dimensions } from 'react-native';
import { phi } from 'mathjs';
import colors from './colors';

// Colors
export const gold = '#D4AF37';

// Screen
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;

// Calculator
export const CALC_WIDTH =
	ASPECT_RATIO > phi ? SCREEN_WIDTH * 0.95 : SCREEN_WIDTH * 0.7;
export const CALC_HEIGHT = CALC_WIDTH * phi;

// Rect Screen
export const RECT_WIDTH = CALC_WIDTH * 0.95;
export const RECT_HEIGHT = RECT_WIDTH / phi;

// Spiral Segments
export const LONG_SEGMENT_LENGTH = RECT_WIDTH - RECT_HEIGHT;
export const SHORT_SEGMENT_LENGTH = RECT_HEIGHT - LONG_SEGMENT_LENGTH;

// Text Inputs
export const TEXT_INPUT_HEIGHT = RECT_HEIGHT / 3 - RECT_HEIGHT * 0.05;
export const TEXT_INPUT_WIDTH = TEXT_INPUT_HEIGHT * phi;

// Video
export const VIDEO_WIDTH = RECT_WIDTH * 0.7;
export const VIDEO_HEIGHT = VIDEO_WIDTH / phi;

// Number Pad
export const NUMBER_PAD_HEIGHT = CALC_HEIGHT - RECT_HEIGHT - CALC_HEIGHT * 0.05;
export const BUTTON_HEIGHT = (NUMBER_PAD_HEIGHT - 80) / 5;
export const BUTTON_WIDTH = BUTTON_HEIGHT * phi;
export const BUTTON_FONT_SIZE = BUTTON_HEIGHT / 3;
// export const BUTTON_WIDTH = (RECT_CONTAINER_WIDTH * 0.7) / 3;
// export const BUTTON_HEIGHT = BUTTON_WIDTH / phi;

// Differences
export const CALC_SCREEN_DIFF_HEIGHT = SCREEN_HEIGHT - CALC_HEIGHT;
export const CALC_SCREEN_DIFF_WIDTH = SCREEN_WIDTH - CALC_WIDTH;

// Inputs
export const borderColor = colors.myGold.black;
export const inputColor = colors.myGold.grey;
export const borderHighlight = colors.t4k.e;
export const highlight = colors.t4k.e;
