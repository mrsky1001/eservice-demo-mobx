import getEntityFactory from "../entity/entityFactory"
import Note from "./note"

class NoteFactory extends getEntityFactory(Note) {
    constructor(list) {
        super(list)
    }
}

export default NoteFactory
