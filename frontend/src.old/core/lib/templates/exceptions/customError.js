import React from "react"
import makeId from "../../common/makeId"

class CustomError {
    constructor(...rows) {
        this.msg = ""
        this.rows = rows

        rows.forEach(elem => {
            this.msg += elem + "\n"
        })
    }

    get error() {
        return new Error(this.msg)
    }

    get msgToToast() {
        return (
            <div>
                {this.rows.map(elem => {
                    return (
                        <div key={makeId()}>
                            <p>{elem}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CustomError
