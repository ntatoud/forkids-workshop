import { handlePlayerMovement, heroComponents } from "@/hero";
import k from "@/kaplay";

import { floorLayer, floorLayerOptions } from "@/scenes/spawn/floor";
import { objectsLayer, objectsLayerOptions } from "@/scenes/spawn/objects";

k.scene("spawn", () => {
  // Load the Floor first
  k.addLevel(floorLayer, floorLayerOptions);

  // Then load all of the objects
  const map = k.addLevel(objectsLayer, objectsLayerOptions);

  const hero = map.spawn(heroComponents, 2, 2);
  if (!hero) throw new Error("Hero not found");

  // Camera follows player
  hero.onUpdate(() => {
    setCamPos(hero.pos);
  });
  hero.onPhysicsResolve(() => {
    // Set the viewport center to player.pos
    setCamPos(hero.pos);
  });

  handlePlayerMovement(hero);
});
