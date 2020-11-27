/**
 * The constructor Icons
 * You need create file "icons.js" into src/lib and use "(new Icons({ your icons})).list"
 * @param obj - the object of manually list icons
 */
class Icons {
    constructor(obj = {}) {
        this._list = obj

        this._list.CHECK_SQUARE = "fa fa-check-square"
        this._list.SQUARE = "fa fa-square-o"
        this._list.LOCK = "fa fa-lock"
        this._list.UNLOCK = "fa fa-unlock"
        this._list.SAVE = "fa fa-save"
        this._list.LIST_ALT = "fa fa-list-alt"
        this._list.ACCORDION = "fa fa-bars"
        this._list.CHECKERED = "fa fa-flag-checkered"
        this._list.STAR = "fa fa-star"
        this._list.QUORA = "fa fa-quora"
        this._list.POWER_OFF = "fa fa-power-off"
        this._list.BAN = "fa fa-ban"
        this._list.CHECK = "fa fa-check"
        this._list.CHEVRON_UP = "fa fa-chevron-up"
        this._list.EXTERNAL_LINK = "fa fa-external-link"
        this._list.LIST = "fa fa-list"
        this._list.SEARCH = "fa fa-search"
        this._list.PENCIL = "fa fa-pencil"
        this._list.PDF = "fa fa-file-pdf-o"
        this._list.PLUS = "fa fa-plus"
        this._list.ARROW_LEFT = "fa fa-arrow-left"
        this._list.REFRESH = "fa fa-refresh"
        this._list.THUMB_TACK = "fa fa-thumb-tack"
        this._list.CHECK_CIRCLE = "fa fa-check-circle"
        this._list.EYE = "fa fa-eye"
        this._list.REMOVE = "fa fa-remove"
        this._list.COPY = "fa fa-copy"
        this._list.ANGLE_DOUBLE_UP = "fa fa-angle-double-up"
        this._list.UNDO = "fa fa-undo"

        /**
         * The grouping of icons
         */
        this._list.GROUP_ICONS = "fa-stack fa-lg"
        this._list.STACK_1X = "fa-stack-1x"
        this._list.STACK_2X = "fa-stack-2x"

        /**
         * The rotation of icon
         */
        this._list.FA_ROTATE_90 = "fa-rotate-90"
        this._list.FA_ROTATE_180 = "fa-rotate-180"
        this._list.FA_ROTATE_270 = "fa-rotate-270"
        this._list.FA_FLIP_HORIZONTAL = "fa-flip-horizontal"
        this._list.FA_FLIP_VERTICAL = "fa-flip-vertical"
    }

    get list() {
        return Object.freeze(this._list)
    }
}

export const coreIcons = new Icons().list

export default Icons
