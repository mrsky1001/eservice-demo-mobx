import "./SearchCustom.scss"
import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import { coreDescriptions } from "../../../lib/templates/descriptions/descriptions";
import { coreIcons } from "../../../lib/templates/icons/icons";

/**
 * SearchCustom
 * Template search for table-bootstrap-next of app.
 * Dont change this file!!!
 */

const SearchCustom = props => {
    let input

    const handleClick = () => {
        props.onSearch(input.value)
    }

    const handleChange = () => {
        setTimeout(() => {
            if (input !== null) props.onSearch(input.value)
        }, 1000)
    }

    return (
        <div className={"search-table-template"}>
            <Form.Row>
                <Col>
                    <input
                        className={"form-control"}
                        ref={n => (input = n)}
                        type={"text"}
                        placeholder={"Введите данные для поиска внутри таблицы..."}
                        onChange={handleChange}
                    />
                </Col>
                <Col sm={2}>
                    <Button variant={"outline-primary"} onClick={handleClick}>
                        <i className={coreIcons.SEARCH} title={coreDescriptions.SEARCH} /> Искать
                    </Button>
                </Col>
            </Form.Row>
        </div>
    )
}

export default SearchCustom
