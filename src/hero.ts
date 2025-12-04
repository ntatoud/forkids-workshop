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
k.add([k.sprite("hero"), k.scale(3)]);
