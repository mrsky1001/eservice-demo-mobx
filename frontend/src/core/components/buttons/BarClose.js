import Button from "react-bootstrap/Button"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import React from "react"
import { coreDescriptions } from "../../lib/templates/descriptions/descriptions";

const BarClose = ({ onHide }) => {
    return (
        <div>
            <ButtonToolbar className={"navbar navbar-default sticky-top justify-content-end"}>
                <Button onClick={() => onHide(false)} variant={"outline-primary"}>
                    {coreDescriptions.CLOSE}
                </Button>
            </ButtonToolbar>
        </div>
    )
}
export default BarClose
