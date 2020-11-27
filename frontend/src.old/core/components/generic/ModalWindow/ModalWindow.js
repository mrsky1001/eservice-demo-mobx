import "./ModalWindow.scss"
import React from "react";
import Modal from "react-bootstrap/Modal"

/**
 * Modal
 *  table modal of app.
 * Dont change this file!!!
 */

const ModalWindow = ({ show, title, body, onHide, ButtonsBar, classes }) => {
    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size={"lg"}
                aria-labelledby={"contained-modal-title-vcenter "}
                dialogClassName={classes}
                className={classes}
                centered={true}
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title id={"contained-modal-title-vcenter"}>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>{ButtonsBar}</Modal.Footer>
            </Modal>
        </div>
    )
}
export default ModalWindow
