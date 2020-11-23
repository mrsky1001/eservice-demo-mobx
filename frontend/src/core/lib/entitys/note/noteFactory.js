import getEntityFactory from "../Etity/EntityFactory"
import Note from "./Note"

class NoteFactory extends getEntityFactory(Note) {
    constructor(list) {
        super(list)
    }
}

export default NoteFactory
