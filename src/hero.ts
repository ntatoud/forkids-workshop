import k from "@/kaplay";

// Get the hero sprite
k.loadSpriteAtlas("sprites/0x72_DungeonTilesetII_v1.7.png", {
  hero: {
    x: 128,
    y: 196,
    width: 144,
    height: 28,
    sliceX: 9,
  },
});

// Display the hero
const hero = k.add([k.sprite("hero"), k.scale(3), k.pos()]);

// Handle movements
const SPEED = 200;

const dirs = {
  left: LEFT,
  right: RIGHT,
  up: UP,
  down: DOWN,
};

onKeyDown("right", () => {
  hero.move(dirs.right.scale(SPEED));
});

onKeyDown("left", () => {
  hero.move(dirs.left.scale(SPEED));
});

onKeyDown("up", () => {
  hero.move(dirs.up.scale(SPEED));
});

onKeyDown("down", () => {
  hero.move(dirs.down.scale(SPEED));
});
