import k from "@/kaplay";
import { GameObj, SpriteAtlasEntry } from "kaplay";

// Get the hero sprite
export const heroSpriteConfig: SpriteAtlasEntry = {
  x: 128,
  y: 196,
  width: 144,
  height: 28,
  sliceX: 9,
  anims: {
    // When the hero is not moving
    idle: {
      from: 0,
      to: 3,
      speed: 3,
      loop: true,
    },
    // When the hero is moving
    run: {
      from: 4,
      to: 7,
      speed: 10,
      loop: true,
    },
    hit: 8,
  },
};

// Display the hero
export const heroComponents = [
  k.sprite("hero", { anim: "idle" }),
  k.pos(),
  k.area({ shape: new Rect(vec2(0, 6), 12, 12) }),
  k.body(),
  k.anchor("center"),
  k.tile(),
];

// Handle movements
const SPEED = 120;

const dirs = {
  left: LEFT,
  right: RIGHT,
  up: UP,
  down: DOWN,
};

export const handlePlayerMovement = (hero: GameObj | null) => {
  if (!hero) return;
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

  // Update animations when moving
  ["left", "right", "up", "down"].forEach((key) => {
    onKeyPress(key, () => {
      hero.play("run");

      // Flip the sprite when moving left/right
      if (key === "left") {
        hero.flipX = true;
      }
      if (key === "right") {
        hero.flipX = false;
      }
    });
    onKeyRelease(key, () => {
      if (
        !isKeyDown("left") &&
        !isKeyDown("right") &&
        !isKeyDown("up") &&
        !isKeyDown("down")
      ) {
        hero.play("idle");
      }
    });
  });
};
