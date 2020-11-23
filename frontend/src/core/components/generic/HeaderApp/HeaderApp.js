import React, { useState } from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import settingsService from "../../../../settingsService"
import { coreDescriptions } from "../../../lib/templates/descriptions/descriptions";
import TableLegend from "../TableLegend/TableLegend";
import legend from "../../../lib/templates/legend/legend";
import BarClose from "../../buttons/BarClose";
import { coreIcons } from "../../../lib/templates/icons/icons";
import { coreRoutes } from "../../../lib/api/routes";
import ModalWindow from "../ModalWindow/ModalWindow";
import { coreUrls } from "../../../lib/api/urls";

/**
 * HeaderApp
 *  of header app.
 * Dont change this file!!!
 */
const HeaderApp = () => {
    const [showModalLegend, setShowModalLegend] = useState(false)

    return (
        <div>
            <ModalWindow
                title={coreDescriptions.LEGEND}
                body={<TableLegend data={legend} />}
                show={showModalLegend}
                onHide={setShowModalLegend}
                ButtonsBar={<BarClose onHide={setShowModalLegend} />}
            />
            <Navbar bg={"light"} expand={"lg"}>
                <Navbar.Brand href={settingsService.domainUrl}>{settingsService.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls={"basic-navbar-nav"} />
                <Navbar.Collapse className={"justify-content-end"} id={"basic-navbar-nav"}>
                    <Nav>
                        <Nav.Link href={coreRoutes.HASH.url} onClick={() => setShowModalLegend(true)}>
                            <i className={coreIcons.QUORA} title={coreDescriptions.LEGEND} /> Легенда
                        </Nav.Link>
                        <Nav.Link href={coreRoutes.ROOT.url}>
                            <i className={coreIcons.STAR} title={coreDescriptions.ALL_SERVICES} /> Все сервисы
                        </Nav.Link>
                        <Nav.Link href={coreUrls.LOGOUT.url}>
                            <i className={coreIcons.POWER_OFF} title={coreDescriptions.EXIT} /> Выход
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default HeaderApp
