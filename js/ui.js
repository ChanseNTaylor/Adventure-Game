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
        const userInput = evt.target.value;

        if(evt.key == "Enter")
        {
            addTextElement(".textDiv__message", `>${userInput}`);
            addTextElement("textDiv__message", Game.ParseUserInput(userInput));

            clearInputField();
            Game.UpdateUI();
        }
    });

    const clearInputField = () => { input.value = ""; };

    const addTextElement = (className, text) =>
    {
        const newParagraph = document.createElement("P");

        newParagraph.appendChild(document.createTextNode(text));
        newParagraph.classList.add(className);

        textDiv.appendChild(newParagraph);
    };

    return {
        addTextElement: addTextElement,
        clearInputField: clearInputField,
        setTime(num) { time.innerHTML = num },
        setScore(num) { score.innerHTML = num },
        setMoves(num) { moves.innerHTML = num },
        setLocation(place) { location.innerHTML = place }
    }
}
