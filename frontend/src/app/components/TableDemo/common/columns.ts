import {Link} from "react-router-dom"
import * as settingsService from "../../../../settingsService"
import ColumnsFactory from "../../../../core/lib/templates/columnsFactory/columnsFactory"

/**
 * ColumnsFactory
 * This is the list of table columns.
 * You need add/set columns.
 */

class Columns extends ColumnsFactory {
    constructor(obj = {}) {
        super(obj)

        if (location.host === settingsService.host) this.url = "https://" + settingsService.host
        else this.url = "http://" + settingsService.test

        this.url += "/portfolio/backend/doPdf"

        this.columns = [
            /**
             * Your code here ...
             */

            {
                dataField: "id",
                text: "ИД",

                classes: this.classesContent,
                headerClasses: this.classesHeader,

                headerStyle: {width: "30px"},
            },
            {
                dataField: "sspId2",
                text: "Номер",

                classes: this.classesContent,
                headerClasses: this.classesHeader,

                headerStyle: {width: "30px"},
            },
            {
                dataField: "studentName",
                text: "ФИО",

                classes: this.classesContent,
                headerClasses: this.classesHeader,

                headerStyle: {width: "30px"},
            },
            {
                dataField: "numberGroup",
                text: "Группа",

                classes: this.classesContent,
                headerClasses: this.classesHeader,

                headerStyle: {width: "30px"},
            },
            {
                dataField: "personId",
                text: "PDF",
                title: false,

                classes: this.classesContent,
                headerClasses: this.classesHeader,

                headerStyle: {width: "30px"},
                formatter: cell => this.formatterPDF(cell, this.url),
            },
        ]
    }

    formatterPDF(cell, myurl) {
        return (
            <div>
                <Link
                    to = {"#"}
        onClick = {()
    =>
        {
            const personId = cell
            const rewards = true
            const eventsCreator = true
            const eventsParticipant = true
            const qaTasks = true
            const practices = true
            const payments = true
            const mobility = true
            const papers = true

            const url =
                myurl +
                "?" +
                "personId=" +
                personId +
                "&rewards=" +
                rewards +
                "&eventsCreator=" +
                eventsCreator +
                "&eventsParticipant=" +
                eventsParticipant +
                "&qaTasks=" +
                qaTasks +
                "&practices=" +
                practices +
                "&payments=" +
                payments +
                "&mobility=" +
                mobility +
                "&papers=" +
                papers

            window.open(url, "_blank")
        }
    }
    >
        <i className = {icons.PDF}
        />
        < /Link>
        < /div>
    )
    }
}

export default Columns
