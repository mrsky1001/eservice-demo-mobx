import Button from "react-bootstrap/Button"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import React from "react"
import { coreDescriptions } from "../../lib/templates/descriptions/descriptions";

const BarSaveModal = ({ onSave, onHide }) => {
    return (
        <div>
            <ButtonToolbar className={"navbar navbar-default sticky-top justify-content-end"}>
                <Button
                    onClick={() => {
                        onSave()
                        onHide(false)
                    }}
                    variant={"primary"}
                >
                    {coreDescriptions.SAVE}
                </Button>
                <Button onClick={() => onHide(false)} variant={"outline-primary"}>
                    {coreDescriptions.CLOSE}
                </Button>
            </ButtonToolbar>
        </div>
    )
}
export default BarSaveModal
