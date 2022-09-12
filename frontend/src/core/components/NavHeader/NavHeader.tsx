// import './NavHeader.scss'
// import React from 'react'
// import Nav from 'react-bootstrap/Nav'
//
// const NavHeader = ({ routes, activeRoute }) => {
//     return (
//         <div>
//             <Nav variant={'pills'} defaultActiveKey={'page-link-' + activeRoute.id}>
//                 {Object.keys(routes).map(key => {
//                     if (!routes[key].isNotVisible)
//                         return (
//                             <Nav.Item key={'page-item-' + routes[key].id}>
//                                 <Nav.Link eventKey={'page-link-' + routes[key].id} href={'#' + routes[key].url + '/'}>
//                                     {routes[key].label}
//                                 </Nav.Link>
//                             </Nav.Item>
//                         )
//                     else return null
//                 })}
//             </Nav>
//             <br />
//         </div>
//     )
// }
//
// export default NavHeader
