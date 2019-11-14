"use strict";
const Game = (function()
{
    const GAME_TITLE = "This Game Has No Title Yet";
    const GAME_SUBTITLE = "I'll come up with something good later.";

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

    const addTitleAndSubtitle = () =>
    {
        ui.addTitleText(GAME_TITLE);
        ui.addSubtitleText(GAME_SUBTITLE);
    }

    const parseUserInput = userInput =>
    {
        userInput = userInput.toLowerCase();

        if(["hi", "hello", "hey", "howdy"].includes(userInput))
        {
            const responses = ["Hello.", "Goodbye.", "Howdy.", "Good day."];

            return responses[Math.floor(Math.random() * responses.length)];
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
                player.location =player.location.north;

                return `${player.location.name}
                ${player.location.description}`;
            }

            return "You cannot go that way";
        }
        else if(["south", "s"].includes(userInput))
        {
            if(player.location.south)
            {
                player.incrementMoves();
                player.location = player.location.south;

                return `${player.location.name}
                ${player.location.description}`;
            }

            return "You cannot go that way";
        }
        else if(["east", "e"].includes(userInput))
        {
            if(player.location.east)
            {
                player.incrementMoves();
                player.location = player.location.east;

                return `${player.location.name}
                ${player.location.description}`;
            }

            return "You cannot go that way";
        }
        else if(["west", "w"].includes(userInput))
        {
            if(player.location.west)
            {
                player.incrementMoves();
                player.location = player.location.west;

                return `${player.location.name}
                ${player.location.description}`;
            }

            return "You cannot go that way";
        }

        return `Command '${userInput}' not recognized`;
    };

    // initialization
    player.location = Room.InnBedroom;

    updateUI();
    addTitleAndSubtitle();

    ui.addLocationText(player.location.name);
    ui.addSubtitleText(player.location.description);

    return {
        UI: ui,
        Map: map,
        Player: player,
        UpdateUI: updateUI,
        ParseUserInput: parseUserInput
    }
})();
