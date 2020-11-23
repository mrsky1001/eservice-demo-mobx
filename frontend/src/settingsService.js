/**
 * settingsService
 * Setting of app.
 * Config of app placed into backend/src/main/resources/application.conf
 * Dont change other params!
 */

const settingsService = Object.freeze({
    title: "Демо проект", // Change this param for your project.
    host: "eservice.omsu.ru", // Change this param for your project (iias or eservice).
    test: "eservice.app1.univer", // Change this param for your project (iias or eservice).
    domainUrl: "/demo", // Change this param for your project.
    backendPort: "4567",
    frontendPort: "1234",
})

module.exports = settingsService
