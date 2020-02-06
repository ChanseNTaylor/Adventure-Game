"use strict";
const Game = (function()
{
    const GAME_TITLE = "Dragon Hunting";
    const GAME_SUBTITLE = "You're on a quest to slay a dragon that has been terrorizing the countryside.";

    const ui = new UI();
    const map = new Map();
    const player = new Player();

    const updateUI = () =>
    {
        ui.setTime(map.getTime());
        ui.setScore(player.score);
        ui.setMoves(player.moves);
        ui.setLocation(player.location.name);
    }

    const parseUserInput = userInput =>
    {
        userInput = userInput.toLowerCase().trim();

        let previousIsQuestion = false;

        player.addToPreviousMoves(userInput);

        if(!userInput)
        {
            return "What?";
        }
        else if(["i", "inv", "inven", "inventory"].includes(userInput))
        {
            if(player.inventory.length == 0)
            {
                return "You are not carrying anything right now.";
            }

            return player.getInventoryItemNames();
        }
        else if(["hi", "hello", "hey", "howdy"].includes(userInput))
        {
            const responses = ["Hello.", "Goodbye.", "Howdy.", "Good day."];

            return responses[Math.floor(Math.random() * responses.length)];
        }
        else if(["look", "l"].includes(userInput))
        {
            return player.location.description;
        }
        else if(userInput == "shout")
        {
            player.incrementMoves();

            return "AAAAAAAARGH!";
        }
        else if(["north", "n"].includes(userInput))
        {
            if(player.location.north)
            {
                player.incrementMoves();
                player.location = player.location.north;

                if(player.location.visited == false)
                {
                    player.location.visited = true;

                    ui.addLocationHead(player.location.name);

                    return `${player.location.description}`;
                }

                return player.location.name;
            }

            return "You cannot go that way";
        }
        else if(["south", "s"].includes(userInput))
        {
            if(player.location.south)
            {
                player.incrementMoves();
                player.location = player.location.south;

                if(player.location.visited == false)
                {
                    player.location.visited = true;

                    return `${player.location.name}
                    ${player.location.description}`;
                }

                return player.location.name;
            }

            return "You cannot go that way";
        }
        else if(["east", "e"].includes(userInput))
        {
            if(player.location.east)
            {
                player.incrementMoves();
                player.location = player.location.east;

                if(player.location.visited == false)
                {
                    player.location.visited = true;

                    return `${player.location.name}
                    ${player.location.description}`;
                }

                return player.location.name;
            }

            return "You cannot go that way";
        }
        else if(["west", "w"].includes(userInput))
        {
            if(player.location.west)
            {
                player.incrementMoves();
                player.location = player.location.west;

                if(player.location.visited == false)
                {
                    player.location.visited = true;

                    return `${player.location.name}
                    ${player.location.description}`;
                }

                return player.location.name;
            }

            return "You cannot go that way";
        }
        else if(["take", "get", "drop"].includes(userInput))
        {
            return `What would you like to ${userInput}?`;
        }

        if(player.location.getItemNames().includes(userInput))
        {
            const index = player.location.getItemNames().indexOf(userInput);

            if(player.previousMoves[1] == "take")
            {
                player.addToInventory(player.location.items[index]);
                player.location.removeItemAt(index);

                return `The ${userInput} has been taken.`;
            }

            return "I can see that!";
        }

        if(player.getInventoryItemNames().includes(userInput))
        {
            const index = player.getInventoryItemNames().indexOf(userInput);

            console.log(index, player.previousMoves)

            if(player.previousMoves[1] == "drop")
            {
                player.location.addItem(player.inventory[index]);
                player.removeFromInventory(player.inventory);

                return `The ${userInput} was left behind.`;
            }
        }

        if(userInput.includes(" "))
        {
            return "I see that space";
        }

        return `Command '${userInput}' not recognized`;
    };

    // initialization
    player.location = Room.InnBedroom;

    updateUI();
    ui.addTitleText(GAME_TITLE);
    ui.addSubtitleText(GAME_SUBTITLE);

    ui.addLocationHead(player.location.name);
    ui.addLocationBodyText(player.location.description);

    return {
        UI: ui,
        Map: map,
        Player: player,
        UpdateUI: updateUI,
        ParseUserInput: parseUserInput
    }
})();

// complete the remove from inventory function for the character class