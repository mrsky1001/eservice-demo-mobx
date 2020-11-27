import "./LoaderOverlay.scss"
import "react-overlay-loader/styles.css"
import { Loader, LoadingOverlay } from "react-overlay-loader"
import React from "react"

/**
 * LoaderOverlay
 * Template overlay for loading of app.
 * Dont change this file!!!
 */

const LoaderOverlay = ({ loading }) => {
    return (
        <div>
            <LoadingOverlay className={"overlay-loader"}>
                <Loader text={"Загрузка"} loading={loading} />
            </LoadingOverlay>
        </div>
    )
}
export default LoaderOverlay
