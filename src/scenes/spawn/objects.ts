import { LevelOpt, Shape } from "kaplay";

export const objectsLayer = [
  "tttttttttt",
  "cwwwwwwwwd",
  "l        r",
  "l        r",
  "l        r",
  "l      $ r",
  "l        r",
  "l $      r",
  "attttttttb",
  "wwwwwwwwww",
];

const wallComponents = (shape?: Shape) => [
  area({ shape }),
  body({ isStatic: true }),
  tile({ isObstacle: true }),
];
export const objectsLayerOptions: LevelOpt = {
  tileWidth: 16,
  tileHeight: 16,
  tiles: {
    a: () => [
      sprite("wall_botleft"),
      ...wallComponents(new Rect(vec2(0), 4, 16)),
    ],
    b: () => [
      sprite("wall_botright"),
      ...wallComponents(new Rect(vec2(12, 0), 4, 16)),
    ],
    c: () => [sprite("wall_topleft"), ...wallComponents()],
    d: () => [sprite("wall_topright"), ...wallComponents()],
    w: () => [sprite("wall"), ...wallComponents()],
    t: () => [
      sprite("wall_top"),
      ...wallComponents(new Rect(vec2(0, 12), 16, 4)),
    ],
    l: () => [sprite("wall_left"), ...wallComponents(new Rect(vec2(0), 4, 16))],
    r: () => [
      sprite("wall_right"),
      ...wallComponents(new Rect(vec2(12, 0), 4, 16)),
    ],
  },
};
