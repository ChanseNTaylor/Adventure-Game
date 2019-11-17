"use strict";
class Item
{
    constructor(properties)
    {
        this._dropped = false;
        this._name = properties["name"] || "Bad Item";
        this._initialDescription = properties["initialDescription"] || null;
        this._itemDescription = properties["itemDescription"] || "Where did you even find this?";
    }

    set name(name) { this._name = name; };
    set dropped(dropped) { this._dropped = dropped; };
    set initialDescription(initialDescription)
    {
        this._initialDescription = initialDescription
    };
    set itemDescription(itemDescription)
    {
        this._itemDescription = itemDescription;
    };

    get name() { return this._name; };
    get dropped() { return this._dropped };
    get itemDescription() { return this._itemDescription; };
    get initialDescription() { return this._initialDescription; };
}
