import { LevelOpt } from "kaplay";

export const floorLayer = [
  "xxxxxxxxxx",
  "          ",
  "          ",
  "          ",
  "          ",
  "          ",
  "          ",
  "          ",
  "          ",
  "          ",
];

export const floorLayerOptions: LevelOpt = {
  tileWidth: 16,
  tileHeight: 16,
  tiles: {
    " ": () => [sprite("floor", { frame: ~~rand(0, 8) })],
  },
};
