// import HistoryFactory from "../../api/HistoryFactory"
//
// window.addEventListener(
//     "popstate",
//     function(e) {
//         var id = e.state ? e.state.count : localStorage.id - 1,
//             dir = id - localStorage.id
//
//         // console.log('Переход ' + (dir > 0 ? 'вперёд' : 'назад') + ', шагов: ' + Math.abs(dir));
//
//         if (dir <= 0 && localStorage.back === false) {
//             HistoryFactory.clearLocation()
//             HistoryFactory.backUrl()
//             id = 2
//
//             localStorage.back = true
//         } else localStorage.back = false
//
//         localStorage.id = id
//     },
//     false,
// )
//
// document.addEventListener(
//     "click",
//     function(e) {
//         var number = Math.round(Math.random() * 1000)
//
//         localStorage.id = (parseInt(localStorage.id) || 1) + 1
//         // history.pushState({
//         //     count: localStorage.id
//         // }, 'title ' + number, '?page=' + number);
//     },
//     false,
// )
