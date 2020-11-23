import React from "react"
import ModalWindow from "../ModalWindow/ModalWindow";

const YesNoModal = ({ body, show, onHide, onYes, onNo }) => (
    <ModalWindow
        title={"Вопрос"}
        body={body}
        ButtonsBar={
            <ButtonsBarYesNo
                onYes={() => {
                    onYes()
                    onHide()
                }}
                onNo={() => {
                    onNo()
                    onHide()
                }}
            />
        }
        show={show}
        onHide={() => {
            onNo()
            onHide()
        }}
    />
)

export default YesNoModal
