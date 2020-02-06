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
        let previousIsQuestion = false;
        userInput = userInput.toLowerCase().trim();

        if(!userInput)
        {
            return "What?";
        }

        if(["hi", "hello", "hey", "howdy"].includes(userInput))
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

                    return `${player.location.name}
                    ${player.location.description}`;
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
        else if(["take", "get"].includes(userInput))
        {
            previousIsQuestion = true;

            return `What would you like to ${userInput}?`;
        }

        if(player.location.items.includes(userInput))
        {
            return "I can see that!";
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
