import { Dimensions } from 'react-native';
import { phi } from 'mathjs';
import * as colors from './colors';

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
export const SEGMENT_LENGTH_4 = RECT_HEIGHT;
export const SEGMENT_LENGTH_3 = RECT_WIDTH - SEGMENT_LENGTH_4;
export const SEGMENT_LENGTH_2 = SEGMENT_LENGTH_4 - SEGMENT_LENGTH_3;
export const SEGMENT_LENGTH_1 = SEGMENT_LENGTH_3 - SEGMENT_LENGTH_2;
export const SEGMENT_LENGTH_0 = SEGMENT_LENGTH_2 - SEGMENT_LENGTH_1;

// Text Inputs
export const TEXT_INPUT_0_FONT_SIZE = SEGMENT_LENGTH_0 / 4;
export const TEXT_INPUT_1_FONT_SIZE = TEXT_INPUT_0_FONT_SIZE * phi;
export const TEXT_INPUT_2_FONT_SIZE = TEXT_INPUT_1_FONT_SIZE * phi;
export const TEXT_INPUT_3_FONT_SIZE = TEXT_INPUT_2_FONT_SIZE * phi;
export const TEXT_INPUT_4_FONT_SIZE = TEXT_INPUT_3_FONT_SIZE * phi;
export const LINE_HEIGHT_MULTIPLIER = 0.9;
// export const TEXT_INPUT_HEIGHT = RECT_HEIGHT / 3 - RECT_HEIGHT * 0.05;
// export const TEXT_INPUT_WIDTH = TEXT_INPUT_HEIGHT * phi;

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
export const highlight = 'rgba(255,220,115, .5)';
