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

        const randomIndex = arr => arr[Math.floor(Math.random() * arr.length)];
        const move = direction =>
        {
            if(player.location[direction])
            {
                player.incrementMoves();
                player.location = player.location[direction];

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
        else if(userInput == "go")
        {
            return "Where would you like to go?";
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
            player.incrementMoves();

            return randomIndex(["Hello.", "Goodbye.", "Howdy.", "Good day."]);
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
        else if(["down", "d"].includes(userInput))
        {
            return move("down");
        }
        else if(["up", "u"].includes(userInput))
        {
            return move("up");
        }
        else if(["north", "n"].includes(userInput))
        {
            return move("north")
        }
        else if(["south", "s"].includes(userInput))
        {
            return move("south");
        }
        else if(["east", "e"].includes(userInput))
        {
            return move("east");
        }
        else if(["west", "w"].includes(userInput))
        {
            return move("west");
        }
        else if(["take", "get", "drop", "attack"].includes(userInput))
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

            if(player.previousMoves[1] == "drop")
            {
                player.location.addItem(player.inventory[index]);
                player.removeFromInventory(player.inventory);

                return `The ${userInput} was left behind.`;
            }
        }

        // needs work
        if(userInput.includes(" "))
        {
            for(let aa = 0; aa < userInput.split(" ").length; aa++)
            {
                if(aa == userInput.split(" ").length - 1)
                {
                    return `${parseUserInput(userInput.split(" ")[aa])}`;
                }

                parseUserInput(userInput.split(" ")[aa]);
            }
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
