"use strict";
const Map = function()
{
    let time = "6:00AM";

    return {
        setTime(newTime) { time = newTime },
        getTime() { return time; }
    }
}

// setTime() will need to be changed quite a bit.
