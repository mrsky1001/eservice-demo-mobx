/**
 * makeId
 * User for make id for yours arrays or object.
 * Dont change this file!!!
 */

const makeId = function makeId(array = "", template, isImportant = false) {
    function make() {
        let text = template !== undefined ? template : "",
            possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            possibleNums = "0123456789"

        for (let i = 0; i < 4; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))

        for (let j = 0; j < 5; j++) text += possibleNums.charAt(Math.floor(Math.random() * 10))

        let flag = true

        if (!isImportant)
            if (Array.isArray(array)) {
                array.forEach(function(elem2) {
                    if (elem2.id !== undefined && String(elem2.id).indexOf(text) >= 0) {
                        flag = false
                        return false
                    }
                })
            } else if (array.id !== undefined && String(array.id).indexOf(text) >= 0) {
                flag = false
                return false
            }

        if (flag) return text
        else return make()
    }

    if (Array.isArray(array)) {
        array.forEach(function(elem) {
            if (typeof elem !== "object") {
                elem = {
                    value: elem,
                }
            }

            if (elem.id === undefined) elem.id = make()
        })
    } else if (typeof array === "object" && array !== null) {
        try {
            if (array.id === undefined) {
                array.id = make()
            }
        } catch (e) {
            console.log("Error creating id!")
            console.log(e)
        }
    } else if (typeof array === "string") {
        try {
            return make()
        } catch (e) {
            console.log("Error creating unique!")
            console.log(e)
        }
    }
}

export default makeId
