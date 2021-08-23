/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.08.2021, 16:55
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import settingsService from '../../app/settings-service'

export default {
    DOMAIN: settingsService.domainUrl,
    BACKEND: `${settingsService.domainUrl}/backend/`,
    LOGOUT: `${settingsService.domainUrl}/backend/j_xdomain_logout`,
    PROBE_AUTH: `${settingsService.domainUrl}/backend/auth/probe_auth`,
}
