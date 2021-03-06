//pixels per cell
export const CELL_SIZE = 30;
export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 22;
export const BUFFER_ZONE_HEIGHT = 21; //tetris guideline
export const PEEK_HEIGHT = CELL_SIZE - 10; // px of 21st row to hide
export const BOARD_TOP_Y = -PEEK_HEIGHT - CELL_SIZE; //accounting for hidden top row and peek
//amount of tetros you can see in advance, tetris guideline
export const NEXT_SIZE = 6;
export const MAX_LEVEL = 15; //tetris guideline
export const FIXED_GOAL = 10; //lines per level
export const AUTO_REPEAT_FREQ = 50; //tetris guideline
export const AUTO_REPEAT_DELAY = 300; //tetris guideline

export const LOCKDOWN_TIME = 500; //tetris guideline for ext. lockdown
export const LOCKDOWN_MOVE_LIMIT = 15; //tetris guideline for ext. lockdown

export const LEFT_MARGIN = 8 * CELL_SIZE;
export const RIGHT_MARGIN = 8 * CELL_SIZE;

export const DIRECTION = {
  NONE: 0,
  LEFT: 1,
  RIGHT: 2,
  UP: 3,
  DOWN: 4,
  CLOCKWISE: 5,
  ANTI_CLOCKWISE: 6
};

export const COLOUR = {
  BACKGROUND: [24, 24, 24],
  ALMOST_WHITE: [230, 230, 230],
  RED: [209, 41, 0],
  ORANGE: [209, 121, 0],
  YELLOW: [209, 205, 0],
  GREEN: [0, 209, 66],
  LIGHT_BLUE: [0, 209, 209],
  BLUE: [0, 62, 209],
  PURPLE: [128, 0, 209],
  MAGENTA: [255, 0, 255],
  NIGHT: [34, 34, 41],
  GRAY: [90, 90, 90],
  LIGHT_GRAY: [160, 160, 160],
  DARK_GRAY: [90, 90, 90],
  ALMOST_BLACK: [35, 35, 35]
};

export const KEY = {
  W: ('W').charCodeAt(0),
  S: ('S').charCodeAt(0),
  A: ('A').charCodeAt(0),
  D: ('D').charCodeAt(0),
  Q: ('Q').charCodeAt(0),
  E: ('E').charCodeAt(0),
  R: ('R').charCodeAt(0),
  C: ('C').charCodeAt(0),
  P: ('P').charCodeAt(0),
  SPACE: (' ').charCodeAt(0),
  ENTER: 13,
  LEFT_ARROW: 37,
  UP_ARROW: 38,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40
};

export const STATE = {
  NONE: 0,
  MENU: 1,
  PAUSED: 2,
  PLAYING: 3,
  GAME_OVER: 4
};

export const MOVE = {
  NONE: 0,
  TSPIN: 1,
  TSPIN_MINI: 2
};