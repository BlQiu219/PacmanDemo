/* eslint-disable */

// ! Game state variables 

const cells = []

const gridSize = 18

const pacman = {
  position: 296,
  speed: 200,
  flee: true,
  lives: 3,
  score: 0,
  ableToMove: true
}

const blinky = {
  position: 115,
  speed: 400,
  asString: 'blinky',
}

// const pinky = {
//   position: 169,
//   speed: 600,
//   asString: 'pinky',
// }

// const inky = {
//   position: 118,
//   speed: 800,
//   asString: 'wrinkly'
// }

// const clyde = {
//   position: 172,
//   speed: 1000,
//   asString: 'clyde'
// }

const ghosts = [blinky] 

const biscuits = [19, 34, 289, 304, 145, 160]

const wall = [
  26, 27, 38, 39, 40, 41, 42, 44, 45, 47, 48, 49, 50, 51, 56, 57, 58, 59, 60, 62, 63, 65, 66, 67, 68, 69, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 114, 119, 127, 128, 129, 130, 132, 134, 135, 137, 139, 140, 141, 142, 152, 153, 163, 164, 165, 166, 168, 173, 175, 176, 177, 178, 181, 182, 183, 184, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 206, 207, 218, 219, 220, 222, 224, 225, 227, 229, 230, 231, 236, 237, 238, 240, 245, 247, 248, 249, 258, 259, 260, 261, 262, 263, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285
]