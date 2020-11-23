import Entity from "../Etity/Entity"

class Sticky extends Entity {
    constructor(object, parent) {
        super(object, parent)

        this._number = this.parseField(this._number, "")
        this._top = this.parseField(this._top, 0)
        this._isOn = this.parseField(this._isOn, false)
        this._clientHeight = this.parseField(this._clientHeight, 0)
    }

    get top() {
        return this._top
    }

    set top(value) {
        this._top = value
    }

    get number() {
        return this._number
    }

    set number(value) {
        this._number = value
    }

    get isOn() {
        return this._isOn
    }

    set isOn(value) {
        this._isOn = value
    }

    get clientHeight() {
        this._clientHeight = document.querySelector("#" + this.id).clientHeight
        return this._clientHeight
    }
}

export default Sticky
