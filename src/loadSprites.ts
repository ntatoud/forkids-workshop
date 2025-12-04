import { heroSpriteConfig } from "@/hero";
import k from "@/kaplay";

k.loadSpriteAtlas("sprites/dungeon.png", {
  hero: heroSpriteConfig,
  floor: {
    x: 16,
    y: 64,
    width: 48,
    height: 48,
    sliceX: 3,
    sliceY: 3,
  },
  wall: {
    x: 16,
    y: 16,
    width: 16,
    height: 16,
  },
  wall_top: {
    x: 16,
    y: 0,
    width: 16,
    height: 16,
  },
  wall_left: {
    x: 16,
    y: 128,
    width: 16,
    height: 16,
  },
  wall_right: {
    x: 0,
    y: 128,
    width: 16,
    height: 16,
  },
  wall_topleft: {
    x: 32,
    y: 128,
    width: 16,
    height: 16,
  },
  wall_topright: {
    x: 48,
    y: 128,
    width: 16,
    height: 16,
  },
  wall_botleft: {
    x: 32,
    y: 144,
    width: 16,
    height: 16,
  },
  wall_botright: {
    x: 48,
    y: 144,
    width: 16,
    height: 16,
  },
});
