/**
 * ReducerFactory
 *  settings of app reducers.
 * Dont change this file!!!
 */
import { coreExceptions } from "../exceptions/exceptions"

export const initReducer = initState => {
    return initState
}

export const actionsReducer = Object.freeze({
    INIT: 0,
    SELECT: 1,
    PUSH: 2,
    REMOVE: 3,
    PROPERTY: 4,
    PROPERTY_WITH_SELECT: 5,
    CLEAR_CHANGED: 6,
    PROPERTY_WITHOUT_RENDER: 7,
    PROPERTY_WITH_SELECT_WITHOUT_RENDER: 8,
    CLEAR: 9,
    CHANGE_ELEMENT_LIST: 10,
    SELECT_WITHOUT_RENDER: 11,
})

export const reducerFactory = (state, action) => {
    const setProperty = (mystate, meaction) => {
        const listNames = Array.isArray(meaction.name) && meaction.name.length > 1 ? meaction.name : [meaction.name]
        const listValues = Array.isArray(meaction.value) && meaction.value.length > 1 ? meaction.value : [meaction.value]

        for (let i = 0; i < listNames.length; i++) {
            const listProps = listNames[i].split(".")
            let prop = mystate

            for (let i = 0; i < listProps.length - 1; i++) {
                prop = prop[listProps[i]]
            }

            prop[listProps[listProps.length - 1]] = listValues[i]
        }
    }

    switch (action.type) {
        /**
         * Case of initialization an object
         * @param value - it is a new object
         * @return new state
         */
        case actionsReducer.INIT:
            return initReducer(action.value)

        /**
         * Case of changing the selected object
         * @param value - id of the newly selected object
         * @return new state
         */
        case actionsReducer.SELECT: {
            try {
                const newState = state.getCopyThis()
                newState.setSelected(action.value)

                return newState
            } catch (e) {
                switch (e.name) {
                    case "ReferenceError":
                        console.error(coreExceptions.INVALID_PROP().message)
                        console.error(e)
                        break
                    default:
                        console.error(e)
                        break
                }

                return state
            }
        }

        /**
         * Case of changing the selected object
         * @param value - id of the newly selected object
         * @return  state
         */
        case actionsReducer.SELECT_WITHOUT_RENDER: {
            try {
                state.setSelected(action.value)

                return state
            } catch (e) {
                switch (e.name) {
                    case "ReferenceError":
                        console.error(coreExceptions.INVALID_PROP().message)
                        console.error(e)
                        break
                    default:
                        console.error(e)
                        break
                }

                return state
            }
        }

        /**
         * Case of adding an object to the factory list
         * @param value - the object
         * @return new state
         */
        case actionsReducer.PUSH: {
            try {
                const newState = state.getCopyThis()
                newState.addChanged(action.value)
                newState.push(action.value)

                return newState
            } catch (e) {
                switch (e.name) {
                    case "ReferenceError":
                        console.error(coreExceptions.INVALID_PROP().message)
                        console.error(e)
                        break
                    default:
                        console.error(e)
                        break
                }

                return state
            }
        }

        /**
         * Case of removing an object from the factory list
         * @param value - the object with field "id"
         * @return new state
         */
        case actionsReducer.REMOVE: {
            try {
                const newState = state.getCopyThis()
                newState.addChanged(action.value)
                newState.remove(action.value)

                return newState
            } catch (e) {
                switch (e.name) {
                    case "ReferenceError":
                        console.error(coreExceptions.INVALID_PROP().message)
                        console.error(e)
                        break
                    default:
                        console.error(e)
                        break
                }

                return state
            }
        }

        /**
         * Case of changing the field of the selected object
         * @param name - (can be like array if property is more one) the aLl including field name type of string. It can be like "property1.property2.property3"
         * @param value - new value(can be like array if name is array)
         * @return new state
         */
        case actionsReducer.PROPERTY: {
            try {
                const newState = state.getCopyThis()
                setProperty(newState, action)

                const listNames = Array.isArray(action.name) && action.name.length > 1 ? action.name : [action.name]
                if (listNames.find(item => item.includes("selected")) !== undefined) state.addChanged(listNames.selected)

                return newState
            } catch (e) {
                switch (e.name) {
                    case "ReferenceError":
                        console.error(coreExceptions.INVALID_PROP().message)
                        console.error(e)
                        break
                    default:
                        console.error(e)
                        break
                }

                return state
            }
        }

        /**
         * Case of changing the field of the selected object
         * @param name - the field name
         * @param value - new value
         * @return old state
         */
        case actionsReducer.PROPERTY_WITHOUT_RENDER: {
            try {
                setProperty(state, action)

                const listNames = Array.isArray(action.name) && action.name.length > 1 ? action.name : [action.name]
                if (listNames.find(item => item.includes("selected")) !== undefined) state.addChanged(listNames.selected)

                return state
            } catch (e) {
                switch (e.name) {
                    case "ReferenceError":
                        console.error(coreExceptions.INVALID_PROP().message)
                        console.error(e)
                        break
                    default:
                        console.error(e)
                        break
                }

                return state
            }
        }

        /**
         * Case of changing the field of the selected object and the change is the selected obj
         * @param id - the field name
         * @param name - the field name
         * @param value - new value
         * @return new state
         */
        case actionsReducer.PROPERTY_WITH_SELECT: {
            try {
                const newState = state.getCopyThis()
                newState.setSelected(action.id)

                setProperty(newState.selected, action)
                newState.addChanged(newState.selected)

                return newState
            } catch (e) {
                switch (e.name) {
                    case "ReferenceError":
                        console.error(coreExceptions.INVALID_PROP().message)
                        console.error(e)
                        break
                    default:
                        console.error(e)
                        break
                }

                return state
            }
        }

        /**
         * Case of changing the field of the selected object and the change is the selected obj
         * @param id - the field name
         * @param name - the field name
         * @param value - new value
         * @return old state
         */
        case actionsReducer.PROPERTY_WITH_SELECT_WITHOUT_RENDER: {
            try {
                state.setSelected(action.id)

                setProperty(state.selected, action)
                state.addChanged(state.selected)

                return state
            } catch (e) {
                switch (e.name) {
                    case "ReferenceError":
                        console.error(coreExceptions.INVALID_PROP().message)
                        console.error(e)
                        break
                    default:
                        console.error(e)
                        break
                }

                return state
            }
        }

        /**
         * Case of clearing the changed objects list
         * @return new state
         */
        case actionsReducer.CLEAR_CHANGED: {
            const newState = state.getCopyThis()
            newState.clearChanged()
            return newState
        }

        //

        /**
         * Case of clearing the objects list
         * @return new state
         */
        case actionsReducer.CLEAR: {
            const newState = state.getCopyThis()
            newState.clear()
            return newState
        }

        // /**
        //     //  * Case of changing the element of the list
        //     //  * @param name - the list name
        //     //  * @param elementId - the element id
        //     //  * @param value - new value of element
        //     //  * @return new state
        //     //  */
        //     // const getPropPlace = (prop, newState, listProps) => {
        //     //         for (let i = 0; i < listProps.length - 1; i++) {
        //     //             if(listProps[i] in prop)
        //     //                 prop = prop[listProps[i]]
        //     //             else
        //     //                 throw new Error(mainExceptions.PROP)
        //     //         }
        //     //
        //     //         return prop
        //     // }
        //
        // case actionsReducer.CHANGE_ELEMENT_LIST: {
        //     try {
        //         const newState = state.getCopyThis()
        //         const listProps = action.name.split(".")
        //         let prop = newState
        //
        //         prop[listProps[listProps.length - 1]] = action.value
        //         newState.addChanged(newState.selected)
        //
        //         return newState
        //     } catch (e) {
        //         switch (e.name) {
        //             case "ReferenceError":
        //                 console.error(mainExceptions.INVALID_PROP().message)
        //                 console.error(e)
        //                 break
        //             default:
        //                 console.error(e)
        //                 break
        //         }
        //
        //         return state
        //     }
        // }
        // case actionsReducer.UPDATE_LIST: {
        //     if (action.value !== undefined && action.name !== undefined && action.index !== undefined) {
        //         state.selected[action.name].value[action.index] = action.value
        //     }
        //
        //     return state
        // }
        //
        // case actionsReducer.UPDATE_VALUE: {
        //     if (action.value !== undefined && action.name !== undefined) {
        //         state.selected[action.name].value = action.value
        //     }
        //
        //     return state
        // }

        /**
         * The default case
         * @return old state
         */
        default:
            return state
    }
}
