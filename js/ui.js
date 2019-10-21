"use strict";
const UI = function()
{
    const textDiv = document.getElementsByClassName("textDiv")[0];  // fix name
    const time = document.getElementsByClassName("header__time")[0];
    const moves = document.getElementsByClassName("header__moves")[0];
    const score = document.getElementsByClassName("header__score")[0];
    const location = document.getElementsByClassName("header__location")[0];

    const addTitleText = text =>
    {
        const newParagraph = document.createElement("P");

        newParagraph.appendChild(document.createTextNode(text));
        newParagraph.classList.add("textDiv__title");

        textDiv.appendChild(newParagraph);
    }

    const addSubtitleText = text =>
    {
        const newSpan = document.createElement("SPAN");

        newSpan.appendChild(document.createTextNode(text));
        newSpan.classList.add("textDiv__message");

        textDiv.appendChild(newSpan);
    }

    return {
        addTitleText: addTitleText,
        addSubtitleText: addSubtitleText,
        setTime(num) { time.innerHTML = num },
        setScore(num) { score.innerHTML = num },
        setMoves(num) { moves.innerHTML = num },
        setLocation(place) { location.innerHTML = place }
    }
}
