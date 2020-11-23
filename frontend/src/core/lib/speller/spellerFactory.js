const yaspeller = require("yandex-speller/lib/yandex-speller")

class SpellerFactory {
    static constructor() {
        this.setting = { url: "", lang: "ru" }
    }

    static checkText(text, callback) {
        yaspeller.checkText(text, callback, this.setting)
    }

    static checkTexts(texts, callback) {
        yaspeller.checkTexts(texts, callback, this.setting)
    }
}

export default SpellerFactory
