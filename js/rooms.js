"use strict";
Room.InnBedroom = new Room(
{
    visited: true,
    name: "Inn Bedroom",
    items: [Item.UnlitLantern, Item.ShortSword],
    description: "You are in a small bedroom with only a bed and a small nightstand. It feels a bit cramped when you aren't in its shoddy bed."
});

Room.InnHallway = new Room(
{
    name: "Inn Hallway",
    description: "You are in a hallway just outside of the bedroom that you rented for last night. There are other doors in the hallway, but they're probably locked or occupied."
});

Room.Tavern = new Room(
{
    name: "Inn Lobby",
    description: "The ground floor of this Inn is a tavern.  A tavern that is considerably more empty than last night."
});

Room.TavernToilet = new Room(
{
    name: "Tavern Toilet",
    description: "There doesn't appear to be anything of value here.  This is just a remarkably filth restroom."
});

Room.TavernBasement = new Room(
{
    name: "Tavern Basement",
    description: "It is exceptionally dark down here, you'll need some sort of light source if "
});

Room.TownCenter = new Room(
{
    name: "Town Center",
    description: "You are near the center of this small town."
});


// Bedroom
Room.InnBedroom.north = Room.InnHallway;

// Hallway
Room.InnHallway.south = Room.InnBedroom;
Room.InnHallway.down = Room.Tavern;

// Tavern
Room.Tavern.up = Room.InnHallway;
Room.Tavern.west = Room.TavernToilet;
Room.Tavern.north = Room.TownCenter;
