"use strict";
const Game = (function()
{
    const GAME_TITLE = "Dragon Hunting";
    const GAME_SUBTITLE = "You're on a quest to slay a dragon that has been terrorizing the countryside.";
    const HELP_TEXT = "";
    const SCORE_TEXT = "";
    const TIME_TEXT = `You have been playing ${GAME_TITLE} for longer than you think.`;
    const INFO_TEXT = "A dragon has been destroying farming villages just outside the reach of the king's army for sometime now. King has put a bounty on the head of the dragon. You are one of the many would be dragonslayers. Hopefully, you do not meet the same fate as the knights and adventurers before you...";

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
        let previousIsQuestion = false;

        userInput = userInput.toLowerCase().trim();

        player.addToPreviousMoves(userInput);

        if(!userInput)
        {
            return "I beg your pardon?";
        }
        else if(userInput == "help")
        {
            player.incrementMoves();

            return HELP_TEXT;
        }
        else if(userInput == "score")
        {
            player.incrementMoves();

            return SCORE_TEXT;
        }
        else if(userInput == "time")
        {
            return TIME_TEXT;
        }
        else if(userInput == "info")
        {
            player.incrementMoves();

            return INFO_TEXT;
        }
        else if(userInput == "wait")
        {
            player.incrementMoves();

            return "Some time passes.";
        }
        else if(userInput == "diagnose")
        {
            return player.currentHP;
        }
        else if(["i", "inv", "inven", "inventory"].includes(userInput))
        {
            player.incrementMoves();

            if(player.inventory.length == 0)
            {
                return "You are not carrying anything right now.";
            }

            return player.getInventoryItemNames();
        }
        else if(["hi", "hello", "hey", "howdy"].includes(userInput))
        {
            const responses = ["Hello.", "Goodbye.", "Howdy.", "Good day."];

            player.incrementMoves();

            return responses[Math.floor(Math.random() * responses.length)];
        }
        else if(["look", "l"].includes(userInput))
        {
            player.incrementMoves();

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

                    ui.addTextElement("textDiv__location", player.location.name);

                    return player.location.description;
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

                    ui.addTextElement("textDiv__location", player.location.name);

                    return player.location.description;
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
    ui.addTextElement("textDiv__title", GAME_TITLE);
    ui.addTextElement("textDiv__subtitle", GAME_SUBTITLE);

    ui.addTextElement("textDiv__location", player.location.name);
    ui.addTextElement("textDiv__location-body", player.location.description);

    ui.clearInputField();

    return {
        UI: ui,
        Map: map,
        Player: player,
        UpdateUI: updateUI,
        ParseUserInput: parseUserInput
    }
})();

// complete the remove from inventory function for the character class
