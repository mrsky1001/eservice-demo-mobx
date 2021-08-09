import React from "react"
import ColumnsFactory from "../../../../../core/lib/templates/columnsFactory/columnsFactory";

/**
 * ColumnsFactory
 * This is the list of table columns.
 * You need add/change columns.
 */

export default class Columns extends ColumnsFactory {
    constructor(obj = {}) {
        super(obj)

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
                dataField: "login",
                text: "Логин",

                classes: this.classesContent,
                headerClasses: this.classesHeader,

                headerStyle: {width: "30px"},
            },
            {
                dataField: "email",
                text: "Электронная почта",

                classes: this.classesContent,
                headerClasses: this.classesHeader,

                headerStyle: {width: "30px"},
            },
            {
                dataField: "age",
                text: "Возраст",

                classes: this.classesContent,
                headerClasses: this.classesHeader,

                headerStyle: {width: "30px"},
            }, {
                dataField: "date",
                text: "Дата",

                classes: this.classesContent,
                headerClasses: this.classesHeader,

                headerStyle: {width: "30px"},
            },
        ]
    }
}
