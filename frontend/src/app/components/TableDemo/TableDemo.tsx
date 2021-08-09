import "./TableDemo.scss"

import React, {useEffect, useReducer, useState} from "react"
import API from "../../../core/lib/api/api"

import urls from "../../lib/api/urls"

import Columns from "./common/columns"
import LoaderOverlay from "../../../core/components/generic/LoaderOverlay/LoaderOverlay"
import DemoEntityFactory from "../../entities/demoEntity/demoEntityFactory"
import {actionsReducer, initReducer, reducerFactory} from "../../../core/lib/templates/reducerFactory/reducerFactory"
import TableCustom from "../../../core/components/generic/TableCustom/TableCustom"

/**
 * Demo Component
 * This is the component that will contain the implementation
 * of the form and the connection of most of the application elements.
 */

const TableDemo = props => {
    /**
     *  Code of Factory/State/Reducer
     *  Add your code ...
     */
    const [demoEntityFactory, dispatchDemoEntity] = useReducer(reducerFactory, new DemoEntityFactory([]), initReducer())

    /**
     * Code of effect's/hooks
     * Add your code ...
     */
    useEffect(() => {
        if (props.loadTable) {
            getListDemoEntity(props.searchParams)
            props.setLoadTable(false)
        }
    }, [props.loadTable])

    /**
     * Code of implementation methods
     * Add your code ...
     */
    const getListDemoEntity = (searchParams = {}) => {
        setLoading(true)

        /**
         * The example work with "GET"
         * Add your code ...
         */
        // API.get({url:urls.LIST}).then(res => {
        //    console.log(res)
        // })

        /**
         * Uncomment after connect to DB
         */
        API.post({url: urls.LIST, data: searchParams}).then(res => {
            dispatchDemoEntity({type: actionsReducer.INIT, value: new DemoEntityFactory(res)})
            setLoading(false)
        })

        // API.post({ url: urls.TEST_LIST, data: searchParams }).then(res => {
        //     dispatchDemoEntity({ type: actionsReducer.INIT, value: new DemoEntityFactory(res) })
        //     setLoading(false)
        // })
    }

    /**
     * Code of table and component settings
     */
    const [loading, setLoading] = useState(false)
    const columnsFactory = new Columns()

    /**
     * Code of table
     * Add your code ...
     */
    const contentTable = () => {
        return (
            <div>
                {/* Change for your factory/state/reducer*/}
                <TableCustom
                    id={"demoTable"}
                    data={demoEntityFactory.list}
                    dataFactory={demoEntityFactory}
                    columnsFactory={columnsFactory}
                />
            </div>
        )
    }

    return (
        <div>
            <LoaderOverlay loading={loading}/>
            {loading ? null : contentTable()}
        </div>
    )
}
export default TableDemo
