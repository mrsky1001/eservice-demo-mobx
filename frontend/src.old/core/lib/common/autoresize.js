// import makeId from "./makeId"

//
// const resize = (e) => {
//     if (e.target.scrollHeight > MIN_HEIGHT_TEXTAREA) {
//         const offset = e.target.offsetHeight - e.target.clientHeight
//
//         e.target.style.height = "auto"
//         e.target.style.height = e.target.scrollHeight + offset + "px"
//         e.target.style.overflowY = "hidden"
//     }
// }
//
// document.addEventListener("click", (e) => {
//     if (e.target.localName === 'td') {
//         e.path[1].id = makeId()
//
//         const interval = setInterval(() => {
//             const list = document.getElementById(e.path[1].id).getElementsByTagName("textarea")
//
//             for (let i = 0; i < list.length; i++) {
//                 list[i].addEventListener("input", resize)
//                 list[i].addEventListener("keyup", resize)
//                 list[i].addEventListener("change", resize)
//                 list[i].addEventListener("paste", resize)
//                 list[i].addEventListener("click", resize)
//                 list[i].click()
//             }
//
//             if (list.length > 0) window.clearInterval(interval)
//         }, 10)
//
//         setTimeout(() => {
//             window.clearInterval(interval)
//         }, 10000)
//     }
// });
