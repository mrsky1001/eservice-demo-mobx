import history from "./createHashHistory"

class HistoryFactory {
    static clearLocation() {
        location.pathname = ""
        location.hash = ""
    }

    static pushUrl(url) {
        this.clearLocation()
        location.href = ""
        location.pathname = ""
        location.hash = url
        history.go(url)
    }

    static backUrl() {
        this.clearLocation()
        history.go(-1)
        history.go(-1)
    }
}

export default HistoryFactory
