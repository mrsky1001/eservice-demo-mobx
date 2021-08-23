import { main } from '@popperjs/core'

export const joinUrl = (...urls: string[]): string => {
    let res = ''

    urls.forEach((url) => {
        res += url.startsWith('/') ? url.substring(1) : url
    })

    return res
}

export const appendStr = (mainStr: string, str: string): string => {
    if (mainStr) return mainStr.includes(str) ? mainStr : mainStr + str
    else return str
}

export const checkAndInsert = (checkValue: string | boolean | number, mainStr: string, str: string): string => {
    return checkValue ? appendStr(mainStr, str) : mainStr
}
// export const toSelectOptions = (list, fieldName, label = fieldName, icon) => {
//     const listLabels = Array.isArray(label) ? label : [label]
//
//     let resText = ""
//     if (this[name] !== undefined) listLabels.forEach(_ => (resText += splitter + this[_]))
//
//     return new OptionSelect({ id: this.id, label: resText, value: this[name], icon: icon })
//
// }
// export const makeId  = <T, P>(list: IGlobalStore<T, P>[] | IGlobalStore<T, P>, template: string = "", withReplace = false): void => {
//     function make() {
//         let text = template
//         let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//         let possibleNums = "0123456789"
//
//         for (let i = 0; i < 4; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))
//
//         for (let j = 0; j < 5; j++) text += possibleNums.charAt(Math.floor(Math.random() * 10))
//
//         let flag = true
//
//         if (!withReplace)
//             if (Array.isArray(list)) {
//                 list.forEach( (obj) =>{
//                     if (obj.id && String(obj.id).indexOf(text) >= 0) {
//                         flag = false
//                         return false
//                     }
//                 })
//             } else if (list.id && String(list.id).indexOf(text) >= 0) {
//                 flag = false
//                 return false
//             }
//
//         if (flag) return text
//         else return make()
//     }
//
//     if (Array.isArray(list)) {
//         list.forEach((elem) => {
//             if (typeof elem !== "object") {
//                 elem = {
//                     value: elem,
//                 }
//             }
//
//             if (elem.id === undefined) elem.id = make()
//         })
//     } else if (typeof list === "object" && list !== null) {
//         try {
//             if (list.id === undefined || (withReplace && list.originId === undefined)) {
//                 list.originId = list.id
//                 list.id = make()
//             }
//         } catch (e) {
//             console.log("Error creating id!")
//             console.log(e)
//         }
//     } else if (typeof list === "string") {
//         try {
//             return make()
//         } catch (e) {
//             console.log("Error creating unique!")
//             console.log(e)
//         }
//     }
// }
// }
