import React from "react"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import Button from "react-bootstrap/Button"

const BarYesNo = ({ textYes = "Да", textNo = "Нет", onYes, onNo }) => {
    return (
        <div>
            <ButtonToolbar className={"navbar navbar-default sticky-top justify-content-end"}>
                <Button onClick={onYes} variant={"outline-primary"}>
                    {textYes}
                </Button>
                <Button onClick={onNo} variant={"outline-secondary"}>
                    {textNo}
                </Button>
            </ButtonToolbar>
        </div>
    )
}
export default BarYesNo
