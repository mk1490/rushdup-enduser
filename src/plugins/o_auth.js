import {LocalStorageStateStore, OIDCClient} from '@plusauth/oidc-client-js'

const mgr = new OIDCClient({
    issuer: process.env.VUE_APP_OAUTH_ISSUER,
    client_id: process.env.VUE_APP_OAUTH_CLIENT_ID,
    redirect_uri: process.env.VUE_APP_OAUTH_REDIRECT_URI,
    // silent_redirect_uri: 'http://localhost:8081/silent-renew.html',
    response_type: 'code',
    scope: 'Amoozeshyar address profile email phone roles',
    stateStore: new LocalStorageStateStore(),
    checkSession: true,
    autoSilentRenew: true,
    requestUserInfo: true,
})
export default mgr; 