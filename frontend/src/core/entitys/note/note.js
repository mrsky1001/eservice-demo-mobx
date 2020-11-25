import Entity from "../entity/entity"

class Note extends Entity {
    constructor(object, parent) {
        super(object, parent)

        this._name = this.parseField(this._name, "")
        this._description = this.parseField(this._description, "")
    }

    get name() {
        return this._name
    }

    get description() {
        return this._description
    }
}

export default Note
