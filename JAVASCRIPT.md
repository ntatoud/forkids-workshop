- [] Introduction to basic javascript, function calling
  Part 1: The "Need to Know" JavaScript Concepts

You do not need to teach them loops, arrays, if/else chains, or complex object-oriented programming. In Kaplay, most logic is handled by the engine's built-in event listeners.

Focus only on these three concepts:

1. The "Function Call" (Giving Commands)

   Concept: "We need to tell the computer to do something now."

   Syntax: commandName() or commandName(value)

   Metaphor: It's like a spell or a verb. "Jump!", "Spawn!", "Go!"

   Key Examples: k.loadSprite(), k.add(), k.go()

2. The "Configuration Object" (Describing Things)

   Concept: "When we create a player, we need to describe what they look like and where they are."

   Syntax: Inside curly braces { }.

   Metaphor: It's a checklist or a character sheet.

   Key Examples:
   JavaScript

   k.add([
   k.sprite("bean"), // What does it look like?
   k.pos(80, 40), // Where is it?
   k.area(), // Does it have a physical body?
   ])

   Note: You don't even really need to explain "Arrays" vs "Objects" deeply here. Just teach that [] is for the list of ingredients (components) that make up the game object.

3. The "Event Listener" (Cause and Effect)

   Concept: "Wait for something to happen, then do this."

   Syntax: k.onSomething("trigger", () => { ... })

   Metaphor: An "If... Then" rule. "If I press space, then the bean jumps."

   Key Examples: k.onKeyPress(), k.onCollide(), k.onUpdate()
