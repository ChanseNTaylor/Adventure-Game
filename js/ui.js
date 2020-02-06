"use strict";
const UI = function()
{
    const input = document.getElementsByClassName("input")[0];
    const textDiv = document.getElementsByClassName("textDiv")[0];  // fix name
    const time = document.getElementsByClassName("header__time")[0];
    const moves = document.getElementsByClassName("header__moves")[0];
    const score = document.getElementsByClassName("header__score")[0];
    const location = document.getElementsByClassName("header__location")[0];

    textDiv.addEventListener("click", evt => { input.focus(); });

    input.addEventListener("keydown", evt =>
    {
        if(evt.key == "Enter")
        {
            addInputText(`>${input.value}`);
            addResponseText(Game.ParseUserInput(input.value));

            input.value = "";
            Game.UpdateUI();
        }
    });

    const addTitleText = text =>
    {
        const newParagraph = document.createElement("P");

        newParagraph.appendChild(document.createTextNode(text));
        newParagraph.classList.add("textDiv__title");

        textDiv.appendChild(newParagraph);
    };

    const addSubtitleText = text =>
    {
        const newParagraph = document.createElement("P");

        newParagraph.appendChild(document.createTextNode(text));
        newParagraph.classList.add("textDiv__subtitle");

        textDiv.appendChild(newParagraph);
    };

    const addInputText = text =>
    {
        const newSpan = document.createElement("P");

        newSpan.appendChild(document.createTextNode(text));
        newSpan.classList.add("textDiv__input");

        textDiv.appendChild(newSpan);
    };

    const addLocationHead = text =>
    {
        const newSpan = document.createElement("SPAN");

        newSpan.appendChild(document.createTextNode(text));
        newSpan.classList.add("textDiv__location");

        textDiv.appendChild(newSpan);
    }

    const addLocationBodyText = text =>
    {
        const newParagraph = document.createElement("P");

        newParagraph.appendChild(document.createTextNode(text));
        newParagraph.classList.add("textDiv__location-body");

        textDiv.appendChild(newParagraph);
    };

    const addResponseText = text =>
    {
        const newParagraph = document.createElement("P");

        newParagraph.appendChild(document.createTextNode(text));
        newParagraph.classList.add("textDiv__message");

        textDiv.appendChild(newParagraph);
    };

    return {
        addTitleText: addTitleText,
        addSubtitleText: addSubtitleText,
        addLocationHead: addLocationHead,
        addLocationBodyText: addLocationBodyText,
        setTime(num) { time.innerHTML = num },
        setScore(num) { score.innerHTML = num },
        setMoves(num) { moves.innerHTML = num },
        setLocation(place) { location.innerHTML = place }
    }
}

// The only difference between a lot of these is the element and class...